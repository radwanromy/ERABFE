import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TokenStorageService } from '../auth/token-storage.service';
import { UserService } from '../services/user.services';
import { LockerServiceModel } from './home.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  info: any;
//   lockerServiceData!: any;

//   lockerServiceModelObj : LockerServiceModel = new LockerServiceModel();
//  showAdd!: boolean;
//   formValue !: FormGroup;
  //private formBuilder: FormBuilder, private api : UserService,
  constructor( private token: TokenStorageService) { }

  ngOnInit() {


    // this.formValue = this.formBuilder.group({

    //   id:[''],
    //   title:[''],
    //   description:[''],
    //   content:['']
    // })
    // this.getAllDetails();
  
    
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
  }

  logout() {
    this.token.signOut();
    window.location.reload();
  }

  // getAllDetails(){
    
  //   this.api.getEmployee()
  //   .subscribe( (res: any) => {
  //     console.log(res)
  //    var obj = JSON.parse(res)
     
  //     console.log(res.content[0]);
  //     console.log(res.content[0].id);
  //     console.log(res.content[0].comments);
  //     console.log(res.content[0].comments[0].id);
      
  //     this.lockerServiceData = res;
  //     this.showAdd = true;
  //   })
  // }
  
}
