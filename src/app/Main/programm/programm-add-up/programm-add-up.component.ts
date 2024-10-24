import { Component, Inject, OnInit } from '@angular/core';
import { Material } from '../../../Tools/Material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServiceService } from '../../../Services/service.service';
import { ReactiveFormsModule } from '@angular/forms';
import { response } from 'express';

@Component({
  selector: 'app-programm-add-up',
  standalone: true,
  imports: [Material],
  templateUrl: './programm-add-up.component.html',
  styleUrl: './programm-add-up.component.css'
})
export class ProgrammAddUpdateComponent implements OnInit  {

  programmForm!: FormGroup;
  errors:any;

  constructor(
    private programmService:ServiceService,
    private matdialogRef:MatDialogRef<ProgrammAddUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
  ){}

  ngOnInit(){
    this.programmForm=new FormGroup({
      'programmId':new FormControl('',[Validators.required]),
      'programmName': new FormControl('',[Validators.required]),
      'university': new FormControl('',[Validators.required]),
      'programmDescription':new FormControl('',[Validators.required]),

    });
    this.programmForm.patchValue(this.data)
  }


  programm(){
    if(this.programmForm.valid){
      if(this.data){
        this.programmService.programm_update(this.data.id,this.programmForm.value).
        subscribe({
          next:(val:any)=>{
            this.matdialogRef.close(true);
          },

          error:(response:any)=>{
            if (response.status == 422){
              this.errors = response.error.errors;
              let errorMessage='';
              for (const key in this.errors){
                if (this.errors.hasOwnProperty(key)){
                  errorMessage += `${this.errors[key]}`;
                }
              }
            }else{
              console.log(response);
            }
          },
        });
      }else{
        this.programmService.programm_store(this.programmForm.value).subscribe({
          next:(val:any)=>{
            this.matdialogRef.close(true);
          },
          error:(response:any)=>{
            if (response.status === 422){
              this.errors = response.error.errors;
              let errorMessage= '';
              for (const key in this.errors){
                if(this.errors.hasOwnProperty(key)){
                  errorMessage +=`${this.errors[key]}`;
                }
              }
            } else {
              console.log(response);
            }
          },
        });
      }
    }
  }
}
