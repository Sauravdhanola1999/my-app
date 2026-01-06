import { services } from "@/src/data/services";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ServiceDetail({ params }: Props) {
  const { slug } = await params;

    const service = services.find((s) => s.slug === slug);

  if (!service) notFound();

  return (
    <section className="py-20 max-w-4xl mx-auto px-6">
      <h1 className="text-4xl font-bold mb-6">{service.title}</h1>
      <p className="text-lg text-gray-700">{service.shortDescription}</p>
    </section>
  );
}
