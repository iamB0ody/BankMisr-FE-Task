export interface SymbolsResponse<T> {
  success: boolean,
  symbols: T
}

export interface Symbols {
  [name: string]: string;
}

export interface Currencies {
  symbol: string;
  name: string;
}
