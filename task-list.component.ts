import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks: any[] = [];

  constructor(private taskService: TaskService, private router: Router) {}

  async ngOnInit() {
    this.tasks = await this.taskService.getTasks();
  }

  async deleteTask(id: string) {
    await this.taskService.deleteTask(id);
    this.tasks = this.tasks.filter(task => task._id !== id);
  }

  editTask(id: string) {
    this.router.navigate(['/tasks', 'edit', id]);
  }
}
