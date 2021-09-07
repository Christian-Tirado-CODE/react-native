import React from "react";
import {render} from "@testing-library/react-native";
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
        
    });

    test("Renders correctly", () => {
        //ASSERT
        const fetchUsersButton = component.getByTestId('load-users-btn');
        const userList = component.queryAllByTestId("users-container");
        expect(component).toBeDefined();
        expect(fetchUsersButton).toBeDefined();
        expect(userList.length).toEqual(0);
    });

    test("Renders User list once the the API has been called", () => {


    });


});