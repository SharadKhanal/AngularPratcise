import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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
  onRouteChange(){
    this.router.navigate(['/another-page']);
  }
  onNavigateById(value:string){
   this.router.navigate(['/home',value]);
  }
  onDetailView(id:string,paramName:string,pramAddress:string,paramAge:string,paramClass:string){
    this.router.navigate(['/user',id,'class',paramClass],{
      queryParams:{name:paramName,address:pramAddress, age:paramAge}
    });
  }


}
