import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'famcial-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  existingSubModalRef: BsModalRef;
  existingCategoryModalRef: BsModalRef;
  spendCategoryList: any[];
  incomeCategoryList: any[];
  newSubForm: FormGroup;
  existingSubForm: FormGroup;
  newCategoryForm: FormGroup;
  existingCategoryForm: FormGroup;

  private selectedSub: any;
  private selectedCategory: any;

  constructor(private modalService: BsModalService, private formBuilder: FormBuilder,
              private route: ActivatedRoute, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.fetchNewIncomeCategory();
    this.fetchNewSpendCategory();
    this.createNewSubForm();
    this.createNewCategoryForm();
  }

  openExistingSubModal(template: TemplateRef<any>, selectedSub: any) {
    this.selectedSub = selectedSub;
    this.createExistingSubForm(selectedSub.name);
    this.existingSubModalRef = this.modalService.show(template);
  }

  openExistingCategoryModal(template: TemplateRef<any>, selectedCategory: any) {
    this.selectedCategory = selectedCategory;
    this.createExistingCategoryForm(selectedCategory.name);
    this.existingCategoryModalRef = this.modalService.show(template);
  }

  submitNewSubForm(categoryID: any): void {
    if (this.newSubForm.valid) {
      const subBody = {
        categoryId: categoryID,
        name: this.newSubForm.value.newSub
      };
      this.categoryService.createSubCategory(subBody).subscribe((result) => {
        this.fetchNewIncomeCategory();
        this.fetchNewSpendCategory();
      });
    } else {
      console.log('Form NOT submitted');
      console.log(this.newSubForm);
    }
    this.newSubForm.reset();
  }

  submitExistSubForm(): void {
    if (this.existingSubForm.valid && this.selectedSub.name !== this.existingSubForm.get('existingSub').value) {
      const subBody = {
        id: this.selectedSub.id,
        name: this.existingSubForm.value.existingSub
      };
      this.categoryService.updateSubCategory(subBody).subscribe((result) => {
        this.fetchNewIncomeCategory();
        this.fetchNewSpendCategory();
      });
    } else {
      console.log('Form NOT submitted');
      console.log(this.newSubForm);
    }
    this.existingSubForm.reset();
    this.selectedSub = undefined;
    this.existingSubModalRef.hide();
  }

  submitNewCategoryForm(categoryType: string): void {
    if (this.newCategoryForm.valid) {
      const categoryBody = {
        type: categoryType,
        name: this.newCategoryForm.value.newCategory
      };
      this.categoryService.createCategory(categoryBody).subscribe((result) => {
        this.fetchNewIncomeCategory();
        this.fetchNewSpendCategory();
      });
    } else {
      console.log('Form NOT submitted');
      console.log(this.newCategoryForm);
    }
    this.newCategoryForm.reset();
  }

  submitExistCategoryForm(): void {
    if (this.existingCategoryForm.valid && this.selectedCategory.name !== this.existingCategoryForm.get('existingCategory').value) {
      const categoryBody = {
        id: this.selectedCategory.id,
        name: this.existingCategoryForm.value.existingCategory
      };
      this.categoryService.updateCategory(categoryBody).subscribe((result) => {
        this.fetchNewIncomeCategory();
        this.fetchNewSpendCategory();
      });
    } else {
      console.log('Form NOT submitted');
      console.log(this.existingCategoryForm);
    }
    this.existingCategoryForm.reset();
    this.selectedCategory = undefined;
    this.existingCategoryModalRef.hide();
  }

  cleanExistingSubInput(): void {
    this.existingSubForm.get('existingSub').setValue('');
  }

  cleanExistingCategoryInput(): void {
    this.existingCategoryForm.get('existingCategory').setValue('');
  }

  deleteSub(sub: any): void {
    this.categoryService.deleteSubCategory(sub.id).subscribe((result) => {
      this.fetchNewIncomeCategory();
      this.fetchNewSpendCategory();
    });
  }

  deleteCategory(category: any): void {
    this.categoryService.deleteCategory(category.id).subscribe((result) => {
      this.fetchNewIncomeCategory();
      this.fetchNewSpendCategory();
    });
  }

  isEmptyCategory(category: any): boolean {
    return category.subCategory.length <= 0;
  }

  private fetchNewIncomeCategory(): void {
    this.categoryService.getAllIncomeCategory().subscribe((result) => {
      this.incomeCategoryList = result;
    });
  }

  private fetchNewSpendCategory(): void {
    this.categoryService.getAllSpendCategory().subscribe((result) => {
      this.spendCategoryList = result;
    });
  }

  private createNewSubForm(): void {
    this.newSubForm = this.formBuilder.group({
      newSub: ['', {
        updateOn: 'change',
        validators: [
          Validators.required
        ]
      }]
    });
  }

  private createExistingSubForm(name: string): void {
    this.existingSubForm = this.formBuilder.group({
      existingSub: [name, {
        updateOn: 'change',
        validators: [
          Validators.required
        ]
      }]
    });
  }

  private createNewCategoryForm(): void {
    this.newCategoryForm = this.formBuilder.group({
      newCategory: ['', {
        updateOn: 'change',
        validators: [
          Validators.required
        ]
      }]
    });
  }

  private createExistingCategoryForm(name: string): void {
    this.existingCategoryForm = this.formBuilder.group({
      existingCategory: [name, {
        updateOn: 'change',
        validators: [
          Validators.required
        ]
      }]
    });
  }

}
