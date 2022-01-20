import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { SignUpInfo } from '../auth/signup-info';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {};
  signupInfo!: SignUpInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit() { }

  onSubmit() {
    console.log(this.form);

    this.signupInfo = new SignUpInfo(
      this.form.name,
      this.form.username,
      this.form.email,
      this.form.password);

    this.authService.signUp(this.signupInfo).subscribe(
      (data: any) => {
      //  console.log(data);
        this.isSignedUp = true;
        this.isSignUpFailed = false;
        console.log("The Sign Up Datas Have Been Entered Successfully.")
      }
      ,
      (error: any) => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
        // this.isSignedUp = true;
        console.log("The Targeted values you want to use for registration has some errors.")
      }
    );
  }
}










































































































