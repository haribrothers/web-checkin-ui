// app
import { HomeRoutes } from './home/home.routes';
import { AboutRoutes } from './about/about.routes';
import { JoinMiles } from './joinmiles/joinmiles.routers';

export const routes: Array<any> = [
  ...HomeRoutes,
  ...AboutRoutes,
  ...JoinMiles
];
