export interface TimeSeriesResponse<T> {
  base: string;
  end_date: string;
  rates: T;
  start_date: string;
  success: boolean;
  timeseries: boolean;
}

export interface TimeSeriesRates {
  [name: string]: TimeSeriesRate;
}

export interface TimeSeriesRate {
  [name: string]: number;
}
