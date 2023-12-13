import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'navComponent',
  templateUrl: './nav.component.html',
})
export class navComponent {
  collapsed: boolean = true;
  //   @Output('featureSelected') featureSelected = new EventEmitter<string>();
  // onSelect(feature: string) {
  //   this.featureSelected.emit(feature);
  // }
}
