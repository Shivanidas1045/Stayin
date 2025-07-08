import React, { useState, useEffect } from 'react';
import hotelRooms from './Data';

const Hotels = () => {
  const [selectedType, setSelectedType] = useState("All");
  const [sortOrder, setSortOrder] = useState("");
  const [filteredRooms, setFilteredRooms] = useState(hotelRooms);

  useEffect(() => {
    let rooms = [...hotelRooms];

    if (selectedType !== "All") {
      rooms = rooms.filter((room) => room.type === selectedType);
    }

    if (sortOrder === "asc") {
      rooms.sort((a, b) => a.pricePerNight - b.pricePerNight);
    } else if (sortOrder === "desc") {
      rooms.sort((a, b) => b.pricePerNight - a.pricePerNight);
    }

    setFilteredRooms(rooms);
  }, [selectedType, sortOrder]); 

  const filterRooms = (type) => {
    setSelectedType(type);
  };

  const sortByPrice = (order) => {
    setSortOrder(order);
  };

  



  return (
<>

    <div className="container text-center " style={{marginTop:"100px"}}>
      <h2 className="text-center fst-italic p-2 mb-5 mx-auto" style={{backgroundColor:"#9FE2BF"}}> Book your comfort Stay!</h2>


      <div className="text-center mb-4">
        <button className="btn btn-outline-dark mx-2 mb-2"  onClick={() => filterRooms("All")}>All</button>
        <button className="btn btn-outline-dark mx-2 mb-2" onClick={() => filterRooms("Deluxe Room")}>Deluxe</button>
        <button className="btn btn-outline-dark mx-2 mb-2" onClick={() => filterRooms("Suite")}>Suite</button>
        <button className="btn btn-outline-dark mx-2 mb-2" onClick={() => filterRooms("Standard Room")}>Standard </button>
        <button className="btn btn-outline-dark mx-2 mb-2" onClick={() => filterRooms("Family Suite")}>Family Suite </button>
        <button className="btn btn-outline-dark mx-2 mb-2" onClick={() => filterRooms("Luxury Villa")}>Luxury Villa</button>
      </div>

 <div className="text-center mb-4">
          <button
            className="btn mx-2 mb-2 fst-italic"
            style={{ backgroundColor: "#9FE2BF", borderWidth: "3px", borderColor: "black" }}
            onClick={() => sortByPrice("asc")}
          >
            Price Low To High
          </button>
          <button
            className="btn mx-2 mb-2 fst-italic"
            style={{ backgroundColor: "#9FE2BF", borderWidth: "3px", borderColor: "black" }}
            onClick={() => sortByPrice("desc")}
          >
            Price High to Low
          </button>
        </div>

    <div className="row">  {filteredRooms.map((el) => (
        <div className="col mb-5" key={el.id}>
          <img className="img-fluid" src={el.image} alt="hotel_images" className="hotelImg-hover" />
          <h3 className="text-center mt-4 fst-italic">{el.type}</h3>
          <p className="text-center fw-bold">Price: ₨ {el.pricePerNight}/- per night</p>
          <p className="text-center fst-italic">Rating:{el.rating}</p>
         <a className="btn w-md-auto" style={{backgroundColor:"#9FE2BF",borderWidth:"2px",borderColor:"black"}}href="/contact us"><button className="btn fst-italic ">{el.button}</button></a>
        </div>
      ))}
      </div>
    </div>
    </>
  );
};
export default Hotels;