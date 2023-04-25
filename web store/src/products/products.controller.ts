import {
  Controller,
  Get,
  Put,
  Post,
  Body,
  Delete,
  Param,
  Res,
  Req,
  HttpStatus,
} from '@nestjs/common';

import { CreateProductDTO } from './dto/create-product.dto';
import { Product } from './interfaces/Product';
import { ProductsService } from './products.service';

@Controller('Products')
export class ProductsController {
  constructor(private productService: ProductsService) {}
  @Get(':/create')
  getProducts(): Promise<Product[]> {
    return this.productService.getProducts();
  }

  @Get(':ProductId')
  getProduct(@Param('ProductId') ProductId: string) {
    return this.productService.getProduct(ProductId);
  }

  @Post('/create')
  createProducts(@Res() res, @Req() req, @Body() product: CreateProductDTO) {
    console.log(product);
    res.status(HttpStatus.OK).json({
      message: 'received',
    });
  }
  /*createProduct(@Body() product: CreateProductDTO): Promise<Product> {
    return this.productService.createProduct(product);
  }*/

  @Put(':id')
  updateProduct(@Body() Product: Product, @Param('id') id): string {
    console.log(Product);
    console.log(id);
    return 'Updating Product';
  }

  @Delete(':id')
  deleteProduct(@Param('id') id): string {
    console.log(id);
    return 'Deleting Product number: ' + id;
  }
}
