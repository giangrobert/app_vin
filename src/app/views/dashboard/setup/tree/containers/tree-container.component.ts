import { RoleService } from '../../../../../providers/services';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HierarchyService } from 'app/providers/services/setup/hierarchy.service';
import { FlatDirNode } from '../models/Node';
import { TreeListComponent } from '../components/lists/tree-list.component';

@Component({
    selector: 'app-tree-container',
    standalone: true,
    imports: [CommonModule, RouterOutlet, FormsModule,ReactiveFormsModule, TreeListComponent],
    template: `
        @if (nodes.length > 0) {
            <app-tree-list
            
                [nodes]="nodes"
            ></app-tree-list>
        }
    `,
})
export class TreeContainerComponent implements OnInit {
    public error: string = '';
    public nodes: FlatDirNode[] = [];

    // public rol = new Rol();

    constructor(
        private rolService: RoleService,
        private hierarchyService: HierarchyService,
    private _matDialog: MatDialog,
    ) //private confirmDialogService: ConfirmDialogService
    {}

    ngOnInit() {
        this.getTree();
    }

    async getTree(): Promise<void> {
        try {
            const resp = await this.hierarchyService.getAll$().toPromise();
            this.nodes = resp.data;
            console.log(this.nodes)
            // this.createTreeView();
        } catch (error) {
            console.error(error);
        }
    }

    // public eventNew($event: boolean): void {
        
    // }

    // saveRol(data: Object): void {
        
    // }

    // eventEdit(idRol: number): void {
        
    // }

    // openMOdalEdit(data: any) {
        
    // }

    // editRol(idRol: number, data: Object) {
    // }

    // eventAssign($event: number) {
    // }

    // public eventDelete(idRol: number) {
    // }
}
