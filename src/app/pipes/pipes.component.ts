import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CurrencyConverterPipe } from '../pipe/currency-converter.pipe';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [CommonModule,CurrencyConverterPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
amount=10
title="angular learning"
date= new Date()
}
