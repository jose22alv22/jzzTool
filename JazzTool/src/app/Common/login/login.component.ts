import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


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
  ) { }

  ngOnInit() {


  }

  public loginSignUpAdmin() {
    try {
      if(this._username == 'jazztool' && this._password == '123'){
        console.log("Entro");
        this.router.navigate(['/menu']);
      }
      else{
        console.log("no Entro");
      }
      // this._login.loginSignUpAdmin(this._configData.webApiUrl, this.model.username.toUpperCase(), this.model.password)
      //   .subscribe(resp => {
      //     if (resp != null) {
      //       localStorage.setItem("user", JSON.stringify(resp));
      //       this.router.navigate(['/main/home']);
      //     }
      //     else
      //       this.toast.error('Incorrect username or password', 'Notification!');
      //     this.model.isBusy = false;
      //   }, error => {
      //     this.model.isBusy = false;
      //     this.toast.error(error, 'Notification!');
      //   }, () => {
      //     // this.router.navigate(['/main/home']);
      //   });
    } catch (error) {
      console.log("esta aca");
    }
  }

}
