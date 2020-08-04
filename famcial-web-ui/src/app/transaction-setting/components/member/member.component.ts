import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { MemberService } from '../../services/member.service';

@Component({
  selector: 'famcial-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {

  modalRef: BsModalRef;
  newMemberForm: FormGroup;
  existingMemberForm: FormGroup;
  memberList: any[];

  private selectedMember: any;

  constructor(private modalService: BsModalService, private formBuilder: FormBuilder,
              private route: ActivatedRoute, private memberService: MemberService) { }

  ngOnInit(): void {
    this.route.data.subscribe((result: any) => {
      this.memberList = result.data;
    });
    this.createNewMemberForm();
  }

  openModal(template: TemplateRef<any>, selectedMember: any) {
    this.selectedMember = selectedMember;
    this.createExistingMemberForm(selectedMember.name);
    this.modalRef = this.modalService.show(template);
  }

  closeModal() {
    this.modalRef.hide();
  }

  submitNewMemberForm(): void {
    if (this.newMemberForm.valid) {
      const memberBody = {
        name: this.newMemberForm.value.newMember
      };
      this.memberService.createMember(memberBody).subscribe((result) => {
        this.fetchNewDataList();
      });
    } else {
      console.log('Form NOT submitted');
      console.log(this.newMemberForm);
    }
    this.newMemberForm.reset();
  }

  submitExistingMemberForm(): void {
    if (this.existingMemberForm.valid && this.selectedMember.name !== this.existingMemberForm.get('existingMember').value) {
      const memberBody = {
        id: this.selectedMember.id,
        name: this.existingMemberForm.value.existingMember
      };
      this.memberService.updateMember(memberBody).subscribe((result) => {
        this.fetchNewDataList();
      });
    } else {
      console.log('Form NOT submitted');
      console.log(this.existingMemberForm);
    }
    this.existingMemberForm.reset();
    this.selectedMember = undefined;
    this.closeModal();
  }

  deleteMember(member: any): void {
    this.memberService.deleteMember(member.id).subscribe((result) => {
      this.fetchNewDataList();
    });
  }

  cleanExistingInput(): void {
    this.existingMemberForm.get('existingMember').setValue('');
  }

  private fetchNewDataList(): void {
    this.memberService.getAllMembers().subscribe((result) => {
      this.memberList = result;
    });
  }

  private createNewMemberForm(): void {
    this.newMemberForm = this.formBuilder.group({
      newMember: ['', {
        updateOn: 'change',
        validators: [
          Validators.required
        ]
      }]
    });
  }

  private createExistingMemberForm(name: string): void {
    this.existingMemberForm = this.formBuilder.group({
      existingMember: [name, {
        updateOn: 'change',
        validators: [
          Validators.required
        ]
      }]
    });
  }

}
