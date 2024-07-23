import { findPictureById } from "@/database/pictureRepo";
import Image from "next/image";

export default async function PreviewPage({
  params,
}: {
  params: { id: string };
}) {
  const picture = await findPictureById(params.id);

  if (!picture) {
    return <div>Picture not found</div>;
  }

  return (
    <div className="container mx-auto p-4 flex flex-col items-center">
      <h1 className="text-6xl font-bold mb-4 text-center">Image Preview</h1>
      <div className="flex flex-col items-center">
        <Image
          src={picture.url}
          alt={picture.prompt}
          width={512}
          height={512}
          className="mb-4"
        />
        <p className="text-center mb-2">
          <strong>Prompt:</strong> {picture.prompt}
        </p>
        <p className="text-center">
          <strong>Created at:</strong> {picture.createdAt.toLocaleString()}
        </p>
      </div>
    </div>
  );
}

