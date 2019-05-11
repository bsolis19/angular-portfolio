import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenubarModule, MenuItem, GalleriaModule } from 'primeng/primeng';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { DetailComponent } from './detail/detail.component';
import { EmploymentComponent } from './employment/employment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    DetailComponent,
    EmploymentComponent
  ],
  imports: [
    BrowserModule,
    MenubarModule,
    GalleriaModule,
    AppRoutingModule
  ],
  providers: [
    { provide: 'GITHUB_URL', useValue: 'https://github.com/bsolis19' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
