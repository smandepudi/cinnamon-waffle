import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule} from '@angular/forms';
import { FormsModule} from '@angular/forms';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { ReactiveFormValidationComponent } from './reactive-form-validation/reactive-form-validation.component';
import { ProductTestComponent } from './product-test/product-test.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavigationComponent,
    FormValidationComponent,
    ReactiveFormValidationComponent,
    ProductTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
