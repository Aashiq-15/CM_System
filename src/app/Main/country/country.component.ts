import { Component } from '@angular/core';
import { Material } from '../../Tools/Material';
import { ConfirmationService } from 'primeng/api';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { CountryAddUpComponent } from './country-add-up/country-add-up.component';

@Component({
  selector: 'app-country',
  standalone: true,
  imports: [Material],
  providers:[ConfirmationService],
  templateUrl: './country.component.html',
  styleUrl: './country.component.css'
})
export class CountryComponent {

  displayedColumns: string[] = ['id', 'countryId','countryName','countryDescription','action'];
  dataSource!: MatTableDataSource<any>;

  constructor(
    public dialog: MatDialog,
    private confirmationService: ConfirmationService,
    ) {

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  //show details coding stop
  countrycallForm() {
    const dialogRef = this.dialog.open(CountryAddUpComponent);

    dialogRef.afterClosed().subscribe({
      next:(val)=>{
        if (val){
          // this.getCountryList();
        }
      }
    });
  }

}
