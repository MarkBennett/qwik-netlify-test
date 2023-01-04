import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div>
      <h1>
        Welcome to Mark's Qwik Netlify Test <span class="lightning">⚡️</span>
      </h1>

      <Link
        class="bg-blue-300 p-4 inline-block mt-4 mb-4 shadow-lg rounded hover:bg-blue-500"
        href="/location/edmonton"
      >
        Blow my mind 🤯
      </Link>

      <ul class="list-disc pl-4 mb-4">
        <li>✅ Deploy a Qwik site on Netlify</li>
        <li>✅ Handle dynamic routes with params</li>
        <li>✅ Retrieve static data with `onGet`</li>
        <li>Retrieve Contentful data with `onGet`</li>
        <li>Render an image asset from Contentful</li>
        <li>
          Use the{" "}
          <a href="https://www.contentful.com/developers/docs/references/images-api/">
            Contentful Image API
          </a>{" "}
          to render a responsive image
        </li>
      </ul>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Mark's Qwik Netlify Test",
  meta: [
    {
      name: "description",
      content: "A site to test Netlify Qwik integration",
    },
  ],
};
