"use client";

import { mondayProducts, MondayProduct } from "@/lib/products";

interface ProductSidebarProps {
  selectedProduct: MondayProduct;
  onProductChange: (product: MondayProduct) => void;
}

export function ProductSidebar({ selectedProduct, onProductChange }: ProductSidebarProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 8,
        padding: 12,
        borderRight: "1px solid rgba(255,255,255,0.1)",
        width: 200,
        flexShrink: 0,
        backgroundColor: "rgba(0,0,0,0.2)",
      }}
    >
      {mondayProducts.map((product) => {
        const isSelected = product.id === selectedProduct.id;

        return (
          <button
            key={product.id}
            onClick={() => onProductChange(product)}
            style={{
              display: "flex",
              alignItems: "center",
              padding: 8,
              borderRadius: 8,
              border: "none",
              cursor: "pointer",
              backgroundColor: isSelected ? `${product.color}20` : "transparent",
              transition: "background-color 0.2s",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={product.logo}
              alt={`monday ${product.name}`}
              style={{
                height: 28,
                opacity: isSelected ? 1 : 0.6,
              }}
            />
          </button>
        );
      })}
    </div>
  );
}
