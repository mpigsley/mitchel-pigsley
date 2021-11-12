import { useEffect, useState } from "react";
import Link from "next/link";

import AppWrapper from "components/app-wrapper";

const randomInterval = () => Math.round(Math.random() * 120 + 30);
const TAG =
  "One by one, the layers fall away. Faster now. Until, suddenly, the inevitable...";

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
        <div className="stage first-stage">
          {TAG.slice(0, index)}
          <b className="metamorphosis">metamorphosis</b>
        </div>
        <div className="stage second-stage">
          <Link href="/the-watcher/1">the watcher</Link>
        </div>
      </div>
      <style jsx>{`
        .container {
          font-size: 1.4rem;
          height: 100vh;
          position: relative;
          width: 100vw;
        }

        .stage {
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 100%;
          left: calc(50% - 8rem);
          position: absolute;
          text-align: center;
          transition: opacity 3s;
          width: 16rem;
        }

        .first-stage {
          opacity: ${typingComplete ? 0 : 1};
          transition-delay: 6s;
        }

        .second-stage {
          opacity: ${typingComplete ? 1 : 0};
          pointer-events: ${typingComplete ? "initial" : "none"};
          transition-delay: 9s;
        }

        .metamorphosis {
          font-size: 2rem;
          transition: opacity 5s;
          transition-delay: 1s;
          opacity: ${typingComplete ? 1 : 0};
        }
      `}</style>
    </AppWrapper>
  );
}
