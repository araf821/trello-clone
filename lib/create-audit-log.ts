import { auth, currentUser } from "@clerk/nextjs";
import { Action, EntityType } from "@prisma/client";
import { db } from "./db";

interface Props {
  entityId: string;
  entityType: EntityType;
  entityTitle: string;
  action: Action;
}

export const createAuditLog = async (props: Props) => {
  try {
    const { orgId } = auth();
    const user = await currentUser();

    if (!user || !orgId) {
      throw new Error("User not found");
    }

    const { entityId, entityTitle, entityType, action } = props;

    await db.auditLog.create({
      data: {
        orgId,
        entityId,
        entityType,
        entityTitle,
        action,
        userId: user.id,
        userImage: user?.imageUrl,
        userName: user?.firstName + " " + user?.lastName,
      },
    });
  } catch (error) {
    console.error("Audit Log Error", error);
  }
};
