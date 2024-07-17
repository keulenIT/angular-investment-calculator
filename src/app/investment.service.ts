import { Injectable, signal } from '@angular/core';
import { InvestmentResults, investment } from './types';

@Injectable({ providedIn: 'root' })
export class InvestmentService {
  resultsData = signal<Array<InvestmentResults> | undefined>(undefined);
  calculateInvestmentReturn(data: investment) {
    const annualData = [];
    let investmentValue = data.initialInvestment;

    for (let i = 0; i < data.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear =
        investmentValue * (data.expectedReturn / 100);
      investmentValue += interestEarnedInYear + data.annualinvestment;
      const totalInterest =
        investmentValue -
        data.initialInvestment * year -
        data.initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndofYear: investmentValue,
        annualInvestment: data.annualinvestment,
        totalInterest: totalInterest,
        totalAmountInvested:
          data.initialInvestment + data.annualinvestment * year,
      });
    }
    this.resultsData.set(annualData);
  }
}
