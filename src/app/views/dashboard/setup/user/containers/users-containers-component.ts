import {Component, OnInit} from '@angular/core';
import {User} from '../models/user';
import {UserListComponent} from "../components/lists/user-list.component";
import {UsersService} from "../../../../../providers/services/setup/users.service";
import {SignupService} from "../../../../../providers/services/oauth";

@Component({
  selector: 'app-users-container',
    standalone: true,
    imports: [UserListComponent],
  template: `
    <app-user-list [users]="users"
                   (eventNew)="eventNew($event)"
                   (eventAssign)="eventAssign($event)" (eventChangeState)="eventChangeState($event)"></app-user-list>
  `
})

export class UsersContainerComponent implements OnInit {
  public error: string = '';
  public users: User[] = [];
  public user = new User();

  constructor(
      private userService: UsersService,
      private signupService: SignupService,
      // private modalService: NgbModal,
      // private confirmDialogService: ConfirmDialogService
  ) {
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getAll$().subscribe(response => {
      this.users = response.data;
    }, error => {
      this.error = error;
    });
  }

  public eventNew($event: boolean): void {
    // if ($event) {
    //   const userForm = this.modalService.open(UserNewComponent);
    //   userForm.componentInstance.title = 'Nuevo Usuario' || null;
    //   userForm.result.then((result) => {
    //     if (result) {
    //       this.saveUser(result);
    //     }
    //   });
    // }
  }

  saveUser(data: Object) {
    this.signupService.add$(data).subscribe(response => {
      this.users = response && response.data || [];
      this.getUsers();
    });
  }

  eventAssign($event: number) {
    // let userForm = this.modalService.open(UserRolesComponent, {size: 'lg'});
    // userForm.componentInstance.title = 'Asignar Rol a Usuario' || null;
    // userForm.componentInstance.idUser = $event;
    // userForm.result.then((result) => {
    //   if (result) {
    //     // this.saveUser(result);
    //   }
    // });
  }

  public eventChangeState($event: number): void {
    this.userService.getById$($event).subscribe(response => {
      this.users = response.data;
    });
  }
}
