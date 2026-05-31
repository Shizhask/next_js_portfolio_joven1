import Image from "next/image";
import { PageTitle, Card } from "../components/ui";

const images = [
  "/images/image1.png",
  "/images/image2.png",
  "/images/me.png",
];

export default function Gallery() {
  return (
    <section>
      <PageTitle
        title="Gallery"
        subtitle="Visual snapshots of my work and interests."
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img, i) => (
          <Card key={i}>
            <div className="relative aspect-square overflow-hidden rounded-xl">
              <Image
                src={img}
                alt={`Gallery image ${i + 1}`}
                fill
                className="object-cover hover:scale-105 transition duration-300"
              />
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}