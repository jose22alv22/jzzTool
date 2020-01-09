import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Common/login/login.component';
import { MenuComponent } from './Common/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuModule } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';
import { DropdownModule } from 'primeng/dropdown';
import { AccordionModule } from 'primeng/accordion';     //accordion and accordion tab
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PropsCreatorComponent } from './Aplications/PropsCreator/props-creator/props-creator.component';
import { PropsAdministratorComponent } from './Aplications/PropsAdministrator/props-administrator/props-administrator.component';
import { PropsCreationComponent } from './Aplications/PropsCreation/props-creation/props-creation.component';
import { ToolMakerComponent } from './Aplications/ToolMaker/tool-maker/tool-maker.component';
import { WeeklyBalanceReportComponent } from './Aplications/Reports/weekly-balance-report/weekly-balance-report.component';
import { GameStatisticsReportComponent } from './Aplications/Reports/game-statistics-report/game-statistics-report.component';
import { ActionByPlayerComponent } from './Aplications/Reports/action-by-player/action-by-player.component';
import { ReportsComponent } from './Aplications/Reports/reports/reports.component';
import { PropsTraductionComponent } from './Aplications/PropsTraduction/props-traduction/props-traduction.component';
import { EarlyParlayPayoutComponent } from './Aplications/early-parlay-payout/early-parlay-payout.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    PropsCreatorComponent,
    PropsAdministratorComponent,
    PropsCreationComponent,
    ToolMakerComponent,
    WeeklyBalanceReportComponent,
    GameStatisticsReportComponent,
    ActionByPlayerComponent,
    ReportsComponent,
    PropsTraductionComponent,
    EarlyParlayPayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MenuModule,
    DropdownModule,
    ButtonModule,
    TableModule,
    //Component,
    //MessageService,
    AccordionModule,
    ToastrModule,
    ToastModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
