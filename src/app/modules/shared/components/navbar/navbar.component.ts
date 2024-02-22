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
  menuItems:any = [];
  user =localStorage.getItem('User_Type')
  
  constructor(
    private router: Router,

) {  


  // 1 for admin   2 for student
 this.user=='1'?this.menuItems= [
    { label: 'Dashboard', link: '/admin/exam', action: '' },
    { label: 'Student', link: '/admin/student', action: '' },
    { label: 'question', link: '/admin/question', action: '' },
    { label: 'Department', link: '/admin/department', action: '' },
    { label: 'PPT', link: '/admin/presentations', action: '' },
    { label: 'exam types', link: '/admin/exam_types', action: '' },
    { label: 'Sign Out', link: '#', action: 'logout' }
  ]:this.menuItems=[{ label: 'Dashboard', link: '/admin/exam', action: '' },
  // { label: 'E-commerce', subItems: [
  //   { label: 'Products', link: '#',action: '' },
  //   { label: 'Billing', link: '#',action: '' },
  //   { label: 'Invoice', link: '#',action: '' }
  // ] },
  { label: 'Question Bank', link: '/user/question_bank', action: '' },
  { label: 'Online Test', link: '/user/student-exam', action: '' },
  { label: 'PPT', link: '/user/ppt', action: '' },
  { label: 'Messages', link: '/admin/exam', action: '' },
  { label: 'Sign Out', link: '#', action: 'logout' }]
}
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  logout(){

       
                localStorage.clear();
           
                if(this.user=='2'){
                    this.router.navigateByUrl('auth/user')

                }else if(this.user=='1'){

                    this.router.navigateByUrl('auth')
                }
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
