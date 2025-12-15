import React, { useState } from "react";
import heroImg from "../assets/Building.png";
import { Search } from "lucide-react";

interface Property {
  id: number;
  name: string;
  location: string;
}

const properties: Property[] = [
  { id: 1, name: "Sunset Villa", location: "Kathmandu" },
  { id: 2, name: "Green Apartments", location: "Lalitpur" },
  { id: 3, name: "Riverfront House", location: "Bhaktapur" },
];

const Hero: React.FC = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Property[]>([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() === "") {
      setResults([]);
    } else {
      const filtered = properties.filter(
        (p) =>
          p.name.toLowerCase().includes(value.toLowerCase()) ||
          p.location.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filtered);
    }
  };

  return (
    <div className="relative w-full h-[90vh] flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-[2px]"
        style={{ backgroundImage: `url(${heroImg})` }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-20"></div>

      {/* Centered Search Box */}
      <div className="relative z-10 w-full max-w-xl">
        <div className="flex">
          <input
            type="text"
            placeholder="☰ Search for property or location"
            value={query}
            onChange={handleSearch}
            className="flex-1 p-3  placeholder-gray-700 placeholder:font-medium rounded-l-2xl border border-gray-700 focus:outline-none"
          />
          <button className="bg-blue-600 p-3 rounded-r-2xl text-white hover:bg-blue-700 flex items-center">
            <Search className="w-5 h-5" />
          </button>
        </div>

        {/* Search results ko laai */}
        {results.length > 0 && (
          <div className="absolute top-full mt-2 w-full bg-white rounded-xl shadow-lg overflow-hidden max-h-60 overflow-y-auto z-20">
            {results.map((item) => (
              <div
                key={item.id}
                className="p-3 border-b last:border-b-0 hover:bg-gray-100 cursor-pointer"
              >
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-500">{item.location}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
