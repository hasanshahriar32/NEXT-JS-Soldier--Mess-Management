import MainLayout from "@/components/Layout/MainLayout";
import React from "react";

export default function Hotels({ hotels }) {
  console.log(hotels);
  return (
    <div className="flex flex-row flex-wrap gap-3">
      {hotels.map((hotel) => (
        <div key={hotel.id}>
          <div className="card w-96 bg-base-200 shadow-xl">
            <figure>
              <img
                src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {hotel.name}
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>{hotel.description}</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">
                  Rating: {hotel.rating}
                </div>
                <div className="badge badge-outline">
                  Price: {hotel.price_per_night}
                </div>
              </div>
            </div>
            <button className="btn btn-secondary">Book Now</button>
          </div>
        </div>
      ))}
    </div>
  );
}

// getStaticProps does ssg
export async function getStaticProps() {
  const res = await fetch("http://localhost:5000/hotels");
  const hotels = await res.json();
  //   console.log(hotels);
  return { props: { hotels }, revalidate: 10 };
}

Hotels.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
