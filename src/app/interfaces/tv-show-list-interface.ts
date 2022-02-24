import { GenreInterface } from "./genre-interface";

export interface TvShowResponseInterface {
    page: number;
    results: TvShowInterface[];
    total_pages: number;
    total_results: number;
}

export interface TvShowInterface {
    backdrop_path?: string;
    first_air_date: string;
    genre_ids: number[];
    genres?: GenreInterface[];
    id: number;
    name: string;
    origin_country: string[];
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    vote_average: number;
    vote_count: number;
}