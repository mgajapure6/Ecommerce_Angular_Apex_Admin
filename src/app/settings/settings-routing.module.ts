import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuMasterComponent } from "./menu-master/menu-master.component";
import { ModuleMasterComponent } from "./module-master/module-master.component";
import { UserMasterComponent } from "./user-master/user-master.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'menuMaster',
        component: MenuMasterComponent,
        data: {
          title: 'Menu Master'
        }
      },
      {
        path: 'moduleMaster',
        component: ModuleMasterComponent,
        data: {
          title: 'Module Master'
        }
      },
      {
        path: 'userMaster',
        component: UserMasterComponent,
        data: {
          title: 'User Master'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class SettingRoutingModule { }