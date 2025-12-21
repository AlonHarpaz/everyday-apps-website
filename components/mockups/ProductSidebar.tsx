"use client";

import { motion } from "framer-motion";
import { mondayProducts, MondayProduct } from "@/lib/products";

interface ProductSidebarProps {
  selectedProduct: MondayProduct;
  onProductChange: (product: MondayProduct) => void;
}

export function ProductSidebar({ selectedProduct, onProductChange }: ProductSidebarProps) {
  return (
    <div className="flex flex-col gap-1 p-2 bg-card/50 border-r border-border min-w-[60px]">
      {mondayProducts.map((product, index) => {
        const Icon = product.icon;
        const isSelected = product.id === selectedProduct.id;

        return (
          <motion.button
            key={product.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            onClick={() => onProductChange(product)}
            className="relative flex flex-col items-center gap-1 p-2 rounded-lg transition-all group"
            style={{
              backgroundColor: isSelected ? `${product.color}15` : "transparent",
            }}
          >
            {isSelected && (
              <motion.div
                layoutId="activeProduct"
                className="absolute inset-0 rounded-lg"
                style={{ backgroundColor: `${product.color}15` }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
              />
            )}
            <div
              className="relative z-10 w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
              style={{
                backgroundColor: isSelected ? product.color : "transparent",
                color: isSelected ? "#ffffff" : "#9ca3af",
              }}
            >
              <Icon size={16} />
            </div>
            <span
              className="relative z-10 text-[10px] font-medium transition-colors text-center leading-tight"
              style={{
                color: isSelected ? product.color : "#9ca3af",
              }}
            >
              {product.name.split(" ")[0]}
            </span>
          </motion.button>
        );
      })}
    </div>
  );
}
