"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

function BannerTitle({title} : {title: string}) {
  return <TextGenerateEffect words={title} />;
}

export default BannerTitle