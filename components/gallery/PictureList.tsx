"use client";

import { Card } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function PictureList({ pictures }: { pictures: any }) {
  const router = useRouter();
  const handlePictureClick = (picture: any) => {
    router.push(`/picture/${picture.id}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-6xl font-bold mb-4 text-center pb-10">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {pictures.map((picture: any, index: number) => (
          <Card key={index} className="p-4">
            <Image
              key={picture.id}
              src={picture.url}
              alt={picture.prompt}
              width={300}
              height={300}
              objectFit="cover"
              layout="responsive"
              onClick={() => handlePictureClick(picture)}
            />
            <div className="mt-2 pb-2">
              {picture.tags.map((tag: string, i: number) => (
                <span key={i} className="mr-2 px-2 py-1 bg-orange-200 dark:bg-orange-400 rounded text-gray-500">
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-sm text-gray-500">
              {new Date(picture.createdAt).toLocaleDateString()}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}

