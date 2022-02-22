import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  tableData=[
    {
      Id:'001',
      Name:'santosh',
      Address:'bhalunabg',
      Age:'22',
      class:'0001'

    },
    {
      Id:'002',
      Name:'Sunil',
      Address:'nalshi',
      Age:'333',
      class:'0002'
    },
    {
      Id:'003',
      Name:'Jeevan',
      Address:'gaikherkha',
      Age:'12',
      class:'0003'
    }
  ]
  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }
  onDetailView(id:string,paramName:string,pramAddress:string,paramAge:string){
    this.router.navigate(['/user',id,'class',id],{
      queryParams:{name:paramName,address:pramAddress, age:paramAge}
    });
  }
  onHome(){
    this.router.navigate(['/home'])
  }
}
