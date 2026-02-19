import { NgModule } from "@angular/core";

import { ModalTriggerDirective } from "./modal-trigger/modal-trigger.directive";
import { ModalDirective } from "./modal.directive";

@NgModule({
  imports: [ModalDirective, ModalTriggerDirective],
  exports: [ModalDirective, ModalTriggerDirective],
})
export class ModalModule {}
