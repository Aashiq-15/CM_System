import { Component, OnInit, ViewChild } from '@angular/core';
import { Material } from '../../Tools/Material';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ProgrammAddUpdateComponent } from './programm-add-up/programm-add-up.component';
import { MatDialog } from '@angular/material/dialog';
import { ServiceService } from '../../Services/service.service';
import { ConfirmationService } from 'primeng/api';
import {NgToastService} from 'ng-angular-popup';

@Component({
  selector: 'app-programm',
  standalone: true,
  imports: [Material],
  providers: [ConfirmationService],
  templateUrl: './programm.component.html',
  styleUrl: './programm.component.css',
})
export class ProgrammComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'programmId',
    'programmName',
    'university',
    'programmDescription',
    'action',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit() {
    this.getProgrammList();
  }

  constructor(
    private toastr: NgToastService,
    private programmService: ServiceService,
    public dialog: MatDialog,
    private confirmationService: ConfirmationService
  ) {}

  //show details coding stop
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

getProgrammList() {
  this.programmService.programm_get_all().subscribe({
    next: (res) => {
      console.log(res);  // Log the response to see its structure
      this.dataSource = new MatTableDataSource(res); // Use res directly if it's an array
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    },
    error: console.log,
  });
}


  deleteProgramm(id: number) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.programmService.programm_delete(id).subscribe({
          next: (res) => {
            this.toastr.warning("WARN",'Programme Details deleted sucessfully!', 5000);
            this.getProgrammList();
          },
          error: console.log,
        });
      },

      reject: () => {
        this.confirmationService.close();
      },
    });
  }
  updateProgramm(data: any) {
    const dialogRef = this.dialog.open(ProgrammAddUpdateComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getProgrammList();
        }
      },
    });
  }
}
