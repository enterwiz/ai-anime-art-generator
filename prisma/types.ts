import type { ColumnType } from "kysely";
export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;
export type Timestamp = ColumnType<Date, Date | string, Date | string>;

import type { PictureStatus } from "./enums";

export type Picture = {
    id: Generated<string>;
    userId: string;
    prompt: string;
    tags: string[];
    params: unknown;
    url: string;
    status: PictureStatus;
    createdAt: Generated<Timestamp>;
    updatedAt: Generated<Timestamp>;
};
export type DB = {
    Picture: Picture;
};
