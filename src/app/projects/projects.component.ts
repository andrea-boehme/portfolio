import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects = [
    {
      "title":'Kanban App',
      "img":'laptop1a.png',
      "url": 'https://andrea-boehme.developerakademie.net/kanban-app/views/login.html',
      "git": 'https://github.com/andrea-boehme/Kanban-app',
      "description":'Create and manage tasks by dradding and dropping them',
      "tool":'HTML, CSS, JavaScript and Backendintegration'
    },
    {
      "title":'El Pollo Loco Game',
      "img":'pollo.png',
      "url": 'https://andrea-boehme.developerakademie.net/el-pollo-loco/index.html',
      "git": 'https://github.com/andrea-boehme/El-Pollo-Loco',
      "description":'Play this jump and run game built using object-oriented programming',
      "tool":'Object-oriented JavaScript'
    },
    {
      "title":'CRM System',
      "img":'smartphone1.png',
      "url": 'https://andrea-boehme.developerakademie.net/simple-crm/index.html',
      "git": 'https://github.com/andrea-boehme/simple-crm',
      "description":'Manage data and analyse statistics with a Simple CRM tool',
      "tool":'Angular (Typescript, SCSS) and Firebase'
    },
    {
      "title":'Portfolio',
      "img":'ipad-foto.jpeg',
      "url": 'https://..',
      "git": 'https://github.com/..',
      "description":'My own portfolio page',
      "tool":'Website built with Angular'
    },
    {
      "title":'Pokedex',
      "img":'laptop-pokedex.jpeg',
      "url": 'https://andrea-boehme.developerakademie.net/pokemon/index.html',
      "git": 'https://github.com/..',
      "description":'Load creatures with images and abilities from a rest API.',
      "tool":'JavaScript, Bootstrap and API'
    },
    {
      "title":'Ring of Fire',
      "img":'ring-of-fire.jpg',
      "url": 'https://..',
      "git": 'https://github.com/..',
      "description":'Play this card game with your friends from different devices',
      "tool":'Angular and Firebase'
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
