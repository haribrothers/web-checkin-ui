// app
import { HomeRoutes } from './home/home.routes';
import { AboutRoutes } from './about/about.routes';
import { JoinMiles } from './joinmiles/joinmiles.routers';
import { FlightPaxInfoRoutes } from './flight-pax-info/flight-pax-info.routes';
import { TermsRoutes } from './terms/terms.routes';
import { CheckTravelRoutes } from './checkTravel/checkTravel.routes';

export const routes: Array<any> = [
  ...HomeRoutes,
  ...AboutRoutes,
  ...JoinMiles,
  ...FlightPaxInfoRoutes,
  ...TermsRoutes,
  ...CheckTravelRoutes
];
