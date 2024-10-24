import { Component } from '@angular/core';
import { Material } from '../../Tools/Material';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-view-lecturer',
  standalone: true,
  imports: [Material],
  templateUrl: './view-lecturer.component.html',
  styleUrl: './view-lecturer.component.css'
})
export class ViewLecturerComponent {

  displayedColumns: string[] = ['id', 'lecturerId','lecturerPicture','lecturerName','lecturerNic','lecturerMail','professionalQualification','academicQualification','lecturerPhoneNo','lecturerWhatsappNo','lecturerAddress','date','action'];
  dataSource!: MatTableDataSource<any>;


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
