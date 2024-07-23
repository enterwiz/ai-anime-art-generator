"use client";
import ImageGallery from "@/components/ImageGallery";
const images = [
  {
    src: "https://i.imgur.com/1e0Tbcw.png",
    alt: "Girl in Sea",
    href: "#",
    tags: ["Girl", "Sea"],
  },
  {
    src: "https://i.imgur.com/jlW5ZG5.png",
    alt: "Magic",
    href: "#",
    tags: ["Girl", "Magic"],
  },
  {
    src: "https://i.imgur.com/aQI6ZbM.png",
    alt: "Girl in Desert",
    href: "#",
    tags: ["Girl", "Desert"],
  },
  {
    src: "https://i.imgur.com/QdQYHLD.png",
    alt: "Girl Surfing",
    href: "#",
    tags: ["Surfing", "Sea"],
  },
  {
    src: "https://i.imgur.com/EfVQHob.png",
    alt: "Castle",
    href: "#",
    tags: ["Girl", "Castle"],
  },
  {
    src: "https://i.imgur.com/aPCFxWq.png",
    alt: "Court",
    href: "#",
    tags: ["Girl", "Court"],
  },
];

export default function ImageCarousel() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <ImageGallery images={images} />
      </div>
    </>
  );
}

