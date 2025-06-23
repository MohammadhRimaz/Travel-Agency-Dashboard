import type { LoaderFunctionArgs } from "react-router";
import { getAllTrips, getTripById } from "~/appwrite/trips";
import type { Route } from "./+types/trip-detail";
import { cn, getFirstWord, parseTripData } from "~/lib/utils";
import {
  ChipDirective,
  ChipListComponent,
  ChipsDirective,
} from "@syncfusion/ej2-react-buttons";
import { Header } from "components";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const { tripId } = params;
  if (!tripId) {
    throw new Error("Trip ID is required");
  }

  return await getTripById(tripId);
};

const TripDetail = ({ loaderData }: Route.ComponentProps) => {
  const tripData = parseTripData(loaderData?.tripDetail);
  const { name } = tripData || {};
  return (
    <main className="travel-detail wrapper">
      <Header
        title="Trip Details"
        description="View and Edit AI generated travel plans"
      />

      <section className="container wrapper-md">
        <header>
          <h1 className="p-40-semibold text-dark-100">{name}</h1>
        </header>
      </section>
    </main>
  );
};

export default TripDetail;
