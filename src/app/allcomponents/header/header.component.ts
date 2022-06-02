import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router, private activatedRouter:ActivatedRoute) { }
    ngOnInit(): void {
    this.activatedRouter.fragment.subscribe((
    value)=>{
    console.log(value);
    this.jumpTo(value)
  });
}
jumpTo(section: string | null){
document.getElementById(section!)?.scrollIntoView({behavior:'smooth'});
}
}