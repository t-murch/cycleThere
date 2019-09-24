import React, { useEffect, useRef } from "react";
import { css } from "@emotion/core";
import { render } from "react-dom";

const Map = ({ options, onMount, className }) => {
  const divProps = { ref: useRef(), className };

  // const addMarkers = links => map => {
  //   links.forEach((link, index) => {
  //     const marker = new window.google.maps.Marker({
  //       map,
  //       position: link.coords,
  //       label: `${index + 1}`,
  //       title: link.title
  //     });
  //     marker.addListener("click", () => {
  //       window.location.href = link.url;
  //     });
  //   });
  // };

  useEffect(() => {
    const mapVar = process.env.MAP_KEY;
    const mapAPI = `https://maps.googleapis.com/maps/api/js?key=${mapVar}&libraries=places`;

    const onLoad = () => {
      const map = new window.google.maps.Map(divProps.ref.current, options);
      onMount && onMount(map);
    };

    if (!window.google) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = mapAPI;
      const parentScript = document.getElementsByTagName("script")[0];
      parentScript.parentNode.insertBefore(script, parentScript);
      script.addEventListener("load", onLoad);
      return () => script.removeEventListener("load", onLoad);
    } else {
      onLoad();
    }
  }, [divProps.ref, onMount, options]);

  return (
    <div
      css={css`
        height: 300px;
        width: 400px;
      `}
      {...divProps}
    />
  );
};

Map.defaultProps = {
  options: {
    center: { lat: 47.266171, lng: -122.448257 },
    zoom: 12,
    disableDefaultUI: true
  }
};

export default Map;
