import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ProjectsService, Project } from '../../services/projects.service';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FilterSelectionComponent } from './components/filter-selection/filter-selection.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [  
    CommonModule, MatInputModule, 
    FormsModule, MatSelectModule, 
    MatCardModule, MatChipsModule,
    MatButtonModule, MatIconModule,
    HttpClientModule, MatProgressSpinnerModule,
    FilterSelectionComponent, ProjectCardComponent
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent implements OnInit {
  zones: {id: number, nombre: string}[] = [];
  states: string[] = ['Activo', 'Inactivo', 'Completado'];
  years: number[] = [2021, 2022, 2023, 2024];
  projects: Project[] = [];
  filteredProjects: Project[] = [];
  selectedZone: number | null = null; 
  selectedState: string = '';
  selectedYear: number | null = null;
  isLoading: boolean = true;

  constructor(private projectsService: ProjectsService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.fetchZones();
    this.fetchStates();
    this.fetchYears();
    this.fetchProjects();
    
  }

  fetchZones(): void {
    this.projectsService.getZones().subscribe({
      next: (data: {id: number, nombre: string}[]) => {
        this.zones = data
      },
      error: (error: any) => console.error('Error fetching zones:', error),
      complete: () => console.log('Fetch zones complete')
    });
  }

  fetchStates(): void {
    this.projectsService.getStates().subscribe({
      next: (data: string[]) => this.states = data,
      error: (error: any) => console.error('Error fetching states:', error),
      complete: () => console.log('Fetch states complete')
    });
  }

  fetchYears(): void {
    this.projectsService.getYears().subscribe({
      next: (data: number[]) => this.years = data,
      error: (error: any) => console.error('Error fetching years:', error),
      complete: () => console.log('Fetch years complete')
    });
  }

  fetchProjects(): void {
    this.projectsService.getProjects().subscribe({
      next: (data: Project[]) => {
        this.projects = data
        this.isLoading = false;
        this.filteredProjects = this.projects; 
        this.cdr.detectChanges();
      },
      error: (error: any) => console.error('Error fetching projects:', error),
      complete: () => console.log('Fetch projects complete')
    });
  }

  checkIfLoadingComplete(): void {
    if (this.zones.length && this.states.length && this.years.length) {
      this.isLoading = false;
      this.cdr.detectChanges();
    }
  }

  getZoneNameById(zoneId: number): string {
    const zone = this.zones.find(z => z.id === zoneId);
    return zone ? zone.nombre : 'Unknown';
  }

  filterProjects(): void {
    this.filteredProjects = this.projects.filter(project => {
      const matchesZone = this.selectedZone ? project.zona_id === this.selectedZone : true;
      const matchesState = this.selectedState ? project.estado === this.selectedState : true;
      const matchesYear = this.selectedYear ? project.year === this.selectedYear : true;
      return matchesZone && matchesState && matchesYear;
    });
  }

  onZoneChange(value: number | null): void {
    this.selectedZone = value;
    this.filterProjects();
  }

  onStateChange(value: string): void {
    this.selectedState = value;
    this.filterProjects();
  }

  onYearChange(value: number | null): void {
    this.selectedYear = value;
    this.filterProjects();
  }



}



 



