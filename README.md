# Banana Republic
Front-end for the Banana Republic project. View the end result [here](https://duncansmith3.github.io/frontend/).

## Requirements
### Design

* Global configuration
* BEM naming convention
* ITCSS
* Reusable components
* Responsive design, where the tablet and mobile designs are to be fluid

### Interactions
* On clicking the right arrow at the bottom of the left panel, the content panel (orange) slides
open over the form;
* On clicking the left arrow at the bottom of the left panel, the content panel closes;
* The panel must expand with an animation from left to right;
* On mobile, the panel expands to the bottom;
* On mobile, once expanded: scroll to show the expanded panel in view. (Top of the screen).

## Implementation
Four viewports are targetted:

|Viewport|Viewport width|
|--------|-------------:|
|Desktop HD|>1440px|
|Desktop|1024px - 1439px
|Tablet|840px - 1023px|
|Mobile| <840px|

It is assumed that Desktop HD and Desktop dimension specifications are rigid, whereas Tablet and Mobile viewports fluidly adjust to the width of the screen. Most notably, given the two panel interface, the Tablet mode fluidly adapts between:
* a 50-50 width split for the panels on the lower viewport width end,
* and a 1/3 - 2/3 width split on the upper viewport width end.

This allows Tablet mode to seamlessly adapt between Mobile and Desktop viewports during browser width resizing.

## Where you will be impressed
Absolutely no JavaScript has been used to toggle views; in fact, no class toggling is used anywhere in the interface! This is due to the considerable use of sibling and element state CSS selectors.

Javascript is solely used to control window scrolling when in Mobile mode. Potential jank is mitigated by using `window.requestAnimationFrame()`, which leverages browser optimisations to achieve 60fps animations. Additionally, an `easeInOut` transition implementation is provided as the client seems to prefer that timing function :).
