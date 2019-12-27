import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Common/login/login.component';
import { MenuComponent } from './Common/menu/menu.component';
import { PropsAdministratorComponent } from './Aplications/PropsAdministrator/props-administrator/props-administrator.component';
import { PropsCreatorComponent } from './Aplications/PropsCreator/props-creator/props-creator.component';
import { PropsCreationComponent } from './Aplications/PropsCreation/props-creation/props-creation.component';
import { ToolMakerComponent } from './Aplications/ToolMaker/tool-maker/tool-maker.component';
import { ReportsComponent } from './Aplications/Reports/reports/reports.component';
import { WeeklyBalanceReportComponent } from './Aplications/Reports/weekly-balance-report/weekly-balance-report.component';
import { GameStatisticsReportComponent } from './Aplications/Reports/game-statistics-report/game-statistics-report.component';
import { ActionByPlayerComponent } from './Aplications/Reports/action-by-player/action-by-player.component';
import { PropsTraductionComponent } from './Aplications/PropsTraduction/props-traduction/props-traduction.component';




const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent }
  ,{path: 'menu', component: MenuComponent, 
  children: [
    { path: 'props-administrator', component: PropsAdministratorComponent },
    { path: 'props-creator', component: PropsCreatorComponent },
    { path: 'props-creation', component: PropsCreationComponent },
    { path: 'props-traduction', component: PropsTraductionComponent },
    { path: 'tool-maker', component: ToolMakerComponent },
    { path: 'reports', component: ReportsComponent,
    children: [
      { path: 'weekly-balance-report', component: WeeklyBalanceReportComponent },
      { path: 'game-statistics-report', component: GameStatisticsReportComponent },
      { path: 'action-by-player', component: ActionByPlayerComponent },
      ]
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
