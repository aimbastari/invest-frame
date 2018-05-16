import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuantComponent } from './quant/quant.component';
import { QuantDetailComponent } from './quant-detail/quant-detail.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';

import { PageNotfoundComponent } from './page-notfound/page-notfound.component';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { QuantService } from './services/quant.service'; 


const appRoutes: Routes = [
  { path: 'quant-list', component: QuantComponent },
  { path: 'quant/:id',  component: QuantDetailComponent },
  { path: 'quant',  component: QuantDetailComponent },
  
  { path: '',
    redirectTo: '/quant-list',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotfoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    QuantComponent,
    QuantDetailComponent,
    PageNotfoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    HttpClientModule,

    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [
    QuantService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
