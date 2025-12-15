import type { Product } from "../../types/PropertyData.type";
import Item from "./Item";

interface propType {
  data?: Product[];
}

const ItemList = ({ data = [] }: propType) => {
  return (
    <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 ">
      {data.map((item) => (
        <div key={item.id} className="p-2 ">
          <Item value={item} />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
