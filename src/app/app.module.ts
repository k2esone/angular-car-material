import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MainContainerComponent} from './main-container/main-container.component';
import {NavigatorComponent} from './navigator/navigator.component';
import {ContentContainerComponent} from './content-container/content-container.component';
import {FooterComponent} from './footer/footer.component';
import {MatButtonModule} from "@angular/material/button";
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import { PageMainComponent } from './page-main/page-main.component';
import { PageCarFormComponent } from './page-car-form/page-car-form.component';
import { PageCarListComponent } from './page-car-list/page-car-list.component';
import {MatCardModule} from "@angular/material/card";
import {MatTableModule} from "@angular/material/table";
import {CarService} from "./car-service/car.service";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule} from "@angular/forms";

// JSON - JavaScript Object Notation
// {
//   "nazwaPola": "wartosc"
// }
@NgModule({
  declarations: [
    AppComponent,
    MainContainerComponent,
    NavigatorComponent,
    ContentContainerComponent,
    FooterComponent,
    PageMainComponent,
    PageCarFormComponent,
    PageCarListComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatButtonModule,
    RouterOutlet,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule
  ],
  providers: [
    CarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
