import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from 'src/app/Services/config.service';
import { ConfigSite } from 'src/app/models/common';
import { PropsAdminService } from 'src/app/Services/PropsAdministrator/props-admin.service';
import { Props } from 'src/app/models/administator';

@Component({
  selector: 'app-props-administrator',
  templateUrl: './props-administrator.component.html',
  styleUrls: ['./props-administrator.component.css']
})
export class PropsAdministratorComponent implements OnInit {
_props: Props[] = [];

  constructor(private configService: ConfigService,
    private propsAdministrator: PropsAdminService) { }
  _configData: ConfigSite;
  ngOnInit() {
    this.configService.getConfig().subscribe(
      resp => {
        this._configData = resp;
        if(this._configData){
          console.log(this._configData, "config");
          this.getProps('CFB', 'GAME');
        }
      },
      error => {
        console.log('Error get config');
      }
      
    );
  }

  getProps(Sport: string, PropType:string) {
    console.log(Sport,"0sport");
    console.log(PropType,"0PropType");
    try {
      console.log(Sport,"1sport");
      console.log(PropType,"1PropType");
      this.propsAdministrator.getProps(this._configData.webApiUrl, Sport, PropType).subscribe(
        resp => {
          this._props = resp;
          console.log(this._props,"Props")
        },
        error => {
          console.log("Error get menu Options");
        }
      );
    } catch{
      console.log('Error MenuOptions');
    }
  };


}
