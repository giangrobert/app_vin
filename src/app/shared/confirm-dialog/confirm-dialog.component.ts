import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-confirm-dialog2',
    standalone: true,
  templateUrl: 'confirm-dialog.component.html',
  styleUrls: ['confirm-dialog.component.scss'],
})
export class ConfirmDialogComponent implements OnInit {
  // @ts-ignore
  @Input() title: string;
  // @ts-ignore
  @Input() message: string;
  // @ts-ignore
  @Input() btnOkText: string;
  // @ts-ignore
  @Input() btnCancelText: string;

  constructor() { }

  ngOnInit() {
  }

  public cancel() {
    // this.activeModal.close(false);
    // this.activeModal.dismiss(false);
  }

  public ok() {
    // this.activeModal.close({daa: 'ola Soy guido'});
  }

  public dismiss() {
    // this.activeModal.close(true);
    // this.activeModal.dismiss(false);
  }

}
