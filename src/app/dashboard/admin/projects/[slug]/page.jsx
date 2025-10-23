"use client";
import { ProjectDetailIndex } from "@/components/dashboard/superAdmin/Projects/projectDetails/ProjectDetailIndex";
import React from "react";
import { projectData } from "@/lib/dummyData/projectsData";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";

export default function Page() {
  const params = useParams();

  // Find the project by ID from the URL params
  const project = projectData.find((p) => p.id === params.slug);

  if (!project) {
    return notFound();
  }

  return (
    <ProjectDetailIndex project={project} milestones={project.milestones} />
  );
}
