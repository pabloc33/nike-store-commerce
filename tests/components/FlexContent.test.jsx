import { render, screen } from "@testing-library/react";
import FlexContent from "../../src/components/FlexContent";

describe("Pruebas en <FlexContent />", () => {
  test("debe de mostrar correctamente el componente", () => {
    const props = {
      ifExists: true,
      endpoint: {
        heading: "Test Heading",
        title: "Test Title",
        text: "Test Text",
        btn: "Test Button",
        url: "https://example.com",
        img: "test-image.jpg",
      },
    };

    render(<FlexContent {...props} />);

    expect(screen.getByText(props.endpoint.heading)).toBeInTheDocument();
    expect(screen.getAllByRole("button")[0]).toHaveAttribute(
      "href",
      props.endpoint.url
    );
    expect(
      screen.getByAltText(`img/${props.endpoint.heading}`)
    ).toBeInTheDocument();
  });

  test("should display empty strings for missing endpoint properties", () => {
    const props = {
      ifExists: true,
      endpoint: {},
    };

    render(<FlexContent {...props} />);

    expect(screen.queryAllByText("")[0]).toBeInTheDocument();
  });
});
