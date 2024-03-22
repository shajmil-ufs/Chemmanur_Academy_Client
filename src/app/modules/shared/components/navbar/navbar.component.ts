import { Component } from '@angular/core';
import { IsActiveMatchOptions, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  menuOpen: boolean = false;
  menuItems:any = [];
  user =localStorage.getItem('User_Type')
  title: string='Dashboard';
  
  constructor(
    private router: Router,

) {  


  // 1 for admin   2 for student
 this.user=='1'?this.menuItems= [
   { label: 'Student', link: '/admin/student', action: '' },
    { label: 'Banner', link: '/admin/Banner', action: '' },
    { label: 'Department', link: '/admin/department', action: '' },
    { label: 'PPT', link: '/admin/presentations', action: '' },
    { label: 'Eligibility Criteria', link: '/admin/eligibility_criteria', action: '' },
    { label: 'Exam Type', link: '/admin/exam_types', action: '' },
    { label: 'Question', link: '/admin/question', action: '' },
    { label: 'Sign Out', link: '#', action: 'logout' },
   
  ]:this.menuItems=[{ label: 'Dashboard', link: '/user/dash', action: '' },
  { label: 'PPT', link: '/user/ppt', action: '' },
  // { label: 'E-commerce', subItems: [
  //   { label: 'Products', link: '#',action: '' },
  //   { label: 'Billing', link: '#',action: '' },
  //   { label: 'Invoice', link: '#',action: '' }
  // ] },
  { label: 'Question Bank', link: '/user/question_bank', action: '' },
  { label: 'Online Test', link: '/user/student-exam', action: '' },

  { label: 'Sign Out', link: '#', action: 'logout' }]
}
getImageSource(label: string, isActive: boolean): string {
  if (isActive) {
    switch (label) {
      case 'Dashboard':
        return 'assets/images/navbar/dashboard-active.png';
        case 'PPT':
        return 'assets/images/navbar/ppt-active.png';
      case 'Question Bank':
        return 'assets/images/navbar/questionBank-active.png';
      case 'Online Test':
        return 'assets/images/navbar/onlineTest-active.png';
      default:
        return ''; // Handle other cases if needed
    }
  } else {
    switch (label) {
      case 'Dashboard':
     return 'assets/images/navbar/dashboard.png';
      case 'PPT':
        return 'assets/images/navbar/ppt.png';
      case 'Question Bank':
        return 'assets/images/navbar/questionBank.png';
      case 'Online Test':
        return 'assets/images/navbar/onlineTest.png';
      default:
        return ''; // Handle other cases if needed
    }
  }
}
isActive(link: string): boolean {
  const options: IsActiveMatchOptions = {
    paths: 'exact', // Ensure the entire path matches exactly
    queryParams: 'exact', // Ensure the query parameters match exactly
    fragment: 'ignored', // Ignore the fragment (hash) part of the URL
    matrixParams: 'ignored' // Ignore matrix parameters
  };

  console.log('this.router.isActive(link, options): ', this.router.isActive(link, options));
  return this.router.isActive(link, options); 
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
  performAction(nav: string) {
    this.title=nav

    switch(nav) {
   
      case 'Sign Out':
        this.logout()
        break;
      default:
        console.log('Action not defined');
    }
  }
  
}
