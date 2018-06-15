import { environment } from './../environments/environment' 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


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
import { BgNavbarComponent } from './bg-navbar/bg-navbar.component';
import { HomeComponent } from './home/home.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { LoginComponent } from './login/login.component';

import { AdminProductsComponent } from './admin/admin-products/admin-products.component'; 
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component'; 

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AuthService } from "./auth.service"; 
import { AuthGuardService } from "./auth-guard.service";
import { AdminAuthGuardService } from "./admin-auth-guard.service";

import { UserService } from "./user.service";



const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'shopping-cart', component: ShoppingCartComponent},

  { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuardService]},
  { path: 'my-orders', component: OrderSuccessComponent, canActivate: [AuthGuardService]},
  { path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthGuardService]},
  { path: 'quant-list', component: QuantComponent, canActivate: [AuthGuardService] },
  { path: 'quant/:id',  component: QuantDetailComponent, canActivate: [AuthGuardService] },
  { path: 'quant',  component: QuantDetailComponent, canActivate: [AuthGuardService] },
  
  { path: 'admin/products', component: AdminProductsComponent, canActivate: [AuthGuardService]},
  { path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AuthGuardService]},
  
  { path: '**', component: PageNotfoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    QuantComponent,
    QuantDetailComponent,
    PageNotfoundComponent,
    BgNavbarComponent,
    LoginComponent,
    HomeComponent,
    ShoppingCartComponent,
    ProductsComponent,    
    CheckOutComponent,
    MyOrdersComponent,
    OrderSuccessComponent,
    AdminProductsComponent,
    AdminOrdersComponent
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
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),

    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [
    AuthService,
    AuthGuardService,
    AdminAuthGuardService,    
    QuantService,
    UserService,
    AngularFireDatabase
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
