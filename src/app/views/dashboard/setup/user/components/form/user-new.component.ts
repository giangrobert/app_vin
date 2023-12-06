import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {abcForms} from "../../../../../../../environments/generals";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";

@Component({
  selector: 'app-user-new',
    standalone: true,
    imports: [FormsModule,
        MatIconModule,
        MatButtonModule,
        ReactiveFormsModule,
        MatSlideToggleModule, MatFormFieldModule, MatInputModule],
  template: `
<!--    <div class="modal-header">-->
<!--      <h6 class="modal-title">{{title}}</h6>-->
<!--      <button type="button" class="close" aria-label="Close" (click)="cancelForm()">-->
<!--        <span aria-hidden="true">&times;</span>-->
<!--      </button>-->
<!--    </div>-->
<!--    <div class="modal-body">-->
<!--      <form [formGroup]="userForm">-->
<!--        <div class="form-group row required">-->
<!--          <div class="input-group input-group-sm col-sm-3">-->
<!--            <label class="col-form-label">Usuario</label>-->
<!--          </div>-->
<!--          <div class="col-sm-9 input-group input-group-sm input-group-rounded">-->
<!--            <input type="text" class="form-control form-control-sm" formControlName="name"-->
<!--                   id="name"-->
<!--                   placeholder="Usuario" required>-->
<!--          </div>-->
<!--&lt;!&ndash;          <app-form-validate-errors [group]="userForm"&ndash;&gt;-->
<!--&lt;!&ndash;                                    [controlName]="'name'"></app-form-validate-errors>&ndash;&gt;-->
<!--        </div>-->
<!--        <div class="form-group row required">-->
<!--          <div class="input-group input-group-sm col-sm-3">-->
<!--            <label class="col-form-label">Email</label>-->
<!--          </div>-->
<!--          <div class="col-sm-9 input-group input-group-sm input-group-rounded">-->
<!--            <input type="email" class="form-control form-control-sm" formControlName="email"-->
<!--                   id="email"-->
<!--                   placeholder="Email">-->
<!--          </div>-->
<!--&lt;!&ndash;          <app-form-validate-errors [group]="userForm"&ndash;&gt;-->
<!--&lt;!&ndash;                                    [controlName]="'email'"></app-form-validate-errors>&ndash;&gt;-->
<!--        </div>-->
<!--        <div class="form-group row required">-->
<!--          <div class="input-group input-group-sm col-sm-3">-->
<!--            <label class="col-form-label">Contraseña</label>-->
<!--          </div>-->
<!--          <div class="col-sm-9 input-group input-group-sm input-group-rounded">-->
<!--            <input type="text" class="form-control form-control-sm" formControlName="password"-->
<!--                   id="password"-->
<!--                   placeholder="Contraseña">-->
<!--          </div>-->
<!--&lt;!&ndash;          <app-form-validate-errors [group]="userForm"&ndash;&gt;-->
<!--&lt;!&ndash;                                    [controlName]="'password'"></app-form-validate-errors>&ndash;&gt;-->
<!--        </div>-->
<!--      </form>-->
<!--    </div>-->
<!--    <div class="modal-footer">-->
<!--      <button type="button" class="btn {{ abcForms.btnCancel.class }} btn-sm" (click)="cancelForm()">-->
<!--        <span class="{{ abcForms.btnCancel.icon }} lamb-icon"></span> {{ abcForms.btnCancel.label }}-->
<!--      </button>-->
<!--      <button type="button" class="btn {{ abcForms.btnSave.class }} btn-sm" (click)="saveForm()"-->
<!--              [disabled]="userForm.invalid">-->
<!--        <span class="{{ abcForms.btnSave.icon }} lamb-icon"></span> {{ abcForms.btnSave.label }}-->
<!--      </button>-->
<!--    </div>-->
  `
})
export class UserNewComponent implements OnInit {
  //public userForm: FormGroup;
  @Input() title: string = '';

  abcForms: any;
  userForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required,]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]),
    // c_password: ['', [Validators.required, Validators.minLength(8)]],
  });

  constructor(
      // public activeModal: NgbActiveModal
  ) {
  }

  ngOnInit() {
    this.abcForms = abcForms;
  }

  public saveForm(): void {
    if (this.userForm.valid) {
      // this.activeModal.close(this.userForm.value);
    }
  }

  public cancelForm(): void {
    // this.activeModal.close('');
  }

}
