import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TimeAgoPipe } from 'time-ago-pipe';
import { environment } from './environment';
import { AuthService } from './auth.service';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
//import { AuthGuard } from './auth.guard';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { SignupComponent } from './signup/signup.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { LoginComponent } from './login/login.component';
import { StoreComponent } from './store/store.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { TopBarComponent } from './top-bar/top-bar.component';
import { CartComponent } from './cart/cart.component';
import { InMemoryDataService } from './in-memory-data.service';
import { MainstoreComponent } from './mainstore/mainstore.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductService } from './product.service';
import { CartService } from './cart.service';
import { GameDetailsComponent } from './game-details/game-details.component';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { MoneyComponent } from './money/money.component';
import { MoneyService } from './money.service';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule,
     NgbModule,AngularFireAuthModule,
    AngularFireDatabaseModule,
    
    AngularFireStorageModule,
     AngularFireModule.initializeApp(environment.firebaseConfig),
 
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      {path:'login',component:LoginComponent},
      {path:'signup',component:SignupComponent},
      {path:'store',component:StoreComponent},
      { path: 'cart', component: CartComponent},
      { path: 'products/:productId', component: ProductDetailsComponent},
      {path:'mainpage',component:MainpageComponent},
      { path: 'game/:gameid', component: GameDetailsComponent },
    ]),
    
  ],
  declarations: [ 
    AppComponent,  TimeAgoPipe,SignupComponent,MainpageComponent, LoginComponent, StoreComponent,  TopBarComponent, CartComponent, MainstoreComponent, ProductDetailsComponent, ProductListComponent, GameDetailsComponent, MoneyComponent ],
  bootstrap:    [ AppComponent ],
  providers: [CartService,AngularFirestore, InMemoryDataService, ProductService,AuthService, MoneyService]
})
export class AppModule { }
