import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AccountService } from '../../services/account.service';

@Component({
  selector: 'famcial-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss']
})
export class NewAccountComponent implements OnInit {

  newAccountForm: FormGroup;
  selectedAccountType: string;

  constructor(private formBuilder: FormBuilder, private accountService: AccountService,
              private router: Router) { }

  ngOnInit(): void {
    this.createNewAccountForm();
  }

  submitNewAccountForm(): void {
    if (this.newAccountForm.valid) {
      const accountBody = {
        name: this.newAccountForm.value.name,
        type: this.newAccountForm.value.type,
        balance: this.newAccountForm.value.balance,
        note: this.newAccountForm.value.note === '' ? null : this.newAccountForm.value.note
      };

      if (accountBody.type === 'debit' || accountBody.type === 'credit') {
        accountBody['statementDate'] = this.newAccountForm.value.statementDate;
      }

      if (accountBody.type === 'credit') {
        accountBody['dueDate'] = this.newAccountForm.value.dueDate;
        accountBody['creditLimit'] = this.newAccountForm.value.creditLimit;
      }

      this.accountService.createAccount(accountBody).subscribe((result) => {
        this.router.navigate(['/account/view-all']);
      });

    } else {
      console.log('Form NOT submitted');
      console.log(this.newAccountForm);
    }
  }

  accountTypeChanged(selectedAccountType: string): void {
    this.selectedAccountType = selectedAccountType;
  }

  private createNewAccountForm(): void {
    this.newAccountForm = this.formBuilder.group({
      name: ['', {
        updateOn: 'blur',
        validators: [
          Validators.required
        ]
      }],
      type: ['', {
        updateOn: 'blur',
        validators: [
          Validators.required
        ]
      }],
      statementDate: ['', {
        updateOn: 'blur',
        validators: [
          // Validators.required
        ]
      }],
      dueDate: ['', {
        updateOn: 'blur',
        validators: [
          // Validators.required
        ]
      }],
      creditLimit: ['', {
        updateOn: 'blur',
        validators: [
          // Validators.required
        ]
      }],
      balance: ['', {
        updateOn: 'blur',
        validators: [
          Validators.required
        ]
      }],
      note: ['', {
        updateOn: 'blur',
        validators: [
          Validators.maxLength(100)
        ]
      }]
    });
  }

  private resetForm(): void {
    this.newAccountForm.reset();
    this.newAccountForm.setValue({
      account: '',
      amount: '',
      category: '',
      member: '',
      note: '',
      purpose: '',
      shop: '',
      subCategory: '',
      time: '',
    });
    this.newAccountForm.updateValueAndValidity();
  }

}
