import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserListComponent } from '../components/lists/user-list.component';
import { UsersService } from '../../../../../providers/services/setup/users.service';
import { SignupService } from '../../../../../providers/services/oauth';
import { MatDialog } from '@angular/material/dialog';
import { UserNewComponent } from '../components/form/user-new.component';
import { UserRolesComponent } from '../components/form/user-roles.component';

@Component({
    selector: 'app-users-container',
    standalone: true,
    imports: [UserListComponent],
    template: `
        <app-user-list
            class="w-full"
            [users]="users"
            (eventNew)="eventNew($event)"
            (eventAssign)="eventAssign($event)"
            (eventChangeState)="eventChangeState($event)"
        ></app-user-list>
    `,
})
export class UsersContainerComponent implements OnInit {
    public error: string = '';
    public users: User[] = [];
    public user = new User();

    constructor(
        private _userService: UsersService,
        private _signupService: SignupService,
        private _matDialog: MatDialog // private modalService: NgbModal,
    ) // private confirmDialogService: ConfirmDialogService
    {}

    ngOnInit() {
        this.getUsers();
    }

    getUsers(): void {
        this._userService.getAll$().subscribe(
            (response) => {
                this.users = response.data;
            },
            (error) => {
                this.error = error;
            }
        );
    }

    public eventNew($event: boolean): void {
        if ($event) {
            const userForm = this._matDialog.open(UserNewComponent);
            userForm.componentInstance.title = 'Nuevo Rol' || null;
            userForm.afterClosed().subscribe((result: any) => {
                if (result) {
                    this.saveUser(result);
                }
            });
        }

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
        this._signupService.add$(data).subscribe((response) => {
            this.users = (response && response.data) || [];
            this.getUsers();
        });
    }

    eventAssign($event: number) {
        if($event){
            const userForm = this._matDialog.open(UserRolesComponent);
            userForm.componentInstance.title = 'Nuevo Rol' || null;
            userForm.componentInstance.idUser = $event;
            userForm.afterClosed().subscribe((result: any) => {
                if (result) {
                    // this.saveUser(result);
                }
            });
        }
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
        this._userService.updateStateUserId$($event).subscribe((response) => {
            this.users = response.data;
        });
    }
}
