import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-b',
  templateUrl: './icon-b.component.html',
  styleUrls: ['./icon-b.component.scss']
})
export class IconBComponent {

  @Input() icono:string='';
  @Input() texto:string='';

}
