import { Component, HostListener, OnInit } from '@angular/core';
import { MatMenu } from '@angular/material/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }
  
  lastY = 0;
  scrollDown = false;
  menuOpen = false;
  menuBtn = false;

  @HostListener('window:scroll', ['$event'], )
  onScroll(){
    if(window.pageYOffset > this.lastY){
      this.scrollDown = true;
    }
    else if(window.pageYOffset < this.lastY){
      this.scrollDown = false;
    }
    this.lastY = window.pageYOffset;
  }

  

  ngOnInit(): void {
    this.lastY = window.pageYOffset;
    console.log(window.pageYOffset)
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

