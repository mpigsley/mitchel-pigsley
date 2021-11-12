import AppWrapper from "components/app-wrapper";

export default function StoryWrapper({ children }) {
  return (
    <AppWrapper>
      <div className="story">{children}</div>
      <style jsx>{`
        .story {
          margin: 0 auto;
          max-width: 26rem;
          padding: 6rem 1rem;
          width: calc(100% - 2rem);
        }
      `}</style>
    </AppWrapper>
  );
}
