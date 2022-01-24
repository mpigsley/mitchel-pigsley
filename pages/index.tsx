import { useEffect, useState } from "react";
import Link from "next/link";

import AppWrapper from "components/app-wrapper";

const randomInterval = () => Math.round(Math.random() * 120 + 50);
const TAG = "Mitchel Pigsley";

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (TAG.length > index) {
        setIndex(index + 1);
      }
    }, randomInterval());
  }, [index, setIndex]);

  const typingComplete = index === TAG.length;

  return (
    <AppWrapper>
      <div className="container">
        <div className="stage">{TAG.slice(0, index)}</div>
      </div>
      <style jsx>{`
        .container {
          height: 100vh;
          position: relative;
          width: 100vw;
        }

        .stage {
          display: flex;
          flex-direction: column;
          font-size: 4rem;
          justify-content: center;
          height: 100%;
          text-align: center;
          width: 100%;
        }
      `}</style>
    </AppWrapper>
  );
}
