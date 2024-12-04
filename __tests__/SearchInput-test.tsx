import { render, RenderOptions, screen } from "@testing-library/react-native";
import { SearchInput } from "@/components/SearchInput";
import { Stack } from "expo-router";

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: Stack, ...options });

describe("Search input", () => {
  test("renders search input", () => {
    customRender(<SearchInput placeholder="Serach for a video topic" />);

    expect(screen.getByTestId("searchInputField")).toBeDefined();
  });
});
