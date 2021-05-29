import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { SidenavComponent } from './components/sidenav/sidenav.component';
import { IntroComponent } from './components//intro/intro.component';
import { HttpClientModule } from '@angular/common/http';
import { ListadoCategoriaComponent } from './components/listado-categoria/listado-categoria.component';
import { CocktelDetailComponent } from './components/cocktel-detail/cocktel-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    IntroComponent,
    ListadoCategoriaComponent,
    CocktelDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
