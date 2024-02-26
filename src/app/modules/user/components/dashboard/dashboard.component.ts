import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Eligibility_Criteria } from 'src/app/Model/eligibility_criteria';
import { student_exams } from 'src/app/Model/student_exams';
import { carousel_Service } from 'src/app/modules/admin/services/carousel.Service';
import { Eligibility_CriteriaService } from 'src/app/modules/admin/services/eligibility_criteria.Service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {




  eligibilityCriterias: Eligibility_Criteria[];
  eligibilityCriteria: Eligibility_Criteria = new Eligibility_Criteria();

  student_exams: student_exams[];
  student_exams_: any;
  Banner: any={};
  eligibilityCriteriaNameSearch: string;
  Entry_View = true;
  editIndex: number;
  totalEntries: number;
  isLoading = false;
  Student_Id_: number;
  Eligibility_Name:string;
  Eligibility_Id:number;
  studentEligibity: any={};
  filepath: any;

  constructor(
    private eligibilityCriteriaService: Eligibility_CriteriaService,
    private carousel_Services:carousel_Service,
    private route: ActivatedRoute,
    private router: Router,
    // public dialog: MatDialog
  ) {

    this.filepath=environment.FilePath

   }

  ngOnInit() {
    this.clear_Banner()

    const studentIdFromLocalStorage = localStorage.getItem('Student_Id');
    if (studentIdFromLocalStorage !== null) {
      this.Student_Id_ = parseInt(studentIdFromLocalStorage);
    }
    this.pageLoad();
  }

  pageLoad() {
    this.isLoading = true;
    this.Search_carousel()
    this.Student_Exam_Eligibility_Check();

  }

  clear_Banner(){
    this.Banner={
      id:0,
      File_Name:'',
      fileChanged:false,
      file:'',
      FilePath:''
    }
  }

  Search_carousel(){
    this.isLoading = true;
    this.carousel_Services.Search_carousel('').subscribe(res=>{
      console.log('res: ', res);
      if(res[0][0])
      {
         res=res[0][0]
   
  
         this.Banner.id=res.carousel_Id
         this.Banner.filepath=res.path
         this.Banner.File_Name=res.name
         console.log('  this.Banner: ',   this.Banner);
         this.isLoading = false;
  
      }else{
        this.isLoading = false;

      }
   
     })        
  }

  Student_Exam_Eligibility_Check() {
    this.isLoading = true;
    
    this.eligibilityCriteriaService.Student_Exam_Eligibility_Check(this.Student_Id_).subscribe(
      
      (data: any[]) => {
        
   this.studentEligibity=data[0][0]
   console.log('  this.studentEligibity: ',   this.studentEligibity);



        this.isLoading = false;
      },
      (error) => {
        this.isLoading = false;
      }
    );
  }



 


 





}
