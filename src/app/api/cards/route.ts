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
    {
      title: 'Projects',
      cards: [
        {
          title: 'Project Pragma',
          href: 'page/pragma',
          content: `Pragma is a project whose purpose is to make cheap, reliable, scalable bio-enhanced soldiers in scale. Each soldier have the expected strength
           of at least 3 men, and are able to endure the harsh conditions of war.`,
        },
        {
          title: 'Project Aegis',
          href: 'page/aegis',
          content: `Aegis focuses on the development of portable energy shields for field use. Early prototypes can withstand small-arms fire for limited durations.`,
        },
        {
          title: 'Project Helix',
          href: 'page/helix',
          content: `Helix aims to enhance cognitive performance via neurochemical augmentation. Test subjects have shown improved strategic reasoning under stress.`,
        },
        {
          title: 'Project Obsidian',
          href: 'page/obsidian',
          content: `Obsidian experiments with adaptive camouflage and sound-dampening suits for stealth operations in controlled environments.`,
        },
      ],
    },
  ];

  return Response.json(data);
}
