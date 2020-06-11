import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  listUsers = [];
  user = {
    id: Date.now(),
    name: '',
    avatar: '',
    created_at: Date.now(),
    roles: '',
    password: '',
  };
  isShow = false;
  closeResult = '';
  constructor(
    private service: AuthService,
    public userService: UserService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.service.validateUser();
    this.userService.getUsersApi().subscribe((response) => {
      this.listUsers = response.json();
    });
  }
  deleteUser(user) {
    this.userService.deleteUser(user.id).subscribe((Response) => {
      let index = this.listUsers.indexOf(user);
      this.listUsers.splice(index, 1);
    });
  }

  createUser() {
    this.userService.createUser(this.user).subscribe((response) => {
      this.listUsers.splice(0, 0, this.user);
      console.log(response.json());
      this.user = {
        id: Date.now(),
        name: '',
        avatar: '',
        created_at: Date.now(),
        roles: '',
        password: '',
      };
    });
  }

  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
