"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Typography } from "@/components/ui/typography";
import { Farm } from "../constants/farm";
import { Button } from "@/components/ui/button";
import { fadeIn } from "@/app/Variant";
import { transition1 } from "@/app/Transition";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FarmProduce: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(16);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = Farm.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalProductsInCategory = Farm.filter(
    (item) => !selectedCategory || item.category === selectedCategory
  ).length;
  const totalCategoryPages = Math.ceil(
    totalProductsInCategory / productsPerPage
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleCategoryFilter = (category: string | null) => {
    setSelectedCategory(category === "all" ? null : category); // Reset to null if "all" is selected
    setCurrentPage(1);
  };

  return (
    <motion.section className="mt-12 mb-24" id="service">
      <div className="container">
        <h1 className="background-text text-center">Farm Products</h1>

        <div className="flex justify-center gap-x-4 mb-4 items-center">
          <Typography variant="h4" className="">
            Filter by:
          </Typography>
          {/* Category Filter */}
          <Select
            onValueChange={(value) => handleCategoryFilter(value)}
            defaultValue={selectedCategory || "all"} // Ensure "all" is the default value
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Products</SelectItem>
              {Array.from(new Set(Farm.map((item) => item.category))).map(
                (category, index) => (
                  <SelectItem key={index} value={category}>
                    {category}
                  </SelectItem>
                )
              )}
            </SelectContent>
          </Select>
        </div>
        {/* Product Display */}
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 0.8)}
          initial="hidden"
          whileInView="show"
          exit="show"
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-4 xl:gap-6 mt-12 sm:mt-16"
        >
          {currentProducts
            .filter(
              (item) => !selectedCategory || item.category === selectedCategory
            )
            .map((item, index) => (
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={transition1}
                key={index}
                className="flex flex-col gap-y-5"
              >
                <div className="bg-white border-[1px] border-secondary gray-card-shadow px-2.5 py-5 sm:px-4 sm:py-6 rounded-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 mx-auto drop-shadow-xl"
                  />
                </div>
                <Typography
                  variant="h5"
                  className="mb-3 text-black text-center"
                >
                  {item.name}
                </Typography>
              </motion.div>
            ))}
        </motion.div>
        {/* Pagination Buttons */}
        <div className="flex justify-center gap-x-4 mt-8">
          {Array.from({ length: totalCategoryPages }).map((_, index) => (
            <Button
              variant="outline"
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={
                currentPage === index + 1 ? "bg-primary text-white" : ""
              }
            >
              {index + 1}
            </Button>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default FarmProduce;
