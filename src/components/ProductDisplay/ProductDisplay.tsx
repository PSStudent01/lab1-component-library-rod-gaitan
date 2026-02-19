
import React from 'react';
import type { ProductDisplayProps } from '../../types';
/*
This componenet displays product information in a card format, by showing:
-a product image
-product name
-product price
-product description
-stock status

- Example usage:
<ProductDisplay product={product} />

Special handling:
- image only renders if URL is provided

*/
export const ProductDisplay: React.FC<ProductDisplayProps> = ({
    product,
}) => {

    return (
        // Card container using Tailwind with the following properties:
        <div className="border rounded-lg p-6 bg-white shadow-md">

            {/* Product Image */}
            {product.imageUrl && (
                <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-md mb-4"
                />
            )}

            {/* Product Name */}
            <h3 className="text-xl font-bold mb-2">{product.name}</h3>

            {/* Product Price */}
            <p className="text-2xl font-semibold text-green-600 mb-3">
                ${product.price.toFixed(2)}
            </p>

            {/* Product Description */}
            <p className="text-gray-600 mb-3">{product.description}</p>

            {/* Stock Status */}
            <p className={`text-sm font-medium ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                {/* if inStock is true show 'In Stock', otherwise 'Out of Stock' */}
                {product.inStock ? 'In Stock' : 'Out of Stock'}
            </p>

        </div>

    )
}