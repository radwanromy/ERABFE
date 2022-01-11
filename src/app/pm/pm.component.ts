import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.services';

@Component({
  selector: 'app-pm',
  templateUrl: './pm.component.html'
})
export class PmComponent implements OnInit {
  board!: string;
  errorMessage!: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getPMBoard().subscribe(
      data => {
        this.board = data;
      },
      error => {
        this.errorMessage = `${error.status}: ${JSON.parse(error.error).message}`;
      }
    );
  }
}
