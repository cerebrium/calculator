# Celonis Programming Challenge

Dear applicant,

Congratulations, you made it to the Celonis Programming Challenge!

Why do we ask you to complete this challenge?

First of all, we want to ask questions that are closer to the eventual job you’ll need to do. We also want to respect your time and schedule fewer in-person interviews. Finally, we’ll also share some insights into what we look at and how we evaluate. This challenge gives you the ability to shine :)

# Your task: designing and building a calculator

The task in this challenge is to build the formula visualization for a scientific calculator. The calculator should be able to take input in the form of a free text formula and then visualize & modify the formula.

You should limit yourself to 3 hours for this challenge, including familiarizing yourself with the challenge. As engineers we understand there is always more you want to do, but please respect the time limit for yourself. We understand this limit means your solution may not be comprehensive - that’s okay - but the solution should build and run so we can see the result of your work.

Note that there is nothing wrong with searching when you have certain questions or are unsure about some APIs, but you should avoid outright copying code. If you decide to copy code, please mark it as copied citing the source.

In the follow-up interview, expect to walk us through your design, code and discuss your approach to the challenge. What we are looking for:

- Analytical / problem-understanding / problem-solving skills
- Clear articulation of key design and coding decisions
- Ability to execute / implement
- OOP / abstraction / composition skills

# Technical details

## Description of the calculator language

The language which we want to execute is fairly simple and is similar to Excel syntax.

The language is built using the following rules (note that these are not formally correct, rather, an illustration):

```
EXPR = BINARY_EXPR
    | FUNCTION
    | UNARY_EXPR
    | NUMBER
    | STRING
    | PARAMETER
    | PI
    | "(" EXPR ")"

BINARY_EXPR = EXPR + EXPR
    | EXPR - EXPR
    | EXPR * EXPR
    | EXPR / EXPR

FUNCTION = <FunctionName>"(" (EXPR (EXPR)*)? ")"

UNARY_EXPR = "-" EXPR

NUMBER = [Float or Integer Number]

STRING = "'"[String]"'"

PARAMETER = "$"[PARAMETER_NAME]

PI = "PI"
```

The following examples are valid queries

```
PI * SQR($r)

($b + SQRT (SQR($b) - 4 * $a)) / (2 * $a)
```

## Visualizing the formula

Data visualization is one of the key aspects of Celonis' software. In this task you should implement an interactive visualization of the formula entered.

As a starting point, in the src/ folder you can find a parser as well as AST classes and a small function library implemented for demonstration purposes. The output of the parser is a JSON syntax tree which is used below for the tasks.

# Tasks

Complete the following tasks for the challenge:

1. Generate a formula string from the tree. (JSON syntax tree => Formula)
2. Design the architecture and component structure you’ll use to visualize the formula hierarchy. Note that deleting nodes is non-trivial and should be included in your design (see example below).
3. Visualize a syntax tree (parsed JSON tree) in a UI component that represents the formula. It should be easy for the user to distinguish between functions, constants etc. (JSON syntax tree => Visualized Syntax Tree)
4. Allow deletion of nodes from the tree through UI interactions (Changes to UI -> changes to JSON syntax tree)

# Examples

Here’s one of our engineers’ example work to show you how the output of task 3 and 4 might look:

![Alt text](./assets/calculator-example-ui.png?raw=true "Quick visual representation")

As another example, someone has entered the following formula for calculating the area of a circle: `PI * SQR(4)`. Here’s how the user could remove the ‘SQR(4)’ block from the formula (click to select, x button to remove):

![Alt text](./assets/Challenge_EditBlock.png?raw=true "Click to select and x button to remove")

This example is actually from Celonis’s formula editor UI, so it’s very polished compared to what we are asking for here, but it’s also representative of the work we do.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## DETAILS FROM AUTHOR

1. There are a number of bugs, that I am not proud of. The following is a list of items that I would (and will in my free time) prioritize for making this a complete submission.
   a. The outlining foe the formula is not sufficient. The left and right sides of the formula should be outlined
   b. The deleting of nodes is not complete. There is an error with duplicate nodes, it only occurs sometimes, and I couldn't find it in the time alloted.
   c. The styling leaves a lot to be desired.
   d. The Delete ui setup is non-ideal, perhaps x's would have been better.
   e. It is not mobile friendly

Technical Priorities:
a. The recursive solution was easier for me to logic about with the tree syntax, but it is not implemented well. I would like to revisit and re-write the entire Visualizer.tsx component.
b. The use of the context was most for convenience, not for efficiency. Context can be problematic, and I would have to take a serious look at whether it was necessary.
c. The file structure is not perfect. The names are non-ideal, it should be organized better. I am mostly happy with the readability of each component themselves, but not happy about the overall structure.
d. The logic intensive parts could perhaps be factored out to their own files - If this was done, with a heavily intensive formula using a webworker might be the way forward so there isn't any blocking that occurs. - In a perfect world all of the expensive fe stuff would be factored out into wasm called on another thread (shared web worker)

2. How does this work?
   a. The app is divided mostly into three important components. 1. The context-provider.tsx (treeContext > context-provider) - This is how I provide the data to all of the components without dealing with prop drilling. - This context allows for the overall tree to be edited from within the smaller components (calculator > components > Container, astVisualizer > NestedComponent) - Then viewed and used in the others (Visualizer.tsx) 2. Visualizer.tsx - This is the meat of the logic. This is where the tree is broken down and turned into components. 3. NestedComponent - This is a helper for the recursive strategy, and additionally handles deletion of nodes in the tree
   b. Barreling 1. A pattern that I like is exporting as default into an index that is easily accessible to any parent
   c. Styled Components 1. A pattern that I enjoy is the import \* as S, this helps greatly with differentiating between what is a styled component and what is not.

   e. To use it, press the visualize button, then to delete nodes click on the one in the display that you wish to remove.

3. Thoughts/Considerations
   a. I did not copy any code from anywhere (perhaps if I had my highlighting would be better! :D).
   b. I have not worked with AST's before, this was new, extremely interesting, and ultimately rewarding and fun! I fully intend to solve this completely in the future
   c. I spent a bit more than the 3 hours. However, for the actual tree manipulation I would estimate I ended up around at that 3 hour mark. I spent (longer than I care to say!) getting the app into ts (I forgot to add a tsconfig), and just doing some random styling and playing with the background color. So, overall yes I spent more than the alloted time, but 'concentrated hours' dealing with the actual question, I would say I spent about the correct amount of time.
   d. I deployed it here: https://celucalc.netlify.app/ Just for easy viewing. I can take it down if I am not meant to do this, just thought you might appreciate playing with it a little (find all my bugs!)
   e. I sincerely hope that it is a decent attempt and not way below your other applicants and a waste of time!
