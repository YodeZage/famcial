import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SpendService } from '../../services/spend.service';

@Component({
  selector: 'famcial-spend',
  templateUrl: './spend.component.html',
  styleUrls: ['./spend.component.scss']
})
export class SpendComponent implements OnInit {

  spendData: any;
  spendForm: FormGroup;
  subCategoryList: [];

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute,
              private spendService: SpendService) { }

  ngOnInit(): void {
    this.route.data.subscribe((result: any) => {
      this.spendData = result.result;
    });
    this.createHeroForm();
  }

  submitSpendForm(): void {
    if (this.spendForm.valid) {
      this.spendService.recordSpend(this.spendForm.value).subscribe(response => {
      });
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
      amount: ['', {
        updateOn: 'blur',
        validators: [
          Validators.required
        ]
      }],
      time: ['', {
        updateOn: 'blur',
        validators: [
          Validators.required
        ]
      }],
      category: ['', {
        updateOn: 'blur',
        validators: [
          Validators.required
        ]
      }],
      subCategory: [{
        value: '',
        disabled: true
      },
      {
        updateOn: 'blur',
        validators: [
          Validators.required
        ]
      }],
      account: ['', {
        updateOn: 'blur',
        validators: [
          Validators.required
        ]
      }],
      shop: ['', {
        updateOn: 'blur',
        validators: [
          Validators.required
        ]
      }],
      project: ['', {
        updateOn: 'blur',
        validators: [
          Validators.required
        ]
      }],
      member: ['', {
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
      project: '',
      shop: '',
      subCategory: '',
      time: '',
    });
    this.spendForm.updateValueAndValidity();
  }

}
