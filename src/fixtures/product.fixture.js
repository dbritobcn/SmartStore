import {Product} from "../core/product/domain/product";

export const productFixture = {
  "id": "0001",
  "brand": "Apple",
  "model": "iPhone SE",
  "image_url": "347182_28749f58-2f2f-447a-b432-90be32f418dd.webp",
  "price": 245,
  "cpu": "A1",
  "ram": "3Gb",
  "so": "ios",
  "screen_resolution": "1334x750",
  "battery": "lithium-ion",
  "camera": "12Mp",
  "size": "4,7",
  "weight": "148g",
  "colors": ["0001", "0002"],
  "storages": ["0001", "0002", "0003"]
};

export const product2Fixture = {
  "id": "0002",
  "brand": "OnePlus",
  "model": "7T",
  "image_url": "347182_28749f58-2f2f-447a-b432-90be32f418dd.webp",
  "price": 400,
  "cpu": "Qualcomm SM8150 Snapdragon 855+ (7 nm)",
  "ram": "8Gb",
  "so": "android",
  "screen_resolution": "1334x750",
  "battery": "Li-Po 3800 mAh, non-removable",
  "camera": "12Mp",
  "size": "6,55",
  "weight": "148g",
  "colors": ["0001", "0002"],
  "storages": ["0001", "0002", "0003"]
};

export const productWithoutBrandFixture = {
  "id": "0002",
  "model": "iPhone 12",
  "image_url": "418116_fc4241f2-2a8a-46fb-9daf-effd461ec876.avif",
  "price": 599,
  "cpu": "A1",
  "ram": "3Gb",
  "so": "ios",
  "screen_resolution": "1334x750",
  "battery": "lithium-ion",
  "camera": "12Mp",
  "size": "4,7",
  "weight": "148g",
  "colors": ["0001", "0002"],
  "storages": ["0001", "0002", "0003", "0004", "0005", "0006"]
};

export const productListFixture = [productFixture, product2Fixture].map(Product.createFromDB);
