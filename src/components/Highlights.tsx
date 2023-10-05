import { highlights } from "@/data/Highlights";
import Title from "./Title";

interface HighlightProps {
  title: string;
  description: string;
  imageMobile: string;
  imageTablet: string;
}

function Highlights() {
  const highlightsList = highlights.map((highlight: HighlightProps, i) => {
    return (
      <li key={i}>
        <picture>
          <source
            media="(min-width: 500px)"
            srcSet={highlight.imageTablet}
          />
          <img src={highlight.imageMobile} alt="" />
          <h3>{highlight.title}</h3>
          <p>{highlight.description}</p>
        </picture>
      </li>
    );
  });
  return (
    <div className="highlights">
      <Title color="white" accent={true} />
      <ul>
        {highlightsList}
      </ul>
    </div>
  );
}

export default Highlights;
