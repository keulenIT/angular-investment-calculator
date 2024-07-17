import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  currentPage = input<string>();
  title = output<string>();

  setTitle(pageTitle: string) {
    this.title.emit(`Welcome to ${pageTitle} page`);
  }
}
