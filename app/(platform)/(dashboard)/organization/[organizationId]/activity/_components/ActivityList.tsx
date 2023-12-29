import ActivityItem from "@/components/ActivityItem";
import { Skeleton } from "@/components/ui/skeleton";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

interface ActivityListProps {}

const ActivityList = async ({}: ActivityListProps) => {
  const { orgId } = auth();

  if (!orgId) {
    redirect("select-org");
  }

  const logs = await db.auditLog.findMany({
    where: {
      orgId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <ol className="space-y-4 mt-4">
      <p className="hidden last:block text-xs text-center text-muted-foreground">
        No activity found inside the organization.
      </p>
      {logs.map((log) => (
        <ActivityItem key={log.id} log={log} />
      ))}
    </ol>
  );
};

export default ActivityList;

ActivityList.Skeleton = function ActivityListSkeleton() {
  return (
    <ol className="space-y-4 mt-4">
      <Skeleton className="w-[80%] h-14" />
      <Skeleton className="w-[60%] h-14" />
      <Skeleton className="w-[85%] h-14" />
      <Skeleton className="w-[75%] h-14" />
      <Skeleton className="w-[70%] h-14" />
      <Skeleton className="w-[80%] h-14" />
    </ol>
  );
};
