import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { SettingRoutingModule } from "./settings-routing.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatchHeightModule } from "../shared/directives/match-height.directive";

import { MenuMasterComponent } from "./menu-master/menu-master.component";
import { ModuleMasterComponent } from "./module-master/module-master.component";
import { UserMasterComponent } from "./user-master/user-master.component";


@NgModule({
    imports: [
        CommonModule,
        SettingRoutingModule,
        //ChartistModule,
        NgbModule,
        MatchHeightModule
    ],
    exports: [],
    declarations: [
      MenuMasterComponent,
      ModuleMasterComponent,
      UserMasterComponent
    ],
    providers: [],
})
export class SettingModule { }
