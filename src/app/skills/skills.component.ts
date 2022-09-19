import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills = ['JavaScript', 'Angular TypeScript/SCSS', 'HTML/CSS', 'SCRUM', 'Git', 'Object-oriented Programming', 'APIs (REST)', 'Test automation', 'Google Firebase'];
  img = ['javascript.png', 'angular.png', 'htmlcss.png', 'scrum.png', 'git.png', 'oop.png', 'api.png', 'test.png', 'google_firebase.png'];

  constructor() { }

  ngOnInit(): void {
  }

}
