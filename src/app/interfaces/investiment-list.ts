export interface ResponseRequest {
  response: ResponseBody;
};

export interface ResponseBody {
  status: string;
  data: InvestmentList;
};

export interface InvestmentList {
  listaInvestimentos: InvestmentListData[];
}

export interface InvestmentListData {
  nome: string,
  objetivo: string,
  saldoTotal: number,
  indicadorCarencia: string,
  acoes: AcoesList[]
}

export interface AcoesList {
  id: number,
  nome: string,
  percentual: number,
  valorResgatado?: number
}
