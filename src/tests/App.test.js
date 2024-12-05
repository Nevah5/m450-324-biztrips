import {logRoles, render, screen} from "@testing-library/react";
//import useFetch from "./services/useFetch";
//import {getBusinessTrips} from "./services/tripsService";
/*
it("ret without crashing", () => {
  shallow(<App />);
});
*/

/*it("renders Account header", () => {
  const wrapper = shallow(<App />);
  const welcome = <h1>Welcome to biztrips</h1>;
  expect(wrapper.contains(welcome)).toEqual(true);
});*/

test.skip('App renders a heading', () => {
  render(<App />)

  screen.getByRole('heading', {
    name: "Welcome to biztrips Happy new Year-react - 2024",
  })

});

