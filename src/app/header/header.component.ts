import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goToAbout(){
    this.router.navigate(['about'])
  }
  goToGallery(){
    this.router.navigate(['gallery'])
  }
  goToArticles(){
    this.router.navigate(['articles'])
  }
  goToRegistration(){
    this.router.navigate(['registration'])
  }
  goToContactUs(){
    this.router.navigate(['Contactus'])
  }
  goToHome(){
    this.router.navigate([''])
  }
}

