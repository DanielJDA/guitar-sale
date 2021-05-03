import React from "react";
import Nav from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import Img from "../src/components/ImgZoom"


import "react-medium-image-zoom/dist/styles.css";

interface aboutProps {}
const about: React.FC<aboutProps> = () => {
  return (
    <div className="flex justify-center bg-gray-200 min-h-screen">
      <div className=" w-2/4 bg-white">
        <Nav />
        <div className="px-6">
          <h1 className="text-6xl font-bold my-8">Qué Somos, WeaGuitar</h1>
          <p className="">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the
            <b>1960s</b> with the release of Letraset sheets containing Lorem
            Ipsum passages, and more recently with desktop publishing software
            like Aldus PageMaker including versions of <b>Lorem</b> Ipsum.
          </p>
          <p className="mt-4 mb-6">
            Remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of This is a Link to External Web
            Ipsum.
          </p>
          <Img src={"/image.png"} className="w-full my-8" alt={"mujer cantando"}/>
          <p className="my-8">En nombre de nuestra fundadora, Marina Camello, muchas gracias!</p>
        </div>
        <Footer/>
      </div>
    </div>
  );
};
export default about;
