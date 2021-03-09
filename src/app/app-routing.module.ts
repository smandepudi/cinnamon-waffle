import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { ReactiveFormValidationComponent } from './reactive-form-validation/reactive-form-validation.component';
import { ProductTestComponent } from './product-test/product-test.component';
import { ProductGuard } from './guards/product.guard';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { PhotoLibraryComponent } from './photo-library/photo-library.component';
import { UserEntryFormComponent } from './user-entry-form/user-entry-form.component';
import { AutoCompleteFormComponent } from './auto-complete-form/auto-complete-form.component';
import { StepperFormComponent } from './stepper-form/stepper-form.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch : 'full',
  },
  {
    path: 'home', 
    component: HomeComponent
  },
  { 
    path: 'about', 
    component: AboutComponent 
  },
  {
    path: 'autoCompleteForm', 
    component: AutoCompleteFormComponent 
  },
  {
    path: 'stepperForm', 
    component: StepperFormComponent 
  },
  { 
    path: 'userEntryForm', 
    component: UserEntryFormComponent 
  },
  {
    path: 'simpleForm',
    component: SimpleFormComponent
  },
  {
    path: 'expansionPanel',
    component: ExpansionPanelComponent
  },
  {
    path: 'photoLibrary',
    component: PhotoLibraryComponent
  },
  {
    path: 'templateForms',
    component: FormValidationComponent
  },
  {
    path: 'reactiveForms',
    component: ReactiveFormValidationComponent
  },
  {
    path: 'product',
    component: ProductTestComponent,
    canActivate: [ProductGuard],
    pathMatch : 'full',
  },
  {
    path: 'product/:id',
    component: ProductTestComponent,
    pathMatch : 'full',
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
