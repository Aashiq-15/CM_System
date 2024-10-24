import { Component, Inject } from '@angular/core';
import { Material } from '../../../Tools/Material';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../../../Services/service.service';
import { NgToastService } from 'ng-angular-popup';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-city-add-up',
  standalone: true,
  imports: [Material],
  templateUrl: './city-add-up.component.html',
  styleUrl: './city-add-up.component.css'
})
export class CityAddUpComponent {

  cityForm!: FormGroup;
  errors:any;
  constructor(
    private cityService:ServiceService,
    private toastr: NgToastService,
    private matdialogref:MatDialogRef<CityAddUpComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private spinner: NgxSpinnerService,

    ) {
  }
  ngOnInit() {

    this.cityForm = new FormGroup({
      'cityId': new FormControl('', [Validators.required]),
      'cityName': new FormControl('', [Validators.required]),
      'cityDescription': new FormControl('', [Validators.required]),
    });
    this.cityForm.patchValue(this.data);

  }

  city() {


    if (this.cityForm.valid) {
      if (this.data) {
        this.cityService
          .city_update(this.data.id, this.cityForm.value)
          .subscribe({
            next: (val: any) => {

              this.matdialogref.close(true);

              this.toastr.success("SUCCESS",'City details updated successfully!', 5000, );


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
                  this.toastr.danger( "ERROR", 'Error msg is : ' + errorMessage, 10000,);
              } else {
                  console.log(response);
              }
          },
          });
      } else {
        this.cityService.city_store(this.cityForm.value).subscribe({
          next: (val: any) => {
            this.toastr.success("SUCCESS",'City Details added successfully!',5000, );
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
                this.toastr.danger( "ERROR", 'Error msg is : ' + errorMessage, 10000,);
            } else {
                console.log(response);
            }
        },

        });
      }
    } else {

    }
  }
}
