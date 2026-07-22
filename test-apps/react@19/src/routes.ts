import { index, route, type RouteConfig } from "@react-router/dev/routes";

export default [index("./home.tsx"), route("products/:pid", "./product.tsx")] satisfies RouteConfig;
