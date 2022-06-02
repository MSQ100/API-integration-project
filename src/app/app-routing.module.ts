import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaqComponent } from './allcomponents/faq/faq.component';
import { HowitworksComponent } from './allcomponents/howitworks/howitworks.component';
import { MainpageComponent } from './allcomponents/mainpage/mainpage.component';
import { ThankspageComponent } from './allcomponents/thankspage/thankspage.component';
import { WhychooseusComponent } from './allcomponents/whychooseus/whychooseus.component';

const routes: Routes = [{path:'', component:MainpageComponent},
{path:'howitworks', component:HowitworksComponent},
{path:'thankspage', component:ThankspageComponent},
{path:'whychooseus', component:WhychooseusComponent},
{path:'faq', component:FaqComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
