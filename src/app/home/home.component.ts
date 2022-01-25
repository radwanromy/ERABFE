import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';
import { TokenStorageService } from '../auth/token-storage.service';
import { UserService } from '../services/user.services';
import { LockerServiceModel } from './home.model';
// import { NgModule } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  // styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  info: any;
  // lockerServiceData!: any;
  allData : any;
  contentdata: any = [];
  x : any;
  lockerServiceModelObj : LockerServiceModel = new LockerServiceModel();
  lockerServiceData !: any;
  contents :any;
  // showAdd !: boolean;
  // showUpdate !: boolean;
  // formValue !: FormGroup;
  // private formBuilder: FormBuilder, private api : UserService,
  constructor( private api : UserService, private token: TokenStorageService) { }
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
    console.log("Token :",this.token);
}
  // login(){
  //   this.allData =this.usersevice.getEmployee();
  //   console.log("this.allData ",this.allData)
  // }
  logout() {
    this.token.signOut();
    window.location.reload();
  }
  // myFunction(){
  //   let x = null;
  //    x = document.getElementById("myDIV");
  //   if( this.x.style.display === "none"){
  //     this.x.style.display = "block";
  //     console.log("using if")
  //   }
  //   else {
  //     console.log("using else")
  //     this.x.style.display = "none";
  //   }
  // }
  getAllDetails(){
    this.api.getPosts()
    .subscribe( (res: any) => {
    //   console.log("all blog data",res)
    //  var obj = res
    //  this.allData = obj.get("content");
    //  console.log("all data",this.allData);
    //  console.log("singele dtaa",this.allData.get());
    //itterate the posts
    console.log("All The Blogs.");
    this.contents = res.content;
    console.log("contents ",this.contents)
    let oneContent:any = {
            id : 0,
            title: "",
            description: "",
            content: ""
    }
    for (let i = 0; i < this.contents.length; i++) {
  // Runs 5 times, with values of step 0 through 4.
  console.log(i," starts")
  oneContent={
            id : this.contents[i].id,
            title:this.contents[i].title,
            description: this.contents[i].description,
            content: this.contents[i].content
  }
  this.contentdata.push(oneContent);
  // console.log(contents[i].id);
  // console.log(contents[i].title);
  // console.log(contents[i].description);
  // console.log(contents[i].content);
  // console.log(contents[i].comments);
  // console.log(i," ends")
}
console.log(" MY arr contents : ",this.contentdata);
   // res.map()
      // console.log(res.content[0]);
      // console.log(res.content[0].id);
      // console.log(res.content[0].comments);
      // console.log(res.content[0].comments[0]);  
      this.lockerServiceData = res;
      // this.showAdd = true;
    })
  }
}
