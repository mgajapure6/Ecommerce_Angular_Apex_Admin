import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { SettingsRoutingModule } from "./settings-routing.module";
import { ChartistModule } from 'ng-chartist';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatchHeightModule } from "../shared/directives/match-height.directive";
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { UserMasterComponent } from "./usermaster/usermaster.component";
import { ModuleMasterComponent } from "./modulemaster/modulemaster.component";
import { MenuMasterComponent } from "./menumaster/menumaster.component";
import { UserRightsMasterComponent } from "./userRightsMaster/userRightsMaster.component";


@NgModule({
    imports: [
        CommonModule,
        SettingsRoutingModule,
        ChartistModule,
        NgbModule,
        MatchHeightModule,
        NgxDatatableModule
    ],
    exports: [],
    declarations: [
        UserMasterComponent,
        ModuleMasterComponent,
        MenuMasterComponent,
        UserRightsMasterComponent
    ],
    providers: [],
})
export class SettingsModule { }