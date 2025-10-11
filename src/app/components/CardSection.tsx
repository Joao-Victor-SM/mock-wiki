import MainCard from './MainCard';

interface Card {
  title: string;
  href: string;
  content: string;
}
interface props {
  cards: Card[];
  title: string;
}
export default function CardSection({cards, title}: props) {
  return (
    <section className="w-full grid content-start gap-4">
      <h2 className="text-5xl font-bold">{title}</h2>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
        {cards.map((card, key) => (
          <MainCard
            href={card.href}
            title={card.title}
            content={card.content}
            key={key}
          />
        ))}
      </div>
    </section>
  );
}
