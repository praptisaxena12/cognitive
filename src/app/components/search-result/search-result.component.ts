import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  collection = [];
  constructor(){
    for(let i=1;i<=25;i++){
      let Obj = {'name': `Employee Name ${i}`,'code': `EMP00 ${i}`}
      this.collection.push(Obj);
    }
  }
  
  ngOnInit() {
  }

  
 
}
