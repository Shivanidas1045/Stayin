import React from 'react'
import hotelRooms from './Data'


const Hotels = () => {
  

  return (
    <div class="container text-center " style={{marginTop:"100px"}}>
      <h2 class="text-center fst-italic p-2 mb-5" style={{backgroundColor:"#9FE2BF"}}> Book your comfort Stay!</h2>
    <div class="row">  {hotelRooms.map((el) => (
        <div class="col mb-5" key={el.id}>
          <img src={el.image} alt="hotel_images" className="hotelImg-hover" />
          <h3 class="text-center mt-4 fst-italic">{el.type}</h3>
          <p class="text-center fw-bold">Price: ₨ {el.pricePerNight}/- per night</p>
          <p class="text-center fst-italic">Rating:{el.rating}</p>
         <a class="btn" style={{backgroundColor:"#9FE2BF",borderWidth:"2px",borderColor:"black"}}href="/contact us"><button class="btn fst-italic ">{el.button}</button></a>
        </div>
      ))}
      </div>
    </div>
  );
};
export default Hotels;