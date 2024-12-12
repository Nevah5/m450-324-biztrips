import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { HttpService } from "../services/httpService";

// functional component ProductList, deconstruct props!
function TripList({ addToWishlist }) {
  const [loading, setLoading] = useState(true);
  const [month, setMonth] = useState("");
  const [trips, setTrips] = useState([]);
  const months = ["Idle", "Jan", "Feb", "March", "April", "Mai", "June"];

  useEffect(() => {
    const httpService = new HttpService(process.env.REACT_APP_API_URL);
    setLoading(true);
    httpService.getAllTrips().then((data) => {
      setTrips(data);
      setLoading(false);
    });
  }, []);

  const empty = (
    <section>
      <p className="alert alert-info">Productlist is empty</p>
    </section>
  );

  // if month selected then filter the trips from month === month
  const filteredTrips = month
    ? trips.filter((t) => t.startTrip[1] === parseInt(month))
    : trips;

  const tripsMapped = (filteredTrips.length > 0 ? filteredTrips : trips).map(
    (trip) => <Trip addToWishlist={addToWishlist} trip={trip} key={trip.id} />
  );

  return (
    <div className="container">
      <section>
        <h2 data-test="triplist-header" className="h4">Triplist-Catalog</h2>
        <section id="filters">
          <label htmlFor="month">Filter by Month:</label>
          <select
            id="month"
            data-testid="month"
            value={month} // controlled component
            onChange={(e) => {
              //debugger;
              setMonth(e.target.value);
            }}
            data-test="filter-month"
          >
            <option value="">All Months</option>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">Mai</option>
            <option value="6">June</option>
          </select>
          {month && (
            <h2>
              Found {filteredTrips.length}
              {filteredTrips.length >= 1 ? " trips" : " trip"} for the month of
              {" " + months[month]}
            </h2>
          )}
        </section>
        <div className="row">
          {loading ? (
            <p className="alert alert-info">Loading...</p>
          ) : filteredTrips.length > 0 ? (
            tripsMapped
          ) : (
            empty
          )}
        </div>
      </section>
    </div>
  );
}
// deconstruct ...props
function Trip({ addToWishlist, ...props }) {
  // Props
  let { trip } = props;
  let { id, title, description } = trip;

  return (
    <div className="col-sm-6 col-md-4 col-lg-3" data-test="trip-item" data-testid="trip">
      <figure className="card card-product">
        <div className="img-wrap">
          <img src={"images/items/" + trip.id + ".jpg"} alt="name " />
        </div>
        <figcaption className="info-wrap">
          <h6 className="title">
            {id} {title} {trip.startTrip} {trip.endTrip}
          </h6>

          <p className="card-text">{description}</p>
          <div className="info-wrap row">
            <button
              type="button"
              className="btn btn-link btn-outline"
              onClick={() => addToWishlist(trip)}
              data-test="add-to-wishlist"
            >
              <i className="fa fa-shopping-cart" /> Add to Wishlist
            </button>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}

export default TripList;
