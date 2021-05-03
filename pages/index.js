import React, { useState } from "react";
import Nav from "../src/components/Navbar";
import Caroucel from "../src/components/Carrusel";
import data from "../src/data.json";
import Footer from "../src/components/Footer";
import { Slider } from "../src/components/Slider";
import { BsArrowRight } from "react-icons/bs";
import { useRouter } from "next/router";

const Header = () => {
  const [precio, setPrecio] = useState();
  const [nombre, setNombre] = useState();

  const onPrecioChange = (event) => {
    setPrecio(event.target.value);
    filtro();
  };
  const onNombreChange = (event) => {
    setNombre(event.target.value);
    filtroNombre(event.target.value);
  };
  const [state, setState] = useState(data);
  const filtro = () => {
    setState(data.filter((i) => i.precio <= precio * 1));
  };
  const filtroNombre = (nombre) => {
    setState(
      data.filter((i) => i.nombre.toLowerCase().match(nombre.toLowerCase()))
    );
  };

  const data1 = state.map((item) => {
    const router = useRouter();
    return (
      <div className="text-center" key={item.id}>
        <button
          className="font-bold text-3xl"
          onClick={() => router.push(`/info/${item.id}`)}
        >
          {item.nombre}
        </button>
        <Caroucel src={item.imagenes} children={item.nombre} />
      </div>
    );
  });
  return (
    <div className="flex justify-center bg-gray-200 min-h-screen">
      <div className="w-2/4 bg-white items-stretch flex flex-col">
        <div>
          <Nav />
          <div className="w-full my-8">
            <section className="flex-centered mx-6 ">
              <div className="flex items-center justify-center">
                <span className=" text-lg">PRICE</span>
                <Slider
                  step="1"
                  max="999"
                  name="price"
                  value={precio}
                  onChange={onPrecioChange}
                  type="range"
                  className="w-full mx-2 mt-3 focus:outline-none"
                />
                <span className=" text-sm uppercase">
                  <span>${precio}</span>
                  <span className="font-bold">/$999</span>
                </span>
              </div>
            </section>
            <section className="mt-2 mx-6 relative">
              <input
                type="text"
                name="name"
                value={nombre}
                onChange={onNombreChange}
                placeholder="FILTER BY NAME"
                className="border-b w-full font-semibold border-black focus:outline-none"
              />
              <button className="absolute right-0 top-0 text-2xl px-2">
                <BsArrowRight />
              </button>
            </section>
          </div>
          {data1}
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default Header;
