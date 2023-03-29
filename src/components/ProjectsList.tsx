import { cookies } from "next/headers";
import Link from "next/link";
import type { User } from "@prisma/client";

import { getUserFromCookie } from "@/lib/auth";
import { db } from "@/lib/db";
import { fakeDelay } from "@/lib/async";
import ProjectCard from "@/components/ProjectCard";
import NewProject from "@/components/NewProject";

const getData = async () => {
  await fakeDelay(2000);
  const user = (await getUserFromCookie(cookies())) as User;
  const projects = await db.project.findMany({
    where: {
      ownerId: user.id,
    },
    include: {
      tasks: true,
    },
  });

  return { projects };
};

export default async function ProjectsList() {
  const { projects } = await getData();

  return (
    <>
      {projects.map((project) => (
        <div className="w-1/3 p-3" key={project.id}>
          <Link href={`/project/${project.id}`}>
            <ProjectCard project={project} />
          </Link>
        </div>
      ))}

      <div className="w-1/3 p-3">
        <NewProject />
      </div>
    </>
  );
}
