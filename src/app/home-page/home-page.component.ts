import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  constructor() {}

  picture: string = '../../assets/images/homePage/profile.jpeg';
  title: string = 'Développeur Full Stack';
  presentation: string =
    'Diplômé en développement web, j’ai réalisé plusieurs projets avec Angular, React et Node.js. Fort de mon expérience dans les télécommunications et la résolution de problèmes techniques, je souhaite aujourd’hui évoluer vers le développement logiciel.';
  titleSkils: string = 'Compétences:';
  skilsFront: string = 'HTML, CSS, JavaScript, TypeScript, React, Angular';
  skilsBack: string = 'NodeJS, ExpressJS, MongoDB';
  skilsTools: string = 'Git, GitHub, Postman';
  titlePerfecting: string = 'En perfectionnement:';
  perfecting: string = 'Angular, JAVA, Spring Boot, SQL, Agile, Anglais B2';
  button: string = 'Voir mes projets';
  ngOnInit(): void {}
}
