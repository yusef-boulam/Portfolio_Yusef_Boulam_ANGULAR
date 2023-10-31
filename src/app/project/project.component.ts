import { Project } from './../models/project.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent {
  @Input() project!: Project;

  externalUrl!: string;
  title!: string;
  description!: string;
  logoUrl!: string;
  imageUrl!: string;
  tag!: string;

  ngOnInit(): void {}

  // showDescription(): void {
  //   alert('Description du projet');
  // }
}
