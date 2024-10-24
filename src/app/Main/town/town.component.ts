import { Component } from '@angular/core';
import { Material } from '../../Tools/Material';
import { FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationService } from 'primeng/api';
import { TownAddUpdateComponent } from './town-add-update/town-add-update.component';

@Component({
  selector: 'app-town',
  standalone: true,
  imports: [Material],
  providers:[ConfirmationService],
  templateUrl: './town.component.html',
  styleUrl: './town.component.css'
})
export class TownComponent {

  townForm!: FormGroup;
  displayedColumns: string[] = ['id', 'townId','townName','townDescription','action'];
  dataSource!: MatTableDataSource<any>;

  constructor(
    public dialog: MatDialog,
    private confirmationService: ConfirmationService
    ) {}

    towncallForm() {
      const dialogRef = this.dialog.open(TownAddUpdateComponent);

      dialogRef.afterClosed().subscribe({
        next:(val)=>{
          if (val){
            // this.getTownList();
          }
        }
      });
    }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
