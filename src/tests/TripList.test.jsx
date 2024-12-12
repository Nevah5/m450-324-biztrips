import { render, shallow, screen, waitFor, fireEvent } from "@testing-library/react";
import TripList from "../components/TripList";
import trips from '../../db.json';
import Wishlist from "../components/Wishlist";
import App from "../App";

beforeEach(() => {
    jest.spyOn(global, "fetch").mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve(trips.trips)
    }));
})

test("A user can list all business trips", async () => {
    render(<TripList addToWishlist={() => {}} />);

    await waitFor(() => {
        expect(screen.getAllByTestId('trip')).toHaveLength(trips.trips.length);
    });
});

test("A user can filter the list of business trips by month", async () => {
    render(<TripList addToWishlist={() => {}}/>);

    const month = screen.getByTestId("month");

    month.value = "2";

    fireEvent.change(month)

    await waitFor(() => {
        expect(screen.getAllByTestId('trip')).toHaveLength(1);
    })
});

test("A user can add a business trip to his wishlist", async () => {
    render(<App/>)

    await waitFor(() => {
        const trips = screen.getAllByTestId('trip').slice(0, 2);

        trips.forEach(trip => {
            const button = trip.querySelector("button");
            button.click()
        })

        expect(screen.getAllByTestId("whishlist-item")).toHaveLength(2)
    })
    
});
