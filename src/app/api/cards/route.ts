import {CardSectionInterface} from '@/app/types/Cards';

export async function GET() {
  const data: CardSectionInterface[] = [
    {
      title: 'Houses',
      cards: [
        {
          title: 'House Locke',
          href: 'page/locke',
          content: `Prototype soldiers inspired by the "tabula rasa" philosophy.
  Participants were created for adaptability and emotional
  neutrality. The goal is to observe whether their moral compass could be remade under
  monitored environments, allowing for obedient and
  efficient behavioral outcomes.`,
        },
        {
          title: 'House Rousseau',
          href: 'page/rousseau',
          content: `Prototype soldiers following Rousseau's philosophy of being born good, but being "corrupted" afterwards. That corruption is to believe
  that the pragma program is all there is, and nothing else exists.`,
        },
      ],
    },
  ];

  return Response.json(data);
}
