import mongoose from 'mongoose';
const { Schema } = mongoose;

const products = new Schema(
[
  {
    id: Number,
    name: String,
    slogan: String,
    description: String,
    category: String,
    default_price: Number
    features: [
      {
        features_id: Number
        features: String,
        value: String
      }
    ],
    styles: [
      name: String,
      original_price: Number,
      sale_price: Number,
      default: Boolean,
      photos: [
        {
          style_id: Number
          thumbnail_url: String,
          photo_url: String
        }
      ],
      skus: [
        {
          style_id: Number,
          quantity: Number,
          size: String
        }
      ]
    ]
  }
]
);