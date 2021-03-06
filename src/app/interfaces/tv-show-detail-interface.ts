import { CreditInterface } from "./credit-interface";

export interface TvShowDetailInterface {
    adult: boolean;
    backdrop_path: string;
    created_by: Createdby[];
    episode_run_time: number[];
    first_air_date: string;
    genres: Genre[];
    homepage: string;
    id: number;
    in_production: boolean;
    languages: string[];
    last_air_date: string;
    last_episode_to_air: Lastepisodetoair;
    name: string;
    next_episode_to_air?: any | null;
    networks: Network[];
    number_of_episodes: number;
    number_of_seasons: number;
    origin_country: string[];
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: Productioncompany[];
    production_countries: Productioncountry[];
    seasons: Season[];
    spoken_languages: Spokenlanguage[];
    status: string;
    tagline: string;
    type: string;
    vote_average: number;
    vote_count: number;
    content_ratings: Contentratings;
    credits: CreditInterface;
    similar: Similar;
}

export interface Similar {
    page: number;
    results: Result2[];
    total_pages: number;
    total_results: number;
}

export interface Result2 {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    name: string;
    origin_country: string[];
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    first_air_date: string;
    vote_average: number;
    vote_count: number;
}

export interface Contentratings {
    results: Result[];
}

export interface Result {
    iso_3166_1: string;
    rating: string;
}

export interface Spokenlanguage {
    english_name: string;
    iso_639_1: string;
    name: string;
}

export interface Season {
    air_date: string;
    episode_count: number;
    id: number;
    name: string;
    overview: string;
    poster_path: string;
    season_number: number;
}

export interface Productioncountry {
    iso_3166_1: string;
    name: string;
}

export interface Productioncompany {
    name: string;
    id: number;
    logo_path?: string | null;
    origin_country: string;
}

export interface Network {
    name: string;
    id: number;
    logo_path: string;
    origin_country: string;
}

export interface Lastepisodetoair {
    air_date: string;
    episode_number: number;
    id: number;
    name: string;
    overview: string;
    production_code: string;
    season_number: number;
    still_path: string;
    vote_average: number;
    vote_count: number;
}

export interface Genre {
    id: number;
    name: string;
}

export interface Createdby {
    id: number;
    credit_id: string;
    name: string;
    gender: number;
    profile_path: string;
}