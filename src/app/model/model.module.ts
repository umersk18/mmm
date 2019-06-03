import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticDataSource } from './static.datasource';
import { ProductRepository } from './product.repository';
import { Cart } from './cart.model';
import { OrderRepository } from './order.repository';
import { Order } from './order.model';
import { RestDataSource } from './rest.datasource';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,HttpClientModule
  ],
  exports:[],
  providers:[ProductRepository,Cart,Order,OrderRepository,
    {provide:StaticDataSource ,useClass: RestDataSource},RestDataSource,AuthService]
})
export class ModelModule { }
