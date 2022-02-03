import { useEffect, useState } from "react";
import Image from "next/image";

import AppWrapper from "components/app-wrapper";

import Me from "public/mitch.png";

const randomInterval = () => Math.round(Math.random() * 120 + 50);
const TAG = " Mitchel Pigsley ";

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (TAG.length > index) {
        setIndex(index + 1);
      }
    }, randomInterval());
  }, [index, setIndex]);

  return (
    <AppWrapper>
      <div className="container">
        <Image
          src={Me}
          alt="Mitchel Pigsley"
          width="150"
          height="150"
          placeholder="blur"
        />
        <div className="stage">{TAG.slice(0, index)}</div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          height: 100vh;
          width: 100vw;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .stage {
          color: rgba(0, 0, 0, 0.6);
          display: flex;
          flex-direction: column;
          font-size: 2rem;
          height: 70px;
          justify-content: center;
          text-align: center;
          width: 100%;
        }
      `}</style>
    </AppWrapper>
  );
}
