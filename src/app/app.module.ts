import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './allcomponents/header/header.component';
import { FooterComponent } from './allcomponents/footer/footer.component';
import { FaqComponent } from './allcomponents/faq/faq.component';
import { HowitworksComponent } from './allcomponents/howitworks/howitworks.component';
import { ValueyourtradeComponent } from './allcomponents/valueyourtrade/valueyourtrade.component';
import { WhychooseusComponent } from './allcomponents/whychooseus/whychooseus.component';
import { ThankspageComponent } from './allcomponents/thankspage/thankspage.component';
import { MainpageComponent } from './allcomponents/mainpage/mainpage.component';
import { AreaService } from './service/area.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FaqComponent,
    HowitworksComponent,
    ValueyourtradeComponent,
    WhychooseusComponent,
    ThankspageComponent,
    MainpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [AreaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
