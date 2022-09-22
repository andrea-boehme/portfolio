import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  y = 0;
  scrollDown = false;
  menuOpen = false;
  menuBtn = false;

  @HostListener('window:scroll', ['$event'],)
  onScroll() {
    if (window.pageYOffset > this.y) {
      this.scrollDown = true;
    }
    else if (window.pageYOffset < this.y) {
      this.scrollDown = false;
    }
    this.y = window.pageYOffset;
  }

  ngOnInit(): void {
    this.y = window.pageYOffset;
  }

  openMenu() {
    this.menuOpen = !this.menuOpen;
    if (this.menuOpen) {
      this.menuBtn = true;
    }
    else {
      this.menuBtn = false;
    }
  }

}

