import { Search, ChevronDown, ChevronUp } from "lucide-react";
import propertyListJson from "../../data/propertyData.json";
import type { Product } from "../../types/PropertyData.type";
import { useState, useEffect, useRef } from "react";
import ItemList from "./ItemList";

const FilterBar = () => {
  const propertyList: Product[] = propertyListJson as Product[];
  const [searchData, setSearchData] = useState("");

  // Filter states
  const [searchCategory, setSearchCategory] = useState<
    "land" | "house" | "hotel" | "flat" | "all"
  >("all");

  const [availibility, setAvailibility] = useState<
    "available" | "booked" | "notAvailable" | "all"
  >("all");

  // Dropdown open states
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [availabilityOpen, setAvailabilityOpen] = useState(false);

  // Refs for click-outside detection
  const categoryRef = useRef<HTMLDivElement | null>(null);
  const availabilityRef = useRef<HTMLDivElement | null>(null);

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        categoryRef.current &&
        !categoryRef.current.contains(event.target as Node)
      ) {
        setCategoryOpen(false);
      }

      if (
        availabilityRef.current &&
        !availabilityRef.current.contains(event.target as Node)
      ) {
        setAvailabilityOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter logic
  const filteredByName = propertyList.filter((item) =>
    item.name.toLowerCase().includes(searchData.toLowerCase())
  );

  const filteredByCategory = filteredByName.filter((item) => {
    if (searchCategory === "all") return true;
    return item.category === searchCategory;
  });

  const filteredByAvailability = filteredByCategory.filter((item) => {
    if (availibility === "all") return true;
    return item.isAvailable === availibility;
  });

  // Handlers
  const handleCategorySelect = (
    category: "land" | "house" | "hotel" | "flat" | "all"
  ) => {
    setSearchCategory(category);
    setCategoryOpen(false);
  };

  const handleAvailabilitySelect = (
    status: "available" | "booked" | "notAvailable" | "all"
  ) => {
    setAvailibility(status);
    setAvailabilityOpen(false);
  };

  const resetFilters = () => {
    setSearchData("");
    setSearchCategory("all");
    setAvailibility("all");
    setCategoryOpen(false);
    setAvailabilityOpen(false);
  };

  return (
    <>
      <div className="container">
        <div className="w-full flex flex-wrap justify-evenly space-y-2 space-x-3">
          {/* Search */}
          <div className="flex border rounded-lg w-full md:w-[60%] mx-2 md:mx-0 p-1">
            <Search />
            <input
              type="text"
              className="outline-none h-auto w-full "
              value={searchData}
              onChange={(e) => setSearchData(e.target.value)}
              placeholder="Search By Name"
            />
          </div>

          {/* Category Dropdown */}
          <div className="relative" ref={categoryRef}>
            <button
              className="flex items-center border rounded-lg p-1 h-full"
              onClick={() => {
                setCategoryOpen(!categoryOpen);
                setAvailabilityOpen(false);
              }}
            >
              Category: {searchCategory}
              {categoryOpen ? <ChevronUp /> : <ChevronDown className="ml-1" />}
            </button>

            {categoryOpen && (
              <div className="absolute top-full left-0 border bg-white z-10 w-full">
                {["all", "land", "house", "hotel", "flat"].map((cat) => (
                  <div
                    key={cat}
                    className="p-2 cursor-pointer hover:bg-gray-200"
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
          <div className="relative" ref={availabilityRef}>
            <button
              className="flex items-center border rounded-lg p-1 h-full"
              onClick={() => {
                setAvailabilityOpen(!availabilityOpen);
                setCategoryOpen(false);
              }}
            >
              Availability: {availibility}
              {availabilityOpen ? (
                <ChevronUp />
              ) : (
                <ChevronDown className="ml-1" />
              )}
            </button>

            {availabilityOpen && (
              <div className="absolute top-full left-0 border bg-white z-10 w-full">
                {["all", "available", "booked", "notAvailable"].map(
                  (status) => (
                    <div
                      key={status}
                      className="p-2 cursor-pointer hover:bg-gray-200"
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
            className="p-1 px-2 h-full bg-red-400 rounded-lg text-white"
            onClick={resetFilters}
          >
            Reset
          </button>
        </div>
      </div>

      {/* Filtered List */}
      <ItemList data={filteredByAvailability} />
    </>
  );
};

export default FilterBar;
