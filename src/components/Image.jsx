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
}) => {
  const [isLoaded, setLoaded] = useState(false);
  const generateRandom = () => Math.floor(Math.random() * 10);
  return (
    <div
      className="card rounded-xl"
      key={id}
      style={{ width: "500px", height: (height / 5) }}
    >
      <img
      className="rounded-xl"
      onClick={()=>{console.log("click")}}
      loading="lazy"
        style={{ width: "100%", height: "100%",objectFit:"cover" }}
        src={urls.regular}
        onLoad={() => {
          setTimeout(() => {
            setLoaded(true);
          }, generateRandom() * 70);
        }}
        alt={alt_description}
      />

      <div className={isLoaded ? "fade-animation" : ""} style={{ position: 'absolute',width: "100%", height: "100%" }}>
      <Blurhash
          style={{ width: "100%", height: "100%",}}
          hash={blur_hash}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      </div>
        
      
    </div>
  );
};

export default Image;
