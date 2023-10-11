import { Component, Input } from '@angular/core';

@Component({
  selector: 'menu-icon',
  template: `
  <svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" [style.fill]="color" style="transform: ;msFilter:;"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path></svg>
  `
})
export class MenuIconComponent {
  @Input() color:string = "black"
  @Input() size:number = 24;
}
