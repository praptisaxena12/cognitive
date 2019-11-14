import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public searchKeyword = '';
  showResult:boolean = false;
  selectedKeyword(result){
    this.searchKeyword = result;
    console.log(result);
    this.showResult = true;
  }
  public myLocalList = [
    "ngx-typeahead' ",
    "Sandwiches resolve",
    "French Fries",
    "Milks resolve hakes",
    "Taco resolve",
    "Biscuit Pizza",
    "Cookies Pizza",
    "Hot Dog",
    "Pizza",
    "Pancake"
  ];
}
