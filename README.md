# Apple Tree Shake Game

This application is a simple interactive game built with Next.js, React, Redux, and Tailwind CSS. Hosted on Vercel.
[apple-tree.vercel.app](apple-tree.vercel.app)

## Overview

The application consists of four main components: a tree, apples, a basket, and a button. The user can shake the tree by clicking either on the tree itself or the button. When the tree is shaken, apples fall to the ground at random intervals and in random quantities. It's possible that no apples may fall on the first shake!

Initially, the user sees an empty basket on the screen. However, once an apple falls, the basket image is replaced with an image of a basket full of apples.

## Additional Features (Not Implemented)

While building this application, several additional features were considered that could potentially turn this into a more complex game:

- Counting the number of fallen apples: This could allow users to keep track of how many apples they have collected.
- Showing a tree without apples after all apples have fallen: This would provide a visual indication that the user has successfully collected all the apples.
- A reset function to restart the game without reloading the page: This would make it easier for users to play the game multiple times.
- Implementing a scoring system based on the number of shakes it takes to drop all the apples: This could turn the application into a game where the goal is to drop all the apples with the least amount of shakes.

However, these features were not implemented in the initial version in order to maintain the simplicity of the application. The focus was to create a straightforward, easy-to-understand interaction that demonstrates the use of React, Redux, and Tailwind CSS.

## How to Play

To play the game, simply click on the tree or the button to shake the tree. Watch as the apples fall and collect in the basket. To restart the game, simply reload the page.

Enjoy the game!
