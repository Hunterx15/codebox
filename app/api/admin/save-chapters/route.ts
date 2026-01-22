import { db } from "@/config/db"
import { CourseChaptersTable } from "@/config/schema"
import { NextRequest, NextResponse } from "next/server"

const DATA = 
[
  {
    "id": 1,
    "name": "Introduction to CSS",
    "desc": "Understand what CSS is and how it styles web pages.",
    "exercises": [
      { "name": "What is CSS?", "slug": "what-is-css", "xp": 20, "difficulty": "easy" },
      { "name": "Why CSS is Needed", "slug": "why-css-is-needed", "xp": 20, "difficulty": "easy" },
      { "name": "CSS Syntax", "slug": "css-syntax", "xp": 20, "difficulty": "easy" },
      { "name": "CSS Comments", "slug": "css-comments", "xp": 15, "difficulty": "easy" },
      { "name": "First CSS Style", "slug": "first-css-style", "xp": 20, "difficulty": "easy" }
    ]
  },
  {
    "id": 2,
    "name": "Ways to Apply CSS",
    "desc": "Learn different methods to apply CSS to HTML.",
    "exercises": [
      { "name": "Inline CSS", "slug": "inline-css", "xp": 15, "difficulty": "easy" },
      { "name": "Internal CSS", "slug": "internal-css", "xp": 20, "difficulty": "easy" },
      { "name": "External CSS", "slug": "external-css", "xp": 20, "difficulty": "easy" },
      { "name": "CSS Priority Order", "slug": "css-priority-order", "xp": 25, "difficulty": "easy" },
      { "name": "Style Cleanup", "slug": "style-cleanup", "xp": 20, "difficulty": "easy" }
    ]
  },
  {
    "id": 3,
    "name": "Selectors",
    "desc": "Target HTML elements precisely using selectors.",
    "exercises": [
      { "name": "Element Selector", "slug": "element-selector", "xp": 20, "difficulty": "easy" },
      { "name": "Class Selector", "slug": "class-selector", "xp": 20, "difficulty": "easy" },
      { "name": "ID Selector", "slug": "id-selector", "xp": 20, "difficulty": "easy" },
      { "name": "Group Selector", "slug": "group-selector", "xp": 25, "difficulty": "easy" },
      { "name": "Selector Practice", "slug": "selector-practice", "xp": 30, "difficulty": "medium" }
    ]
  },
  {
    "id": 4,
    "name": "Colors & Units",
    "desc": "Work with colors and measurement units.",
    "exercises": [
      { "name": "Color Names", "slug": "color-names", "xp": 15, "difficulty": "easy" },
      { "name": "HEX & RGB", "slug": "hex-and-rgb", "xp": 20, "difficulty": "easy" },
      { "name": "Opacity & Alpha", "slug": "opacity-and-alpha", "xp": 20, "difficulty": "easy" },
      { "name": "PX vs EM", "slug": "px-vs-em", "xp": 25, "difficulty": "easy" },
      { "name": "REM Units", "slug": "rem-units", "xp": 25, "difficulty": "easy" }
    ]
  },
  {
    "id": 5,
    "name": "Box Model",
    "desc": "Understand spacing and element sizing.",
    "exercises": [
      { "name": "Margin Basics", "slug": "margin-basics", "xp": 20, "difficulty": "easy" },
      { "name": "Padding Basics", "slug": "padding-basics", "xp": 20, "difficulty": "easy" },
      { "name": "Border Styles", "slug": "border-styles", "xp": 20, "difficulty": "easy" },
      { "name": "Box Sizing", "slug": "box-sizing", "xp": 25, "difficulty": "easy" },
      { "name": "Box Model Fix", "slug": "box-model-fix", "xp": 30, "difficulty": "medium" }
    ]
  },
  {
    "id": 6,
    "name": "Typography",
    "desc": "Style text for readability and design.",
    "exercises": [
      { "name": "Font Family", "slug": "font-family", "xp": 20, "difficulty": "easy" },
      { "name": "Font Size & Weight", "slug": "font-size-weight", "xp": 20, "difficulty": "easy" },
      { "name": "Text Alignment", "slug": "text-alignment", "xp": 20, "difficulty": "easy" },
      { "name": "Line Height", "slug": "line-height", "xp": 25, "difficulty": "easy" },
      { "name": "Text Styling Challenge", "slug": "text-styling-challenge", "xp": 30, "difficulty": "medium" }
    ]
  },
  {
    "id": 7,
    "name": "Display & Position",
    "desc": "Control layout and positioning.",
    "exercises": [
      { "name": "Display Property", "slug": "display-property", "xp": 20, "difficulty": "easy" },
      { "name": "Position Property", "slug": "position-property", "xp": 30, "difficulty": "medium" },
      { "name": "Z-Index", "slug": "z-index", "xp": 25, "difficulty": "easy" },
      { "name": "Overflow Control", "slug": "overflow-control", "xp": 20, "difficulty": "easy" },
      { "name": "Position Practice", "slug": "position-practice", "xp": 35, "difficulty": "medium" }
    ]
  },
  {
    "id": 8,
    "name": "Flexbox",
    "desc": "Build flexible layouts easily.",
    "exercises": [
      { "name": "Flex Container", "slug": "flex-container", "xp": 25, "difficulty": "easy" },
      { "name": "Flex Direction", "slug": "flex-direction", "xp": 25, "difficulty": "easy" },
      { "name": "Justify Content", "slug": "justify-content", "xp": 30, "difficulty": "medium" },
      { "name": "Align Items", "slug": "align-items", "xp": 30, "difficulty": "medium" },
      { "name": "Flexbox Layout Challenge", "slug": "flexbox-layout-challenge", "xp": 40, "difficulty": "medium" }
    ]
  },
  {
    "id": 9,
    "name": "CSS Grid",
    "desc": "Create powerful two-dimensional layouts.",
    "exercises": [
      { "name": "Grid Basics", "slug": "grid-basics", "xp": 30, "difficulty": "medium" },
      { "name": "Grid Columns & Rows", "slug": "grid-columns-rows", "xp": 30, "difficulty": "medium" },
      { "name": "Grid Gap", "slug": "grid-gap", "xp": 25, "difficulty": "easy" },
      { "name": "Grid Areas", "slug": "grid-areas", "xp": 35, "difficulty": "medium" },
      { "name": "Grid Layout Challenge", "slug": "grid-layout-challenge", "xp": 40, "difficulty": "medium" }
    ]
  },
  {
    "id": 10,
    "name": "Responsive Design",
    "desc": "Make layouts adapt to different screen sizes.",
    "exercises": [
      { "name": "Viewport Basics", "slug": "viewport-basics", "xp": 20, "difficulty": "easy" },
      { "name": "Media Queries", "slug": "media-queries", "xp": 30, "difficulty": "medium" },
      { "name": "Mobile First Design", "slug": "mobile-first-design", "xp": 30, "difficulty": "medium" },
      { "name": "Responsive Images", "slug": "responsive-images", "xp": 25, "difficulty": "easy" },
      { "name": "Responsive Layout Challenge", "slug": "responsive-layout-challenge", "xp": 40, "difficulty": "medium" }
    ]
  },
  {
    "id": 11,
    "name": "Transitions & Animations",
    "desc": "Add motion and interactivity.",
    "exercises": [
      { "name": "CSS Transitions", "slug": "css-transitions", "xp": 25, "difficulty": "easy" },
      { "name": "Transform Property", "slug": "transform-property", "xp": 25, "difficulty": "easy" },
      { "name": "Keyframe Animations", "slug": "keyframe-animations", "xp": 35, "difficulty": "medium" },
      { "name": "Animation Timing", "slug": "animation-timing", "xp": 30, "difficulty": "medium" },
      { "name": "Animation Practice", "slug": "animation-practice", "xp": 35, "difficulty": "medium" }
    ]
  },
  {
    "id": 12,
    "name": "CSS Best Practices",
    "desc": "Write clean, maintainable, and scalable CSS.",
    "exercises": [
      { "name": "Class Naming Conventions", "slug": "class-naming-conventions", "xp": 25, "difficulty": "easy" },
      { "name": "Avoid Inline Styles", "slug": "avoid-inline-styles", "xp": 20, "difficulty": "easy" },
      { "name": "Reuse Styles", "slug": "reuse-styles", "xp": 30, "difficulty": "medium" },
      { "name": "CSS Organization", "slug": "css-organization", "xp": 30, "difficulty": "medium" },
      { "name": "Production Checklist", "slug": "css-production-checklist", "xp": 30, "difficulty": "medium" }
    ]
  }
]





export async function GET(req: NextRequest) {
    DATA.forEach(async (item) => {
        await db.insert(CourseChaptersTable).values({
            courseId: 3, //Change Course ID depends on course info,
            desc: item?.desc,
            exercises: item.exercises,
            name: item?.name,
            chapterId: item?.id
        })
    })
    return NextResponse.json('Success')
}

