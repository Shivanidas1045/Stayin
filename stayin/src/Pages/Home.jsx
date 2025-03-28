import React from 'react'

const Home = () => {
  return (
    <div>
<div id="hotelCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {/* First Slide */}
        <div className="carousel-item active">
          <img src="https://media.istockphoto.com/id/146765403/photo/a-luxurious-florida-beach-hotel-during-sunrise.webp?a=1&b=1&s=612x612&w=0&k=20&c=dQ7RaR3U9eevzCS08Hs45oToRAtrJT4wI69QZ06L0W0=" className="d-block w-100" alt="Hotel Room 1" />
          <div className="carousel-caption d-none d-md-block">
            <h5 class="text fst-italic fs-1 fw-3">Luxury Suite</h5>
            <p  class="text fst-italic fs-2 fw-4">Experience the best comfort and luxury.</p>
           <a href="/hotels"><button class="btn text-dark fw-1 fst-italic p-3" style={{backgroundColor:"#9FE2BF"}}>BOOK NOW</button></a>
          </div>
        </div>

        {/* Second Slide */}
        <div className="carousel-item">
          <img src="https://media.istockphoto.com/id/514102692/photo/udaipur-city-palace-in-rajasthan-state-of-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=vrI8mr6Plncbv77t_y2ejmc7snDlFR9hE-UefEDjn24=" className="d-block w-100" alt="Hotel Room 2" />
          <div className="carousel-caption d-none d-md-block">
            <h5  class="text fst-italic fs-1 fw-3">Beautiful Villa</h5>
            <p class="text fst-italic fs-2 fw-4">Relax and enjoy the stunning view.</p>
            <a href="/hotels"><button class="btn text-dark fw-1 fst-italic p-3" style={{backgroundColor:"#9FE2BF"}}>BOOK NOW</button></a>

          </div>
        </div>

        {/* Third Slide */}
        <div className="carousel-item">
          <img src="https://media.istockphoto.com/id/1159108633/photo/tanning-beds-beside-swimming-pool-in-tropical-resort-in-maldives.webp?a=1&b=1&s=612x612&w=0&k=20&c=fJWSFGJIwhKcpRDJOHnQUY7-NDyUSByuCO6rQMcYwzg=" className="d-block w-100" alt="Hotel Lobby" />
          <div className="carousel-caption d-none d-md-block">
            <h5  class="text fst-italic fs-1 fw-3">Pool View</h5>
            <p class="text fst-italic fs-2 fw-4">Feel the warmth of Sun.</p>
            <a href="/hotels"><button class="btn text-dark fw-1 fst-italic p-3" style={{backgroundColor:"#9FE2BF"}}>BOOK NOW</button></a>

          </div>
        </div>




        <div className="carousel-item">
          <img src="https://media.istockphoto.com/id/1365312403/photo/luxury-classic-interior-lounge-lobby-reception-with-leather-sofa-book-shelf-living-room.webp?a=1&b=1&s=612x612&w=0&k=20&c=Eham2UwCCJKx7hi6qoe2em33JMC6nNXB3bs6PFMKm08=" className="d-block w-100" alt="Hotel Lobby" />
          <div className="carousel-caption d-none d-md-block">
            <h5  class="text fst-italic fs-1 fw-3">Elegant Room with a library</h5>
            <p class="text fst-italic fs-2 fw-4">Feel the warmth ofMorning.</p>
            <a href="/hotels"><button class="btn text-dark fw-1 fst-italic p-3" style={{backgroundColor:"#9FE2BF"}}>BOOK NOW</button></a>

          </div>
        </div>



        <div className="carousel-item">
          <img src="https://media.istockphoto.com/id/1159873271/photo/residential-area-in-the-city-modern-apartment-buildings.webp?a=1&b=1&s=612x612&w=0&k=20&c=UPGYUizgpn2HOy61jZzw2XqjrJ3CsOzsgFHNhZJBnKA=" className="d-block w-100" alt="Hotel Lobby" />
          <div className="carousel-caption d-none d-md-block">
            <h5  class="text fst-italic fs-1 fw-3">Elegant Room with Ouside View</h5>
            <p class="text fst-italic fs-2 fw-4">Enjoy the Stay!.</p>
            <a href="/hotels"><button class="btn text-dark fw-1 fst-italic p-3" style={{backgroundColor:"#9FE2BF"}}>BOOK NOW</button></a>

          </div>
        </div>



      </div>

      {/* Previous Button */}
      <button className="carousel-control-prev" type="button" data-bs-target="#hotelCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      {/* Next Button */}
      <button className="carousel-control-next" type="button" data-bs-target="#hotelCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>


    <div class="container text-center">
        <h1 class="text-center fst-italic mt-5 mb-3">Offers & Promotion</h1>
  <div class="row row-cols-2 ">
    <div class="col"><img class="img mb-3" src="https://www.lemontreehotels.com/assets/fronts/new-images/infinity-banner-pre-sign-in-dstp.webp" alt="img1" /></div>
    <div class="col"><img src="https://www.lemontreehotels.com/assets/fronts/new-images/sunday-redefined.webp" alt="img2" /></div>
    <div class="col"><img src="https://www.lemontreehotels.com/assets/fronts/new-images/happy-hour.jpg" alt="img3" /></div>
    <div class="col"><img src="https://www.lemontreehotels.com/assets/fronts/new-images/Day-Cation-616x225.jpg" alt="img4" /></div>
  </div>
</div>
  


        
    </div>
  )
}

export default Home