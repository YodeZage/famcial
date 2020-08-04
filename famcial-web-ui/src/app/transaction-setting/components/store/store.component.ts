import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { StoreService } from '../../services/store.service';

@Component({
  selector: 'famcial-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  modalRef: BsModalRef;
  newStoreForm: FormGroup;
  existingStoreForm: FormGroup;
  storeList: any[];

  private selectedStore: any;

  constructor(private modalService: BsModalService, private formBuilder: FormBuilder,
              private route: ActivatedRoute, private storeService: StoreService) { }

  ngOnInit(): void {
    this.route.data.subscribe((result: any) => {
      this.storeList = result.data;
    });
    this.createNewStoreForm();
  }

  openModal(template: TemplateRef<any>, selectedStore: any) {
    this.selectedStore = selectedStore;
    this.createExistingStoreForm(selectedStore.name);
    this.modalRef = this.modalService.show(template);
  }

  closeModal() {
    this.modalRef.hide();
  }

  submitNewStoreForm(): void {
    if (this.newStoreForm.valid) {
      const storeBody = {
        name: this.newStoreForm.value.newStore
      };
      this.storeService.createStore(storeBody).subscribe((result) => {
        this.fetchNewDataList();
      });
    } else {
      console.log('Form NOT submitted');
      console.log(this.newStoreForm);
    }
    this.newStoreForm.reset();
  }

  submitExistingStoreForm(): void {
    if (this.existingStoreForm.valid && this.selectedStore.name !== this.existingStoreForm.get('existingStore').value) {
      const storeBody = {
        id: this.selectedStore.id,
        name: this.existingStoreForm.value.existingStore
      };
      this.storeService.updateStore(storeBody).subscribe((result) => {
        this.fetchNewDataList();
      });
    } else {
      console.log('Form NOT submitted');
      console.log(this.existingStoreForm);
    }
    this.existingStoreForm.reset();
    this.selectedStore = undefined;
    this.closeModal();
  }

  deleteStore(store: any): void {
    this.storeService.deleteStore(store.id).subscribe((result) => {
      this.fetchNewDataList();
    });
  }

  cleanExistingInput(): void {
    this.existingStoreForm.get('existingStore').setValue('');
  }

  private fetchNewDataList(): void {
    this.storeService.getAllStores().subscribe((result) => {
      this.storeList = result;
    });
  }

  private createNewStoreForm(): void {
    this.newStoreForm = this.formBuilder.group({
      newStore: ['', {
        updateOn: 'change',
        validators: [
          Validators.required
        ]
      }]
    });
  }

  private createExistingStoreForm(name: string): void {
    this.existingStoreForm = this.formBuilder.group({
      existingStore: [name, {
        updateOn: 'change',
        validators: [
          Validators.required
        ]
      }]
    });
  }

}
