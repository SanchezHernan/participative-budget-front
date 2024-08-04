import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Project } from '../../../../services/projects.service';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [
    CommonModule, MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  @Input() project!: Project;
  @Input() zones: {id: number, nombre: string}[] = [];

  getZoneNameById(zoneId: number): string {
    const zone = this.zones.find(z => z.id === zoneId);
    return zone ? zone.nombre : 'Unknown';
  }
}
