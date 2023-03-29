import { cookies } from "next/headers";
import { Prisma } from "@prisma/client";
import type { User } from "@prisma/client";

import TaskCard from "@/components/TaskCard";
import { getUserFromCookie } from "@/lib/auth";
import { db } from "@/lib/db";

const projectWithTasks = Prisma.validator<Prisma.ProjectArgs>()({
  include: { tasks: true },
});

type ProjectWithTasks = Prisma.ProjectGetPayload<typeof projectWithTasks>;

const getData = async (id: string) => {
  const user = (await getUserFromCookie(cookies())) as User;
  const project = await db.project.findFirst({
    where: { id, ownerId: user.id },
    include: {
      tasks: true,
    },
  });

  return project as ProjectWithTasks;
};

export default async function ProjectPage({
  params,
}: {
  params: Record<string, string>;
}) {
  const project = await getData(params.id);

  return (
    <div className="h-full overflow-y-auto pr-6 w-full">
      <TaskCard tasks={project.tasks} title={project.name} />
    </div>
  );
}
