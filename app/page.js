export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6">

      <h1 className="text-5xl font-bold text-yellow-400 mb-4">
        🚖 Safari Limo
      </h1>

      <p className="text-gray-300 mb-8">
        Luxury Limousine Booking System
      </p>

      <div className="grid gap-4 w-full max-w-md">

        <button className="bg-yellow-500 text-black py-3 rounded-xl font-bold">
          Book a Ride
        </button>

        <button className="bg-white text-black py-3 rounded-xl font-bold">
          View Fleet
        </button>

        <button className="border border-yellow-500 text-yellow-500 py-3 rounded-xl">
          Contact Us
        </button>

      </div>

    </main>
  );
    }
