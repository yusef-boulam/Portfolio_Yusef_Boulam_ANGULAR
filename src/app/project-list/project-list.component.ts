import { Project } from './../models/project.model';
import { ProjectsService } from './../services/projects.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent {
  projects!: Project[];

  constructor(private ProjectsService: ProjectsService) {}

  ngOnInit(): void {
    this.projects = this.ProjectsService.getAllProjects();
  }
}
