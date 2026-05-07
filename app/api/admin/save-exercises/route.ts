import { db } from "@/config/db";
import { ExerciseTable } from "@/config/schema";
import { NextRequest, NextResponse } from "next/server";

const DATA = [
  {
    courseId: 4,
    exerciseId: "pep-8-basics",
    exerciseName: "PEP 8 Basics",
    chapterId: 13,
    exercisesContent: {
      content: "<p>PEP 8 defines Python style.</p>",
      task: "<p>Fix spacing.</p>",
      hint: "<p>Use spaces around =</p>",
      starterCode: { "/main.py": "x=1" },
      regex: "x\\s*=\\s*1",
      output: "x = 1",
      hintXp: 25
    }
  },
  {
    courseId: 4,
    exerciseId: "meaningful-naming",
    exerciseName: "Meaningful Naming",
    chapterId: 13,
    exercisesContent: {
      content: "<p>Names should be descriptive.</p>",
      task: "<p>Rename variable.</p>",
      hint: "<p>Use clear names.</p>",
      starterCode: { "/main.py": "a = 10" },
      regex: "[a-zA-Z_]+\\s*=",
      output: "total_count = 10",
      hintXp: 20
    }
  },
  {
    courseId: 4,
    exerciseId: "avoid-common-mistakes",
    exerciseName: "Avoid Common Mistakes",
    chapterId: 13,
    exercisesContent: {
      content: "<p>Avoid bad practices.</p>",
      task: "<p>Fix mutable default argument.</p>",
      hint: "<p>Use None.</p>",
      starterCode: { "/main.py": "" },
      regex: "None",
      output: "safe default",
      hintXp: 30
    }
  },
  {
    courseId: 4,
    exerciseId: "debugging-techniques",
    exerciseName: "Debugging Techniques",
    chapterId: 13,
    exercisesContent: {
      content: "<p>Debugging finds issues.</p>",
      task: "<p>Add print debug.</p>",
      hint: "<p>print(variable)</p>",
      starterCode: { "/main.py": "" },
      regex: "print\\(",
      output: "debug print",
      hintXp: 30
    }
  },
  {
    courseId: 4,
    exerciseId: "production-checklist",
    exerciseName: "Production Checklist",
    chapterId: 13,
    exercisesContent: {
      content: "<p>Prepare code for production.</p>",
      task: "<p>Follow best practices.</p>",
      hint: "<p>Clean, readable, tested.</p>",
      starterCode: { "/main.py": "" },
      regex: "#|def|import",
      output: "production ready python",
      hintXp: 30
    }
  }
]


export async function GET(req: NextRequest) {
  DATA.forEach(async (item) => {
    await db.insert(ExerciseTable).values({
      courseId: item?.courseId, //Change Course ID depends on course info,
      chapterId: item?.chapterId,
      exerciseId: item.exerciseId,
      exerciseName: item?.exerciseName,
      exercisesContent: item?.exercisesContent,
    });
  });
  return NextResponse.json("Success");
}
