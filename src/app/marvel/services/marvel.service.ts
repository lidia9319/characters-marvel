import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import * as md5 from 'md5';
import { environment } from 'src/environments/environment';
import { CharactersRs, ComicRs } from '../interfaces/marvel.interfaces';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  private md5: string = "";

  constructor(private http: HttpClient) {
    this.generateMd5();
  }

  private generateMd5(): void {
    this.md5 = md5(`${environment.marvelAPI.timestamp}${environment.marvelAPI.privateKey}${environment.marvelAPI.publicKey}`);
  }

  private setParams() {
    let params: HttpParams = new HttpParams()
      .set("ts", environment.marvelAPI.timestamp)
      .set("apikey", environment.marvelAPI.publicKey)
      .set("hash", this.md5);

    return params;
  }

  getAllCharacters(limit: number = 100, offset: number = 0) {
    return this.http.get<CharactersRs>(`${environment.marvelAPI.baseUrl}/v1/public/characters?limit=${limit}&offset=${offset}`, {
      params: this.setParams()
    }).pipe(
      map(response => response.data.results)
    )
  }

  getCharactersByNameStartsWith(name: string) {
    return this.http.get<CharactersRs>(`${environment.marvelAPI.baseUrl}/v1/public/characters?nameStartsWith=${name}`, {
      params: this.setParams()
    }).pipe(
      map(response => response.data.results)
    )
  }

  getCharacterById(id: number) {
    return this.http.get<CharactersRs>(`${environment.marvelAPI.baseUrl}/v1/public/characters/${id}`, {
      params: this.setParams()
    }).pipe(
      map(response => response.data.results[0])
    )
  }

  getComicById(id: number) {
    return this.http.get<ComicRs>(`${environment.marvelAPI.baseUrl}/v1/public/comics/${id}`, {
      params: this.setParams()
    }).pipe(
      map(response => response.data.results[0])
    );
  }
}
