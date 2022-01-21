import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import * as md5 from 'md5';
import { environment } from 'src/environments/environment';
import { Character, CharactersRs, Comic, ComicRs, ComicsItem } from '../interfaces/marvel.interfaces';

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

  getAllCharacters(limit: number = 100, offset: number = 0): Observable<Character[]> {
    return this.http.get<CharactersRs>(`${environment.marvelAPI.baseUrl}/v1/public/characters?limit=${limit}&offset=${offset}`, {
      params: this.setParams()
    }).pipe(
      map(response => response.data.results)
    )
  }

  getCharactersByNameStartsWith(name: string): Observable<Character[]> {
    return this.http.get<CharactersRs>(`${environment.marvelAPI.baseUrl}/v1/public/characters?nameStartsWith=${name}`, {
      params: this.setParams()
    }).pipe(
      map(response => response.data.results)
    )
  }

  getCharacterById(id: number): Observable<Character> {
    return this.http.get<CharactersRs>(`${environment.marvelAPI.baseUrl}/v1/public/characters/${id}`, {
      params: this.setParams()
    }).pipe(
      map(response => response.data.results[0])
    )
  }

  getComic(url: string): Observable<Comic> {
    return this.http.get<ComicRs>(url, {
      params: this.setParams()
    }).pipe(
      map(response => response.data.results[0])
    );
  }
}
