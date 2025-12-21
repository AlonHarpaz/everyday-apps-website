"use client";

import { useState, ReactElement } from "react";
import { ProductSidebar } from "./ProductSidebar";
import { mondayProducts, MondayProduct, AppType } from "@/lib/products";

interface MockupWithProductsProps {
  appType: AppType;
  children: (props: { product: MondayProduct; useCases: string[] }) => ReactElement;
}

export function MockupWithProducts({ appType, children }: MockupWithProductsProps) {
  const [selectedProduct, setSelectedProduct] = useState<MondayProduct>(mondayProducts[0]);

  const useCases = selectedProduct.useCases[appType];

  return (
    <div
      className="rounded-xl bg-background border border-border overflow-hidden shadow-2xl"
      style={{
        "--product-color": selectedProduct.color,
        "--product-hover-color": selectedProduct.hoverColor,
      } as React.CSSProperties}
    >
      {/* Window header */}
      <div className="bg-card px-4 py-3 border-b border-border flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <span className="text-xs text-muted-foreground ml-2">
          Everyday {appType.charAt(0).toUpperCase() + appType.slice(1)} - {selectedProduct.name}
        </span>
      </div>

      {/* Content with sidebar */}
      <div className="flex">
        <ProductSidebar
          selectedProduct={selectedProduct}
          onProductChange={setSelectedProduct}
        />
        <div className="flex-1">
          {children({ product: selectedProduct, useCases })}
        </div>
      </div>
    </div>
  );
}
