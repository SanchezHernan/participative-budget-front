import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-filter-selection',
  standalone: true,
  imports: [
    CommonModule, MatInputModule,
    FormsModule, MatSelectModule,
    MatButtonModule, MatIconModule,
    HttpClientModule
  ],
  templateUrl: './filter-selection.component.html',
  styleUrl: './filter-selection.component.scss'
})
export class FilterSelectionComponent {
  @Input() zones: {id: number, nombre: string}[] = [];
  @Input() states: string[] = [];
  @Input() years: number[] = [];
  @Input() selectedZone: number | null = null;
  @Input() selectedState: string = '';
  @Input() selectedYear: number | null = null;

  @Output() zoneChange = new EventEmitter<number | null>();
  @Output() stateChange = new EventEmitter<string>();
  @Output() yearChange = new EventEmitter<number | null>();

  onZoneChange(value: number | null): void {
    this.zoneChange.emit(value);
  }

  onStateChange(value: string): void {
    this.stateChange.emit(value);
  }

  onYearChange(value: number | null): void {
    this.yearChange.emit(value);
  }

}
