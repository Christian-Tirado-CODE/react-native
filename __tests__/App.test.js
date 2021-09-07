import {render} from "@testing-library/react-native";

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
        //Arrange
         



    });


});