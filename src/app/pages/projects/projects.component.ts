import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

const THUMBUP_ICON =
  `
  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.` +
  `44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5` +
  `1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"/>
  </svg>
`;

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [  
    CommonModule, MatInputModule, 
    FormsModule, MatSelectModule,
    MatCardModule, MatChipsModule,
    MatButtonModule, MatIconModule
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent {
  zones: string[] = ['Zona 1', 'Zona 2', 'Zona 3'];
  states: string[] = ['Activo', 'Inactivo', 'Completado'];
  years: number[] = [2021, 2022, 2023, 2024];
  selectedZone: string = '';
  selectedState: string = '';
  selectedYear: number = 0;

  longText1 = `The Chihuahua is a Mexican breed of toy dog. It is named for the
  Mexican state of Chihuahua and is among the smallest of all dog breeds. It is
  usually kept as a companion animal or for showing.`;

  longText2 = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tenetur
  maiores consequatur aliquid aspernatur exercitationem iure corporis voluptatum
  eius aperiam amet aliquam blanditiis maxime temporibus obcaecati facere, voluptate rerum quia.`;

  projects = [
    {
      title: 'Equipamiento informático y mobiliario para la Biblioteca',
      tags: ['Zona 1', 'Aprobado', '2024'],
      problem: this.longText1,
      solution: 'Solución 1'
    },
    {
      title: 'Titulo 2',
      tags: ['Zona 2', '2024'],
      problem: 'Problema 2',
      solution: this.longText2
    },
    {
      title: 'Titulo 3',
      tags: ['Zona 3', 'En espera', '2023'],
      problem: this.longText1,
      solution: 'Solución 3'
    }
  ];
}
