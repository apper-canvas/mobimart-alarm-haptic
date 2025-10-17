import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useCart } from "@/hooks/useCart";
import { useComparison } from "@/hooks/useComparison";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";
import Badge from "@/components/atoms/Badge";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { addToComparison, isInComparison } = useComparison();
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product);
  };

  const handleCompare = (e) => {
    e.stopPropagation();
    addToComparison(product);
  };

const savings = product.originalPrice - product.price;
  const savingsPercent = product.originalPrice > 0 ? Math.round((savings / product.originalPrice) * 100) : 0;

  return (
    <motion.div
    whileHover={{
        y: -4,
        boxShadow: "0 8px 16px rgba(0,0,0,0.1)"
    }}
    transition={{
        duration: 0.2
    }}
    onClick={() => navigate(`/product/${product.Id}`)}
    className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
    <div
        className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        <motion.div
            whileHover={{
                scale: 1.05
            }}
            transition={{
                duration: 0.3
            }}>
            <img
                src={product.images?.[0] || "https://via.placeholder.com/400"}
                src={product.images?.[0] || "https://via.placeholder.com/400"}
                alt={product.name_c || "Product"}
                className="w-full h-full object-cover" />
        </motion.div>
        <div className="absolute top-3 right-3 flex flex-col gap-2">
            {savingsPercent > 0 && <Badge variant="accent" className="text-xs px-2 py-1">-{savingsPercent}%
                            </Badge>}
            {!product.in_stock_c && <Badge variant="error" className="shadow-lg">Out of Stock
                            </Badge>}
        </div>
        <motion.button
            initial={{
                opacity: 0,
                x: 20
            }}
            whileHover={{
                opacity: 1,
                x: 0
            }}
            onClick={handleCompare}
            className={`absolute top-3 right-3 p-2 rounded-full ${isInComparison(product.Id) ? "bg-accent text-white" : "bg-white text-gray-700 hover:bg-gray-50"}`}>
            <ApperIcon name={isInComparison(product.Id) ? "Check" : "GitCompare"} size={16} />
        </motion.button></div>
    <div className="p-4">
        <div className="mb-3">
            <p className="text-xs text-gray-500 mb-1">{product.brand_c || ""}</p>
            <p className="text-xs text-gray-500 mb-1">{product.brand_c || ""}</p>
            <h3
                className="font-semibold text-gray-900 line-clamp-2 group-hover:text-primary transition-colors">
                {product.name_c || "Product"}
            </h3>
        </div>
        <div className="flex items-center gap-1 mb-3">
            <ApperIcon name="Star" size={16} className="text-warning fill-warning" />
            <span className="text-sm font-medium text-gray-900">{product.rating_c || 0}</span>
        </div>
        <span className="text-xs text-gray-400">({product.reviewCount})</span>
    </div>
    <div className="flex flex-wrap gap-1 mb-3">
        <Badge variant="default" className="text-xs">
            {product.specs_ram_c || "N/A"}
        </Badge>
        <Badge variant="default" className="text-xs">
            {product.specs_storage_c || "N/A"}
        </Badge>
        <Badge variant="default" className="text-xs">
            {product.specs_camera_c ? product.specs_camera_c.split(" ")[0] : "N/A"}
        </Badge>
    </div>
    <div className="flex items-end justify-between mb-3">
        <div>
            <div className="text-2xl font-bold text-primary">${product.price_c || 0}
            </div>
            {product.originalPrice > product.price_c && <div className="text-sm text-gray-400 line-through">${product.originalPrice || 0}
            </div>}
        </div>
    </div>
    <Button
        onClick={handleAddToCart}
        disabled={!product.in_stock_c}
        className={`w-full flex items-center justify-center gap-2 ${!product.in_stock_c ? "opacity-50 cursor-not-allowed" : ""}`}
        whileTap={{
            scale: 0.95
        }}>
        {product.in_stock_c ? "Add to Cart" : "Out of Stock"}
    </Button>
</motion.div>
  );
};

export default ProductCard;