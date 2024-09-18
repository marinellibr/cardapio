import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, PdfViewerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'cardapio-festa';

  drinks = false;
  foods = false;
  loading = false;

  pdfSrc = '/pdfs/drinks.pdf';

  toggleDrinks() {
    this.foods = false;
    this.pdfSrc = '/pdfs/drinks.pdf';
    this.loading = true;
    this.drinks = !this.drinks;
  }

  toggleFoods() {
    this.drinks = false;
    this.pdfSrc = '/pdfs/foods.pdf';
    this.loading = true;
    this.foods = !this.foods;
  }

  onPdfLoaded() {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }
}
