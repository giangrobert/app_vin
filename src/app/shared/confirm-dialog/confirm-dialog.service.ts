import { Injectable } from '@angular/core';
import {ConfirmDialogComponent} from "../confirm-dialog2/confirm-dialog.component";
import {message} from "../confirm-dialog2/messages";
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
  configForm: UntypedFormGroup,

  constructor(
      private _formBuilder: UntypedFormBuilder,
      private _fuseConfirmationService: FuseConfirmationService,
      private lambModalService: any) { }

  public confirm(options: Options = {}, action?: 'D' | 'U' | 'S' | 'E'): Promise<boolean> {

    const modalRef = this.lambModalService.open(ConfirmDialogComponent, {centered: true});
    // const modalRef =
    // this.lambModalService.open(ConfirmDialogComponent,
    // { size: (options.dialogSize ? options.dialogSize : this.config.dialogSize) });
    modalRef.componentInstance.title
        = options.title ? options.title : this.config.title;

    modalRef.componentInstance.message
        = options.message ? options.message : this.getMessage(action!);
    modalRef.componentInstance.btnOkText
        = options.btnOkText ? options.btnOkText : this.config.btnOkText;
    modalRef.componentInstance.btnCancelText
        = options.btnCancelText ? options.btnCancelText : this.config.btnCancelText;
    return modalRef.result;
  }

  public confirmDelete(options: Options = {}): Promise<boolean> {
    return this.confirm(options, 'D');
  }

  public confirmUpdate(options: Options = {}): Promise<boolean> {
    return this.confirm(options, 'U');
  }

  public confirmSave(options: Options = {}): Promise<boolean> {
    return this.confirm(options, 'S');
  }

  public confirmState(options: Options = {}): Promise<boolean> {
    return this.confirm(options, 'E');
  }
  private getMessage(action: string) {
    switch (action) {
      case 'D': {
        return message.confirmDelete;
      }
      case 'U': {
        return message.confirmUpdate;
      }
      case 'E': {
        return message.confirmState;
      }
      case 'S': {
        return message.confirmSave;
      }
      default: {
        return this.config.message;
      }
    }
  }
  get config(): Options {
    return {
      title: 'Confirmación',
      message: message.confirmDefault,
      btnOkText: 'OK',
      btnCancelText: 'CANCEL',
      dialogSize: 'lg',
    };
  }

  configConfirm(){
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
