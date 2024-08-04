import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

export interface Project {
  autor_dni: string;
  zona_id: number;
  year: number;
  titulo: string;   
  estado: string;
  problema: string;
  solucion: string;
  beneficios: string;
  presupuesto_asignado: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private apiUrl = 'http://127.0.0.1:8000'; // Cambia esta URL según tu configuración

  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.apiUrl}/propuestas`);
  }

  getZones(): Observable<{ id: number, nombre: string }[]> {
    return this.http.get<{ id: number, nombre: string }[]>(`${this.apiUrl}/zonas`);
  }

  getStates(): Observable<string[]> {
    return of(['Activo', 'Inactivo', 'Completado']);
  }

  getYears(): Observable<number[]> {
    return of([2021, 2022, 2023, 2024]);
  }
}
