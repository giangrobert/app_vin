import { CommonModule } from '@angular/common';
import { User } from '../models/User';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-users-container',
    standalone: true,
    imports: [CommonModule, RouterOutlet],
    template: ``,
})
export class UsersContainerComponent implements OnInit {
    public error: string = '';
    public users: User[] = [];
    public user = new User();

    constructor(
        private userService: UserService,
        private _matDialog: MatDialog
    ) {}

    ngOnInit() {
        this.getUsers();
    }

    getUsers(): void {
        this.userService.getUsers().subscribe(
            (response) => {
                this.users = response.data;
            },
            (error) => {
                this.error = error;
            }
        );
    }

    public eventNew($event: any) {
        if ($event) {
            const userForm = this._matDialog.open(UserNewComponent);
            userForm.componentInstance.title = 'Nuevo Usuario' || null;
            userForm.afterClosed().subscribe((result: any) => {
                if (result) {
                    this.saveUser(result);
                }
            });
        }
    }

    saveUser(data: Object): void {
        this.userService.add$(data).subscribe((response) => {
            this.users = (response && response.data) || [];
        });
    }

    eventEdit(data: User) {
        if (data) {
            const userForm = this._matDialog.open(UserEditComponent);
            userForm.componentInstance.title = 'Editar Usuario' || null;
            userForm.afterClosed().subscribe((result: any) => {
                if (result) {
                    this.updateUser(result);
                }
            });
        }
    }

    openModalEdit(data: User) {
        if (data) {
            const userForm = this._matDialog.open(UserEditComponent);
            userForm.componentInstance.title = 'Editar Usuario' || null;
            userForm.componentInstance.user = data;
            userForm.afterClosed().subscribe((result: any) => {
                if (result) {
                    this.updateUser(result);
                }
            });
        }
    }

    editUser(idUser: number, data: Object) {
        this.userService.update$(idUser, data).subscribe((response) => {
            this.users = (response && response.data) || [];
        });
    }

    evntAssign($event: number) {
        // if ($event) {
        //     const userForm = this._matDialog.open(UserAssignComponent);
        //     userForm.componentInstance.title = 'Asignar Rol' || null;
        //     userForm.afterClosed().subscribe((result: any) => {
        //         if (result) {
        //             this.assignUser(result);
        //         }
        //     });
        // }
    }

    public eventDelete(idRol: number) {
        this.userService.delete$(idRol).subscribe((response) => {
            this.users = (response && response.data) || [];
        });
    }
}
