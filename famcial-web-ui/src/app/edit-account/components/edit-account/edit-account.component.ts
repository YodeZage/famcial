import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'famcial-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.scss']
})
export class EditAccountComponent implements OnInit {

  spendData: any;
  spendForm: FormGroup;
  subCategoryList: [];

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe((result: any) => {
      this.spendData = result.result;
    });
    this.createHeroForm();
    // this.spendService.getMember().subscribe(response => {
    //   console.log(response);
    // });
  }

  submitSpendForm(): void {
    if (this.spendForm.valid) {
      // this.spendService.recordSpend(this.spendForm.value).subscribe(response => {
      // });
      this.resetForm();
    }
  }

  categoryChanged(selectedValue: any): void {
    const subCategoryControl = this.spendForm.get('subCategory');

    if (selectedValue !== '') {
      const selected = this.spendData.category.find(result => {
        return result.name === selectedValue;
      });

      this.subCategoryList = selected.subCategoryList;
      subCategoryControl.enable();
    } else {
      subCategoryControl.setValue('');
      subCategoryControl.disable();
    }
  }

  private createHeroForm(): void {
    this.spendForm = this.formBuilder.group({
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
          Validators.required
        ]
      }],
      dueDate: [{
        value: '',
        validators: [
          Validators.required
        ]
      },
      {
        updateOn: 'blur',
        validators: [
          Validators.required
        ]
      }],
      creditLimit: ['', {
        updateOn: 'blur',
        validators: [
          Validators.required
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
    this.spendForm.reset();
    this.spendForm.setValue({
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
    this.spendForm.updateValueAndValidity();
  }

}
