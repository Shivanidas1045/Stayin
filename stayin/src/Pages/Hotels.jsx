import React, { useState } from 'react'
import hotelRooms from './Data'


const Hotels = () => {
  const [filteredRooms,setFilteredRooms]=useState(hotelRooms)

  const filterRooms=(type)=>{
    if(type==="All"){
      setFilteredRooms(hotelRooms)
    }else{
      setFilteredRooms(hotelRooms.filter((elem)=>elem.type===type))
    }

  }



  return (
<>

    <div class="container text-center " style={{marginTop:"100px"}}>
      <h2 class="text-center fst-italic p-2 mb-5 mx-auto" style={{backgroundColor:"#9FE2BF"}}> Book your comfort Stay!</h2>


      <div className="text-center mb-4">
        <button className="btn btn-outline-dark mx-2 mb-2"  onClick={() => filterRooms("All")}>All</button>
        <button className="btn btn-outline-dark mx-2 mb-2" onClick={() => filterRooms("Deluxe Room")}>Deluxe</button>
        <button className="btn btn-outline-dark mx-2 mb-2" onClick={() => filterRooms("Suite")}>Suite</button>
        <button className="btn btn-outline-dark mx-2 mb-2" onClick={() => filterRooms("Standard Room")}>Standard </button>
        <button className="btn btn-outline-dark mx-2 mb-2" onClick={() => filterRooms("Family Suite")}>Family Suite </button>
        <button className="btn btn-outline-dark mx-2 mb-2" onClick={() => filterRooms("Luxury Villa")}>Luxury Villa</button>
      </div>

<div className='text-center mb-4'>
  <button  className="btn mx-2 mb-2 fst-italic"  style={{backgroundColor:"#9FE2BF",borderWidth:"3px",borderColor:"black"}} > Price Low To High</button>
  <button  className="btn mx-2 mb-2 fst-italic" style={{backgroundColor:"#9FE2BF",borderWidth:"3px",borderColor:"black"}}> Price High to Low</button>

  
</div>

    <div class="row">  {filteredRooms.map((el) => (
        <div class="col mb-5" key={el.id}>
          <img class="img-fluid" src={el.image} alt="hotel_images" className="hotelImg-hover" />
          <h3 class="text-center mt-4 fst-italic">{el.type}</h3>
          <p class="text-center fw-bold">Price: ₨ {el.pricePerNight}/- per night</p>
          <p class="text-center fst-italic">Rating:{el.rating}</p>
         <a class="btn w-md-auto" style={{backgroundColor:"#9FE2BF",borderWidth:"2px",borderColor:"black"}}href="/contact us"><button class="btn fst-italic ">{el.button}</button></a>
        </div>
      ))}
      </div>
    </div>
    </>
  );
};
export default Hotels;