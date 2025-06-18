import React from "react"

const ImageShow = ({image}) => {
  return (
    <div>
      {/* {image.alt_description}
       */}
       <img src={image.urls.small} alt={image.alt_discription} />
    </div>
  );
};

export default ImageShow;
