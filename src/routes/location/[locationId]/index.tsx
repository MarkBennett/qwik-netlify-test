import { component$, Resource } from "@builder.io/qwik";
import { RequestHandler, useEndpoint } from "@builder.io/qwik-city";

interface CityDetails {
  id: string;
  name: string;
  motto: string;
  location: {
    lat: number;
    lng: number;
  };
  createdAt: number;
}

export const onGet: RequestHandler = ({ params }) => {
  const cityDetails: CityDetails = {
    id: params.locationId,
    name: "Edmonton",
    motto: "Yeg",
    location: {
      lat: 53.5444,
      lng: -113.4909,
    },
    createdAt: Date.now(),
  };
  return cityDetails;
};

export default component$(() => {
  const locationData = useEndpoint<CityDetails>();
  return (
    <Resource
      value={locationData}
      onPending={() => <div>Loading...</div>}
      onRejected={() => <div>ERROR!</div>}
      onResolved={(location) => {
        return (
          <>
            <h1>
              {location.name} ({location.id})
            </h1>
            <p>{location.motto}</p>
            <p>Lat: {location.location.lat}</p>
            <p>Lng: {location.location.lng}</p>
            <p>Created At: {location.createdAt}</p>
          </>
        );
      }}
    />
  );
});
