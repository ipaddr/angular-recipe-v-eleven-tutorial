import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('attr.data-bs-toggle') @Input() isDropdown: string = '';

  constructor() { }

  @HostListener('click') openOrCloseDropdown(){
    this.isDropdown = 'dropdown'; 
  }

}
