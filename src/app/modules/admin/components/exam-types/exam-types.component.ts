import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { ExamService } from '../../services/exam';
import { Exam as ExamType } from 'src/app/Model/exam';
import { DialogBox_Component } from 'src/app/modules/shared/components/DialogBox/DialogBox.component';
@Component({
  selector: 'app-exam-types',
  templateUrl: './exam-types.component.html',
  styleUrls: ['./exam-types.component.scss']
})
export class ExamTypesComponent implements OnInit {
  examTypes: ExamType[];
  examType: ExamType = new ExamType();
  examTypeNameSearch: string;
  Entry_View = true;
  editIndex: number;
  totalEntries: number;
  isLoading = false;

  constructor(
    private examTypeService: ExamService,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.pageLoad();
  }

  pageLoad() {
    this.isLoading = true;
    this.clearExamType();
    this.searchExamType();
    this.Entry_View = false;
  }

  createNew() {
    this.Entry_View = true;
    this.clearExamType();
  }

  closeClick() {
    this.Entry_View = false;
    this.searchExamType();
  }

  trackByFn(index: number, item: ExamType) {
    return index;
  }
  clearExamType() {
    this.examType.Exam_Id = 0;
    this.examType.Exam_Name = '';
    this.examType.Department_Id = 0;
    this.examType.Pass_Mark = 0;
    this.examType.No_Of_Questions = 0;
    this.examType.Duration = 0;
    // Add other properties of the examType and initial
  }

  searchExamType() {
    this.isLoading = true;
    this.examTypeService.search_ExamType('').subscribe(
      (data: any[]) => {
        console.log('data: ', data[0]);
        this.examTypes = data[0];
        this.totalEntries = this.examTypes.length;
        if (this.examTypes.length === 0) {
          this.isLoading = false;
          this.openDialog('No details found', '3');
        }
        this.isLoading = false;
      },
      (error) => {
        this.isLoading = false;
        ;
      }
    );
  }

  deleteExamType(examTypeId: number, index: number) {
    this.editIndex = index;
    const dialogRef = this.dialog.open(DialogBox_Component, {
      panelClass: 'dialogbox-class',
      data: { Message: 'Do you want to delete?', Type: true, heading: 'Confirm' }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'Yes') {
        this.isLoading = true;
        this.examTypeService.delete_ExamType(examTypeId).subscribe(
          (data) => {
            if (data[0][0].Exam_Id_ > 0) {
              this.examTypes.splice(this.editIndex, 1);
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

  saveExamType() {

    const requiredFields = ['Exam_Name', 'Pass_Mark', 'No_Of_Questions', 'Duration',];
  
    for (const field of requiredFields) {
      if (!this.examType[field]) {
        this.openDialog(`${field.replace('_', ' ')} is required`,'3');
        return;
      }
    }


    this.isLoading = true;
    this.examTypeService.save_ExamType(this.examType).subscribe(
      (data) => {
        console.log('data: ', data[0]); 
        if (data[0][0].Exam_Id_ > 0) {
          this.clearExamType();
          this.closeClick();
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

  editExamType(examType: ExamType, index: number) {
    this.Entry_View = true;
    this.examType = examType;
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
