import React from "react";
import { render, fireEvent, act, waitFor } from "@testing-library/react-native";
import App from "../App";
let component;

/*When writing tests keep in mind the three A's:
Arrange - Set up the test data, test conditions and test environment.
Act - Run logic that should be tested(e.g. execute functions).
Assert - Compare execution results with expected results. */

describe("<App />", () => {
  beforeEach(() => {
    //Arrange
    component = render(<App />);

    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve([
            {
              id: 1,
              name: "Leanne Graham",
              username: "Bret",
              email: "Sincere@april.biz",
              address: {
                street: "Kulas Light",
                suite: "Apt. 556",
                city: "Gwenborough",
                zipcode: "92998-3874",
                geo: {
                  lat: "-37.3159",
                  lng: "81.1496",
                },
              },
              phone: "1-770-736-8031 x56442",
              website: "hildegard.org",
              company: {
                name: "Romaguera-Crona",
                catchPhrase: "Multi-layered client-server neural-net",
                bs: "harness real-time e-markets",
              },
            },
          ]),
      })
    );
  });

  test("Renders correctly", () => {
    //ASSERT
    const fetchUsersButton = component.getByTestId("load-users-btn");
    const userList = component.queryAllByTestId("users-container");
    expect(component).toBeDefined();
    expect(fetchUsersButton).toBeDefined();
    expect(userList.length).toEqual(0);
  });

  test("Renders User list once the the API has been called", () => {
    const userList = component.queryAllByTestId("users-container");
    const fetchUsersButton = component.getByTestId("load-users-btn");

    act(() => {
      fireEvent(fetchUsersButton, "press");
    });
    waitFor(() => expect(userList).toBeDefined());
  });
});
