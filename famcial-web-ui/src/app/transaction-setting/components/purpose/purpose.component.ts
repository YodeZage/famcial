import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { PurposeService } from '../../services/purpose.service';

@Component({
  selector: 'famcial-purpose',
  templateUrl: './purpose.component.html',
  styleUrls: ['./purpose.component.scss']
})
export class PurposeComponent implements OnInit {

  modalRef: BsModalRef;
  newPurposeForm: FormGroup;
  existingPurposeForm: FormGroup;
  purposeList: any[];

  private selectedPurpose: any;

  constructor(private modalService: BsModalService, private formBuilder: FormBuilder,
              private route: ActivatedRoute, private purposeService: PurposeService) { }

  ngOnInit(): void {
    this.route.data.subscribe((result: any) => {
      this.purposeList = result.data;
    });
    this.createNewPurposeForm();
  }

  openModal(template: TemplateRef<any>, selectedPurpose: any) {
    this.selectedPurpose = selectedPurpose;
    this.createExistingPurposeForm(selectedPurpose.name);
    this.modalRef = this.modalService.show(template);
  }

  closeModal() {
    this.modalRef.hide();
  }

  submitNewPurposeForm(): void {
    if (this.newPurposeForm.valid) {
      const purposeBody = {
        name: this.newPurposeForm.value.newPurpose
      };
      this.purposeService.createPurpose(purposeBody).subscribe((result) => {
        this.fetchNewDataList();
      });
    } else {
      console.log('Form NOT submitted');
      console.log(this.newPurposeForm);
    }
    this.newPurposeForm.reset();
  }

  submitExistingPurposeForm(): void {
    if (this.existingPurposeForm.valid && this.selectedPurpose.name !== this.existingPurposeForm.get('existingPurpose').value) {
      const purposeBody = {
        id: this.selectedPurpose.id,
        name: this.existingPurposeForm.value.existingPurpose
      };
      this.purposeService.updatePurpose(purposeBody).subscribe((result) => {
        this.fetchNewDataList();
      });
    } else {
      console.log('Form NOT submitted');
      console.log(this.existingPurposeForm);
    }
    this.existingPurposeForm.reset();
    this.selectedPurpose = undefined;
    this.closeModal();
  }

  deletePurpose(purpose: any): void {
    this.purposeService.deletePurpose(purpose.id).subscribe((result) => {
      this.fetchNewDataList();
    });
  }

  cleanExistingInput(): void {
    this.existingPurposeForm.get('existingPurpose').setValue('');
  }

  private fetchNewDataList(): void {
    this.purposeService.getAllPurposes().subscribe((result) => {
      this.purposeList = result;
    });
  }

  private createNewPurposeForm(): void {
    this.newPurposeForm = this.formBuilder.group({
      newPurpose: ['', {
        updateOn: 'change',
        validators: [
          Validators.required
        ]
      }]
    });
  }

  private createExistingPurposeForm(name: string): void {
    this.existingPurposeForm = this.formBuilder.group({
      existingPurpose: [name, {
        updateOn: 'change',
        validators: [
          Validators.required
        ]
      }]
    });
  }

}
