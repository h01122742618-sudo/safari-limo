"use client";

import { useState } from "react";

export default function CarSelector({ onSelect }) {
  const [selected, setSelected] = useState("");

  const cars = [
    {
      name: "SUV",
      price: 15,
      img: "https://images.unsplash.com/photo-1605559424843-9e4c2a6a7c1f",
    },
    {
      name: "Sedan",
      price: 10,
      img: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a",
    },
    {
      name: "Hiace",
      price: 20,
      img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7",
    },
  ];

  return (
    <div className="grid gap-4">

      {cars.map((car) => (
        <div
          key={car.name}
          onClick={() => {
            setSelected(car.name);
            onSelect(car);
          }}
          className={`cursor-pointer border rounded-xl p-3 ${
            selected === car.name ? "border-yellow-400" : "border-gray-700"
          }`}
        >
          <img
            src={car.img}
            className="w-full h-32 object-cover rounded-lg"
          />

          <div className="flex justify-between mt-2">
            <span>{car.name}</span>
            <span>{car.price} EGP / km</span>
          </div>
        </div>
      ))}

    </div>
  );
    }
