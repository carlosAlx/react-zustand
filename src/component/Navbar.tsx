export default function Navbar() {
  return (
    <nav className="w-full border-b p-3 shadow-md sticky top-0 z-10 mb-5 bg-white">
      <main className="w-11/12 mx-auto">
        <ul className="flex justify-around">
          <li className="text-lg text-blue-800 font-semibold">React</li>
          <li className="text-lg text-orange-900 font-semibold">Zustand</li>
          <li className="text-lg text-cyan-400 font-semibold">Tailwind</li>
          <li className="text-lg text-gray-600 font-semibold">Faker</li>
          <li className="text-lg text-yellow-400 font-semibold">Vite</li>
        </ul>
      </main>
    </nav>
  );
}
