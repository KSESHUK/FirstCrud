import { Component } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeedashbordComponent } from './employeedashbord/employeedashbord.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstCrud';
  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(EmployeedashbordComponent, {
     width:'30%'
    });
  }
  }
