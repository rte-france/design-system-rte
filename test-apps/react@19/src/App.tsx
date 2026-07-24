import { Link, NavigationProvider } from "@design-system-rte/react";
import { Outlet, Link as RouterLink } from "react-router";

import "./App.css";

function App() {
  return (
    <NavigationProvider linkComponent={RouterLink}>
      <>
        <div>
          <h1>Welcome to the Design System RTE App</h1>
          <Link subtle={true} reverse={true} to="/home" label="Home" />
          <Link to="/products/123" label="Product 123" />
        </div>
        <Outlet />
      </>
    </NavigationProvider>
  );
}

export default App;
