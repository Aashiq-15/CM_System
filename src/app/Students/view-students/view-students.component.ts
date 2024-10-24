import { Component } from '@angular/core';
import { Material } from '../../Tools/Material';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ProgrammAddUpdateComponent } from '../../Main/programm/programm-add-up/programm-add-up.component';

@Component({
  selector: 'app-view-students',
  standalone: true,
  imports: [Material],
  templateUrl: './view-students.component.html',
  styleUrl: './view-students.component.css'
})
export class ViewStudentsComponent {
  displayedColumns: string[] = ['id','action1', 'studentPicture','batchNo','course','other','fullName','nameWithInitial','sex','dateOfBirth',
    'studentNic','passportNo','permanantAddress','currentAddress','mobileNo','telephoneNo','email','guardianName','guardianPhoneNumber','guardianTelephoneNumber',
    'olYear','olIndex','olSubject1','olGrade1','olSubject2','olGrade2','olSubject3','olGrade3','olSubject4','olGrade4','olSubject5','olGrade5',
    'olSubject6','olGrade6','olSubject7','olGrade7','olSubject8','olGrade8','olSubject9','olGrade9','alStream','alYear','alIndex','alZscore',
    'alSubject1','alGrade1','alSubject2','alGrade2','alSubject3','alGrade3','alSubject4','alGrade4',
    'action2'];
    dataSource!: MatTableDataSource<any>;

  constructor(public dialog: MatDialog) {}

  programmcallForm() {
    const dialogRef = this.dialog.open(ProgrammAddUpdateComponent);

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getProgrammList();
        }
      },
    });
  }

  applyFilter(event: Event) {}

  getProgrammList() {}

  deleteProgramm(id: number) {}
  updateProgramm(data: any) {}
}
