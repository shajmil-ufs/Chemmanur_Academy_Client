import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogBox_Component } from 'src/app/modules/shared/components/DialogBox/DialogBox.component';
import { Eligibility_Criteria } from 'src/app/Model/eligibility_criteria';
import { Eligibility_CriteriaService } from '../../services/eligibility_criteria.Service';
@Component({
  selector: 'app-eligibility_criteria',
  templateUrl: './eligibility_criteria.component.html',
  styleUrls: ['./eligibility_criteria.component.scss']
})
export class Eligibility_CriteriaComponent implements OnInit {
  eligibilityCriterias: Eligibility_Criteria[];
  eligibilityCriteria: Eligibility_Criteria = new Eligibility_Criteria();
  eligibilityCriteriaNameSearch: string;
  Entry_View = true;
  editIndex: number;
  totalEntries: number;
  isLoading = false;

  constructor(
    private eligibilityCriteriaService: Eligibility_CriteriaService,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.pageLoad();
  }

  pageLoad() {
    this.isLoading = true;
    this.cleareligibilityCriteria();
    this.searcheligibilityCriteria();
    this.Entry_View = true;
  }

  createNew() {
    this.Entry_View = true;
    this.cleareligibilityCriteria();
  }

  closeClick() {
    this.Entry_View = true;
    this.searcheligibilityCriteria();
  }

  trackByFn(index: number, item: Eligibility_Criteria) {
    return index;
  }
  cleareligibilityCriteria() {
    console.log(' this.eligibilityCriteria: ',  this.eligibilityCriteria);
    this.eligibilityCriteria.Eligibility_Criteria_Id = 0;
    this.eligibilityCriteria.Minimum_No_Of_Exam = 0;
    this.eligibilityCriteria.Minimum_No_Of_Pass = 0;
    this.eligibilityCriteria.Average_Mark = 0;
  }

  searcheligibilityCriteria() {
    this.isLoading = true;
    
    this.eligibilityCriteriaService.Search_Eligibility_Criteria('').subscribe(
      
      (data: any[]) => {
        
        console.log('data: ', data[0]);
        console.log('data: ', data);
        this.eligibilityCriterias = data[0];
        console.log('this.eligibilityCriterias : ', this.eligibilityCriterias );
if(this.eligibilityCriterias.length){

  this.eligibilityCriteria= this.eligibilityCriterias[0];
}
        console.log('  this.eligibilityCriteria: ',   this.eligibilityCriteria);
        this.totalEntries = this.eligibilityCriterias.length;
        if (this.eligibilityCriterias.length ==0) {
          this.isLoading = false;
          // this.openDialog('No details found', '3');
        }
        this.isLoading = false;
      },
      (error) => {
        this.isLoading = false;
        ;
      }
    );
  }


  validateLength(inputElement: HTMLInputElement) {
    let inputValue = inputElement.value;
    if (inputValue.length > 5) {
      inputElement.value = inputValue.substring(0, 5);
    }
  }
  
  deleteeligibilityCriteria(eligibilityCriteriaId: number, index: number) {
    this.editIndex = index;
    const dialogRef = this.dialog.open(DialogBox_Component, {
      panelClass: 'dialogbox-class',
      data: { Message: 'Do you want to delete?', Type: true, heading: 'Confirm' }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'Yes') {
        this.isLoading = true;
        
        this.eligibilityCriteriaService.Delete_Eligibility_Criteria(eligibilityCriteriaId).subscribe(
          (data) => {
            
            if (data[0][0].Eligibility_Criteria_Id_ > 0) {
              this.eligibilityCriterias.splice(this.editIndex, 1);
              this.openDialog('Deleted', 'false');
            } else {
              this.isLoading = false;
              ;
            }
            this.isLoading = false;
          },
          (error) => {
            this.isLoading = false;
            ;
          }
        );
      }
    });
  }

  saveeligibilityCriteria() {
    const requiredFields = ['Minimum_No_Of_Exam', 'Minimum_No_Of_Pass', 'Average_Mark', ];
  
    for (const field of requiredFields) {
      if (!this.eligibilityCriteria[field]) {
        this.openDialog(`${field.replace(/_/g, ' ')} is required`,'3');
        return;
      }
    }
    this.isLoading = true;
    
    this.eligibilityCriteriaService.Save_Eligibility_Criteria(this.eligibilityCriteria).subscribe(
      
      (data) => {
        
        console.log('data: ', data[0]); 
        if (data[0][0].Eligibility_Criteria_Id_ > 0) {
          // this.cleareligibilityCriteria();
          // this.closeClick();
          this.openDialog('Saved', 'false');
        } else {
          this.isLoading = false;
          ;
        }
        this.isLoading = false;
      },
      (error) => {
        this.isLoading = false;
        ;
      }
    );
  }

  editeligibilityCriteria(eligibilityCriteria: Eligibility_Criteria, index: number) {
    this.Entry_View = true;
    this.eligibilityCriteria = eligibilityCriteria;
    this.editIndex = index;
    
  }


  openDialog(message: string, type: string) {
    console.log('type: ', type);
    console.log('message: ', message);
   
    const dialogRef = this.dialog.open(DialogBox_Component, {
          panelClass: 'dialogbox-class',
          data: {Message: message,Type: type }
        });
      }
}
