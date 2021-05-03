import React from "react";
import Nav from "../../src/components/Navbar";
import data from "../../src/data.json";
import Footer from "../../src/components/Footer";
import Img from "../../src/components/ImgZoom";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const product = data.filter((i) => i.id === router.query.pid)[0];
  const imgs = product?.imagenes.map((item) => {
    return <Img src={item} key={item} className="w-full my-28" alt={""} />;
  });
  const ProductView = () => {
    return (
      <div className="w-full md:flex">
        <div className="md:w-2/4 mx-8">{imgs}</div>
        <div className="md:w-2/4 my-10 mx-8 relative">
            <h1 className=" text-3xl font-black">{product?.nombre}</h1>
            <p className="my-4">{product?.descripcion}</p>
            <button className="w-full px-4 py-4 bg-black font-black text-white">
              Comprar Por ${product?.precio}
            </button>
        </div>
      </div>
    );
  };
  return (
    <div className="flex justify-center  bg-gray-200 min-h-screen">
      <div className="md:w-2/4 bg-white">
        <Nav />
        <ProductView />
        <Footer />
      </div>
    </div>
  );
};
export default Header;
