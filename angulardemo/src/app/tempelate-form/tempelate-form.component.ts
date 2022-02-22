import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tempelate-form',
  templateUrl: './tempelate-form.component.html',
  styleUrls: ['./tempelate-form.component.scss']
})
export class TempelateFormComponent implements OnInit {
// tempelateForm:FormGroup=new FormGroup({});
sharad:boolean=false;
  constructor(
    private tform:FormBuilder
  ) { }

  ngOnInit(): void {
    // this.tempelateForm=this.tform.group({
    //   firstname:[undefined,Validators.required],
    //   lastname:[undefined,Validators.required],
    //   email:[undefined,Validators.required],
    //   password:[undefined,Validators.required]
    // });
  }
  // get tforms():{[key:string]:AbstractControl}{
  //  return this.tempelateForm.controls;
  // }

  submit(form:any){
    this.sharad=true;
    // if(this.tempelateForm.valid){

    // }
    console.log(form.value)



  }
}
