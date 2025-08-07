import { Component, inject } from '@angular/core';

import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { CommonModule } from '@angular/common';

@Component
({
  selector: 'rcps-add-dish-dialog',
  templateUrl: 'add-dish.dialog.html',
  imports:
  [
    CommonModule,

    ReactiveFormsModule,

    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class AddDishDialog
{
  private readonly _dialogRef: MatDialogRef<AddDishDialog> = inject(MatDialogRef<AddDishDialog>);
  private readonly _formBuilder: FormBuilder = inject(FormBuilder);

  public readonly formGroup = this._formBuilder.group
  ({
    name: ['', Validators.required],
    description: [''],
    time: [''],
    yield: [1],
    servingSize: [1],
    note: ['']
  });

  public onSubmit(): void
  {
    if (this.formGroup.valid)
    {
      this._dialogRef.close(this.formGroup.value);
    }
  }

  public onClose(): void
  {
    this._dialogRef.close();
  }
}