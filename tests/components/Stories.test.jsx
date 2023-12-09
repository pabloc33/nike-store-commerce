import { render, screen } from "@testing-library/react";
import Stories from "../../src/components/Stories";
import "@splidejs/react-splide/css";

jest.mock("@splidejs/react-splide/css", () => "");

describe("Pruebas en <Stories />", () => {
  test("Debe de mostrar correctamente el componente", () => {
    const story = {
      title: "Test Title",
      news: [
        {
          img: "test-image.jpg",
          like: 10,
          time: "10 mins",
          by: "Test User",
          title: "Test News",
          text: "This is a test news story.",
          url: "https://www.example.com",
          btn: "Read More",
        },
      ],
    };

    render(<Stories story={story} />);

    // screen.debug();

    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.queryAllByText("Test News")[0]).toBeInTheDocument();
    expect(
      screen.queryAllByRole("button", { name: "Read More" })[0]
    ).toBeInTheDocument();
  });

  test("should not display any news stories when news prop is empty", () => {
    const story = {
      title: "Test Title",
      news: [],
    };

    render(<Stories story={story} />);

    expect(screen.queryByRole("list")).not.toBeInTheDocument();
  });
});
