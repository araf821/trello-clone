import { Separator } from "@/components/ui/separator";
import { Info } from "../_components/Info";
import ActivityList from "./_components/ActivityList";
import { Suspense } from "react";
import { checkSubscription } from "@/lib/subscription";

interface pageProps {}

const page = async ({}: pageProps) => {
  const isPro = await checkSubscription();

  return (
    <div className="w-full">
      <Info isPro={isPro} />
      <Separator className="my-2" />
      <Suspense fallback={<ActivityList.Skeleton />}>
        <ActivityList />
      </Suspense>
    </div>
  );
};

export default page;
