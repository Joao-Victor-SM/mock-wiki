import {CardSectionInterface} from '../(reader)/types/Cards';
import MainCard from './MainCard';

export default function CardSection({cards, title}: CardSectionInterface) {
  return (
    <section className="w-full grid content-start gap-4">
      <h2 className="text-5xl font-bold">{title}</h2>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
        {cards.map((card, key) => (
          <MainCard
            href={`/page/${card.identifier}`}
            title={card.title}
            content={card.content}
            key={key}
          />
        ))}
      </div>
    </section>
  );
}
