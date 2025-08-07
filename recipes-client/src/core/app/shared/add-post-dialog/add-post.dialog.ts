import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { Post } from '../../../models/entities/recipes-api/social/post.entity';
import { ModelFactory } from '../../../factories/model.factory';

@Component
({
  selector: 'rcps-add-post-dialog',
  templateUrl: 'add-post.dialog.html',
  imports:
  [
    CommonModule,
    ReactiveFormsModule,

    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class AddPostDialog
{
  private readonly _dialogRef: MatDialogRef<AddPostDialog> = inject(MatDialogRef<AddPostDialog>);
  private readonly _formBuilder: FormBuilder = inject(FormBuilder);

  public formGroup = this._formBuilder.group
  ({
    name: ['', Validators.required],
    description: [''],
    video: [null as File | null]
  });

  public onFileSelected(event: Event): void
  {
    const fileInput = event.target as HTMLInputElement;

    if (fileInput.files && fileInput.files.length > 0)
    {
      this.formGroup.patchValue({ video: fileInput.files[0] });
    }
  }

  public onSubmit(): void
  {
    if (this.formGroup.valid)
    {
      const post: Post = ModelFactory.createPost
      (
        this.formGroup.value.name!,
        this.formGroup.value.description!,
        ModelFactory.createMediaUnit(this.formGroup.value.video!)
      );

      this._dialogRef.close(post);
    }
  }

  public onClose(): void
  { this._dialogRef.close(); }
}