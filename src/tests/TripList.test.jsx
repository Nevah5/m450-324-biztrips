import { getAllByTestId, render, screen, wait } from "@testing-library/react";
import {act} from 'react-dom/test-utils';
import TripList from "../components/TripList"
import { HttpService } from "../services/httpService";
import trips from '../../db.json';

test("test mocking", async () => {
    jest.spyOn(global, "fetch").mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve(trips)
    }))

    render(<TripList/>)

    (await screen.findAllByTestId('trip')).toBeInTheDocument()
})
