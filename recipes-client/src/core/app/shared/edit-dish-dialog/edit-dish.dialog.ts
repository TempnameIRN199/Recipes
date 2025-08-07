import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { Dish } from '../../../models/entities/recipes-api/business/dish.entity';
import { ModelFactory } from '../../../factories/model.factory';

@Component
({
  selector: 'rcps-edit-dish-dialog',
  templateUrl: 'edit-dish.dialog.html',
  imports:
  [
    CommonModule,
    ReactiveFormsModule,

    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class EditDishDialog
{
  private readonly _dialogRef: MatDialogRef<EditDishDialog> = inject(MatDialogRef<EditDishDialog>);
  private readonly _formBuilder: FormBuilder = inject(FormBuilder);
  private readonly _data = inject<Dish>(MAT_DIALOG_DATA);

  public readonly formGroup = this._formBuilder.group
  ({
    name: [this._data?.name ?? '', Validators.required],
    description: [this._data?.description ?? ''],
    time: [this._data?.cookInfo?.time ?? ''],
    yield: [this._data?.cookInfo?.yield ?? 1],
    servingSize: [this._data?.cookInfo?.servingSize ?? 1],
    note: [this._data?.cookInfo?.note ?? '']
  });

  public onSubmit(): void
  {
    if (this.formGroup.valid)
    {
      const updatedDish: Dish = ModelFactory.createDish
      (
        this._data.id,
        this.formGroup.value.name!,
        this.formGroup.value.description!,
        ModelFactory.createCookInfo
        (
          this.formGroup.value.time!,
          this.formGroup.value.yield!,
          this.formGroup.value.servingSize!,
          this.formGroup.value.note!
        ),
        this._data.macronutrients,
        this._data.micronutrients,
        this._data.steps,
        this._data.images
      );
      
      this._dialogRef.close(updatedDish);
    }
  }

  public onClose(): void
  {
    this._dialogRef.close();
  }
}