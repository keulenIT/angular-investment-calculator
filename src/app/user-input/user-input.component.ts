import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  initialInvestment = input<number>(0);
  annualInvestment = input<number>(0);
  expectedReturn = input<number>(0);
  duration = input<number>(0);

  constructor(private investmentService: InvestmentService) {}

  submitForm() {
    this.investmentService.calculateInvestmentReturn({
      initialInvestment: +this.initialInvestment,
      annualinvestment: +this.annualInvestment,
      expectedReturn: +this.expectedReturn,
      duration: +this.duration,
    });
  }
}
