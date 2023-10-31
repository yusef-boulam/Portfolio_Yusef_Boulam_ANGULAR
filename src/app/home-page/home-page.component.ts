import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  constructor() {}

  picture: string = '../../assets/images/homePage/profile.png';
  title: string = 'Développeur Front-end / Back-end / Fullstack';
  presentation: string =
    'Développeur intégrateur web diplômé et passionné, j’ai réalisé une application web avec la librairie ReactJS sur la partie front-end et créé une API RESTful avec NodeJS sur la partie back-end.';
  titleSkils: string = 'Compétences:';
  skilsFront: string = 'HTML, CSS, JavaScript, TypeScript, React, Angular';
  skilsBack: string = 'NodeJS, ExpressJS, MongoDB';
  skilsTools: string = 'Git, GitHub, Postman';
  titlePerfecting: string = 'En perfectionnement:';
  perfecting: string = 'Angular, JAVA, Spring Boot, SQL, Agile, Anglais B2';
  button: string = 'Voir mes projets';
  ngOnInit(): void {}
}
