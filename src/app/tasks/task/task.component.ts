import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type Task } from './task.model';
import { CartComponent } from '../../shared/cart/cart.component';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CartComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  @Output() complete = new EventEmitter<string>();

  onCompleteTask() {
    this.complete.emit(this.task.id);
  }
}
