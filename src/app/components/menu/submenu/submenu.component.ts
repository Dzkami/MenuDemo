import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dz-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.scss'],
})
export class SubmenuComponent implements OnInit {
  @Input() isOPen = true;

  constructor() {}

  ngOnInit(): void {}
}
