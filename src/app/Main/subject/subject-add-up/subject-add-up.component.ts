import { Component, Inject } from '@angular/core';
import { Material } from '../../../Tools/Material';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../../../Services/service.service';
import { NgToastService } from 'ng-angular-popup';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-subject-add-up',
  standalone: true,
  imports: [Material],
  templateUrl: './subject-add-up.component.html',
  styleUrl: './subject-add-up.component.css'
})
export class SubjectAddUpComponent {

  subjectForm!: FormGroup;
  errors: any;

  constructor(private subjectService: ServiceService,
    private toastr: NgToastService,
    private matdialogref: MatDialogRef<SubjectAddUpComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) {

  }

  ngOnInit() {
    this.subjectForm! = new FormGroup({
      'subjectId': new FormControl('', [Validators.required]),
      'subjectName': new FormControl('', [Validators.required]),
      'subjectHours': new FormControl('', [Validators.required]),
      'subjectDescription': new FormControl('', [Validators.required]),
    });
    this.subjectForm.patchValue(this.data);

  }

  subject() {
    if (this.subjectForm.valid) {
      if (this.data) {
        this.subjectService
          .subject_update(this.data.id, this.subjectForm.value)
          .subscribe({
            next: (val: any) => {
              this.toastr.success( "SUCCESS",  'Subject details updated successfully!',  5000,);
              this.matdialogref.close(true);
            },
            error: (response: any) => {
              if (response.status === 422) {
                // Handle 422 Unprocessable Entity status
                this.errors = response.error.errors;
              } else {
                // Handle other error statuses
                console.log(response);
              }
            },
          });
      } else {
        console.log(this.subjectForm.value);
        this.subjectService.subject_store(this.subjectForm.value).subscribe({
          next: (val: any) => {
            this.toastr.success( "SUCCESS", 'Subject details Added successfully!',  5000,);
            this.matdialogref.close(true);
          },
          error: (response: any) => {
            if (response.status === 422) {
                this.errors = response.error.errors;
                let errorMessage = '';
                for (const key in this.errors) {
                    if (this.errors.hasOwnProperty(key)) {
                        errorMessage += `${this.errors[key]} `;
                    }
                }
                this.toastr.danger( "ERROR",'Error msg is: ' + errorMessage, 10000,);
            } else {
                console.log(response);
            }
        },
        })
      }

    }
  }
}
