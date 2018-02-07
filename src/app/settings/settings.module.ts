import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { SettingsRoutingModule } from "./settings-routing.module";
import { ChartistModule } from 'ng-chartist';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatchHeightModule } from "../shared/directives/match-height.directive";

import { UserMasterComponent } from "./usermaster/usermaster.component";
import { ModuleMasterComponent } from "./modulemaster/modulemaster.component";
import { MenuMasterComponent } from "./menumaster/menumaster.component";


@NgModule({
    imports: [
        CommonModule,
        SettingsRoutingModule,
        ChartistModule,
        NgbModule,
        MatchHeightModule
    ],
    exports: [],
    declarations: [
        UserMasterComponent,
        ModuleMasterComponent,
        MenuMasterComponent
    ],
    providers: [],
})
export class SettingsModule { }
