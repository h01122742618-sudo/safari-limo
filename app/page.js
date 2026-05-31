export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">

      <h1 className="text-5xl font-bold text-yellow-400 mb-4">
        🚖 Safari Limo
      </h1>

      <p className="text-gray-300 mb-10 text-center">
        Luxury Limousine Booking System
      </p>

      <div className="w-full max-w-md space-y-4">

        <a href="/booking">
          <button className="w-full bg-yellow-500 text-black py-3 rounded-xl font-bold">
            Book a Ride
          </button>
        </a>

        <button className="w-full border border-yellow-500 text-yellow-500 py-3 rounded-xl">
          View Fleet
        </button>

        <button className="w-full bg-white text-black py-3 rounded-xl font-bold">
          Contact Us
        </button>

      </div>

    </main>
  );
}
