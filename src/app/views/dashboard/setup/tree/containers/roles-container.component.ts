import { RoleService } from '../../../../../providers/services';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
    selector: 'app-roles-container',
    standalone: true,
    imports: [CommonModule, RouterOutlet, FormsModule,ReactiveFormsModule],
    template: `

        <h1>Hola mundo</h1>
    `,
})
export class TreeContainerComponent implements OnInit {
    public error: string = '';

    constructor(
        private rolService: RoleService,
    private _matDialog: MatDialog,
    ) //private confirmDialogService: ConfirmDialogService
    {}

    ngOnInit() {
        this.getRols();
    }

    getRols(): void {
       
    }

    public eventNew($event: boolean): void {
        
    }

    saveRol(data: Object): void {
        
    }

    eventEdit(idRol: number): void {
        
    }

    openMOdalEdit(data: any) {
        
    }

    editRol(idRol: number, data: Object) {
    }

    eventAssign($event: number) {
    }

    public eventDelete(idRol: number) {
    }
}
