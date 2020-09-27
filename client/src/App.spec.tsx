import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import App from "./App";
import { WrapWithProviders } from "./WrapWithProviders";

Enzyme.configure({ adapter: new Adapter() });

test("should render App", () => {
  mount(<App />, { wrappingComponent: WrapWithProviders() });
});
