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

    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
