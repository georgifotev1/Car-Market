import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { AuthModule } from './auth/auth.module';
import { RouterModule } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { appInterceptorProvider } from './app.interceptor';
import { AuthActivate } from './shared/guards/auth.activate';
import { CreateListingComponent } from './create-listing/create-listing.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateListingComponent } from './update-listing/update-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CatalogComponent,
    CreateListingComponent,
    CarDetailsComponent,
    UpdateListingComponent,
  ],
  imports: [
    BrowserModule,
    AuthModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    NoopAnimationsModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [appInterceptorProvider, AuthActivate],
  bootstrap: [AppComponent],
})
export class AppModule {}
