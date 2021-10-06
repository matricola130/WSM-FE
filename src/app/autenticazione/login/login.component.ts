import { Component, OnInit } from '@angular/core';
import {LoginModel} from "../../model/login-model";
import {AuthService} from "../../service/auth.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public model: LoginModel;
  showLoginWarningMessage: boolean = false;
  returnUrl: string = '';

  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.model = new LoginModel();
  }

  ngOnInit(): void {
    if (this.auth.validateUserToken()) {
      alert('Stai per effettuare il logout');
    }
    this.auth.logout();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || ['menu'];
  }

  login() {
    this.showLoginWarningMessage = false;
    console.log("-----LOGIN");
    if(this.auth.validateUserDetails(this.model)) {
      console.log("--------CREDENZIALI ACCETTATE--------");
      this.auth.setToken();
      this.router.navigate([this.returnUrl]);
    } else {
      console.log("--------CREDENZIALI NON VALIDE--------");
      this.showLoginWarningMessage = true;
    }
  }

}
