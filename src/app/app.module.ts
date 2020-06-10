import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [AppComponent, ToolbarComponent, LoginComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, HttpModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
