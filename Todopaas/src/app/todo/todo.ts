import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../models/todo.model';
import { FormsModule } from '@angular/forms';
import { DaySelectorComponent } from '../day-selector/day-selector';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule, DaySelectorComponent],
  templateUrl: './todo.html',
  styleUrls: ['./todo.css']
})
export class TodoComponent {
  selectedDay = 'Monday';
  newTask = '';
  todosByDay: { [day: string]: Todo[] } = {
    Monday: [], Tuesday: [], Wednesday: [], Thursday: [],
    Friday: [], Saturday: [], Sunday: []
  };

  onDayChanged(day: string) {
    this.selectedDay = day;
  }

  addTask() {
    const trimmed = this.newTask.trim();
    if (trimmed) {
      this.todosByDay[this.selectedDay].push({ text: trimmed, done: false });
      this.newTask = '';
    }
  }

  deleteTask(index: number) {
    this.todosByDay[this.selectedDay].splice(index, 1);
  }
}