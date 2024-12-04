import { fireEvent, render, screen } from "@testing-library/react-native";
import { FormField } from "@/components/FormField";

describe("formfield tests", () => {
  test("renders label", () => {
    render(<FormField label="test label" />);
    const label = screen.getByTestId("label");
    expect(label).toHaveTextContent("test label");
    expect(screen.toJSON()).toMatchSnapshot();
  });

  test("renders input", () => {
    const onChange = jest.fn();
    render(<FormField label="test label" onChangeText={onChange} />);
    const input = screen.getByTestId("input");
    fireEvent.changeText(input, "new");
    expect(onChange).toHaveBeenCalledWith("new");
  });
});
