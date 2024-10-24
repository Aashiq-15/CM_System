import { Component } from '@angular/core';
import { Material } from '../../Tools/Material';
import { AddEditTransactionComponent } from '../add-edit-transaction/add-edit-transaction.component';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationService } from 'primeng/api';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-view-transaction',
  standalone: true,
  imports: [Material],
  providers:[ConfirmationService],
  templateUrl: './view-transaction.component.html',
  styleUrl: './view-transaction.component.css'
})
export class ViewTransactionComponent {

  displayedColumns: string[] = ['id', 'date','amount','transection_type','ledger','receiptNo','description','action'];
  dataSource!: MatTableDataSource<any>;

  // @ViewChild(MatPaginator) paginator!: MatPaginator;
  // @ViewChild(MatSort) sort!: MatSort;


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






  openTransactioAddForm() {
    const dialogRef = this.dialog.open(AddEditTransactionComponent);

    // dialogRef.afterClosed().subscribe({
    //   next:(val)=>{
    //     if (val){
    //       this.getTransactionList();
    //     }
    //   }
    // });
  }


}
