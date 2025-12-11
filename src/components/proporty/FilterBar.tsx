import { Search, ChevronDown } from "lucide-react";
import propertyListJson from "../../data/propertyData.json";
import type { Product } from "../../types/PropertyData.type";
import { useState } from "react";
import ItemList from "./ItemList";

const FilterBar = () => {
  const propertyList: Product[] = propertyListJson as Product[];
  const [data, setData] = useState<Product[]>(propertyList);
  const [searchData, setSearchData] = useState("");

  // Filter states
  const [searchCategory, setSearchCategory] = useState<
    "land" | "house" | "hotel" | "flat" | "none"
  >("none");

  const [availibility, setAvailibility] = useState<
    "available" | "booked" | "notAvailable" | "all"
  >("all");

  // Dropdown open/close states
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [availabilityOpen, setAvailabilityOpen] = useState(false);

  // Filter logic
  const filteredByName = data.filter((item) =>
    item.name.toLowerCase().includes(searchData.toLowerCase())
  );

  const filteredByCategory = filteredByName.filter((item) => {
    if (searchCategory === "none") return true;
    return item.category === searchCategory;
  });

  const filteredByAvailability = filteredByCategory.filter((item) => {
    if (availibility === "all") return true;
    return item.isAvailable === availibility;
  });

  // Handle selection
  const handleCategorySelect = (
    category: "land" | "house" | "hotel" | "flat" | "none"
  ) => {
    setSearchCategory(category);
    setCategoryOpen(false); // close dropdown after selection
  };

  const handleAvailabilitySelect = (
    status: "available" | "booked" | "notAvailable" | "all"
  ) => {
    setAvailibility(status);
    setAvailabilityOpen(false); // close dropdown after selection
  };

  const resetFilters = () => {
    setSearchData("");
    setSearchCategory("none");
    setAvailibility("all");
  };

  return (
    <>
      <div className="container">
        <div className="w-full flex flex-wrap justify-evenly space-x-3 space-y-4 bg-purple-100 p-2">
          {/* Search By Name */}
          <div className="flex border rounded-lg w-full md:w-[60%] p-1">
            <Search />
            <input
              type="text"
              className="p-1 outline-none "
              value={searchData}
              onChange={(e) => setSearchData(e.target.value)}
              placeholder="Search By Name"
            />
          </div>

          {/* Category Dropdown */}
          <div className="relative">
            <button
              className="flex items-center border rounded-lg p-1"
              onClick={() => setCategoryOpen(!categoryOpen)}
            >
              Category: {searchCategory}
              <ChevronDown className="ml-1" />
            </button>
            {categoryOpen && (
              <div className="absolute top-full left-0 border bg-white z-10">
                {["none", "land", "house", "hotel", "flat"].map((cat) => (
                  <div
                    key={cat}
                    className="p-1 cursor-pointer hover:bg-gray-200"
                    onClick={() =>
                      handleCategorySelect(cat as typeof searchCategory)
                    }
                  >
                    {cat}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Availability Dropdown */}
          <div className="relative">
            <button
              className="flex items-center border rounded-lg p-1"
              onClick={() => setAvailabilityOpen(!availabilityOpen)}
            >
              Availability: {availibility}
              <ChevronDown className="ml-1" />
            </button>
            {availabilityOpen && (
              <div className="absolute top-full left-0 border bg-white z-10">
                {["all", "available", "booked", "notAvailable"].map(
                  (status) => (
                    <div
                      key={status}
                      className="p-1 cursor-pointer hover:bg-gray-200"
                      onClick={() =>
                        handleAvailabilitySelect(status as typeof availibility)
                      }
                    >
                      {status}
                    </div>
                  )
                )}
              </div>
            )}
          </div>

          {/* Reset Button */}
          <button
            className=" p-2 h-fit bg-red-400 rounded-lg text-white"
            onClick={resetFilters}
          >
            Reset
          </button>
        </div>
      </div>

      {/* Render filtered list */}
      <ItemList data={filteredByAvailability} />
    </>
  );
};

export default FilterBar;
