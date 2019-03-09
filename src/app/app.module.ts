import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment'
import { AppRoutingModule ,RoutingComponant} from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodMenuComponent } from './food-menu/food-menu.component';
import { ResevationComponent } from './resevation/resevation.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule , Validator} from '@angular/forms';
import { ReservationManageComponent } from './reservation-manage/reservation-manage.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import {HomePageComponent } from './home-page/home-page.component'  
import {AngularFireAuth, AngularFireAuthModule} from '@angular/fire/auth';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    RoutingComponant,
    FoodMenuComponent,
    ResevationComponent,
    ReservationManageComponent,
    ContactUsComponent,
    HomePageComponent,
    LoginComponent,
    RegisterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
