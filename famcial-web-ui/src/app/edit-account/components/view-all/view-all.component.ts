import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { AccountService } from '../../services/account.service';

@Component({
  selector: 'famcial-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.scss']
})
export class ViewAllComponent implements OnInit {

  modalRef: BsModalRef;
  existingAccountForm: FormGroup;
  accountList: any[];

  selectedAccount: any;

  constructor(private modalService: BsModalService, private formBuilder: FormBuilder,
              private route: ActivatedRoute, private accountService: AccountService) { }

  ngOnInit(): void {
    this.route.data.subscribe((result: any) => {
      this.accountList = this.convertDate(result.data);
    });
  }

  openModal(template: TemplateRef<any>, selectedAccount: any) {
    this.selectedAccount = selectedAccount;
    switch (selectedAccount.type) {
      case 'cash':
        this.createExistingCashForm(selectedAccount);
        break;
      case 'credit':
        this.createExistingCreditForm(selectedAccount);
        break;
      case 'debit':
        this.createExistingDebitForm(selectedAccount);
        break;
      default:
        this.createExistingCashForm(selectedAccount);
    }
    this.createExistingCreditForm(selectedAccount);
    this.modalRef = this.modalService.show(template);
  }

  submitExistingAccountForm(): void {
    if (this.existingAccountForm.valid) {
      let accountBody = {
        id: this.selectedAccount.id,
        name: this.existingAccountForm.value.name,
        note: this.existingAccountForm.value.note
      };

      switch (this.selectedAccount.type) {
        case 'debit':
          accountBody['statementDate'] = this.existingAccountForm.value.statementDate;
          break;
        case 'credit':
          accountBody['statementDate'] = this.existingAccountForm.value.statementDate;
          accountBody['dueDate'] = this.existingAccountForm.value.dueDate;
          accountBody['creditLimit'] = this.existingAccountForm.value.creditLimit;
          break;
        default:
          break;
      }

      this.accountService.updateAccount(accountBody, accountBody.id).subscribe((result) => {
        this.fetchNewDataList();
      });
    } else {
      console.log('Form NOT submitted');
      console.log(this.existingAccountForm);
    }
    this.existingAccountForm.reset();
    this.selectedAccount = undefined;
    this.modalRef.hide();
  }

  private fetchNewDataList(): void {
    this.accountService.getAllAccounts().subscribe((result) => {
      this.accountList = result;
    });
  }

  private createExistingCreditForm(selectedAccount: any): void {
    this.existingAccountForm = this.formBuilder.group({
      name: [selectedAccount.name, {
        updateOn: 'change',
        validators: [
          Validators.required
        ]
      }],
      statementDate: [selectedAccount.statementDate, {
        updateOn: 'change',
        validators: [
          // Validators.required
        ]
      }],
      dueDate: [selectedAccount.dueDate, {
        updateOn: 'change',
        validators: [
          // Validators.required
        ]
      }],
      creditLimit: [selectedAccount.creditLimit, {
        updateOn: 'change',
        validators: [
          // Validators.required
        ]
      }],
      note: [selectedAccount.note, {
        updateOn: 'change',
        validators: [
          // Validators.required
        ]
      }]
    });
  }

  private createExistingDebitForm(selectedAccount: any): void {
    this.existingAccountForm = this.formBuilder.group({
      name: [selectedAccount.name, {
        updateOn: 'change',
        validators: [
          Validators.required
        ]
      }],
      statementDate: [selectedAccount.statementDate, {
        updateOn: 'change',
        validators: [
          // Validators.required
        ]
      }],
      note: [selectedAccount.note, {
        updateOn: 'change',
        validators: [
          // Validators.required
        ]
      }]
    });
  }

  private createExistingCashForm(selectedAccount: any): void {
    this.existingAccountForm = this.formBuilder.group({
      name: [selectedAccount.name, {
        updateOn: 'change',
        validators: [
          Validators.required
        ]
      }],
      note: [selectedAccount.note, {
        updateOn: 'change',
        validators: [
          // Validators.required
        ]
      }]
    });
  }

  private convertDate(accountList: any[]): any[] {
    accountList.forEach((account) => {
      if (account.statementDate && account.statementDate !== '') {
        account.statementDate = new Date(account.statementDate).toISOString().split('T')[0];
      }
      if (account.dueDate && account.dueDate !== '') {
        account.dueDate = new Date(account.dueDate).toISOString().split('T')[0];
      }
    });

    return accountList;
  }

}
