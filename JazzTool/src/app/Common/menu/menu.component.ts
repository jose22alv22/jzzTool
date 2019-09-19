import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { }
  items: MenuItem[];
  ngOnInit() {
    
  }

  Logout() {
    this.router.navigate(['/login']);
    localStorage.clear();
  }
}
