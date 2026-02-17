
import React from 'react';
import type { ProductDisplayProps } from '../../types';

export const ProductDisplay: React.FC<ProductDisplayProps> = ({
    product
}) => {

    return (
        <div className="border rounded-lg p-6 bg-white shadow-md">

            {product.imageUrl && (
                <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-md mb-4"
                />
            )}
            <h3 className="text-xl font-bold mb-2">{product.name}</h3>

            <p className="text-2xl font-semibold text-green-600 mb-3">
                ${product.price.toFixed(2)}
            </p>

            <p className="text-gray-600 mb-3">{product.description}</p>

            <p className={`text-sm font-medium ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
            </p>

        </div>

    )
}