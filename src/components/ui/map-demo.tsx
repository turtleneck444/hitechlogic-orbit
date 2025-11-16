import { WorldMap } from "./map";

export default function MapDemo() {
  return (
    <div className="w-full min-h-screen bg-white">
      <div className="max-w-7xl mx-auto text-center py-20">
        <h1 className="font-black text-2xl md:text-4xl text-slate-900">
          Global Network
        </h1>
        <p className="text-sm md:text-lg text-slate-600 max-w-xl mx-auto py-4">
          Connect with teams and clients worldwide. Our platform enables seamless
          collaboration across continents, bringing the world to your workspace.
        </p>
      </div>
      <WorldMap
        dots={[
          {
            start: {
              lat: 64.2008,
              lng: -149.4937,
              label: "Fairbanks"
            },
            end: {
              lat: 34.0522,
              lng: -118.2437,
              label: "Los Angeles"
            },
          },
          {
            start: {
              lat: 64.2008,
              lng: -149.4937,
              label: "Fairbanks"
            },
            end: {
              lat: -15.7975,
              lng: -47.8919,
              label: "Brasília"
            },
          },
          {
            start: {
              lat: -15.7975,
              lng: -47.8919,
              label: "Brasília"
            },
            end: {
              lat: 38.7223,
              lng: -9.1393,
              label: "Lisbon"
            },
          },
          {
            start: {
              lat: 51.5074,
              lng: -0.1278,
              label: "London"
            },
            end: {
              lat: 28.6139,
              lng: 77.209,
              label: "New Delhi"
            },
          },
          {
            start: {
              lat: 28.6139,
              lng: 77.209,
              label: "New Delhi"
            },
            end: {
              lat: 43.1332,
              lng: 131.9113,
              label: "Vladivostok"
            },
          },
          {
            start: {
              lat: 28.6139,
              lng: 77.209,
              label: "New Delhi"
            },
            end: {
              lat: -1.2921,
              lng: 36.8219,
              label: "Nairobi"
            },
          },
        ]}
      />
    </div>
  );
}
