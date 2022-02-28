export interface CreditInterface {
    cast: CastInterface[];
    crew: CrewInterface[];
}

export interface CrewInterface {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path?: string | null;
    credit_id: string;
    department: string;
    job: string;
}

export interface CastInterface {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path?: string | null;
    cast_id?: number | null;
    character: string;
    credit_id: string;
    order: number;
}