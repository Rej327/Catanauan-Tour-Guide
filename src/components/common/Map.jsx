import React from "react";
import GoogleMapReact from "google-map-react";
import { ImLocation } from "react-icons/im";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Map() {
  const defaultProps = {
    center: {
      lat: 13.595128,
      lng: 122.322981,
    },
    zoom: 17.5,
  };

  return (
    // Important! Always set the container height explicitly
    <div className="w-full h-[15rem]">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={13.595363}
          lng={122.322656}
          text={<ImLocation className="text-4xl text-red-600" />}
        />
      </GoogleMapReact>
    </div>
  );
}
