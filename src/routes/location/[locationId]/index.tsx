import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";

export default component$(() => {
  const location = useLocation();
  const locationId = location.params.locationId;
  return <div>Test location = {locationId}</div>;
});
