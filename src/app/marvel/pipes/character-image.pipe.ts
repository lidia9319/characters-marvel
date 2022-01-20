import { Pipe, PipeTransform } from '@angular/core';
import { Thumbnail } from '../interfaces/marvel.interfaces';

@Pipe({
  name: 'characterImage'
})
export class CharacterImagePipe implements PipeTransform {

  transform(characterThumbnail: Thumbnail): string {
    return `${characterThumbnail.path}.${characterThumbnail.extension}`;
  }

}
