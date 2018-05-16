export interface Typicode {
    userId: number;
    id: number;
    title: string;
    boby: string;
}


export interface Quant {
  userId: number;
  id: number;
  title: string;
  boby: string;
}

export interface QuantFirebase {
  id: number;
  userId: number;
  title: string;
  code: string;
  language: string;
  dataProvider: string;
  performance: number;
  sharpeRatio: number;
}

