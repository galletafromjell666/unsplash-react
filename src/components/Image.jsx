import React, { useState } from "react";
import { Blurhash } from "react-blurhash";
const Image = ({
  id,
  created_at,
  height,
  color,
  blur_hash,
  urls,
  user,
  likes,
  links,
  alt_description,
  description,
  windowSize,
}) => {
  const [isLoaded, setLoaded] = useState(false);
  const generateRandom = () => Math.floor(Math.random() * 10);
  const calcColumnWidth = ({ innerWidth }) => {
    if (innerWidth < 690) {
      return `${innerWidth - 15}px`;
    } else if (innerWidth >= 690 && innerWidth <= 1024) {
      return `${innerWidth / 2 - 30}px`;
    } else if (innerWidth > 1024) {
      return `${innerWidth / 3 - 50}px`;
    }
  };
  const customHeightStyle = {
    width: calcColumnWidth(windowSize),
    height: `${height / 10}px`,
    "@media (maxWidth: 320px)": {
      height: `${height / 16}px`,
    },
    "@media (maxWidth: 768px)": {
      height: `${height / 8}px`,
    },
    "@media (maxWidth: 1024px)": {
      height: `${height / 5}px`,
    },
  };
  return (
    <div
      key={id}
      className={`flex mx-auto rounded-xl w-[300px] md:w-[360px] lg:w-[550px]`}
      style={customHeightStyle}
    >
      <img
        className="w-full h-full rounded-xl object-cover"
        loading="lazy"
        src={urls.regular}
        onLoad={() => {
          setTimeout(() => {
            setLoaded(true);
          }, generateRandom() * 70);
        }}
        alt={alt_description}
      />

      <div
        className={isLoaded ? "fade-animation" : ""}
        style={{ position: "absolute", width: "100%", height: "100%" }}
      >
        {blur_hash && <Blurhash
          style={{ width: "100%", height: "100%" }}
          hash={blur_hash}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />}
      </div>
    </div>
  );
};

export default Image;
