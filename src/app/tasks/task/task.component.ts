import { DatePipe } from '@angular/common';
import { Component, inject, Input } from '@angular/core';

import { CartComponent } from '../../shared/cart/cart.component';
import { TaskService } from '../tasks.service';
import { type Task } from './task.model';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CartComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  private tasksService = inject(TaskService);

  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }
}
