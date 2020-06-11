import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {
  NgbPaginationModule,
  NgbAlertModule,
} from '@ng-bootstrap/ng-bootstrap';
import { DetailUserComponent } from './components/detail-user/detail-user.component';

@NgModule({
  declarations: [AppComponent, ToolbarComponent, LoginComponent, HomeComponent, DetailUserComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
