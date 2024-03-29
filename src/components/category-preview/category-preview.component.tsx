import {CategoryPreviewContainer, Title, Preview} from './category-preview.styles'

import React from 'react';
import ProductCard from "../product-card/product-card.component";
import {CategoryItem} from "../../store/categories/categories.types";

type CategoryPreviewProps = {
  title: string;
  products: CategoryItem[]
}

const CategoryPreview = ({title, products}: CategoryPreviewProps) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title}>
          {title.toUpperCase()}
        </Title>
      </h2>
      <Preview>
        {
          products
            .filter((_, idx) => idx < 4)
            .map((product) =>
              <ProductCard key={product.id} product={product}/>
            )}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
