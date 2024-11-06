# # Etch-a-Sketch Project - README

## Overview
This project is a web-based drawing application inspired by an Etch-A-Sketch, designed to build DOM manipulation skills using JavaScript and CSS. The project allows users to draw by hovering over a grid of squares, dynamically resize the grid, reset it, and apply color effects.

## Features
1. **Grid Creation**:
   - Generates a 16x16 grid of square `div`s using JavaScript.
   - Uses Flexbox for layout, ensuring a structured grid within a container `div`.

2. **Interactive Hover Effect**:
   - Hovering over squares changes their color, creating a sketchpad effect.
   - Color change can be achieved by adding a CSS class or modifying background color with JavaScript.

3. **Dynamic Grid Resizing**:
   - A button prompts users for a new grid size (up to 100 squares per side).
   - The grid resizes within a fixed area, preserving a consistent total pixel width.

4. **Reset Button**:
   - A reset button allows users to clear the current grid, providing a fresh canvas for new sketches.

5. **Additional Color Effects** :
   - Random color changes for each square upon interaction.
   - Progressive darkening effect: each pass over a square darkens it by 10%, reaching full opacity or black in ten interactions.

## Technologies Used
- **JavaScript**: Grid generation, event handling, resizing, and resetting.
- **CSS (Flexbox)**: Grid layout styling.
- **HTML**: Basic structure, buttons for resizing and resetting.

## How to Run
1. Clone the project repository from GitHub.
2. Open the `index.html` file in a browser to interact with the sketchpad.
3. Use the resize button to adjust the grid size, and the reset button to clear it.

## Extra Resources
- **JavaScript Events**: For hover and reset button functions.
- **MDN Documentation on Opacity**: For progressive darkening effects.

This project provides hands-on practice with JavaScript and CSS while creating a functional and interactive sketching tool.
