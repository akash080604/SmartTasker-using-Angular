import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskFormComponent } from './task-form/task-form';
import { TaskListComponent } from './task-list/task-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, TaskFormComponent, TaskListComponent],
  templateUrl: './app.html'
})
export class AppComponent {
  tasks: string[] = [];

  onTaskAdded(task: string) {
    this.tasks.push(task);
  }
}
