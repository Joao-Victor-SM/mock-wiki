import MainCard from './components/MainCard';

export const metadata = {
  title: 'New Leaf - Home',
  description: 'Foster care nonprofit institution',
};

const App = () => {
  return (
    <main className="px-24 p-8 grid content-start gap-8">
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
      <section className="w-full grid content-start gap-4">
        <h2 className="text-5xl font-bold">Info</h2>
        <div className="grid grid-cols-4 gap-4">
          <MainCard
            href="page/foo"
            title="House Locke"
            content={`Prototype soldiers inspired by the "tabula rasa" philosophy.
Participants were selected for their adaptability and emotional
neutrality, then subjected to controlled reconditioning to remove
prior biases and memories. The goal was to observe whether a
person’s moral compass could be entirely reconstructed under
monitored environments, allowing for perfectly obedient and
efficient behavioral outcomes.`}
          />

          <MainCard
            href="page/foo"
            title="Project Hymn"
            content={`Auditory conditioning initiative aimed at emotional calibration.
Subjects were exposed to repeated tonal sequences, producing involuntary
behavioral triggers that allowed caretakers to enforce calmness, obedience,
or alertness remotely.`}
          />

          <MainCard
            href="page/foo"
            title="Echelon Garden"
            content={`Developmental environment where children were raised with AI-guided
moral instruction. The system monitored speech, posture, and microexpressions
to correct deviant empathy or assertiveness traits, producing highly compliant
social behaviors.`}
          />

          <MainCard
            href="page/foo"
            title="The Mirror Room"
            content={`Psychological simulation suite with AI avatars mirroring participants'
expressions and speech. Studied self-recognition decay to explore identity
persistence when mirrored by algorithmic imitation.`}
          />

          <MainCard
            href="page/foo"
            title="Project Halcyon"
            content={`Pharmacological program testing memory partitioning to improve
emotional recovery after trauma. Initial results reduced distress, but later
phases revealed increasing dissociation and detachment from reality.`}
          />

          <MainCard
            href="page/foo"
            title="Nursery-9"
            content={`Isolated education module where children were taught entirely via
machine tutors. Lessons, punishment, and rewards were determined by
algorithms predicting "long-term productivity," with minimal human contact.`}
          />

          <MainCard
            href="page/foo"
            title="The Quiet Ward"
            content={`Acoustic suppression experiment eliminating 99% of ambient sound.
The study aimed to measure psychological effects of perfect silence; most
participants displayed severe derealization symptoms within weeks.`}
          />
        </div>
      </section>
    </main>
  );
};

export default App;
