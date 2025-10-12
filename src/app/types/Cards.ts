interface Tag {
  id: number;
  name: string;
}
export interface Card {
  title: string;
  content: string;
  identificator: string;
  tag?: Tag;
}
export interface CardSectionInterface {
  title: string;
  cards: Card[];
}
