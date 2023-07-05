import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleaRoutingModule } from './modulea-routing.module';
import { ModuleaComponent } from './modulea.component';

//Lazy Loading Demo
//ng generate module modulea --route a --module app.module
//ng generate module moduleb --route b --module app.module
@NgModule({
  declarations: [
    ModuleaComponent
  ],
  imports: [
    CommonModule,
    ModuleaRoutingModule
  ]
})
export class ModuleaModule { }
