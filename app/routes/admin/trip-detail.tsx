import type { LoaderFunctionArgs } from "react-router";
import { getAllTrips, getTripById } from "~/appwrite/trips";
import type { Route } from "./+types/trip-detail";
import { cn, getFirstWord, parseTripData } from "~/lib/utils";
import {
  ChipDirective,
  ChipListComponent,
  ChipsDirective,
} from "@syncfusion/ej2-react-buttons";
import { Header, InfoPills } from "components";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const { tripId } = params;
  if (!tripId) {
    throw new Error("Trip ID is required");
  }

  return await getTripById(tripId);
};

const TripDetail = ({ loaderData }: Route.ComponentProps) => {
  const imageUrls = loaderData?.imageUrls || [];
  const tripData = parseTripData(loaderData?.tripDetail);
  const {
    name,
    duration,
    itinerary,
    budget,
    groupType,
    travelStyle,
    interests,
    estimatedPrice,
    description,
    bestTimeToVisit,
    weatherInfo,
    country,
  } = tripData || {};

  const pillItems = [
    {
      text: travelStyle,
      bg: "!bg-pink-200 !text-pink-500",
    },
    {
      text: groupType,
      bg: "!bg-primary-200 !text-primary-500",
    },
    {
      text: budget,
      bg: "!bg-success-200 !text-success-700",
    },
    {
      text: interests,
      bg: "!bg-amber-100 !text-amber-600",
    },
  ];

  return (
    <main className="travel-detail wrapper">
      <Header
        title="Trip Details"
        description="View and Edit AI generated travel plans"
      />

      <section className="container wrapper-md">
        <header>
          <h1 className="p-40-semibold text-dark-100">{name}</h1>
          <div className="flex items-center gap-5">
            <InfoPills
              text={`${duration} day plan`}
              image="/assets/icons/calendar.svg"
            />
            <InfoPills
              text={`${
                itinerary
                  ?.slice(0, 2)
                  .map((item) => item.location)
                  .join(", ") || ""
              }`}
              image="/assets/icons/location-mark.svg"
            />
          </div>
        </header>

        {/* Trip Image Gallery */}
        <section className="gallery">
          {imageUrls.map((url: string, i: number) => (
            <img
              src={url}
              key={i}
              className={cn(
                "w-full rounded-xl object-cover",
                i === 0
                  ? "md:col-span-2 md:row-span-2 h-[330px]"
                  : "md:row-span-1 h-[150px]"
              )}
            />
          ))}
        </section>

        {/* Trip Details */}
        <section className="flex gap-3 md:gap-5 items-center flex-wrap">
          <ChipListComponent id="travel-chip">
            <ChipsDirective>
              {pillItems.map((pill, i) => (
                <ChipDirective
                  key={i}
                  text={getFirstWord(pill.text)}
                  cssClass={`${pill.bg} !text-base !font-medium !px-4`}
                />
              ))}
            </ChipsDirective>
          </ChipListComponent>
        </section>
      </section>
    </main>
  );
};

export default TripDetail;
