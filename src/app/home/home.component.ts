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
  // lockerServiceData!: any;
  allData : any;

  lockerServiceModelObj : LockerServiceModel = new LockerServiceModel();
  lockerServiceData !: any;
  // showAdd !: boolean;
  // showUpdate !: boolean;
  // formValue !: FormGroup;
  // private formBuilder: FormBuilder, private api : UserService,
  constructor( private token: TokenStorageService,private api : UserService) { }


  //core.mjs 
  ngOnInit() {
    // this.login();



    // this.formValue = this.formBuilder.group({

    //   id:[''],
    //   title:[''],
    //   description:[''],
    //   content:['']
    // })
     this.getAllDetails();
  
    
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
}

  // login(){
  //   this.allData =this.usersevice.getEmployee();
  //   console.log("this.allData ",this.allData)
  // }

  logout() {
    this.token.signOut();
    window.location.reload();
  }

  getAllDetails(){
    
    this.api.getEmployee()
    .subscribe( (res: any) => {
    //   console.log("all blog data",res)
    //  var obj = res
    //  this.allData = obj.get("content");
    //  console.log("all data",this.allData);
    //  console.log("singele dtaa",this.allData.get());
    //itterate the posts

   // res.map()
      console.log(res.content[0]);
      console.log(res.content[0].id);
      console.log(res.content[0].comments);
      console.log(res.content[0].comments[0]);
      
      this.lockerServiceData = res;
      // this.showAdd = true;
    })
  }
  
}
