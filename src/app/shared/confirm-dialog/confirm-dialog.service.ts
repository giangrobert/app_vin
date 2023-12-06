import { Injectable } from '@angular/core';
import {message} from "../confirm-dialog/messages";
import {UntypedFormBuilder, UntypedFormGroup} from "@angular/forms";
import {FuseConfirmationService} from "../../../@fuse/services/confirmation";


interface Options {
  title?: string;
  message?: string;
  btnOkText?: string;
  btnCancelText?: string;
  dialogSize?: 'sm' | 'lg';
}

@Injectable({
  providedIn: 'root'
})
export class ConfirmDialogService {
  configForm: UntypedFormGroup;

  constructor(
      private _formBuilder: UntypedFormBuilder,
      private _fuseConfirmationService: FuseConfirmationService,
      ) { }

  // confirmDelete() {
  //     this.configConfirm('Eliminar Eber','¿Estás seguro de que deseas eliminar este nodo permanentemente?','exclamation-triangle','warn',true);
  //     const modalRef = this._fuseConfirmationService.open(this.configForm.value);
  //     // Confirm delete node
  //     modalRef.afterClosed().subscribe((result) =>
  //     {
  //         if ("confirmed" == result) {
  //             alert("no confirmado");
  //         }
  //         // this.deleteNode(node);
  //     });
  // }
    confirmDelete(additionalData?: any): Promise<void> {
        const title = additionalData?.title || message.confirmDelete.title;
        const messages = additionalData?.message || message.confirmDelete.message;
        const icon = additionalData?.icon ||  message.confirmUpdate.icon;
        const color = additionalData?.color ||  message.confirmDelete.color;

        this.configConfirm(title, messages, icon, color,  message.confirmDelete.dismissible);
        const modalRef = this._fuseConfirmationService.open(this.configForm.value);

        return new Promise((resolve, reject) => {
            modalRef.afterClosed().subscribe((result) => {
                if (result === 'confirmed') {
                    resolve();
                } else {
                    reject();
                }
            });
        });
    }

    // confirmDelete(): Promise<void> {
    //     this.configConfirm('Eliminar Eber', '¿Estás seguro de que deseas eliminar este nodo permanentemente?', 'exclamation-triangle', 'warn', true);
    //     const modalRef = this._fuseConfirmationService.open(this.configForm.value);
    //
    //     return new Promise((resolve, reject) => {
    //         modalRef.afterClosed().subscribe((result) => {
    //             if (result === 'confirmed') {
    //                 resolve();
    //             } else {
    //                 reject();
    //             }
    //         });
    //     });
    // }
  configConfirm(title,message,icon,color, dismissible){
    this.configForm = this._formBuilder.group({
      title      : title,
      message    : message,
      icon       : this._formBuilder.group({
        show : true,
        name : `heroicons_outline:${icon}`,
        color: color,
      }),
      actions    : this._formBuilder.group({
        confirm: this._formBuilder.group({
          show : true,
          label: 'Eliminar',
          color: color,
        }),
        cancel : this._formBuilder.group({
          show : true,
          label: 'Cancelar',
        }),
      }),
      dismissible: dismissible,
    });
  }
    configConfirm2(){
        this.configForm = this._formBuilder.group({
            title      : 'Eliminar nodo',
            message    : `
                ¿Estás seguro de que deseas eliminar este nodo permanentemente?
            `,
            icon       : this._formBuilder.group({
                show : true,
                name : 'heroicons_outline:exclamation-triangle',
                color: 'warn',
            }),
            actions    : this._formBuilder.group({
                confirm: this._formBuilder.group({
                    show : true,
                    label: 'Eliminar',
                    color: 'warn',
                }),
                cancel : this._formBuilder.group({
                    show : true,
                    label: 'Cancelar',
                }),
            }),
            dismissible: true,
        });
    }
}
