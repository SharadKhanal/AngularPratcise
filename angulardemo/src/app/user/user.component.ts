import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
userDetails={
  
    Id:'002',
    Name:'Sunil',
    Address:'nalshi',
    Age:22,
    Class:'0002'
  };
  

  

  constructor() { }

  ngOnInit(): void {
  }

}
