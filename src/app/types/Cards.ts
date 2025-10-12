import type {News} from '@prisma/client';

export interface CardSectionInterface {
  title: string;
  cards: News[];
}
