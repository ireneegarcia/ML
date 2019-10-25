import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  formSearch: FormGroup;
  textSearch: string;

  constructor() { }

  ngOnInit() {

  }

  searchItem() {
    console.log(this.textSearch);
  }

}
