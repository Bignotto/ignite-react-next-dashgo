import { render } from "@testing-library/react";
import { ActiveLink } from "../../components/ActiveLink";

jest.mock("next/router", () => {
  return {
    useRouter() {
      return {
        asPath: "/dd",
      };
    },
  };
});

describe("ActiveLink component", () => {
  it("should render correctly", () => {
    const { getByText } = render(
      <ActiveLink href="/" exactMatch>
        <a>Home</a>
      </ActiveLink>
    );

    expect(getByText("Home")).toBeInTheDocument();
  });

  it("should render pink when active", () => {
    const { getByText } = render(
      <ActiveLink href="/" exactMatch>
        <a>Home</a>
      </ActiveLink>
    );
    expect(getByText("Home")).toHaveStyle(`color:"pink.400"`);
  });

  it("should NOT render pink when active", () => {
    const { getByText } = render(
      <ActiveLink href="/" exactMatch>
        <a>Home</a>
      </ActiveLink>
    );
    expect(getByText("Home")).toHaveStyle(`color:"gray.50"`);
  });
});
