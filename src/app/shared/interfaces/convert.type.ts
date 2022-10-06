export interface ConvertResponse {
  date: Date;
  info: ConvertInfo;
  query: ConvertQuery;
  result: number;
  success: boolean;
}

export interface ConvertInfo {
  rate: number;
  timestamp: number;
}

export interface ConvertQuery {
  amount: number;
  from: string;
  to: string;
}
