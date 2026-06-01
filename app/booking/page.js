"use cliimport { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";ent";

import { useState } from "react";
import CarSelector from "../components/CarSelector";

export default function Booking() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [car, setCar] = useState(null);
  const [distance, setDistance] = useState(10);

  const price = car ? car.price * distance : 0;
await addDoc(collection(db, "bookings"), {
  name,
  phone,
  car: car?.name || "",
  distance,
  price,
  status: "pending",
  createdAt: new Date().toISOString(),
});
  const sendWhatsApp = () => {
    const message = `
🚖 Safari Limo Booking

Name: ${name}
Phone: ${phone}

Car: ${car?.name}
Distance: ${distance} km
Price: ${price} EGP
    `;

    window.open(
      `https://wa.me/201122742618?text=${encodeURIComponent(message)}`
    );
  };

  return (
    <main className="min-h-screen bg-black text-white p-6">

      <h1 className="text-3xl text-yellow-400 text-center mb-6">
        Book Your Ride 🚖
      </h1>

      <div className="max-w-md mx-auto space-y-4">

        <input
          placeholder="Name"
          className="w-full p-3 rounded text-black"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Phone"
          className="w-full p-3 rounded text-black"
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          type="number"
          placeholder="Distance KM"
          className="w-full p-3 rounded text-black"
          onChange={(e) => setDistance(Number(e.target.value))}
        />

        <CarSelector onSelect={setCar} />

        <div className="text-yellow-400 font-bold text-center">
          Total Price: {price} EGP
        </div>

        <button
          onClick={sendWhatsApp}
          className="w-full bg-yellow-500 text-black py-3 rounded-xl font-bold"
        >
          Confirm Booking
        </button>

      </div>

    </main>
  );
}
