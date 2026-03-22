import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'Dashboard';
  sidebarItems = [
    { icon: 'dashboard', path: '/dashboard', active: true, hasArrow: false },
    { icon: 'hierarchy', path: '/view-edit-member', active: false, hasArrow: true },
    { icon: 'home', path: '/view-edit-member', active: false, hasArrow: true },
    { icon: 'list-check', path: '/view-edit-member', active: false, hasArrow: true },
    { icon: 'gears', path: '/view-edit-member', active: false, hasArrow: false },
    { icon: 'mail', path: '/view-edit-member', active: false, hasArrow: false },
    { icon: 'user-gear', path: '/view-edit-member', active: false, hasArrow: true },
    { icon: 'clipboard', path: '/view-edit-member', active: false, hasArrow: false },
    { icon: 'chart-line', path: '/view-edit-member', active: false, hasArrow: false }
  ];

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      const url = event.urlAfterRedirects;
      if (url.includes('view-edit-member') || url.includes('edit-member')) {
        this.pageTitle = 'View/Edit Member';
      } else {
        this.pageTitle = 'Dashboard';
      }
    });
  }

  setActive(clickedItem: any) {
    this.sidebarItems.forEach(item => item.active = false);
    clickedItem.active = true;
  }
}