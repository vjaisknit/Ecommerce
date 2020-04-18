import {Routes, RouterModule} from '@angular/router' ;
import { ProductComponent } from './product/product.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
      {path: 'create-product', component: ProductComponent}
];

@NgModule({
     imports: [RouterModule.forRoot(routes)],
     exports: [RouterModule]
})
export class AppRouting {
}