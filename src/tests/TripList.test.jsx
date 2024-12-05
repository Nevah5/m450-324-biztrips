import { render, shallow, screen, waitFor, fireEvent } from "@testing-library/react";
import TripList from "../components/TripList";
import trips from '../../db.json';

test("A user can list all business trips", async () => {
    jest.spyOn(global, "fetch").mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve(trips.trips)
    }));

    render(<TripList addToWishlist={() => {}} />);

    await waitFor(() => {
        expect(screen.getAllByTestId('trip')).toHaveLength(trips.trips.length);
    });
});

test("A user can filter the list of business trips by month", async () => {
    jest.spyOn(global, "fetch").mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve(trips.trips)
    }));

    render(<TripList addToWishlist={() => {}}/>);

    const month = screen.getByTestId("month");

    month.value = "2";

    fireEvent.change(month)

    await waitFor(() => {
        expect(screen.getAllByTestId('trip')).toHaveLength(1);
    })
});

