import { Component, ViewChild } from '@angular/core';
import { Material } from '../../Tools/Material';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmationService } from 'primeng/api';
import { MatDialog } from '@angular/material/dialog';
import { SubjectAddUpComponent } from './subject-add-up/subject-add-up.component';
import { ServiceService } from '../../Services/service.service';
import { NgToastService } from 'ng-angular-popup';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-subject',
  standalone: true,
  imports: [Material],
  providers:[ConfirmationService],
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.css'
})
export class SubjectComponent {

  subjectForm!: FormGroup;
  displayedColumns: string[] = [
    'id',
    'subjectId',
    'subjectName',
    'subjectHours',
    'subjectDescription',
    'action'
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit() {

  this.getSubjects();

  }

  constructor(public dialog: MatDialog,
    private getSubject:ServiceService,
    private toastr: NgToastService,
    private confirmationService: ConfirmationService,
    ) {


  }

getSubjects()
{
  this.getSubject.subject_get_all().subscribe({
    next:(res)=>{
      console.log(res);
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;

    },
    error:console.log,
  })
}
subjectcallForm() {
  const dialogRef = this.dialog.open(SubjectAddUpComponent);

  dialogRef.afterClosed().subscribe({
    next: (val) => {
      if (val) {
        this.getSubjects();
      }
    }
  });
}

updateSubject(data: any) {
  const dialogRef = this.dialog.open(SubjectAddUpComponent, {
    data,
  });

  dialogRef.afterClosed().subscribe({
    next: (val) => {
      if (val) {
        this.getSubjects();
      }
    },
  });
}


deleteSubject(id: number) {
  this.confirmationService.confirm({
    message: 'Do you want to delete this record?',
    header: 'Delete Confirmation',
    icon: 'pi pi-exclamation-triangle',
    accept: () => {
      this.getSubject.subject_delete(id).subscribe({
        next: (res) => {
          this.toastr.warning( "WARN", 'Subject deleted sucessfully!',  5000, );
          this.getSubjects();

        },
        error: console.log,
      });
    },
    reject: () => {
      this.confirmationService.close();
    },
  });
}
  //show details coding stop


  ngAfterViewInit() {
    if (this.dataSource) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
