import { ElementRef, Injectable, ViewChild } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  array: { name: string; surname: string; email: string; password: string }[] =
    [];

  @ViewChild('nameInput') nameInput!: ElementRef;
  @ViewChild('surnameInput') surnameInput!: ElementRef;
  @ViewChild('emailInput') emailInput!: ElementRef;
  @ViewChild('passwordInput') passwordInput!: ElementRef;

  onSubmit() {
    this.array.push({
      name: this.nameInput.nativeElement.value,
      surname: this.surnameInput.nativeElement.value,
      email: this.emailInput.nativeElement.value,
      password: this.passwordInput.nativeElement.value,
    });
    this.nameInput.nativeElement.value = '';
    this.surnameInput.nativeElement.value = '';
    this.emailInput.nativeElement.value = '';
    this.passwordInput.nativeElement.value = '';
    console.log(this.array);
  }

  onRemove(index: number) {
    this.array.splice(index, 1);
  }
}
