import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/General/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public _username: string;
  public _password: string;
  public model: any = {};

  constructor(
    private toast: ToastrService,
    public router: Router,
    private _login: LoginService
  ) { }

  ngOnInit() {


  }

  public loginSignUpAdmin() {
    try {
      if(this._username != "" || this._username != null && this._password != "" || this._password != null){
        this._login.getUser('http://localhost:22814/api/', this._username.toUpperCase(), this._password.toUpperCase())
        .subscribe(resp => {
          console.log(resp);
          if (resp != null) {
            this.router.navigate(['/menu']);
            localStorage.setItem("user", JSON.stringify(resp));
          }
          else
            this.toast.error('Incorrect username or password', 'Notification!');
          this.model.isBusy = false;
        }, error => {
          this.model.isBusy = false;
          this.toast.error(error, 'Notification!');
        }, () => {
          // this.router.navigate(['/main/home']);
        });
      }
      else{
        console.log("no Entro");
      }
  
    } catch (error) {
      console.log(error);
      console.log("esta aca");
    }
  }

}
