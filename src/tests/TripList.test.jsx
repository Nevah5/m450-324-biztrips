import { render, screen, waitFor } from "@testing-library/react";
import TripList from "../components/TripList";
import trips from '../../db.json';

test("test mocking", async () => {
    jest.spyOn(global, "fetch").mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve(trips.trips)
    }));

    render(<TripList addToWishlist={() => {}} />);

    await waitFor(() => {
        expect(screen.getAllByTestId('trip')).toHaveLength(trips.trips.length);
    });
});