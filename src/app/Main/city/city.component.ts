import { Component, OnInit, ViewChild } from '@angular/core';
import { Material } from '../../Tools/Material';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationService } from 'primeng/api';
import { CityAddUpComponent } from './city-add-up/city-add-up.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { NgToastService } from 'ng-angular-popup';
import { ServiceService } from '../../Services/service.service';

@Component({
  selector: 'app-city',
  standalone: true,
  imports: [Material],
  providers:[ConfirmationService],
  templateUrl: './city.component.html',
  styleUrl: './city.component.css'
})
export class CityComponent implements OnInit {
  displayedColumns: string[] = ['id', 'cityId','cityName','cityDescription','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit() {

    this.getCityList();
  }

  fileName="City.xlsx";

  constructor(private toastr: NgToastService,
    private cityService:ServiceService,
    public dialog: MatDialog,
    private confirmationService: ConfirmationService,

    ) {

  }

  //show details coding stop
  citycallForm() {
    const dialogRef = this.dialog.open(CityAddUpComponent);

    dialogRef.afterClosed().subscribe({
      next:(val)=>{
        if (val){
          this.getCityList();
        }
      }
    });
  }

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

  getCityList(){
    this.cityService.city_get_all().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    });
  }

  deleteCity(id: number) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.cityService.city_delete(id).subscribe({
            next: (res) => {
              this.toastr.warning("WARN",'City Details deleted sucessfully!', 5000,);
              this.getCityList();
            },
            error: console.log,
          });
        },

        reject: () => {
          this.confirmationService.close();
        },
    });
}

  updateCity(data: any) {
    const dialogRef = this.dialog.open(CityAddUpComponent, {
      data,
    });
console.log(data.cityName);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getCityList();
        }
      },
    });
  }






}
