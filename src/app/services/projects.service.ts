import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projects: Project[] = [
    {
      id: 1,
      title: 'Booki',
      description:
        "Prototype de la Home Page d'un site web de planification de vacances.",
      logoUrl: '../../assets/images/project/logo_booki.png',
      imageUrl: '../../assets/images/project/booki_image.png',
      externalUrl:
        'https://yusef-boulam.github.io/Transformez_une_maquette_en_site_web_avec_HTML_-_CSS_Boulam_Yusef/',
      tag: 'HTML / CSS',
    },
    {
      id: 2,
      title: 'OhMyFood',
      description:
        'Prototype web "mobile first" qui répertorie les menus des restaurants gastronomiques.',
      logoUrl: '../../assets/images/project/logo_ohmyfood.png',
      imageUrl: '../../assets/images/project/ohmyfood_image.png',
      externalUrl:
        'https://yusef-boulam.github.io/Dynamisez_une_page_web_avec_des_animations_CSS_Yusef_Boulam/',
      tag: 'Animation CSS',
    },
    {
      id: 3,
      title: 'La Panthère',
      description:
        "Optimisation du site de l'agence de web design sur l'Accessibilité et le SEO.",
      logoUrl: '../../assets/images/project/logo_laPanthere.svg',
      imageUrl: '../../assets/images/project/laPanthere_image.png',
      externalUrl:
        'https://yusef-boulam.github.io/Nouvelle_version_optimisez_un_site_web_existant-ACCESSIBILITE-SEO/index.html',
      tag: 'HTML / CSS',
    },
    {
      id: 4,
      title: 'Kanap',
      description: "Ajout des fichiers JavaScript sur un site d'e-commerce.",
      logoUrl: '../../assets/images/project/logo_kanap.png',
      imageUrl: '../../assets/images/project/kanap_image.png',
      externalUrl:
        'https://github.com/yusef-boulam/Construisez_un_site_e_commerce_en_JavaScript',
      tag: 'JavaScript',
    },
    {
      id: 5,
      title: 'Hot Takes',
      description:
        "Création de l'API RESTful pour un site d'avis gastronomiques.",
      logoUrl: '../../assets/images/project/logo_hotTakes.png',
      imageUrl: '../../assets/images/project/hotTakes_image.png',
      externalUrl:
        'https://github.com/yusef-boulam/Construisez-une-API-securisee-pour-une-application-d-avis-gastronomiques-NODE.JS',
      tag: 'NodeJS',
    },
    {
      id: 6,
      title: 'Kasa',
      description: 'Application web de location immobilière.',
      logoUrl: '../../assets/images/project/logo_kasa.svg',
      imageUrl: '../../assets/images/project/kasa_image.png',
      externalUrl: 'https://yusef-location-immobilie-7a12e.web.app',
      tag: 'REACT',
    },
    {
      id: 7,
      title: 'Devi Métal',
      description: 'Portfolio réalisé pour une auto-entreprise.',
      logoUrl: '../../assets/images/project/devi_metal_logo.png',
      imageUrl: '../../assets/images/project/devi_metal_image.png',
      externalUrl: 'https://devimetal.fr',
      tag: 'Angular',
    },
  ];

  // pourra ensuite etre utilisé pour recuperer les projets sur le serveur
  getAllProjects(): Project[] {
    return this.projects;
  }
}
