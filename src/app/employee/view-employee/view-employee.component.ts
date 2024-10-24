import { Component } from '@angular/core';
import { Material } from '../../Tools/Material';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmationService } from 'primeng/api';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-view-employee',
  standalone: true,
  imports: [Material],
  providers:[ConfirmationService],
  templateUrl: './view-employee.component.html',
  styleUrl: './view-employee.component.css'
})
export class ViewEmployeeComponent {

  displayedColumns: string[] = ['id', 'employeeId','employeePicture','employeeName','employeeNic','employeeMail','educationalQualification','employeePhoneNo','employeeWhatsappNo','employeeAddress','date','action'];
  dataSource!: MatTableDataSource<any>;

  constructor(
     public dialog: MatDialog,
     private confirmationService: ConfirmationService,
     ){}

     applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();

      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }


}
