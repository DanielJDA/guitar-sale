import { useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import styled from "styled-components";

export const Slider = styled.input`
  appearance: none;
  &::-webkit-slider-runnable-track {
    cursor: pointer;
    background: transparent;
    border-top: 1px solid black;
  }
  &::-moz-range-track {
    cursor: pointer;
    background: transparent;
    border-top: 1px solid black;
  }
  &::-webkit-slider-thumb {
    appearance: none;
    border: 1px solid #000000;
    height: 20px;
    width: 20px;
    border-radius: 12px;
    background: black;
    cursor: pointer;
    margin-top: -11px;
  }
  &::-moz-range-thumb {
    appearance: none;
    border: 1px solid #000000;
    height: 24px;
    width: 24px;
    border-radius: 12px;
    background: black;
    cursor: pointer;
    margin-top: -14px;
  }
`;

export default function Filters() {
  return (
    <div className="border-b bg-white my-8 w-full z-0 flex-centered">
      <div className="px-4 w-full flex-centered flex-wrap md:space-x-8">
        <section className="flex-centered w-full space-x-4">
          <div className="flex items-center justify-center w-full">
            <span className="-mt-3 text-lg">PRICE</span>
            <Slider
              step="1"
              max="999"
              name="price"
              //value={filters?.price}
              //onChange={handleFilterUpdate}
              type="range"
              className="w-full focus:outline-none"
            />
            <span className="-mt-6 text-sm uppercase">
              <span>$98</span>
              <span className="font-bold">/$999</span>
            </span>
          </div>
        </section>
      </div>
    </div>
  );
}
