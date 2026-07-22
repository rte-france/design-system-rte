import { Link, NavigationProvider } from "@design-system-rte/react";
import { Outlet, Link as RouterLink } from "react-router";

import "./App.css";

const RouterLinkAdapter = ({ href, ...props }) => <RouterLink to={href} {...props} />;

function App() {
  return (
    <NavigationProvider linkComponent={RouterLinkAdapter}>
      <>
        <div>
          <h1>Welcome to the Design System RTE App</h1>
          <Link subtle={true} reverse={true} href="/home" label="Home" />
          <Link href="/products/123" label="Product 123" />
        </div>
        <Outlet />
      </>
    </NavigationProvider>
  );
}

export default App;
