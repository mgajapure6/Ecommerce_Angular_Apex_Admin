import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserMasterComponent } from "./usermaster/usermaster.component";
import { ModuleMasterComponent } from "./modulemaster/modulemaster.component";
import { MenuMasterComponent } from "./menumaster/menumaster.component";
import { UserRightsMasterComponent } from "./userRightsMaster/userRightsMaster.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'usermaster',
        component: UserMasterComponent,
        data: {
          title: 'User Master'
        }
      },
      {
        path: 'modulemaster',
        component: ModuleMasterComponent,
        data: {
          title: 'Module Master'
        }
      },
      {
        path: 'menumaster',
        component: MenuMasterComponent,
        data: {
          title: 'Menu Master'
        }
      },
      {
        path: 'userRightsMaster',
        component: UserRightsMasterComponent,
        data: {
          title: 'User Rights Master'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule { }