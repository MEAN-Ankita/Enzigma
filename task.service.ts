import { Injectable } from '@angular/core';
import axios from 'axios';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private baseUrl = 'http://localhost:5000/api/tasks';

  async getTasks() {
    const response = await axios.get(this.baseUrl);
    return response.data;
  }

  async getTask(id: string) {
    const response = await axios.get(`${this.baseUrl}/${id}`);
    return response.data;
  }

  async createTask(task: any) {
    const response = await axios.post(this.baseUrl, task);
    return response.data;
  }

  async updateTask(id: string, task: any) {
    const response = await axios.put(`${this.baseUrl}/${id}`, task);
    return response.data;
  }

  async deleteTask(id: string) {
    await axios.delete(`${this.baseUrl}/${id}`);
  }
}
