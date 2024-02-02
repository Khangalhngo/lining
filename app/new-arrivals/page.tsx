"use client";
import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Pagination,
} from "@nextui-org/react";
import shoe1 from "@/public/assets/shoes/1.png";
import shoe2 from "@/public/assets/shoes/2.png";
import shoe3 from "@/public/assets/shoes/3.png";
import shoe4 from "@/public/assets/shoes/4.png";
import shoe5 from "@/public/assets/shoes/5.png";
import { title } from "@/components/primitives";
// Assuming `title` and `subtitle` are imported and their types are correctly handled elsewhere

type ShoeItem = {
  title: string;
  img: string;
  price: string;
};

const list: ShoeItem[] = [
  // Populate your list as before
  { title: "Orange", img: shoe1.src, price: "$5.50" },
  { title: "Tangerine", img: shoe2.src, price: "$3.00" },
  {
    title: "Lemon 2",
    img: shoe1.src,
    price: "$8.00",
  },
  {
    title: "Banana",
    img: shoe2.src,
    price: "$7.50",
  },
  {
    title: "Watermelon",
    img: shoe3.src,
    price: "$12.20",
  },
  {
    title: "Avocado",
    img: shoe5.src,
    price: "$15.70",
  },
  {
    title: "Lemon 3",
    img: shoe1.src,
    price: "$8.00",
  },
  {
    title: "Banana 4",
    img: shoe2.src,
    price: "$7.50",
  },
  {
    title: "Watermelon 5",
    img: shoe3.src,
    price: "$12.20",
  },
  {
    title: "Avocado 4",
    img: shoe5.src,
    price: "$15.70",
  },
  {
    title: "Lemon 1",
    img: shoe1.src,
    price: "$8.00",
  },
  {
    title: "Banana 9",
    img: shoe2.src,
    price: "$7.50",
  },
  {
    title: "Watermelon 10",
    img: shoe3.src,
    price: "$12.20",
  },
  {
    title: "Avocado 9",
    img: shoe5.src,
    price: "$15.70",
  },
  {
    title: "Lemon 8",
    img: shoe1.src,
    price: "$8.00",
  },
  {
    title: "Banana 7",
    img: shoe2.src,
    price: "$7.50",
  },
  {
    title: "Watermelon 9",
    img: shoe3.src,
    price: "$12.20",
  },
  // Add the rest of your items...
];

export default function NewArrivals() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage: number = 8;

  const indexOfLastItem: number = currentPage * itemsPerPage;
  const indexOfFirstItem: number = indexOfLastItem - itemsPerPage;
  const currentItems: ShoeItem[] = list.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages: number = Math.ceil(list.length / itemsPerPage);

  return (
    <div>
      <div className="row-start-2 text-center mb-8">
        <h1 className={`${title()} whitespace-nowrap`}>New Arrivals</h1>{" "}
        {/* Use title() if it's a function returning string styles */}
      </div>

      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
        {currentItems.map((item, index) => (
          <Card
            shadow="sm"
            key={index}
            isPressable
            onPress={() => console.log("item pressed", item.title)}
          >
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={item.title}
                className="w-full object-cover h-full"
                src={item.img}
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b>{item.title}</b>
              <p className="text-default-500">{item.price}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="mt-8  w-full">
        <Pagination
          total={totalPages}
          page={currentPage}
          onChange={(page) => setCurrentPage(page)}
          showControls
          className="float-right"
          loop
          color="danger"
        />
      </div>
    </div>
  );
}
