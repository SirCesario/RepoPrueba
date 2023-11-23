import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BranchComponent } from './branch/branch.component';
import { CoinComponent } from './coin/coin.component';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './branch/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BranchComponent,
    CoinComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
