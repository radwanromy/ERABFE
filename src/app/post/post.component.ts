import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TokenStorageService } from '../auth/token-storage.service';
import { UserService } from '../services/user.services';
import { PostModel } from './post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {


  info: any;
  // lockerServiceData!: any;
  allData : any;
  contentdata: any = [];

  
  PostModelObj : PostModel = new PostModel();
  PostData !: any;
  contents :any;
 
  showAdd !: boolean;
  showUpdate !: boolean;
  formValue !: FormGroup;
  // private formBuilder: FormBuilder, private api : UserService,
  constructor(private formBuilder: FormBuilder,
    private api :UserService, private token: TokenStorageService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({

      id:[''],
      title:[''],
      description:[''],
      content:['']
    })
    this.getAllDetails();

    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
  }

  clickAddPost(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  } 


  postDetails(){
    
    // this.PostModelObj.id = this.formValue.value.id;


  
    console.log("form title ",this.formValue.value.title)
    console.log("form title ",this.formValue.value.description)
    console.log("form title ",this.formValue.value.content)
    
    // this.PostModelObj.id=this.formValue.value.id;
    this.PostModelObj.title = this.formValue.value.title;
    this.PostModelObj.description = this.formValue.value.description;
    this.PostModelObj.content = this.formValue.value.content;
    var postData = {
      title :  this.formValue.value.title,
      description : this.formValue.value.description,
      content : this.formValue.value.content
    }

    console.log(" post data ",postData)
    

    this.api.postblog(postData).subscribe(res => {
      console.log(res);
      alert("Blog Post Added Successfully.")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllDetails();


    },
    err=>{
      alert("Something went wrong with insert");
    })


// this.setupService.addNewUser(this.parameters).subscribe(data => {
//   this.map = data;
//   console.log(data);
//   const options = { closeButton: true, tapToDismiss: false, timeOut: 5000, opacity: 1 };
//   this.toastrService.clear();
//   this.toastrService.success('Registration Successfully Completed!', 'Welcome!', options);
// }, (error: any) => {
//   console.log(error);
//   const options = { closeButton: true, tapToDismiss: false, timeOut: 10000, opacity: 1 };
//   this.toastrService.clear();
//   this.toastrService.error('Email and Username Must Be Unique!', 'Registration Failed!', options);
// }
// );







  }







  getAllDetails(){
    this.showAdd = true;
    
    this.api.getPosts()
    .subscribe( (res: any) => {
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
  console.log(i," starts")
  oneContent={
            id : this.contents[i].id,
            title:this.contents[i].title,
            description: this.contents[i].description,
            content: this.contents[i].content
  }
  this.contentdata.push(oneContent);
}
console.log(" MY arr contents : ",this.contentdata);

      this.PostData = res;

      this.showAdd = true;
    })
  }


  deleteLockerServiceData(res : any){
    this.api.deleteEmployee(res.id)
    .subscribe(res => {
      
      alert("Deleted");
      this.getAllDetails();
    })
  }


  getOnForm(row: any){
    this.PostModelObj.id = row.id;
    this.formValue.controls['title'].patchValue(row.title);
    this.formValue.controls['content'].patchValue(row.content);
    this.formValue.controls['description'].patchValue(row.description);
   
    this.showAdd= false;
    this.showUpdate= true;
  }

  onKeyPress(event : any){
    console.log("Event Succefully");
    this.PostModelObj.id=this.formValue.value.id;
    console.log(this.PostModelObj.id);
    
    this.api.getByIdRelease(this.PostModelObj.id)
    .subscribe(res=>{
      console.log(res);
      this.getOnForm(res);
    },
    err=>{
      alert("Searching ID Is Not Found. Kindly Check The ID Number Again!");
    })
  }





  updatepostDetails(){
    this.PostModelObj.title = this.formValue.value.title;
    this.PostModelObj.description = this.formValue.value.description;
    this.PostModelObj.content = this.formValue.value.content;
      // console.log(this.lockerServiceModelObj);
       this.api.updatePost(this.PostModelObj,this.PostModelObj.id)
       .subscribe(res=>{
        alert("Update Successfully")
        let ref=document.getElementById("cancel")
        ref?.click();
        this.formValue.reset();
        this.getAllDetails();
        this.showUpdate=false;
      },
        err=>{
          alert("Something wrong in update");
        })

        
    }
}















