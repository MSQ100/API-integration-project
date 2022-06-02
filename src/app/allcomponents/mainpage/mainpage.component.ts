
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AreaService } from 'src/app/service/area.service';
import { IState } from 'src/app/Model/IArea';
import { Formvin } from 'src/app/Model/Formvin';
import { ExteriorColors } from 'src/app/Model/Description';
@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  // move to next <ng-template #xyz>tags.
  hide: boolean = false;
  // move to next <ng-template #xyz> tags end.

  GetByVINexteriorcolors: ExteriorColors[] = [];
  registration2 = new FormGroup({
    color: new FormControl(''),
    color_slug: new FormControl(''),
  })

  
  //IState is model name.
  states: IState[] = []; // api endpoint take model data as json file. states is api endpoint.
  registration = new FormGroup({
    License: new FormControl(''),
    State: new FormControl('')
  })

  registration1;
  GetByVIN: Formvin[] = [];
  constructor(private router: Router,
    private _areaService: AreaService,) {
    
      this.registration1 = new FormGroup({
      vin: new FormControl('')
    })
    this.registration2 = new FormGroup({
      color: new FormControl('')
    })
  }
  ngOnInit(): void {
    //My component calls to my service. states get api class use here//
    this._areaService.getStates().subscribe(response => {
      this.states = response;
    })

    // VIN api
    this._areaService.getGetByVIN().subscribe
      (response => {
         this.GetByVIN = response;
      })

    // next page value getting throug.
    this._areaService.getGetByVINexteriorcolors().subscribe(response => {
      this.GetByVINexteriorcolors = response;
    })
  }
  formStart(): void {
    const vin = this.registration2.value.vin;
    this._areaService.getGetByVINexteriorcolors({ vin }).subscribe(response => {
      console.log(response);
      //popup using here and open other pages
    })
  }
  //For Dynamic Form for Vehicle Detail first Tabs End here //
  createStart(): void {
    console.log(this.registration.value);
  }
  //api calling from here.
  vinStart(): void {
    const vin = this.registration1.value.vin;
    this._areaService.getGetByVIN({ vin }).subscribe(response => {
      console.log(response);
      this.hide = true;
    })
  }
}
