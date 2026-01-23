import { db } from "@/config/db";
import { CourseChaptersTable, ExerciseTable } from "@/config/schema";
import { and, eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { courseId, chapterId, exerciseId } = await req.json();

  const courseResult = await db
    .select()
    .from(CourseChaptersTable)
    .where(
      and(
        eq(CourseChaptersTable.courseId, courseId),
        eq(CourseChaptersTable.chapterId, chapterId),
      ),
    );

  const exerciseResult = await db
    .select()
    .from(ExerciseTable)
    .where(
      and(
        eq(ExerciseTable.exerciseId, exerciseId),
        eq(ExerciseTable.courseId, courseId),
      ),
    );

  return NextResponse.json({
    ...courseResult[0],
    exerciseData: exerciseResult[0],
  });
}
