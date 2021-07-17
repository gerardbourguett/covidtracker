import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartsModule } from 'ng2-charts';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { BottomComponent } from './components/bottom/bottom.component';
import { FooterComponent } from './components/footer/footer.component';
import { PieComponent } from './components/pie/pie.component';
import { DonutComponent } from './components/donut/donut.component';
import { BarComponent } from './components/bar/bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    PrincipalComponent,
    BottomComponent,
    FooterComponent,
    PieComponent,
    DonutComponent,
    BarComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    TooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
