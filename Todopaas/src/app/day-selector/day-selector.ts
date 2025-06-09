import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-day-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './day-selector.html',
  styleUrls: ['./day-selector.css']
})
export class DaySelectorComponent {
  @Output() dayChanged = new EventEmitter<string>();
  days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  selectDay(day: string) {
    this.dayChanged.emit(day);
  }
}