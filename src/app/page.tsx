import CardSection from './components/CardSection';
import {api} from './api';
import {CardSectionInterface} from './types/Cards';

export const metadata = {
  title: 'New Leaf - Home',
  description: 'Foster care nonprofit institution',
};

async function getCards() {
  const res = await api.get<CardSectionInterface[]>('/api/cards');
  return res.data;
}

const App = async () => {
  const cards = await getCards();

  return (
    <main className="sm:px-24 p-4 sm:p-8 grid content-start gap-8">
      <section className="grid gap-4">
        <h1 className="text-6xl font-bold">Home</h1>
        <p>
          Welcome to the New Leaf internal wiki. This portal is intended
          strictly for authorized personnel within the New Leaf Foundation.
          Here, staff can access operational guidelines, care programs, research
          reports, and confidential documentation regarding our ongoing
          initiatives.
        </p>

        <p>
          New Leaf is committed to providing safe, forward-thinking environments
          for foster children and youth across all partner facilities. Some of
          our developmental programs are experimental in nature and remain under
          restricted clearance until official publication. Sharing of internal
          materials is strictly prohibited.
        </p>
      </section>
      {cards.map((card, key) => (
        <CardSection title={card.title} cards={card.cards} key={key} />
      ))}
    </main>
  );
};

export default App;
