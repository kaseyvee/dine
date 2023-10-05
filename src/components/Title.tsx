import Image from "next/image";

interface TitleProps {
  color: string;
  accent: boolean;
}

function Title(props: TitleProps) {
  return (
    <div className={`title title-${props.color}`}>
      {props.accent && <Image src="/patterns/pattern-divide.svg" width={71} height={7} alt="" />}
      <header>
        <h2 className="main-title">A few highlights from our menu</h2>
        <p className="paragraph">
          We cater for all dietary requirements, but here’s a glimpse at some of
          our diner’s favourites. Our menu is revamped every season.
        </p>
      </header>
    </div>
  );
}

export default Title;
