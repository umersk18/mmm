import { Product } from './product.model';
import { Observable, from } from 'rxjs';
import { Injectable } from '@angular/core';
import { Order } from './order.model';

@Injectable()
export class StaticDataSource{
    private products:Product[]=[
        new Product(1,"product1","category1","product1 category1",123),
        new Product(2,"product2","category1","product2 category1",123),
        new Product(3,"product3","category1","product3 category1",123),
        new Product(4,"product4","category1","product4 category1",123),
        new Product(5,"product5","category1","product5 category1",123),
        new Product(6,"product6","category2","product6 category2",123),
        new Product(7,"product7","category2","product7 category2",123),
        new Product(8,"product8","category2","product8 category2",123),
        new Product(9,"product9","category2","product9 category2",123),
        new Product(10,"product10","category2","product10 category2",123),
        new Product(11,"product11","category3","product11 category3",123),
        new Product(12,"product12","category3","product12 category3",123),
        new Product(13,"product13","category3","product13 category3",123),
        new Product(14,"product14","category3","product14 category3",123),
        new Product(15,"product15","category3","product15 category3",123)
       
    ];

    getProducts():Observable<Product[]>{
    return from([this.products]);
    }    

    saveOrder(order:Order):Observable<Order>{
      console.log(JSON.stringify(order));
        return from([order]);
    }
}