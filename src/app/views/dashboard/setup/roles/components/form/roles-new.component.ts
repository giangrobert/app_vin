import { Component, Input, OnInit } from '@angular/core';
import {
    FormControl,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';

import { abcForms } from '../../../../../../../environments/generals';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
    selector: 'app-roles-new',
    standalone: true,
    imports: [
        FormsModule,
        MatIconModule,
        MatButtonModule,
        ReactiveFormsModule,
        MatSlideToggleModule,
        MatFormFieldModule,
        MatInputModule,
    ],
    template: `
        <div class="flex flex-col max-w-240 md:min-w-160 max-h-screen -m-6">
            <!-- Header -->
            <div
                class="flex flex-0 items-center justify-between h-16 pr-3 sm:pr-5 pl-6 sm:pl-8 bg-primary text-on-primary"
            >
                <div class="text-lg font-medium">{{ title }}</div>
                <button mat-icon-button (click)="cancelForm()" [tabIndex]="-1">
                    <mat-icon
                        class="text-current"
                        [svgIcon]="'heroicons_outline:x-mark'"
                    ></mat-icon>
                </button>
            </div>

            <!-- Compose form -->
            <form
                class="flex flex-col flex-auto p-6 sm:p-8 overflow-y-auto"
                [formGroup]="rolesForm"
            >
                <mat-form-field>
                    <mat-label>ROL</mat-label>
                    <input matInput formControlName="nombre" />
                </mat-form-field>

                <!-- Actions -->
                <div
                    class="flex flex-col sm:flex-row sm:items-center justify-between mt-4 sm:mt-6"
                >
                    <div class="flex space-x-2 items-center mt-4 sm:mt-0">
                        <button
                            class="border border-primary bg-primary text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-primary-800 focus:outline-none focus:shadow-outline"
                            mat-stroked-button
                            (click)="saveForm()"
                        >
                            Guardar
                        </button>
                        <button
                            class="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-700 focus:outline-none focus:shadow-outline"
                            mat-stroked-button
                            (click)="cancelForm()"
                        >
                            Cancelar
                        </button>
                    </div>
                </div>
            </form>
        </div>
    `,
})
export class RolesNewComponent implements OnInit {
    @Input() title: string = '';
    abcForms: any;
    rolesForm = new FormGroup({
        nombre: new FormControl('', [Validators.required]),
    });

    constructor(private _matDialog: MatDialogRef<RolesNewComponent>) {}

    ngOnInit() {
        this.abcForms = abcForms;
    }

    public saveForm(): void {
        if (this.rolesForm.valid) {
            this._matDialog.close(this.rolesForm.value);
        }
    }

    public cancelForm(): void {
        this._matDialog.close('');
    }
}
