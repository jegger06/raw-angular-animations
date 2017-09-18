import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Module Imports
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Component Imports
import { AppComponent } from './app.component';
import { GoalComponent } from './components/goal/goal.component';
import { QuoteComponent } from './components/quote/quote.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectComponent } from './components/project/project.component';
import { NewProjectComponent } from './components/new-project/new-project.component';
import { UsersComponent } from './components/users/users.component';
// Service Imports
import { ProjectsService } from './services/projects.service';

const appRoutes: Routes = [
  { path: '', component: ProjectsComponent },
  { path: 'users', component: UsersComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    GoalComponent,
    QuoteComponent,
    ProjectsComponent,
    ProjectComponent,
    NewProjectComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],
  providers: [ProjectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
