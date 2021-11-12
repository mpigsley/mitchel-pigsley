export default function AppWrapper({ children }) {
  return (
    <>
      {children}
      <style jsx global>{`
        html {
          background-color: #f5efdc;
          color: #46380a;
          font-family: "Hina Mincho", serif;
        }

        * {
          font-size: 1.1rem;
        }

        a {
          color: #46380a;
          font-style: italic;
          font-weight: 700;
        }
      `}</style>
    </>
  );
}
