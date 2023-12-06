import { CommonModule } from '@angular/common';
import { User } from '../models/User';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { UsersService } from 'app/providers/services/setup/users.service';
import { UsersNewComponent } from '../components/form/users-new.component';
import { UsersEditComponent } from '../components/form/users-edit.component';

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
        private userService: UsersService,
        private _matDialog: MatDialog
    ) {}

    ngOnInit() {
        this.getUsers();
    }

    getUsers(): void {
        this.userService.getAll$().subscribe(
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
            const userForm = this._matDialog.open(UsersNewComponent);
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
        const listById = this.userService
            .getById$(data.id)
            .subscribe(async (response) => {
                this.user = (response && response.data) || {};
                await this.openModalEdit(this.user);
                listById.unsubscribe();
            });
    }

    openModalEdit(data: User) {
        if (data) {
            const userForm = this._matDialog.open(UsersEditComponent);
            userForm.componentInstance.title = 'Editar Usuario' || null;
            userForm.componentInstance.user = data;
            userForm.afterClosed().subscribe((result: any) => {
                if (result) {
                    this.editUser(data.id, result);
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
