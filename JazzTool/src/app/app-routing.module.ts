import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Common/login/login.component';
import { MenuComponent } from './Common/menu/menu.component';
import { PropsAdministratorComponent } from './Aplications/PropsAdministrator/props-administrator/props-administrator.component';
import { PropsCreatorComponent } from './Aplications/PropsCreator/props-creator/props-creator.component';
import { PropsCreationComponent } from './Aplications/PropsCreation/props-creation/props-creation.component';
import { ToolMakerComponent } from './Aplications/ToolMaker/tool-maker/tool-maker.component';



const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent }
  ,{path: 'menu', component: MenuComponent, 
  children: [
    { path: 'props-administrator', component: PropsAdministratorComponent },
    { path: 'props-creator', component: PropsCreatorComponent },
    { path: 'props-creation', component: PropsCreationComponent },
    { path: 'tool-maker', component: ToolMakerComponent }
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
