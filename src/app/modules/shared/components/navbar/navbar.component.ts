import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  menuOpen: boolean = false;
  // menuItems = [
  //   { label: 'Dashboard', link: 'dash' ,action: ''},
  //   // { label: 'E-commerce', subItems: [
  //   //   { label: 'Products', link: '#',action: '' },
  //   //   { label: 'Billing', link: '#',action: '' },
  //   //   { label: 'Invoice', link: '#',action: '' }
  //   // ] },
 
  //   { label: 'Exams', link: 'admin/exam' ,action: '' },
  //   { label: 'Sign Out', link: '#', action: 'logout' }
  // ];
  menuItems = [
    { label: 'Dashboard', link: '/admin/exam', action: '' },
    { label: 'Queston Bank', link: '/admin/exam', action: '' },
    { label: 'Online Test', link: '/admin/exam', action: '' },
    { label: 'PPT', link: '/admin/exam', action: '' },
    { label: 'Messages', link: '/admin/exam', action: '' },
    { label: 'Sign Out', link: '#', action: 'logout' }
  ];
  
  constructor(
    private router: Router,

) { }
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  logout(){
    localStorage.clear()
    this.router.navigateByUrl('auth')

  }
  performAction(action: string) {
    
    console.log('action: ', action);
    switch(action) {
      case 'goToDashboard':
        // this.router.navigateByUrl('admin/exam')
        // Handle go to dashboard action
        break;
      case 'viewProducts':
        // Handle view products action
        break;
      case 'viewBilling':
        // Handle view billing action
        break;
      case 'viewInvoice':
        // Handle view invoice action
        break;
      case 'logout':
        this.logout()
        break;
      default:
        console.log('Action not defined');
    }
  }
  
}
