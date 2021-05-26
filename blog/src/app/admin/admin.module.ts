import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component';


@NgModule({
  imports:[RouterModule.forChild([
    {path: '', component: ''}
  ])],
  exports: [RouterModule],
  declarations: [
    AdminLayoutComponent
  ]
})
export class AdminModule {

}
