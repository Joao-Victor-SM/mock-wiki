import CardSection from './components/CardSection';
import {GET as getCardsHandler} from './api/articles/route';
import {CardSectionInterface} from './types/Cards';

export const metadata = {
  title: 'Home',
  description: 'Foster care nonprofit institution',
};

const isErrorResponse = (data: unknown): data is {error: string} =>
  typeof data === 'object' && data !== null && 'error' in data;

const res = await getCardsHandler();
const articles: CardSectionInterface[] | {error: string} = await res.json();

const App = async () => {
  if (isErrorResponse(articles)) return <p role="alert">Error {res.status}</p>;

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

      {(articles ?? [])
        .filter((article) => article.cards.length)
        .map((card, key) => (
          <CardSection title={card.title} cards={card.cards} key={key} />
        ))}
    </main>
  );
};

export default App;
