import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'famcial-spend',
  templateUrl: './spend.component.html',
  styleUrls: ['./spend.component.scss']
})
export class SpendComponent implements OnInit {

  readonly categoryList: any[] = [
    {
      name: 'Food',
      subCategoryList: [
        'Break fast', 'Lunch', 'Dinner'
      ]
    },
    {
      name: 'Life',
      subCategoryList: [
        'Rental', 'Phone', 'Utilities'
      ]
    }
  ];

  heroForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createHeroForm();
  }

  submitHeroForm(): void {
    if (this.heroForm.valid) {
      console.log(this.heroForm);
    } else {
      console.log('Form is NOT submitted!');
    }
  }

  private createHeroForm(): void {
    this.heroForm = this.formBuilder.group({
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
      subCategory: ['', {
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

}
