import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_ENDPOINT = 'https://localhost:7021';

@Injectable({
  providedIn: 'root'
})
export class DataSource2Service {
  constructor(
    private http: HttpClient
  ) { }

  public postApiTaskSp(data: any): Observable<any> {
    const body = data;
    return this.http.post(`${API_ENDPOINT}/api/task_sp`, body);
  }

  public deleteApiTaskSp(id: string): Observable<any> {
    return this.http.delete(`${API_ENDPOINT}/api/task_sp/${id}`);
  }

  public putApiTaskSp(data: any): Observable<any> {
    const body = data;
    return this.http.put(`${API_ENDPOINT}/api/task_sp`, body);
  }

  public getApiTasks(): Observable<any> {
    return this.http.get(`${API_ENDPOINT}/api/tasks`);
  }
}
