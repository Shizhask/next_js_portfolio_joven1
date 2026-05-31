import { PageTitle, Card } from "../components/ui";

const skills = [
  "HTML", "CSS", "JavaScript", "TypeScript",
  "React", "Next.js", "Tailwind CSS",
  "C#", "MySQL", "Git", "OOP"
];

export default function Skills() {
  return (
    <section>
      <PageTitle
        title="Skills"
        subtitle="Technologies and tools I use to build modern applications."
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <Card key={skill}>
            <p className="text-center font-medium">{skill}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}