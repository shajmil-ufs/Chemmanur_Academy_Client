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
    this.eligibilityCriteria.Eligibility_Criteria_Id = 0;
    this.eligibilityCriteria.Minimum_No_Of_Exam = 0;
    this.eligibilityCriteria.Minimum_No_Of_Pass = 0;
    this.eligibilityCriteria.Average_Mark = 0;
  }

  searcheligibilityCriteria() {
    this.isLoading = true;
    debugger
    this.eligibilityCriteriaService.Search_Eligibility_Criteria('').subscribe(
      
      (data: any[]) => {
        debugger
        console.log('data: ', data[0]);
        this.eligibilityCriterias = data[0];
        this.eligibilityCriteria= this.eligibilityCriterias[0];
        this.totalEntries = this.eligibilityCriterias.length;
        if (this.eligibilityCriterias.length === 0) {
          this.isLoading = false;
          this.openDialog('No details found', '3');
        }
        this.isLoading = false;
      },
      (error) => {
        this.isLoading = false;
        this.openDialog('Error occurred', '2');
      }
    );
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
        debugger
        this.eligibilityCriteriaService.Delete_Eligibility_Criteria(eligibilityCriteriaId).subscribe(
          (data) => {
            debugger
            if (data[0][0].Eligibility_Criteria_Id_ > 0) {
              this.eligibilityCriterias.splice(this.editIndex, 1);
              this.openDialog('Deleted', 'false');
            } else {
              this.isLoading = false;
              this.openDialog('Error occurred', '2');
            }
            this.isLoading = false;
          },
          (error) => {
            this.isLoading = false;
            this.openDialog('Error occurred', '2');
          }
        );
      }
    });
  }

  saveeligibilityCriteria() {
    this.isLoading = true;
    debugger
    this.eligibilityCriteriaService.Save_Eligibility_Criteria(this.eligibilityCriteria).subscribe(
      
      (data) => {
        debugger
        console.log('data: ', data[0]); 
        if (data[0][0].Eligibility_Criteria_Id_ > 0) {
          // this.cleareligibilityCriteria();
          // this.closeClick();
          this.openDialog('Saved', 'false');
        } else {
          this.isLoading = false;
          this.openDialog('Error occurred', '2');
        }
        this.isLoading = false;
      },
      (error) => {
        this.isLoading = false;
        this.openDialog('Error occurred', '2');
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
