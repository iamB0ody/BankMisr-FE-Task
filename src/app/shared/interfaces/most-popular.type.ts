export interface MostPopularResponse<T> {
  base: string;
  date: string;
  historical: boolean;
  rates: T;
  success: true;
  timestamp: 1387929599;
}


export interface MostPopularRate {
  [name: string]: number;
}
