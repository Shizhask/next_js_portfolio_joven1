import { PageTitle, Card } from "../components/ui";

export default function Education() {
  return (
    <section>
      <PageTitle
        title="Education"
        subtitle="My academic background and learning journey."
      />

      <Card>
        <h2 className="text-xl font-semibold">BS Information Technology</h2>
        <p className="text-zinc-400 mt-2">
          Studying programming, web development, database systems, and software engineering fundamentals.
        </p>
      </Card>
    </section>
  );
}