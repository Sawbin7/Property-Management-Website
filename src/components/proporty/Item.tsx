interface propData {
  id: number;
  name: string;
  category: "land" | "house" | "hotel" | "flat";
  isAvailable: "available" | "booked" | "notAvailable";
  price: number;
  location: string;
  sizeSqFt: number;
  image: string;
}
interface propType {
  value: propData;
}

const Item = ({ value }: propType) => {
  return (
    <>
      <div className="w-auto p-2 space-y-3 rounded bg-white/20  border-white/30 backdrop-blur-md shadow-lg">
        <img
          src={value.image}
          alt="Image"
          className="bg-cover bg-no-repeat w-full rounded h-40"
        />
        <h1 className="text-xl font-bold"> {value.name}</h1>
        <h1 className="text-md font-bold"> NPR {value.price}</h1>

        <div className="space-x-3 font-mono">
          <button className="bg-gray-300 rounded px-3">
            {" "}
            {value.isAvailable}{" "}
          </button>
          <button className="bg-gray-300 px-2"> {value.category} </button>
        </div>
      </div>
    </>
  );
};

export default Item;
