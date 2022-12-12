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

@NgModule({
  declarations: [AppComponent, MainComponent, CatalogComponent],
  imports: [
    BrowserModule,
    AuthModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    NoopAnimationsModule,
    RouterModule,
  ],
  providers: [appInterceptorProvider, AuthActivate],
  bootstrap: [AppComponent],
})
export class AppModule {}
