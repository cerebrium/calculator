## DETAILS FROM AUTHOR
<pre>
1. There are a number of bugs, that I am not proud of. The following is a list of items that I 
would (and will in my free time) prioritize for making this a complete submission.
   a. The outlining foe the formula is not sufficient. The left and right sides of the formula 
   should be outlined
   b. The deleting of nodes is not complete. There is an error with duplicate nodes, it only 
   occurs sometimes, and I couldn't find it in the time alloted.
   c. The styling leaves a lot to be desired.
   d. The Delete ui setup is non-ideal, perhaps x's would have been better.
   e. It is not mobile friendly
</pre>
<pre>
Technical Priorities:
a. The recursive solution was easier for me to logic about with the tree syntax, but it is not 
implemented well. I would like to revisit and re-write the entire Visualizer.tsx component.
b. The use of the context was most for convenience, not for efficiency. Context can be problematic, 
and I would have to take a serious look at whether it was necessary.
c. The file structure is not perfect. The names are non-ideal, it should be organized better. I 
am mostly happy with the readability of each component themselves, but not happy about the 
overall structure.
</pre>
<pre>
2. How does this work?
   a. The app is divided mostly into three important components. 
   1. The context-provider.tsx 
   (treeContext > context-provider)
      - This is how I provide the data to all of the components without dealing with prop drilling. 
      - This context allows for the overall tree to be edited from within the smaller components 
      (calculator > components > Container, astVisualizer > NestedComponent) 
      - Then viewed and used in the others (Visualizer.tsx) 
      2. Visualizer.tsx 
      - This is the meat of the logic. This is where the tree is broken down and turned into components. 
   b. NestedComponent 
      - This is a helper for the recursive strategy, and additionally handles deletion of nodes in the tree
   c. Barreling 1. A pattern that I like is exporting as default into an index that is easily accessible to 
   any parent
   d. Styled Components 1. A pattern that I enjoy is the import \* as S, this helps greatly with 
   differentiating between what is a styled component and what is not.

   e. To use it, press the visualize button, then to delete nodes click on the one in the display 
   that you wish to remove.
</pre>

