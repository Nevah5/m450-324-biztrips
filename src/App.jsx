import React, {useState} from "react";
import "./App.css";

import Footer from "./Footer";
import Header from "./Header";
import TripList from "./components/TripList";
import Wishlist from "./components/Wishlist";


export default function App() {
    const [wishlist, setWishlist] = useState([]); // [1,2,3,4,5


    // wishlist functions
    function addToWishlist(trip) {
        console.log("add to wishlist->", trip);
        const {id, title, description, startTrip, endTrip} = trip;
        setWishlist((trip) => {
            const tripInWishlist = trip.find((t) => t.id === id);
            if (tripInWishlist) {
                return trip;
            } else {
                return [...trip, {id, title, description, startTrip, endTrip}];
            }
        });
    }

    function removeFromWishlist(item) {
        console.log(item);
        setWishlist((trip) => trip.filter((t) => t.id !== trip.id));

    }


    function clearWishlist() {
        setWishlist([]);
    }


// if month selected then filter the trips from month === month

// if error then throw the error

// shorthand for react fragment
    return (
        <>
            <div>
                <Header/>
                <main>
                    <h1>Welcome to biztrips Happy new Year-react - 2024</h1>

                    <Wishlist wishlist={wishlist} removeFromWishlist={() => removeFromWishlist()}
                              clearWishlist={() => clearWishlist()}/>
                    {/*   <WishList />*/}
                    <TripList addToWishlist={addToWishlist}/>

                </main>
            </div>
            <Footer/>
        </>
    );
}
