export interface Card {
  title: string;
  href: string;
  content: string;
}
export interface CardSectionInterface {
  title: string;
  cards: Card[];
}
