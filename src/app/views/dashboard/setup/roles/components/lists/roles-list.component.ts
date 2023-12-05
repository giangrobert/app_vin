import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { abcForms } from '../../../../../../../environments/generals';
import { Rol } from '../../models/Rol';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { InputComponent } from '../input/roles-input.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'app-roles-list',
    imports: [CommonModule, RouterOutlet, MatButtonModule, MatIconModule],
    standalone: true,
    template: `
        <div
            style="position: initial; display: initial; flex: initial; width: initial;"
        >
            <div class="flex flex-col flex-auto min-w-0">
                <div class="flex justify-end mt-1 sm:mt-1 pr-6 sm:ml-4">
                    <button
                        mat-flat-button
                        [color]="'primary'"
                        class="ml-4"
                        (click)="goNew()"
                    >
                        <mat-icon
                            [svgIcon]="'heroicons_outline:plus'"
                        ></mat-icon>
                        <span class="ml-2">Nuevo Rol</span>
                    </button>
                </div>

                <div class="flex-auto px-6 sm:px-10">
                    <div class="p-6 overflow-scroll px-0">
                        <table
                            class="mt-4 w-full min-w-max table-auto text-left"
                        >
                            <thead>
                                <tr>
                                    <th
                                        class="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                                    >
                                        <p
                                            class="antialiased font-sans text-sm text-gray-800 flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                                        >
                                            #
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke-width="2"
                                                stroke="currentColor"
                                                aria-hidden="true"
                                                class="h-4 w-4"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                                                ></path>
                                            </svg>
                                        </p>
                                    </th>
                                    <th
                                        class="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                                    >
                                        <p
                                            class="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                                        >
                                            NOMBRE
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke-width="2"
                                                stroke="currentColor"
                                                aria-hidden="true"
                                                class="h-4 w-4"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                                                ></path>
                                            </svg>
                                        </p>
                                    </th>
                                    <th
                                        class="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                                    >
                                        <p
                                            class="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                                        >
                                            ESTADO
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke-width="2"
                                                stroke="currentColor"
                                                aria-hidden="true"
                                                class="h-4 w-4"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                                                ></path>
                                            </svg>
                                        </p>
                                    </th>
                                    <th
                                        class="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                                    >
                                        <p
                                            class="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                                        >
                                            ACCIONES
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke-width="2"
                                                stroke="currentColor"
                                                aria-hidden="true"
                                                class="h-4 w-4"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                                                ></path>
                                            </svg>
                                        </p>
                                    </th>
                                </tr>
                            </thead>
                            <tbody
                                class="mb-10 bgw"
                                *ngFor="let r of rols; let i = index"
                            >
                                <tr>
                                    <td
                                        class="p-4 border-b border-blue-gray-50"
                                    >
                                        <p
                                            class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal"
                                        >
                                            {{ i }}
                                        </p>
                                    </td>
                                    <td
                                        class="p-4 border-b border-blue-gray-50"
                                    >
                                        <p
                                            class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal"
                                        >
                                            {{ r.nombre }}
                                        </p>
                                    </td>
                                    <td
                                        class="p-4 border-b border-blue-gray-50"
                                    >
                                        <div class="w-max">
                                            <div
                                                class="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-green-500/20 text-green-600 py-1 px-2 text-xs rounded-md"
                                                style="opacity: 1"
                                            >
                                                <span class="">ACTIVO</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td
                                        class="p-4 border-b border-blue-gray-50"
                                    >
                                        <div class="flex space-x-3">
                                            <mat-icon
                                                class="text-amber-400 hover:text-amber-500 cursor-pointer"
                                                (click)="goEdit(r.id)"
                                                >edit</mat-icon
                                            >

                                            <mat-icon
                                                class="text-rose-500 hover:text-rose-600 cursor-pointer"
                                                (click)="goDelete(r.id)"
                                                >delete_sweep</mat-icon
                                            >
                                            <!--                                        <mat-icon-->
                                            <!--                                            class="text-sky-400 hover:text-sky-600 cursor-pointer"-->
                                            <!--                                            (click)="openComposeDialog()"-->
                                            <!--                                            >swap_horiz-->
                                            <!--                                        </mat-icon>-->
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    `,
})
export class RolesListComponent implements OnInit {
    abcForms: any;
    @Input() rols: Rol[] = [];
    @Output() eventNew = new EventEmitter<boolean>();
    @Output() eventEdit = new EventEmitter<number>();
    @Output() eventDelete = new EventEmitter<number>();
    @Output() eventAssign = new EventEmitter<number>();

    constructor(private _matDialog: MatDialog) {}

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

    public goNew(): void {
        this.eventNew.emit(true);
    }

    public goEdit(id: number): void {
        const confirmation = window.confirm(
            '¿Estás seguro de que deseas eliminar este elemento permanentemente?'
        );

        if (confirmation) {
            // Si el usuario confirma, emite el evento de eliminación
            this.eventDelete.emit(id);
        } else {
            // Si el usuario cancela, no se hace nada
        }
    }

    public goDelete(id: number): void {
        this.eventDelete.emit(id);
    }

    public goAssign(id: number): void {
        this.eventAssign.emit(id);
    }
}
