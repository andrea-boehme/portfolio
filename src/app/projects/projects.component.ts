import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects = [
    {
      "title": 'Kanban App',
      "img": 'laptop1a.png',
      "url": 'https://andrea-boehme.developerakademie.net/kanban-app/views/login.html',
      "git": 'https://github.com/andrea-boehme/Kanban-app',
      "description": 'Create and manage tasks by dragging and dropping them',
      "tool": 'HTML, CSS, JavaScript and Backend Integration'
    },
    {
      "title": 'CRM System',
      "img": 'smartphone1.png',
      "url": 'https://andrea-boehme.developerakademie.net/simple-crm/index.html',
      "git": 'https://github.com/andrea-boehme/simple-crm',
      "description": 'Manage data and analyse statistics with a simple CRM tool',
      "tool": 'Angular (TypeScript, SCSS) and Firebase'
    },
    {
      "title": 'Ring of Fire',
      "img": 'ring-of-fire.jpg',
      "url": 'https://andrea-boehme.developerakademie.net/ring-of-fire/index.html',
      "git": 'https://github.com/andrea-boehme/ring-of-fire',
      "description": 'Play this card game with your friends from different devices',
      "tool": 'Angular and Firebase'
    },
    {
      "title": 'El Pollo Loco Game',
      "img": 'pollo.png',
      "url": 'https://andrea-boehme.developerakademie.net/el-pollo-loco/index.html',
      "git": 'https://github.com/andrea-boehme/El-Pollo-Loco',
      "description": 'Play this jump and run game built using object-oriented programming',
      "tool": 'JavaScript (OOP)'
    },
    {
      "title": 'Pokedex',
      "img": 'laptop-pokedex.jpeg',
      "url": 'https://andrea-boehme.developerakademie.net/pokemon/index.html',
      "git": 'https://github.com/andrea-boehme/pokemon',
      "description": 'Load creatures with images and abilities from a rest API.',
      "tool": 'JavaScript, Bootstrap and API'
    },
    {
      "title": 'Portfolio',
      "img": 'ipad-foto.jpeg',
      "url": 'https://andrea-boehme.developerakademie.net/portfolio/index.html',
      "git": 'https://github.com/andrea-boehme/portfolio',
      "description": 'My own portfolio website',
      "tool": 'Angular'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
