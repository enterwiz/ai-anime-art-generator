import { db } from "@/database/database";
import { PictureStatus } from "@/prisma/enums";
import { Picture } from "@/prisma/types";
import { Insertable, Selectable } from "kysely";

export async function findPictureById(id: string) {
  return await db
    .selectFrom("Picture")
    .where("id", "=", id)
    .selectAll()
    .executeTakeFirst();
}

export async function findPictures(criteria: Partial<Selectable<Picture>>) {
  let query = db.selectFrom("Picture");
  if (criteria.id) {
    query = query.where("id", "=", criteria.id); // Kysely is immutable, you must re-assign!
  }
  if (criteria.userId) {
    query = query.where("userId", "=", criteria.userId);
  }
  return await query.selectAll().execute();
}

export async function getTotalPicturesCount(): Promise<number> {
  const result = await db
    .selectFrom("Picture")
    .select(db.fn.count("id").as("count"))
    .executeTakeFirst();

  return Number(result?.count || 0);
}

export async function listPicturesPaginated(page: number, pageSize: number) {
  const offset = (page - 1) * pageSize;
  let query = db
    .selectFrom("Picture")
    .orderBy("createdAt desc")
    .limit(pageSize)
    .offset(offset);
  return await query.selectAll().execute();
}

export async function createPicture(picture: Insertable<Picture>) {
  return await db
    .insertInto("Picture")
    .values(picture)
    .returningAll()
    .executeTakeFirstOrThrow();
}

export async function deletePicture(id: string) {
  return await db
    .updateTable("Picture")
    .set({ status: PictureStatus.DELETED })
    .where("id", "=", id)
    .execute();
}

