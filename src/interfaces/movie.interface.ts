// Generated by https://quicktype.io

export interface IMovie {
    images: Images;
    credits: Credits;
    adult: boolean;
    backdrop_path: string;
    id: number;
    title: string;
    original_language: OriginalLanguage;
    original_title: string;
    overview: string;
    poster_path: string;
    media_type: string;
    genre_ids: number[];
    genre_names: string[];
    popularity: number;
    release_date: string;
    vote_average: number;
    vote_count: number;
    videos: Video[];
    type: string;
}

export interface Credits {
    cast: Cast[];
    crew: Cast[];
}

export interface Cast {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: Department;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: null | string;
    cast_id?: number;
    character?: string;
    credit_id: string;
    order?: number;
    _id: string;
    department?: Department;
    job?: string;
}

export enum Department {
    Acting = "Acting",
    Art = "Art",
    Camera = "Camera",
    CostumeMakeUp = "Costume & Make-Up",
    Crew = "Crew",
    Directing = "Directing",
    Editing = "Editing",
    Lighting = "Lighting",
    Production = "Production",
    Sound = "Sound",
    VisualEffects = "Visual Effects",
    Writing = "Writing",
}

export interface Images {
    backdrops: Backdrop[];
    logos: Backdrop[];
    posters: Backdrop[];
}

export interface Backdrop {
    aspect_ratio: number;
    height: number;
    iso_639_1: OriginalLanguage;
    file_path: string;
    vote_average: number;
    vote_count: number;
    width: number;
    _id: string;
}

export enum OriginalLanguage {
    En = "en",
    Es = "es",
}

export interface Video {
    iso_639_1: OriginalLanguage;
    iso_3166_1: ISO3166_1;
    name: string;
    key: string;
    site: Site;
    size: number;
    type: string;
    official: boolean;
    published_at: string;
    id: string;
    _id: string;
}

export enum ISO3166_1 {
    Es = "ES",
}

export enum Site {
    YouTube = "YouTube",
}
