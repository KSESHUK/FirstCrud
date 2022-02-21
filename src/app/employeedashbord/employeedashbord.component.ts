import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-employeedashbord',
  templateUrl: './employeedashbord.component.html',
  styleUrls: ['./employeedashbord.component.css']
})
export class EmployeedashbordComponent implements OnInit {
  Freshlist:string[]=["Brandview","SecondView","NormalView"]
  Productform!:FormGroup;

  constructor(private formbulider:FormBuilder) { }

  ngOnInit(): void {
    this.Productform=this.formbulider.group({
      ProductName:['',Validators.required],
      category:['',Validators.required],
      freshness:['',Validators.required],
      price:['',Validators.required],
      Comment:['',Validators.required],
      date:['',Validators.required]
    })
  }
  addproduct(){
    console.log(this.Productform.value);
    
  }

}
