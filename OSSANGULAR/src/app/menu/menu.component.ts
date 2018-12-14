import { Component, OnInit, Output, Input } from '@angular/core';
import * as abc from '../menu/menu.js';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() flagView:boolean=false;

  constructor() { }

  ngOnInit() {
    
  }

}
