"use server";

import PictureList from "@/components/gallery/PictureList";
import { findPictures } from "@/database/pictureRepo";

export default async function GalleryPage() {
  const pictures = await findPictures({});

  return <PictureList pictures={pictures} />;
}
