export interface ApiResult {
  page: number;
  results: MovieResult[];
  totalPages: number;
  totalResults: number;
}

export interface MovieResult {
  adult: boolean;
  backdropPath: string;
  genreIds: number[];
  id: number;
  originalLanguage: string;
  originalTitle: string;
  overview: string;
  popularity: number;
  posterPath: string;
  releaseDate: string;
  title: string;
  video: boolean;
  voteAverage: number;
  voteCount: number;
}
