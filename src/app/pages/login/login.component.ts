import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../../services/login.service";
import {StorageService} from "../../services/storage.service";
import {Router} from "@angular/router";
import {ILogin, ILoginWrapper} from "../../interfaces/i-login";
import {throwError} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements AfterViewInit, OnInit {

  lastURL: string | null = null;
  defaultURL: string = "/dashboard";
  requiredForm: FormGroup;

  messageError: string = "";

  user: ILogin = {
    userID: "",
    password: ""
  };

  constructor(private loginService: LoginService,
              private storageService: StorageService,
              private router: Router,
              private formBuilder: FormBuilder) {
    this.requiredForm = new FormGroup({
      userID: new FormControl(this.user.userID, [
        Validators.required,
        Validators.minLength(5)
      ]),
      password: new FormControl(this.user.password, [
        Validators.required,
        Validators.minLength(5)
      ])
    })
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error.message);
    return throwError(() => new Error('Something Bad Happen'))
  }

  onLogin() {
    this.user = this.requiredForm.value
    console.log(this.user)
    this.loginService.login(this.user)
      .subscribe(
        (response: ILoginWrapper) => {
          this.storageService.save('USERID', response.data.userID);
          if (this.lastURL) {
            this.router.navigate([this.lastURL])
          } else {
            this.router.navigate([this.defaultURL])

          }

        }, error => {
          console.log(error.message);
          alert("LOGIN GAGAL, USERNAME ATAU PASSWORD SALAH")
          this.messageError = error.message;
        }
      )
  }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
  }

}
