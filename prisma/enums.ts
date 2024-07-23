export const PictureStatus = {
    UNKNOWN: "UNKNOWN",
    GENERATING: "GENERATING",
    ONLINE: "ONLINE",
    DELETED: "DELETED"
} as const;
export type PictureStatus = (typeof PictureStatus)[keyof typeof PictureStatus];
