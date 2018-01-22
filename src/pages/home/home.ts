import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {TypePage} from '../type/type';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	typePage = TypePage;

  	constructor(public navCtrl: NavController) {

	}

}
