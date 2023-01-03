import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListEditComponent } from './list/list-edit/list-edit.component';
import { ListComponent } from './list/list.component';
import { HeaderComponent } from './header/header.component';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { CounterComponent } from './footer/counter/counter.component';
import { StatusPipe } from './pipe/status.pipe';
import { CounterPipe } from './pipe/counter.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContentlimitPipe } from './pipe/contentlimit.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ListEditComponent,
    ListComponent,
    HeaderComponent,
    ErrorMessageComponent,
    FooterComponent,
    CounterComponent,
    StatusPipe,
    CounterPipe,
    ContentlimitPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
