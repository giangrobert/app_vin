import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { abcForms } from '../../../../../../../environments/generals';
import { User } from '../../models/user';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
    selector: 'app-user-list',
    standalone: true,
    imports: [
        FormsModule,
        CommonModule,
        MatIconModule,
        MatButtonModule,
        ReactiveFormsModule,
        MatSlideToggleModule,
        MatFormFieldModule,
        MatInputModule,
        DatePipe,
    ],
    // imports: [CommonModule, RouterOutlet, MatButtonModule, MatIconModule],
    template: `
        <div class="flex justify-end sm:mt-6 sm:ml-4 mb-2">
                <button mat-flat-button [color]="'primary'" class="ml-4" (click)="goNew()">
                    <mat-icon [svgIcon]="'heroicons_outline:plus'"></mat-icon>
                    <span class="ml-2">Nuevo Usuario</span>
                </button>
            </div>
        <!--        <div class="d-flex justify-content-end">-->
        <!--            <button type="button" (click)="goNew()" class="btn-gm-danger">-->
        <!--                <span class="{{ abcForms.btnNew.icon }} lamb-icon"></span> {{ abcForms.btnNew.label }} Usuario-->
        <!--            </button>-->
        <!--        </div>-->
        <!--        <div>-->
        <!--            <div class="row mt-3">-->
        <!--                <c-col xs="12" md="6" sm="6" lg="6" xl="4" *ngFor="let us of users; let i= index" class="mb-2">-->
        <!--                    <c-card class="shadow-gm-card">-->
        <!--                        <c-card-body>-->
        <!--                            <div class="row">-->
        <!--                                <c-col md="3"-->
        <!--                                       class="d-flex align-items-center justify-content-center bg-primary bg-{{us.active}}">-->
        <!--                                    <span>{{i + 1}}</span>-->
        <!--                                    <i class="fa fa-user"></i>-->
        <!--                                </c-col>-->
        <!--                                <c-col md="9" class="mt-3">-->
        <!--                                    <h5 cCardTitle></h5>-->
        <!--                                    <p cCardText class="m-0">-->
        <!--                                        <b>Usuario:</b>-->
        <!--                                        {{us.name}}-->
        <!--                                    </p>-->
        <!--                                    <p cCardText class="m-0">-->
        <!--                                        <b>Email:</b>-->
        <!--                                        {{us.email}}-->
        <!--                                    </p>-->
        <!--                                    <p cCardText class="m-0">-->
        <!--                                        <b>Fecha Registro:</b>-->
        <!--                                        {{us.created_at}}-->
        <!--                                    </p>-->
        <!--                                    <p cCardText class="m-0">-->
        <!--                                        <b>Estado:</b>-->
        <!--                                        {{us.active}}-->
        <!--                                    </p>-->
        <!--                                    <div class="d-flex align-items-center justify-content-end">-->
        <!--                                        <button type="button" class="btn-gm-sm btn {{ abcForms.btnEdit.class }}"-->
        <!--                                                title="{{ abcForms.btnEdit.label }}" (click)="goAssign(us.id!)">-->
        <!--                                            <span class="{{ abcForms.btnNew.icon }} lamb-icon"></span> Rol-->
        <!--                                        </button>-->
        <!--                                        <button type="button" class="btn-gm-sm btn {{ abcForms.btnDelete.class }} "-->
        <!--                                                title="{{ abcForms.btnDelete.label }}" (click)="goChangeState(us.id!)">-->
        <!--                                            <span class="{{ abcForms.btnRepeat.icon }} lamb-icon"></span> Cambiar-->
        <!--                                        </button>-->
        <!--                                    </div>-->
        <!--                                </c-col>-->
        <!--                            </div>-->
        <!--                        </c-card-body>-->
        <!--                    </c-card>-->
        <!--                </c-col>-->
        <!--            </div>-->
        <!--        </div>-->

        <div
            class="bg-white rounded overflow-hidden shadow-lg flex-auto px-6 sm:px-10"
        >
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
                                </p>
                            </th>
                            <th
                                class="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                            >
                                <p
                                    class="antialiased font-sans text-sm text-gray-800 flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                                >
                                    NOMBRE
                                </p>
                            </th>
                            <th
                                class="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                            >
                                <p
                                    class="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                                >
                                    EMAIL
                                </p>
                            </th>
                            <th
                                class="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                            >
                                <p
                                    class="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                                >
                                    FECHA CREACIÓN
                                </p>
                            </th>
                            <th
                                class="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                            >
                                <p
                                    class="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                                >
                                    ESTADO
                                </p>
                            </th>
                            <th
                                class="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                            >
                                <p
                                    class="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                                >
                                    ACCIONES
                                </p>
                            </th>
                        </tr>
                    </thead>
                    <tbody class="mb-10 bgw">
                        @for (user of users;track user.id; let idx = $index) {
                        <tr>
                            <td class="p-4 border-b border-blue-gray-50">
                                <p
                                    class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal"
                                >
                                    {{ idx + 1 }}
                                </p>
                            </td>
                            <td class="p-4 border-b border-blue-gray-50">
                                <p
                                    class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal"
                                >
                                    {{ user.name }}
                                </p>
                            </td>
                            <td class="p-4 border-b border-blue-gray-50">
                                <p
                                    class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal"
                                >
                                    {{user.email}}
                                </p>
                            </td>
                            <td class="p-4 border-b border-blue-gray-50">
                                <p
                                    class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal"
                                >
                                    {{user.created_at | date : 'dd/MM/yyyy'}}
                                </p>
                            </td>
                            <td class="p-4 border-b border-blue-gray-50">
                                <div class="w-max">
                                @if(user.active == 1){
                                        <div
                                            class="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-green-500/20 text-green-600 py-1 px-2 text-xs rounded-md"
                                            style="opacity: 1"
                                        >
                                            <span class="">ACTIVO</span>
                                        </div>
                                    }@else{
                                        <div
                                            class="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-red-500/20 text-red-700 py-1 px-2 text-xs rounded-md"
                                            style="opacity: 1"
                                        >
                                            <span class="">INACTIVO</span>
                                        </div>
                                    }
                                </div>
                            </td>
                            <td class="p-4 border-b border-blue-gray-50">
                                <div class="flex space-x-3">
                                    <mat-slide-toggle
                                        [ngModel]="'activated'"
                                        [color]="'primary'"
                                    >
                                    </mat-slide-toggle>
                                    <mat-icon>swap_horiz</mat-icon>
                                </div>
                            </td>
                        </tr>
                        } @empty {
                        <tr>
                            Sin Contenido
                        </tr>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    `,
})
export class UserListComponent implements OnInit {
    abcForms: any;
    @Input() users: User[] = [];
    @Output() eventNew = new EventEmitter<boolean>();
    @Output() eventEdit = new EventEmitter<number>();
    @Output() eventAssign = new EventEmitter<number>();
    @Output() eventChangeState = new EventEmitter<number>();
    activated: boolean = false;

    constructor() {}

    ngOnInit() {
        this.abcForms = abcForms;
    }

    public goNew() {
        this.eventNew.emit(true);
    }

    public goChangeState(id: number) {
        this.eventChangeState.emit(id);
    }

    public goAssign(id: number) {
        this.eventAssign.emit(id);
    }
}
