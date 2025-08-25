import { Component, EventEmitter, Output } from '@angular/core'
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { Testimony } from '../../views/testimonials/testimonials.model'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-add-testimony-card',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-testimony-card.component.html',
  styleUrl: './add-testimony-card.component.css'
})
export class AddTestimonyCardComponent {
  @Output() onAdd = new EventEmitter<Testimony>()

  isAdding = false
  error = ''
  form: FormGroup

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      position: [''],
      photo: [''],
      comment: ['', Validators.required]
    })
  }

  handleAddClick() {
    this.isAdding = true
    this.error = ''
  }

  handleCancel() {
    this.isAdding = false
    this.form.reset()
    this.error = ''
  }

  handleSubmit() {
    if (this.form.invalid) {
      this.error = 'Por favor ingresa tu nombre y tu reseña.'
      return
    }

    const newTestimony: Testimony = {
      name: this.form.value.name.trim(),
      position: this.form.value.position?.trim() || 'Sin profesión',
      photo: this.form.value.photo?.trim() || 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
      comment: this.form.value.comment.trim()
    }

    this.onAdd.emit(newTestimony)
    this.isAdding = false
    this.form.reset()
    this.error = ''
  }
}
