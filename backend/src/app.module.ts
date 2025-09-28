import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import ColorsModule from './modules/colors/colors.module';
import OrdersModule from './modules/orders/orders.module';
import ProductColorsModule from './modules/product-colors/product-colors.module';
import ProductSizesModule from './modules/product-sizes/product-sizes.module';
import ProductsModule from './modules/products/products.module';
import SkusModule from './modules/skus/skus.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [
        ConfigModule,
        ColorsModule,
        OrdersModule,
        ProductsModule,
        ProductSizesModule,
        ProductColorsModule,
        SkusModule,
      ],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get<string>('DB_HOST'),
        port: config.get<number>('DB_PORT'),
        username: config.get<string>('DB_USERNAME'),
        password: config.get<string>('DB_PASSWORD'),
        database: config.get<string>('DB_DATABASE'),
        autoLoadEntities: true,
        synchronize: false,
        migrationsRun: false,
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
