import Image from "next/image";
import { PageTitle, Card } from "../components/ui";

const projects = [
  {
    title: "School event rating system",
    desc: "System creation using PHP and MySQL for event feedback collection.",
    image: "/images/image1.png",
  },
  {
    title: "school event rating system home",
    desc: "System creation using PHP and MySQL for event feedback collection.",
    image: "/images/image2.png",
  },
];

export default function Projects() {
  return (
    <section>
      <PageTitle
        title="Projects"
        subtitle="A selection of my development work and experiments."
      />

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <Card key={p.title}>
            <div className="relative w-full h-52 overflow-hidden rounded-xl">
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-cover hover:scale-105 transition duration-300"
              />
            </div>

            <h2 className="text-xl font-semibold mt-4">
              {p.title}
            </h2>

            <p className="text-zinc-400 mt-2">
              {p.desc}
            </p>

            <div className="mt-4 text-sm text-zinc-500">
              Clickable demo coming soon →
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}