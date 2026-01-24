import React from "react";
import { EnrolledCourseInfo } from "./EnrolledCourses";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";

type Props = {
  course: EnrolledCourseInfo;
};

function CourseProgressCard({ course }: Props) {
  return (
    <Link href={'/courses/'+course?.courseId}>
    <div className="border-5 rounded-2xl">
      <Image
        src={course?.bannerImage?.trimEnd()}
        alt={course?.title}
        width={500}
        height={500}
        className="w-full h-42 rounded-t-xl object-cover "
      />
      <div className="font-game p-4">
        <h2 className="text-2xl font-light text-green-400">Course</h2>
        <h2 className="text-3xl">{course?.title}</h2>
        <h2 className="mt-2 text-xl text-gray-400 mb-1">
          {course?.completedExercises} Completed out of{" "}
          <span>{course?.totalExercises}</span>
        </h2>
        <Progress
          value={(course?.completedExercises / course?.totalExercises) * 100}
        />
      </div>
    </div>
    </Link>
  );
}

export default CourseProgressCard;
