"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Typography } from "@/components/ui/typography";
import { Farm } from "../constants/farm";
import { Button } from "@/components/ui/button";
import { fadeIn } from "@/app/Variant";
import { transition1 } from "@/app/Transition";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const FarmProduce: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(16);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Logic to calculate index of the last product of the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  // Logic to calculate index of the first product of the current page
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  // Logic to slice the array of products to display only products for the current page
  const currentProducts = Farm.slice(indexOfFirstProduct, indexOfLastProduct);

  // Determine the total number of products in the selected category
  const totalProductsInCategory = Farm.filter(
    (item) => !selectedCategory || item.category === selectedCategory
  ).length;
  // Calculate the number of pages based on the total number of products in the selected category
  const totalCategoryPages = Math.ceil(
    totalProductsInCategory / productsPerPage
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleCategoryFilter = (category: string | null) => {
    if (selectedCategory === category) {
      setSelectedCategory(null); // Deselect the category if it's already selected
    } else {
      setSelectedCategory(category);
    }
    setCurrentPage(1); // Reset to first page when applying category filter
  };

  return (
    <motion.section className="mt-12" id="service">
      <div className="container">
        <h1 className="background-text text-center">Farm Products</h1>
        <div className="flex justify-center gap-x-4 mb-4">
          {/* Category Filter Buttons */}
          <Button
            variant="outline"
            onClick={() => handleCategoryFilter(null)}
            className={!selectedCategory ? "bg-primary text-white" : ""}
          >
            All Produce
          </Button>
          <div className=" px-6 flex sm:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger>Categories</DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem className="flex flex-col gap-y-4">
                  {Array.from(new Set(Farm.map((item) => item.category))).map(
                    (category) => (
                      <Button
                        variant="ghost"
                        key={category}
                        onClick={() => handleCategoryFilter(category)}
                        className={
                          selectedCategory === category
                            ? "bg-primary text-white"
                            : ""
                        }
                      >
                        {category}
                      </Button>
                    )
                  )}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="hidden sm:flex gap-x-4">
            {Array.from(new Set(Farm.map((item) => item.category))).map(
              (category) => (
                <Button
                  variant="outline"
                  key={category}
                  onClick={() => handleCategoryFilter(category)}
                  className={
                    selectedCategory === category ? "bg-primary text-white" : ""
                  }
                >
                  {category}
                </Button>
              )
            )}
          </div>
        </div>
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
