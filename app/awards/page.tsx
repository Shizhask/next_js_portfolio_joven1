import { PageTitle, Card } from "../components/ui";

const awards = [
  "Academic Excellence Award",
  "Best Programming Project",
  "Top Performer in Web Development"
];

export default function Awards() {
  return (
    <section>
      <PageTitle
        title="Awards"
        subtitle="Recognition I’ve received during my academic journey."
      />

      <div className="space-y-4">
        {awards.map((a) => (
          <Card key={a}>
            {a}
          </Card>
        ))}
      </div>
    </section>
  );
}