import { CreditInterface } from "./credit-interface";

export interface MovieDetailInterface {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: Belongstocollection;
    budget: number;
    genres: GenreInterface[];
    certification?: string,
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: Productioncompany[];
    production_countries: Productioncountry[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: Spokenlanguage[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    release_dates: Releasedates;
    credits: CreditInterface;
}

export interface GenreResponseInterface {
    genres: GenreInterface[];
}

export interface GenreInterface {
    id: number;
    name: string;
}

export interface Releasedates {
    results: Result[];
}

export interface Result {
    iso_3166_1: string;
    release_dates: Releasedate[];
}

export interface Releasedate {
    certification: string;
    iso_639_1?: null | string | string;
    note: string;
    release_date: string;
    type: number;
}

export interface Spokenlanguage {
    english_name: string;
    iso_639_1: string;
    name: string;
}

export interface Productioncountry {
    iso_3166_1: string;
    name: string;
}

export interface Productioncompany {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
}

export interface Belongstocollection {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
}