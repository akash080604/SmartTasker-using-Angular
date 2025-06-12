import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-form.html'
})
export class TaskFormComponent {
  task: string = '';
  @Output() taskAdded = new EventEmitter<string>();

  addTask() {
    if (this.task.trim()) {
      this.taskAdded.emit(this.task);
      this.task = '';
    }
  }
}
