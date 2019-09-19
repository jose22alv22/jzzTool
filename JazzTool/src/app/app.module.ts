import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Common/login/login.component';
import { MenuComponent } from './Common/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuModule } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';
import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { AccordionModule } from 'primeng/accordion';     //accordion and accordion tab
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PropsCreatorComponent } from './Aplications/PropsCreator/props-creator/props-creator.component';
import { PropsAdministratorComponent } from './Aplications/PropsAdministrator/props-administrator/props-administrator.component';
import { PropsCreationComponent } from './Aplications/PropsCreation/props-creation/props-creation.component';
import { ToolMakerComponent } from './Aplications/ToolMaker/tool-maker/tool-maker.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    PropsCreatorComponent,
    PropsAdministratorComponent,
    PropsCreationComponent,
    ToolMakerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MenuModule,
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
