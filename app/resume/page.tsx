import { PageTitle, Card } from "../components/ui";

export default function Resume() {
  return (
    <section>
      <PageTitle
        title="Resume"
        subtitle="Download my CV for full details."
      />

      <Card>
        <p className="text-zinc-400 mb-4">
          Get a full overview of my skills, projects, and experience.
        </p>

        <a
          href="/resume.pdf"
          className="inline-block px-6 py-3 rounded-full bg-white text-black hover:scale-105 transition"
        >
          Download CV
        </a>
      </Card>
    </section>
  );
}