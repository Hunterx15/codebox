import React from "react";
import { Course } from "../../_components/CourseList";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type Props = {
  loading: boolean;
  courseDetail: Course | undefined;
};

function CourseChapters({ loading, courseDetail }: Props) {
  const sortedChapters = [...(courseDetail?.chapters ?? [])].sort(
    (a, b) => a.chapterId - b.chapterId,
  );

  return (
    <div>
      {courseDetail?.chapters?.length == 0 ? (
        <div>
          <Skeleton className="w-full h-25 rounded-xl" />
          <Skeleton className="w-full h-25 mt-5 rounded-xl" />
        </div>
      ) : (
        <div className="p-5 border-4 rounded-2xl">
          {sortedChapters.map((chapter, index) => (
            <Accordion type="single" collapsible key={index}>
              <AccordionItem value="item-1">
                <AccordionTrigger
                  className="p-3 hover:bg-zinc-800
                font-game text-4xl"
                >
                  <div>
                    <h2 className="h-12 w-12 bg-zinc-800 rounded-full flex items-center justify-center">
                      {index + 1}
                    </h2>
                  </div>
                  {chapter?.name}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="p-7 bg-zinc-900 rounded-2xl">
                    {chapter?.exercises.map((exc, indexExc) => (
                      <div
                        key={indexExc}
                        className="flex items-center justify-between mb-7"
                      >
                        <div className="flex items-center gap-10 font-game">
                          <h2 className="text-3xl">
                            Exercise{" "}
                            {index * chapter?.exercises?.length + indexExc + 1}
                          </h2>
                          <h2 className="text-3xl">{exc.name}</h2>
                        </div>
                        {/* <Button variant={'pixel'}>{exc?.xp} xp</Button> */}
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant={"pixelDisabled"}>???</Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="font-game text-lg">
                              Please Enroll First
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      )}
    </div>
  );
}

export default CourseChapters;
