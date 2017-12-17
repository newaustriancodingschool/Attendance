import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

// Services
import { FormsService, ValidatorsService } from '../../_services/_functions/forms';
import { FunctionsService } from '../../_services/_functions/functions.service';
import { AuthService } from '../../_services/auth.service';
import { GlobalDataService } from '../../_services/globaldata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ FormsService, AuthService ]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted: boolean = false;
  loading: boolean= false;
  constructor(
    private AR: ActivatedRoute,
    private router: Router,
    private funs: FunctionsService,
    private fs: FormsService,
    private auth: AuthService,
    public gds: GlobalDataService
  ) { }

  ngOnInit() {
    this.funs.pageTitle( this.AR ); // Change page tab title
    this.auth.clearCash();
    this.loginForm = this.fs.group([
        {"key":"username", "defaultValue":"", "validators":[ValidatorsService.required()] },
        {"key":"password", "defaultValue":"", "validators":[ValidatorsService.required()] },
        {"key":"checkbox", "defaultValue":false }
    ]);
  }

  loggin(data:any, isValid:boolean){
    this.submitted = true;
    if(isValid){
      this.loading = true;
      this.auth.login(data).subscribe(
        (res)=>{
          this.funs.notify({type: 'success', 
            icon: 'fa fa-flag',
            title: 'Login Status',
            message: "Welcome, <i>Admin, you have successfuly loggedin</i>"});
          this.loading = false;
          // this.gds.pushDate("userLogin", res.json());
          this.funs.delay(()=>{
            this.router.navigate(['', 'admin']);
          }, 2500);
        },
        (err)=>{
          window.localStorage.clear();
          window.sessionStorage.clear();
          this.funs.notify({type: 'danger', 
            icon: 'fa fa-exclamation-triangle',
            title: 'Login Status',
            message: "Invalid username and password. Please try again"});
            this.loading = false;
          });
    }
  }

}
