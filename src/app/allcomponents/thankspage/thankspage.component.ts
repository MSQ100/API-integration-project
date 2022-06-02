import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-thankspage',
  templateUrl: './thankspage.component.html',
  styleUrls: ['./thankspage.component.css']
})
export class ThankspageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
