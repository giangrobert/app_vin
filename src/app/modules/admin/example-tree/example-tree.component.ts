import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { FlatTreeControl } from '@angular/cdk/tree';
import { NgIf } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule } from '@angular/material/tree';
import { RouterLink } from '@angular/router';
import { FuseAlertComponent } from '@fuse/components/alert';
import { MatCheckboxModule } from '@angular/material/checkbox';


interface DirNode
{
    name: string;
    selected: boolean,
    expandable?: boolean;
    level?: number;
    last?: boolean;
    children?: DirNode[];
}

interface FlatDirNode
{
    name: string;
    selected: boolean,
    expandable: boolean;
    level: number;
    last: boolean;
}


@Component({
  selector: 'app-example-tree',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatIconModule, MatButtonModule, FuseAlertComponent, MatTreeModule, NgIf, RouterLink, MatCheckboxModule],
  templateUrl: './example-tree.component.html',
  styleUrl: './example-tree.component.scss',
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
  encapsulation: ViewEncapsulation.None,
})
export class ExampleTreeComponent {
    treeValues: any;
    tree: any;
    generalTree: any;

    /**
     * Constructor
     */
    constructor()
    {
        // tree
        this.treeValues = [
            {
                name    : 'area superior',
                selected: true,
                children: [
                    {
                        name    : 'sede superior 1',
                        selected: true,
                        children: [
                            {
                                name: 'Area 1',
                                selected: true,
                            },
                            {
                                name: 'Area 2',
                                selected: true,
                            },
                        ],
                    },
                    {
                        name    : 'sede superior 2',
                        selected: true,
                        children: [
                            {
                                name: 'Area 1',
                                selected: true,
                            },
                            {
                                name: 'Area 2',
                                selected: false,
                                children: [
                                    {
                                        name: 'Sub Area 1',
                                        selected: false,
                                    },
                                    {
                                        name: 'Sub Area 2',
                                        selected: false,
                                    },
                                ]
                            },
                        ],
                    },
                ],
            },
        ];
    }

    ngOnInit(): void
    {
        this.tree = this.createTree(this.treeValues);

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

    /**
     * Has child
     *
     * @param _
     * @param node
     */
    hasChild(_: number, node: DirNode): boolean
    {
        return node.expandable;
    }

    /**
     * Create a new tree
     */
    createTree(data): { dataSource: any; treeControl: any }
    {
        // Create tree control and data source
        const treeControl = new FlatTreeControl<FlatDirNode>(node => node.level, node => node.expandable);
        const dataSource = new MatTreeFlatDataSource(
            treeControl,
            new MatTreeFlattener(
                (node: DirNode, level: number) => ({
                    expandable: !!node.children && node.children.length > 0,
                    name      : node.name,
                    level     : level,
                    selected  : node.selected,
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
}
