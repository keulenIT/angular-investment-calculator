export interface investment {
  initialInvestment: number;
  duration: number;
  annualinvestment: number;
  expectedReturn: number;
}

export interface InvestmentResults {
  year: number;
  interest: number;
  valueEndofYear: number;
  annualInvestment: number;
  totalInterest: number;
  totalAmountInvested: number;
}
