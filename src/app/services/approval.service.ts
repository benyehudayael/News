import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApprovalService {

  private approvalStageMessage = new BehaviorSubject('Basic Approval is required!');
  currentApprovalStageMessage = this.approvalStageMessage.asObservable();

  constructor() { }
  
  updateApprovalMessage(message: string) {
    this.approvalStageMessage.next(message)
    }
}
