import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

<<<<<<< HEAD
import { SettingRoutingModule } from "./settings-routing.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatchHeightModule } from "../shared/directives/match-height.directive";

import { MenuMasterComponent } from "./menu-master/menu-master.component";
import { ModuleMasterComponent } from "./module-master/module-master.component";
import { UserMasterComponent } from "./user-master/user-master.component";
=======
import { SettingsRoutingModule } from "./settings-routing.module";
import { ChartistModule } from 'ng-chartist';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatchHeightModule } from "../shared/directives/match-height.directive";

import { UserMasterComponent } from "./usermaster/usermaster.component";
import { ModuleMasterComponent } from "./modulemaster/modulemaster.component";
import { MenuMasterComponent } from "./menumaster/menumaster.component";
>>>>>>> d8394940404daeb38ecc559fe27a05f992cd8758


@NgModule({
    imports: [
        CommonModule,
<<<<<<< HEAD
        SettingRoutingModule,
        //ChartistModule,
=======
        SettingsRoutingModule,
        ChartistModule,
>>>>>>> d8394940404daeb38ecc559fe27a05f992cd8758
        NgbModule,
        MatchHeightModule
    ],
    exports: [],
    declarations: [
<<<<<<< HEAD
      MenuMasterComponent,
      ModuleMasterComponent,
      UserMasterComponent
    ],
    providers: [],
})
export class SettingModule { }
=======
        UserMasterComponent,
        ModuleMasterComponent,
        MenuMasterComponent
    ],
    providers: [],
})
export class SettingsModule { }
>>>>>>> d8394940404daeb38ecc559fe27a05f992cd8758
