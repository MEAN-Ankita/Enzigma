import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {
  task: any = { title: '', completed: false };
  taskId: string | null = null;

  constructor(
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  async ngOnInit() {
    this.taskId = this.route.snapshot.paramMap.get('id');
    if (this.taskId) {
      const task = await this.taskService.getTask(this.taskId);
      this.task = task;
    }
  }

  async onSubmit() {
    if (this.taskId) {
      await this.taskService.updateTask(this.taskId, this.task);
    } else {
      await this.taskService.createTask(this.task);
    }
    this.router.navigate(['/tasks']);
  }
}
