import { PageTitle, Card } from "../components/ui";

export default function Hobbies() {
  return (
    <section>
      <PageTitle
        title="Hobbies"
        subtitle="Things I enjoy outside of coding."
      />

      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <h2 className="font-semibold">Gaming</h2>
          <p className="text-zinc-400 mt-2">
            Valorant, League of Legends, Elden Ring
          </p>
        </Card>

        <Card>
          <h2 className="font-semibold">Development</h2>
          <p className="text-zinc-400 mt-2">
            Building apps and UI experiments
          </p>
        </Card>

        <Card>
          <h2 className="font-semibold">Bus Spotting</h2>
          <p className="text-zinc-400 mt-2">
            Riding my Honda Beat and exploring
          </p>
        </Card>
      </div>
    </section>
  );
}