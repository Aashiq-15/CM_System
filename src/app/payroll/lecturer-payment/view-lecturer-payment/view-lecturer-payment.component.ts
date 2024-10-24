import { Component } from '@angular/core';
import { Material } from '../../../Tools/Material';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-view-lecturer-payment',
  standalone: true,
  imports: [Material],
  providers:[ConfirmationService],
  templateUrl: './view-lecturer-payment.component.html',
  styleUrl: './view-lecturer-payment.component.css'
})
export class ViewLecturerPaymentComponent {

displayedColumns: string[] = ['id','lecturerId', 'lecturerName', 'programmeId', 'programmeName','subjectId','subjectName','hours','date','settle_amount','payment'];
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
}
