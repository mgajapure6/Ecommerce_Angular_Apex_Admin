import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

<<<<<<< HEAD
import { MenuMasterComponent } from "./menu-master/menu-master.component";
import { ModuleMasterComponent } from "./module-master/module-master.component";
import { UserMasterComponent } from "./user-master/user-master.component";
=======
import { UserMasterComponent } from "./usermaster/usermaster.component";
import { ModuleMasterComponent } from "./modulemaster/modulemaster.component";
import { MenuMasterComponent } from "./menumaster/menumaster.component";
>>>>>>> d8394940404daeb38ecc559fe27a05f992cd8758

const routes: Routes = [
  {
    path: '',
    children: [
      {
<<<<<<< HEAD
        path: 'menuMaster',
        component: MenuMasterComponent,
        data: {
          title: 'Menu Master'
        }
      },
      {
        path: 'moduleMaster',
=======
        path: 'usermaster',
        component: UserMasterComponent,
        data: {
          title: 'User Master'
        }
      },
      {
        path: 'modulemaster',
>>>>>>> d8394940404daeb38ecc559fe27a05f992cd8758
        component: ModuleMasterComponent,
        data: {
          title: 'Module Master'
        }
      },
      {
<<<<<<< HEAD
        path: 'userMaster',
        component: UserMasterComponent,
        data: {
          title: 'User Master'
        }
      },
=======
        path: 'menumaster',
        component: MenuMasterComponent,
        data: {
          title: 'Menu Master'
        }
      }
>>>>>>> d8394940404daeb38ecc559fe27a05f992cd8758
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
<<<<<<< HEAD

export class SettingRoutingModule { }
=======
export class SettingsRoutingModule { }
>>>>>>> d8394940404daeb38ecc559fe27a05f992cd8758
