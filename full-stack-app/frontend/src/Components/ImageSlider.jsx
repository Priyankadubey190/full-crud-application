import { Image } from "@chakra-ui/react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

export const ImageSlider = () => {
  const images = [
    "https://github.com/Priyankadubey190/full-crud-application/raw/main/full-stack-app/frontend/src/images/topimg1.jpg",
    "https://github.com/Priyankadubey190/full-crud-application/raw/main/full-stack-app/frontend/src/images/top-img-2.jpg",
    "https://github.com/Priyankadubey190/full-crud-application/raw/main/full-stack-app/frontend/src/images/img-top-4.webp",
    "https://github.com/Priyankadubey190/full-crud-application/raw/main/full-stack-app/frontend/src/images/top-img-5.jpg",
    //  "https://res.cloudinary.com/dyocvbqbf/image/upload/v1668103033/Manuals/harrypottershop-gallery-interior_y6nsbh_new8zg.jpg",
    //  "https://res.cloudinary.com/dyocvbqbf/image/upload/v1668103578/Manuals/Kowalski_Quality_Baked_Goods_in_1932_vmwqqi_fcnlrs.jpg",
  ];
  return (
    <Carousel controls={false} pause={false}>
      {images.map((item) => (
        <Carousel.Item key={item} interval={3000}>
          <Image
            className="d-block w-100"
            src={item}
            maxH={600}
            alt="Slide image"
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
