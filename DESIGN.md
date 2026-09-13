---
name: Language in Society Study Companion
description: An iPad-first study companion that maps sociolinguistic ideas through bright overlapping paper passes in light or dark mode.
colors:
  ink: "#192a5b"
  paper: "#fbf8ee"
  cyan: "#72d7e5"
  yellow: "#ffdf76"
  coral: "#bd4d59"
  violet: "#c7b3f5"
typography:
  display:
    fontFamily: "Alegreya, Georgia, serif"
    fontSize: "clamp(2.55rem, 7vw, 6.6rem)"
    fontWeight: 800
    lineHeight: 0.96
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Atkinson Hyperlegible, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  card: "16px"
  hero: "28px"
spacing:
  compact: "15px"
  standard: "24px"
  section: "80px"
components:
  button-primary:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.ink}"
    rounded: "999px"
    padding: "12px 18px"
  topic-tile:
    rounded: "{rounded.card}"
    padding: "21px"
---

# Design System: Language in Society Study Companion

## Overview

**Creative North Star: "The Overprint Study Table"**

This is a bright but softened study map for a student working on an iPad: deep ink blue creates a focused field, while lighter cyan, yellow, coral, and lavender passes show how course ideas overlap. The system should feel welcoming and lively without harsh saturation. A light/dark toggle changes the reading environment without changing the study map.

**Key Characteristics:**
- iPad-first two-column compositions that reflow into a calm single column on phones.
- Flat spot-color fields with precise overlap, never decorative gradients or faux paper texture.
- A notebook-like display serif, a highly legible English body face, and a dedicated Arabic reading face.
- Bright lesson “boards” that let one course concept take over a full viewport, supported by playful emoji and crisp geometric linework.

## Colors

The palette keeps its original bright personality, but each color is lightened and softened: ink and warm paper establish legibility while gentler cyan, yellow, coral, and lavender distinguish course areas without visual strain.

### Primary
- **Ink Blue:** used for the hero field, primary text, and structural outlines.
- **Paper White:** used for the page ground and high-contrast hero copy.

### Secondary
- **Cyan Pass:** used for active, exploratory topic areas and layered geometry.
- **Sun Yellow:** used for primary actions and optimistic topic fields.
- **Coral Mark:** used for small wayfinding accents, links, and emphasis.

### Tertiary
- **Lavender Pass:** used as a gentle alternate study surface.

### Named Rules
**The Overlap Rule.** Bright colors belong in large, purposeful fields or visibly overlapping passes; do not scatter tiny accents across the page.

## Typography

**Display Font:** Alegreya (with Georgia fallback)
**Body Font:** Atkinson Hyperlegible (with Arial fallback)
**Arabic Font:** Playpen Sans Arabic (with Tahoma fallback)

**Character:** Alegreya gives headings the feel of a well-used study notebook; Atkinson Hyperlegible keeps English explanations clear at reading size. Playpen Sans Arabic gives Arabic notes a softer, more personal handwriting character while retaining clear right-to-left reading.

### Hierarchy
- **Display:** heavy fluid headings with tight, but legible, tracking; use for page and section statements.
- **Title:** rounded display type for topic and step names.
- **Body:** standard sans-serif copy with a short, comfortable measure.
- **Arabic body:** Playpen Sans Arabic with natural right-to-left direction, no added letter spacing, and more line height for clear reading.
- **Label:** bold Atkinson Hyperlegible for course navigation and topic indexes.

### Named Rules
**The One Big Thought Rule.** Give each region one strong display statement; supporting copy should explain, not compete.

## Layout

Content uses a maximum width of 1060–1160px with a 24px outer gutter. The hero is a split composition at iPad widths, with copy on the left and the overlap illustration on the right. The topic map uses an asymmetric 12-column bento grid, then becomes two columns and finally a single column on narrow phones. Large vertical section spacing creates a restful revision rhythm.

## Elevation & Depth

The system is flat by default. Depth comes from color layering, overlap, and tonal contrast. A diffuse shadow is reserved for a topic tile on hover; it is not structural decoration.

## Shapes

Hero surfaces have a generous 28px radius; topic tiles use a 16px radius. Controls are the only fully pill-shaped elements. The signature geometry is the set of soft, offset circular passes bounded by precise ink outlines and registration crosses.

## Components

### Buttons
- **Shape:** full pill (999px), minimum 48px touch height.
- **Primary:** Sun Yellow fill with Ink Blue text; compact horizontal padding and an arrow.
- **Hover / Focus:** hover lifts slightly on fine pointers; keyboard focus uses a 3px Ink Blue outline; active state scales to 0.97.

### Topic Tiles
- **Corner Style:** gently rounded (16px).
- **Background:** one large, named color field per topic; tiles vary in span instead of repeating one card size.
- **State:** a tile lifts slightly on fine-pointer hover and its circular arrow inverts.

### Navigation
- **Style:** simple text links, strong weight, and ample space for touch. Phone navigation reduces to the wordmark so the hero remains the clear entry point.

### Signature Component
**Overprint Cluster:** three transparent spot-color circles and registration crosses visualise connected topics. Use it as a geometric motif, not an illustration substitute.

## Do's and Don'ts

### Do:
- **Do** compose for 768–1024px first, then reflow without horizontal scrolling.
- **Do** use large color fields to distinguish a meaningful study area.
- **Do** preserve visible focus and 44px-or-larger interactive touch targets.
- **Do** respect the system theme on first visit and remember an explicit light/dark preference locally.
- **Do** use original, concise course-support copy.

### Don't:
- **Don't** build the page from identical icon-and-text cards.
- **Don't** use gradients, glass, stock photography, or faux paper/grain effects.
- **Don't** add eyebrow labels above headings.
- **Don't** use a color-only distinction for meaning.
