import { Component, OnInit } from '@angular/core';
import { TypeEpp, agent, InformationParlayDetails } from 'src/app/models/earlyParlayPayout';
import { ConfigService } from 'src/app/Services/config.service';
import { ConfigSite } from 'src/app/models/common';
import { EarlyParlayPayoutService } from 'src/app/Services/EarlyParlayPayout/early-parlay-payout.service';

@Component({
  selector: 'app-early-parlay-payout',
  templateUrl: './early-parlay-payout.component.html',
  styleUrls: ['./early-parlay-payout.component.css']
})
export class EarlyParlayPayoutComponent implements OnInit {
  TypeEPP: TypeEpp[];
  EarlyParlayPayoutType: TypeEpp;
  Type: string;
  EPPType: string;
  idAgent: number; 
  _parleyPlayers: InformationParlayDetails[];
  _parleyPlayerSelected: InformationParlayDetails[];
  cols: any[];
  constructor(private configService: ConfigService,
    private EPPService: EarlyParlayPayoutService) { }
  _configData: ConfigSite;

  ngOnInit() {
    this.TypeEPP = [
      { TypeEPPName: 'Agent', TypeEPPValue: 0 },
      { TypeEPPName: 'Player', TypeEPPValue: 1 },
    ];
    this.cols = [
      { field: "player", header: "player" },
      { field: "idPlayer", header: "idPlayer" },
      { field: "Idwager", header: "Idwager" },
      { field: "User", header: "User" },
      { field: "GameDateTime", header: "GameDateTime" },
      { field: "IdSport", header: "IdSport" },
      { field: "DescriptionDetail", header: "DescriptionDetail" },
      { field: "", header: "" }
    ]
    this.configService.getConfig().subscribe(
      resp => {
        this._configData = resp;
      },
      error => {
        console.log('Error get config');
      }
    );
  }

  getTypeEarlyParlayPayout() {
    console.log("entro")
    if (this.EarlyParlayPayoutType.TypeEPPValue == 0) {
      this.Type = "Agent";
      console.log("Agent");
      this.ngOnInit();
    }
    else {
      this.Type = "Player";
      console.log("Player");
      this.ngOnInit();
    }
  }

  getEPPType() {
    if (this.EarlyParlayPayoutType.TypeEPPValue == 0 && this.EPPType != undefined) {
      try {
        this.EPPService.getIdAgent(this._configData.webApiUrl, this.EPPType).subscribe(
          resp => {
            this.idAgent = resp;
            console.log(this.idAgent,"idAgent");
            if(resp){
              console.log("OJO")
              if(this.idAgent > 0){
              this.EPPService.getGetPlayersParlays(this._configData.webApiUrl, this.idAgent).subscribe(
                resp => {
                  this._parleyPlayers = resp;
                  console.log(resp,"idAgent");
                },
                error => {
                  console.log("Error GET PARLAYS");
                }
              );
            }
          }
          },
          error => {
            console.log("Error get idAgent");
          }
        );
      } catch{
        console.log('Error in idAgent funtion');
      }
    }
  }



}
