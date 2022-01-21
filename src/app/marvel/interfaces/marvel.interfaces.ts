export interface CharactersRs {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: DataCharacterRs;
}

export interface Character {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: Thumbnail;
  resourceURI: string;
  comics: Comics;
  series: Comics;
  stories: Stories;
  events: Comics;
  urls: URL[];
}

export interface Comics {
  available: number;
  collectionURI: string;
  items: ComicsItem[];
  returned: number;
}

export interface ComicsItem {
  resourceURI: string;
  name: string;
}

export interface Stories {
  available: number;
  collectionURI: string;
  items: StoriesItem[];
  returned: number;
}

export interface StoriesItem {
  resourceURI: string;
  name: string;
  type: ItemType;
}

export enum ItemType {
  Cover = "cover",
  Empty = "",
  InteriorStory = "interiorStory",
}

export interface Thumbnail {
  path: string;
  extension: Extension;
}

export enum Extension {
  Jpg = "jpg",
}

export interface URL {
  type: URLType;
  url: string;
}

export enum URLType {
  Comiclink = "comiclink",
  Detail = "detail",
  Wiki = "wiki",
}


export interface ComicRs {
  code:            number;
  status:          string;
  copyright:       string;
  attributionText: string;
  attributionHTML: string;
  etag:            string;
  data:            DataComicRs;
}

export interface DataCharacterRs {
  offset:  number;
  limit:   number;
  total:   number;
  count:   number;
  results: Character[];
}

export interface DataComicRs {
  offset:  number;
  limit:   number;
  total:   number;
  count:   number;
  results: Comic[];
}

export interface Comic {
  id:                 number;
  digitalId:          number;
  title:              string;
  issueNumber:        number;
  variantDescription: string;
  description:        string;
  modified:           string;
  isbn:               string;
  upc:                string;
  diamondCode:        string;
  ean:                string;
  issn:               string;
  format:             string;
  pageCount:          number;
  textObjects:        TextObject[];
  resourceURI:        string;
  urls:               URL[];
  series:             Series;
  variants:           Series[];
  collections:        any[];
  collectedIssues:    any[];
  dates:              DateElement[];
  prices:             Price[];
  thumbnail:          Thumbnail;
  images:             Thumbnail[];
  creators:           Creators;
  characters:         Characters;
  stories:            Stories;
  events:             Characters;
}

export interface Characters {
  available:     number;
  collectionURI: string;
  items:         Series[];
  returned:      number;
}

export interface Series {
  resourceURI: string;
  name:        string;
}

export interface Creators {
  available:     number;
  collectionURI: string;
  items:         CreatorsItem[];
  returned:      number;
}

export interface CreatorsItem {
  resourceURI: string;
  name:        string;
  role:        string;
}

export interface DateElement {
  type: string;
  date: string;
}

export interface Thumbnail {
  path:      string;
  extension: Extension;
}

export interface Price {
  type:  string;
  price: number;
}

export interface Stories {
  available:     number;
  collectionURI: string;
  items:         StoriesItem[];
  returned:      number;
}

export interface StoriesItem {
  resourceURI: string;
  name:        string;
  type:        ItemType;
}

export interface TextObject {
  type:     string;
  language: string;
  text:     string;
}

export interface URL {
  type: URLType;
  url:  string;
}
