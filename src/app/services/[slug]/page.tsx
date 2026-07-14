import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { services, getServiceBySlug } from "@/content/services";
import { ServiceHero } from "@/components/sections/service-hero";
import {
  ServiceOfferings,
  ServiceProcess,
  ServiceOutcomes,
} from "@/components/sections/service-detail-sections";
import { CtaBand } from "@/components/sections/cta-band";
import { ImageBreak } from "@/components/ui/image-break";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: service.name,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <ServiceHero service={service} />
      <ImageBreak src={service.image} alt={service.imageAlt} />
      <ServiceOfferings service={service} />
      <ServiceProcess service={service} />
      <ServiceOutcomes service={service} />
      <CtaBand
        title={`Ready to talk ${service.name}?`}
        primaryLabel="Start a conversation"
      />
    </>
  );
}
