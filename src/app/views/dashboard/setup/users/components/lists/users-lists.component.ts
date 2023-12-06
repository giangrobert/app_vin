import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';
import { User } from '../../models/User';
import { MatDialog } from '@angular/material/dialog';
import { abcForms } from '../../../../../../../environments/generals';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
    selector: 'app-users-list',
    imports: [
        CommonModule,
        RouterOutlet,
        MatButtonModule,
        MatIconModule,
        MatSlideToggleModule,
    ],
    standalone: true,
    template: `
        <div class="flex flex-col flex-auto min-w-0">
            <!-- Main -->

            <div class="flex justify-end mt-6 sm:mt-6 pr-6 sm:ml-4">
                <button
                    mat-flat-button
                    [color]="'primary'"
                    class="ml-4"
                    (click)="openComposeDialog()"
                >
                    <mat-icon [svgIcon]="'heroicons_outline:plus'"></mat-icon>
                    <span class="ml-2">Nuevo Usuario</span>
                </button>
            </div>

            <div class="flex-auto px-6 sm:px-10">
                <div class="p-6 overflow-scroll px-0">
                    <table class="mt-4 w-full min-w-max table-auto text-left">
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
                                        class="antialiased font-sans text-sm text-gray-800 flex items-center justify-between gap-2 font-normal leading-none opacity-70"
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
                                        EMAIL
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
                                        FECHA CREACIÓN
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
                        <tbody class="mb-10 bgw">
                            <tr>
                                <td class="p-4 border-b border-blue-gray-50">
                                    <p
                                        class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal"
                                    >
                                        1
                                    </p>
                                </td>
                                <td class="p-4 border-b border-blue-gray-50">
                                    <p
                                        class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal"
                                    >
                                        RODOLFO PACCO
                                    </p>
                                </td>
                                <td class="p-4 border-b border-blue-gray-50">
                                    <p
                                        class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal"
                                    >
                                        example?gmail.com
                                    </p>
                                </td>
                                <td class="p-4 border-b border-blue-gray-50">
                                    <p
                                        class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal"
                                    >
                                        2020-12-29 08:13:25
                                    </p>
                                </td>
                                <td class="p-4 border-b border-blue-gray-50">
                                    <div class="w-max">
                                        <div
                                            class="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-green-500/20 text-green-600 py-1 px-2 text-xs rounded-md"
                                            style="opacity: 1"
                                        >
                                            <span class="">ACTIVO</span>
                                        </div>
                                    </div>
                                </td>
                                <td class="p-4 border-b border-blue-gray-50">
                                    <div class="flex space-x-3">
                                        <mat-slide-toggle
                                            [formControlName]="'active'"
                                            [color]="'primary'"
                                        >
                                        </mat-slide-toggle>

                                        <mat-icon>swap_horiz</mat-icon>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class="p-4 border-b border-blue-gray-50">
                                    <p
                                        class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal"
                                    >
                                        1
                                    </p>
                                </td>
                                <td class="p-4 border-b border-blue-gray-50">
                                    <p
                                        class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal"
                                    >
                                        RODOLFO PACCO
                                    </p>
                                </td>
                                <td class="p-4 border-b border-blue-gray-50">
                                    <p
                                        class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal"
                                    >
                                        example?gmail.com
                                    </p>
                                </td>
                                <td class="p-4 border-b border-blue-gray-50">
                                    <p
                                        class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal"
                                    >
                                        2020-12-29 08:13:25
                                    </p>
                                </td>
                                <td class="p-4 border-b border-blue-gray-50">
                                    <div class="w-max">
                                        <div
                                            class="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-red-500/20 text-red-700 py-1 px-2 text-xs rounded-md"
                                            style="opacity: 1"
                                        >
                                            <span class="">INACTIVO</span>
                                        </div>
                                    </div>
                                </td>
                                <td class="p-4 border-b border-blue-gray-50">
                                    <div class="flex space-x-3">
                                        <mat-slide-toggle
                                            [formControlName]="'active'"
                                            [color]="'primary'"
                                        >
                                        </mat-slide-toggle>

                                        <mat-icon>swap_horiz</mat-icon>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `,
})
export class UsersListComponent implements OnInit {
    abcForms: any;
    @Input() users: User[] = [];
    @Output() eventNew = new EventEmitter<boolean>();
    @Output() eventEdit = new EventEmitter<number>();
    @Output() eventDelete = new EventEmitter<number>();
    @Output() eventAssign = new EventEmitter<number>();

    constructor(private _matDialog: MatDialog) {}

    ngOnInit() {
        this.abcForms = abcForms;
    }

    public goNew(): void {
        this.eventNew.emit(true);
    }

    public goEdit(id: number): void {
        this.eventEdit.emit(id);
    }

    public goDelete(id: number): void {
        const confirmation = window.confirm(
            '¿Estás seguro de que deseas eliminar este elemento permanentemente?'
        );

        if (confirmation) {
            this.eventDelete.emit(id);
        } else {
            return;
        }
    }

    public goAssign(id: number): void {
        this.eventAssign.emit(id);
    }
}
