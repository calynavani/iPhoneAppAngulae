import { Component } from '@angular/core';

import { products } from '../products';

/*The @Component() decorator indicates that the following class is a component. @Component() also provides metadata about the component, including its selector, templates, and styles.*/
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  share() {
    window.alert('The product has been shared!');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/