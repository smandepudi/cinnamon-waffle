import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { ReactiveFormValidationComponent } from './reactive-form-validation/reactive-form-validation.component';
import { ProductTestComponent } from './product-test/product-test.component';
import { ProductGuard } from './guards/product.guard';
import { SimpleFormComponent } from './simple-form/simple-form.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'templateForms',
    pathMatch : 'full',
  },
  {
    path: 'simpleForm',
    component: SimpleFormComponent
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
