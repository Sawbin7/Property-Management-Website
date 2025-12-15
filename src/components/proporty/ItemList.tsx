import type { Product } from "../../types/PropertyData.type";
import Item from "./Item";

interface PropType {
  data?: Product[];
}

const ItemList = ({ data = [] }: PropType) => {
  if (data.length === 0) {
    return (
      <div className="container flex justify-center items-center py-10 h-[50vh]">
        <h1 className="text-2xl font-mono text-gray-600">
          Sorry, No Products Available 🙁
        </h1>
      </div>
    );
  }

  return (
    <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
      {data.map((item) => (
        <div key={item.id} className="p-2">
          <Item value={item} />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
