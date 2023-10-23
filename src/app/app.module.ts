import { NgModule } from '@angular/core';
import {BrowserModule, Title} from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './pages/test/test.component';
import {RouterLink, RouterModule, Routes} from "@angular/router";
import { LayoutComponent } from './shared/layout/layout.component';
import { ResultsComponent } from './pages/results/results.component';
import { AuthComponent } from './pages/auth/auth.component';
import { AllResultsComponent } from './pages/all-results/all-results.component';


const routes :Routes  = [
  {path: 'test', component: TestComponent},
  {path: '', component: AppComponent},
  {path: 'results', component: ResultsComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'all-results', component: AllResultsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    LayoutComponent,
    ResultsComponent,
    AuthComponent,
    AllResultsComponent
  ],
  imports: [
    BrowserModule,
    RouterLink,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
