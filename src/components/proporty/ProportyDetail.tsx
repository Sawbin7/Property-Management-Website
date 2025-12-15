import type { Product } from "../../types/PropertyData.type";
import proporttyData from "../../data/propertyData.json";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

const ProportyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const proporties: Product[] = proporttyData as Product[];
  const proporty = proporties.find((item) => item.id === Number(id));
  const [bookingStatus, setBookingStatus] = useState(
    proporty != undefined ? proporty.isAvailable : "notAvailable"
  );
  if (!proporty) {
    return <div className="text-center text-3xl"> Proporty Not Found</div>;
  }

  const handleBooking = () => {
    if (bookingStatus === "booked" || bookingStatus === "notAvailable") {
      alert("Proporty is Already Booked or not available");

      return;
    }
    alert("Do you want to book the Proprty?");
    setBookingStatus("booked");
  };

  return (
    <>
      <Link to="/proporty"> Back to Proporty </Link>

      <div> Name: {proporty.name} </div>
      <div> Description: {proporty.description}</div>

      <div> {proporty.category} </div>

      <div>
        <p> Booking Status </p>
        <span> {bookingStatus}</span>
        {bookingStatus === "available" ? (
          <button className="border px-1" onClick={handleBooking}>
            {" "}
            Rent Now
          </button>
        ) : (
          <p> Proporty is Already Booked</p>
        )}
      </div>
      <img src={proporty.image} alt="Image" />
    </>
  );
};

export default ProportyDetail;
