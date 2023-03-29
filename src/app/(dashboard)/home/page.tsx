import { Suspense } from "react";

import Greetings from "@/components/Greetings";
import GreetingsSkeleton from "@/components/GreetingsSkeleton";
import TaskCard from "@/components/TaskCard";
import Loader from "@/components/Loader";
import ProjectsList from "@/components/ProjectsList";

export default async function Page() {
  return (
    <div className="h-full overflow-y-auto pr-6 w-full">
      <div className=" h-full  items-stretch justify-center min-h-[content]">
        <div className="flex-1 grow flex">
          <Suspense fallback={<GreetingsSkeleton />}>
            <Greetings />
          </Suspense>
        </div>

        <div className="flex flex-2 grow items-center flex-wrap mt-3 -m-3 ">
          <Suspense fallback={<Loader />}>
            <ProjectsList />
          </Suspense>
        </div>

        <div className="mt-6 flex-2 grow w-full flex">
          <div className="w-full">
            <Suspense fallback={<Loader />}>
              <TaskCard />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
