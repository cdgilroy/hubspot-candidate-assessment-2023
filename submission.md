# Submission Notes

These notes will be read by HubSpot developers. Drop us a line!

## Given more time, what would you have done differently?

- It's been a number of months since I wrote _any_ code of any kind, so it took me a wee while to get back into the swing of things. I started with a lot of ambition, but lost a lot of time wresting with lots of silly little things.  In the end, I had to prioritise "getting it done" over "showing off".
- TypeScript!  I did originally start building the app for Exercise 2 in TypeScript, but I wasn't convinced `eslint-plugin-import` _and_ Parcel _and_ TypeScript were playing nicely together and didn't want to spend more time working on the tooling rather than implementing the required functionality.  As an aside, I hadn't encountered Parcel before this assessment and I really like it.
- I don't think I got the import order plugin for ESLint working correctly at all, even with stripping out TypeScript.  That's a small annoyance, I like things being in a set order across a project.
- I'd use [Redux](https://redux.js.org/) for state management, or maybe even [zustand](https://github.com/pmndrs/zustand) (I've not used it before, but a library I have worked with in the past made the switch so I'm curious).  A separate state management system is much more easily tested (and maintainable) than relying on React's built in state management and managing chains of props.
- I would add in accessibility testing. `eslint-plugin-jsx-a11y` is better than nothing, but pipeline-driven accessibility testing would be much better.
- Spend more time on the CSS.  It's a skill, and one I'm far from mastering.
- Write my own multi-select dropdown component.  The one I selected is customisable and offers some nice functionality, but isn't obviously customisable enough to match the mockup as closely as I'd want.
- Push for as many extra points as I can (e.g. fuzzy searching).

## How did you deviate from the directions, if at all, and why?

For Exercise 1 the instruction to not modify the DOM structure was very clear.  I did annotate it with classes so the structure is the same, but easier to reference for styling.  I'm not sure if that consitutes a deviation from the instructions, but I thought I'd raise that anyway.

## Is there anything else you'd like to let us know?

I reckon the exercises were nicely levelled and I did have fun, once I got past the "throw my laptop out the window because nothing is working" stage (I needed to remind myself that it's part of the process!)
