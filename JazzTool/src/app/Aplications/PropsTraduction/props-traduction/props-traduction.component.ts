import { Component, OnInit } from '@angular/core';
import { PropsTraduction, Traduction } from 'src/app/models/propsTraduction';
import { PropsTraductionsService } from 'src/app/Services/props-traductions.service';
import { ConfigSite } from 'src/app/models/common';

@Component({
  selector: 'app-props-traduction',
  templateUrl: './props-traduction.component.html',
  styleUrls: ['./props-traduction.component.css']
})
export class PropsTraductionComponent implements OnInit {
  _configData: ConfigSite;
  _model: any = {};
  _LanguageId: number;
  _PropsTraduction: PropsTraduction[];
  _IdLanguage: Traduction;
  constructor(
    private propsTraslate: PropsTraductionsService
  ) { }

  ngOnInit() {
    this._model.cols = [
      { field: 'Language', header: 'Language' },
      { field: 'VisitorTeam', header: 'Visitor Team' },
      { field: 'HomeTeam', header: 'Home Team' },
      { field: 'Description', header: 'Description' },
      { field: 'TanslatedVisitorTeam', header: 'Tanslated Visitor Team' },
      { field: 'TranslatedHomeTeam', header: 'Translated Home Team' },
      { field: 'TranslatedDescription', header: 'Translated Description' }
    ]
    this.getPropsTraduction();

  }

  getPropsTraduction() {
    this._IdLanguage = {
      //IdLanguage: this._LanguageId, 
      IdLanguage: 1, 
    };
    try{
      console.log("test aca");
    this.propsTraslate.getPropsTraductions(this._IdLanguage.IdLanguage)
      .subscribe(
        resp => {
         this._PropsTraduction = resp; 
         console.log(this._PropsTraduction);
        },
        error => {
          this._PropsTraduction = null;
        console.log("test aca");
        }
      )
  }
  catch{
      console.log("testtttt");
  }
  }


}
