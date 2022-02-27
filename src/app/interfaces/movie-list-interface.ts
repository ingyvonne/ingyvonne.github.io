import { GenreInterface } from "./genre-interface";

export interface MovieResponseInterface {
    page: number;
    results: MovieInterface[];
    total_pages: number;
    total_results: number;
}

export interface MovieInterface {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    genres?: GenreInterface[];
    route?: string;
    certification?: string,
    runtime?: number;
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}