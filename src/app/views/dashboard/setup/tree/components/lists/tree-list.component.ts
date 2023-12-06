import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { abcForms } from '../../../../../../../environments/generals';
import { DirNode, FlatDirNode } from '../../models/Node';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { HierarchyService } from 'app/providers/services/setup/hierarchy.service';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule } from '@angular/material/tree';

@Component({
    selector: 'app-tree-list',
    imports: [CommonModule, RouterOutlet, MatButtonModule, MatIconModule, MatTreeModule],
    standalone: true,
    templateUrl: './tree-list.component.html',
    styles       : [
        `
            directory-structure .mat-tree {
                font-family: "IBM Plex Mono", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
            }
    
            directory-structure .mat-tree-node {
                min-height: 32px;
            }
    
            directory-structure .mat-tree .mat-icon-button {
                width: 32px;
                height: 32px;
                min-height: 32px;
                line-height: 32px;
                margin-right: 8px;
            }
        `,
      ],
})
export class TreeListComponent implements OnInit {
    configForm: UntypedFormGroup;
    // treeValues: any;
    tree: any;
    hierarchyValues: any;
    generalValues: any;

    abcForms: any;
    @Input() nodes: FlatDirNode[] = [];
    // @Output() eventNew = new EventEmitter<boolean>();
    // @Output() eventEdit = new EventEmitter<number>();
    // @Output() eventDelete = new EventEmitter<number>();
    // @Output() eventAssign = new EventEmitter<number>();

    constructor(
        private _matDialog: MatDialog,
        private _formBuilder: UntypedFormBuilder,
        private hierarchyService: HierarchyService,
    ) {
        console.log("LIST TREE")
        console.log(this.nodes)
        // this.nodes = [];
        this.createTreeView();
        // this.getHierarchy()
    }

    createTreeView(): void {
        this.tree = this.createTree(this.nodes);

        // Add 'last:true' to the last child
        this.tree.treeControl.dataNodes.forEach((node: FlatDirNode, index, nodes) =>
        {
            nodes[index].last = false;
            if ( nodes[index + 1] )
            {
                nodes[index].last = nodes[index + 1].level === node.level - 1;
            }
            else
            {
                nodes[index].last = true;
            }
        });
        // Expand the first item
        this.tree.treeControl.expand(this.tree.treeControl.dataNodes[0]);
    }

    createTree(data): { dataSource: any; treeControl: any }
    {
        // id: number,
        // codigo: string,
        // nombre: string;
        // nivel: number,
        // estado: number,
        // Parent_gerarquia_id?: number,


        // Create tree control and data source
        const treeControl = new FlatTreeControl<FlatDirNode>(node => node.level, node => node.expandable);
        const dataSource = new MatTreeFlatDataSource(
            treeControl,
            new MatTreeFlattener(
                (node: DirNode, level: number) => ({
                    expandable: !!node.children && node.children.length > 0,
                    nombre      : node.nombre,
                    level       : level,
                    id          : node.id,
                    codigo      : node.codigo,
                    nivel       : node.nivel,
                    estado      : node.estado,
                    Parent_gerarquia_id   : node.Parent_gerarquia_id,
                }),
                node => node.level, node => node.expandable, node => node.children,
            ),
        );

        // Set the data
        dataSource.data = data;
        return {
            treeControl,
            dataSource,
        };
    }

    // openComposeDialog(): void {
    //     // Open the dialog
    //     const dialogRef = this._matDialog.open(InputComponent);
    //
    //     dialogRef.afterClosed().subscribe((result) => {
    //         console.log('Compose dialog was closed!', result, 'hello');
    //         this.eventAssign.emit(result);
    //     });
    // }

    ngOnInit() {
        this.abcForms = abcForms;
    }

    // public goNew(): void {
    //     this.eventNew.emit(true);
    // }

    // public goEdit(id: number): void {
    //     this.eventEdit.emit(id);
    // }

    // public goDelete(id: number): void {
    //     this.eventDelete.emit(id);
    // }

    // public goAssign(id: number): void {
    //     this.eventAssign.emit(id);
    // }

    
}
