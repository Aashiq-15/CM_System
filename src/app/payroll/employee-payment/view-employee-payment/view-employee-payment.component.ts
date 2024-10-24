import { Component } from '@angular/core';
import { Material } from '../../../Tools/Material';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddEditEmployeePaymentComponent } from '../add-edit-employee-payment/add-edit-employee-payment.component';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-view-employee-payment',
  standalone: true,
  imports: [Material],
  providers:[ConfirmationService],
  templateUrl: './view-employee-payment.component.html',
  styleUrl: './view-employee-payment.component.css'
})
export class ViewEmployeePaymentComponent {

  displayedColumns: string[] = ['id', 'date','amount','transection_type','employeeName','receiptNo','description','action'];
  dataSource!: MatTableDataSource<any>;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  constructor(public dialog: MatDialog,
    private confirmationService: ConfirmationService,
    ) {}

    openEmployeePaymentAddForm() {
      const dialogRef = this.dialog.open(AddEditEmployeePaymentComponent);

      dialogRef.afterClosed().subscribe({
        next:(val)=>{
          if (val){
            // this.getEmployeePaymentList();
          }
        }
      });
    }
}
