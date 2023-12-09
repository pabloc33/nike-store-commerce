import { render, screen } from "@testing-library/react";
import Footer from "../../src/components/Footer";

describe("Pruebas en <Footer />", () => {
  test("debe de mostrar el componente correctamente", () => {
    const titles = [{ title: "Title 1" }, { title: "Title 2" }];
    const links = [[{ link: "Link 1" }, { link: "Link 2" }]];
    const footerAPI = { titles, links };

    render(<Footer footerAPI={footerAPI} />);

    expect(screen.getByTestId("footer")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toHaveClass("bg-theme pt-7 pb-5");
  });

  test("should display the correct titles and links passed as props", () => {
    const titles = [{ title: "Title 1" }, { title: "Title 2" }];
    const links = [[{ link: "Link 1" }, { link: "Link 2" }]];
    const footerAPI = { titles, links };

    render(<Footer footerAPI={footerAPI} />);

    titles.forEach((title) => {
      expect(screen.getByText(title.title)).toBeInTheDocument();
    });

    links.forEach((list) => {
      list.forEach((link) => {
        expect(screen.getByText(link.link)).toBeInTheDocument();
      });
    });
  });
});
