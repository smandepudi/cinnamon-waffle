import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { ReactiveFormValidationComponent } from './reactive-form-validation/reactive-form-validation.component';
import { ProductTestComponent } from './product-test/product-test.component';
import { HighLightDirective } from './directives/high-light.directive';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatCardModule, MatButtonModule, MatProgressSpinnerModule, MatExpansionModule, MatFormFieldModule } from '@angular/material';
import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { PhotoLibraryComponent } from './photo-library/photo-library.component';
import { ToastrModule } from 'ngx-toastr';
import { UserEntryFormComponent } from './user-entry-form/user-entry-form.component';
import { MatDialogModule } from "@angular/material";
import { PhotoPreviewComponent } from './photo-preview/photo-preview.component';
import { AutoCompleteFormComponent } from './auto-complete-form/auto-complete-form.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { StepperFormComponent } from './stepper-form/stepper-form.component';
import { MatStepperModule } from '@angular/material/stepper';



@NgModule({
  declarations: [
    AppComponent,
    TopNavigationComponent,
    FormValidationComponent,
    ReactiveFormValidationComponent,
    ProductTestComponent,
    HighLightDirective,
    SimpleFormComponent,
    HomeComponent,
    AboutComponent,
    ExpansionPanelComponent,
    PhotoLibraryComponent,
    UserEntryFormComponent,
    PhotoPreviewComponent,
    AutoCompleteFormComponent,
    StepperFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatListModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatStepperModule,
    ToastrModule.forRoot(
      {
        positionClass : 'top-center',
        closeButton : true
      }
    )
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
