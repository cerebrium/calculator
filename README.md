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
d. The logic intensive parts could perhaps be factored out to their own files - If this was done, 
with a heavily intensive formula using a webworker might be the way forward so there isn't any 
blocking that occurs. - In a perfect world all of the expensive fe stuff would be factored out 
into wasm called on another thread (shared web worker)
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
<pre>
3. Thoughts/Considerations
   a. I did not copy any code from anywhere (perhaps if I had my highlighting would be better! :D).
   b. I have not worked with AST's before, this was new, extremely interesting, and ultimately rewarding 
   and fun! I fully intend to solve this completely in the future
   c. I spent a bit more than the 3 hours. However, for the actual tree manipulation I would estimate 
   I ended up around at that 3 hour mark. I spent (longer than I care to say!) getting the app into ts 
   (I forgot to add a tsconfig), and just doing some random styling and playing with the background 
   color. So, overall yes I spent more than the alloted time, but 'concentrated hours' dealing with 
   the actual question, I would say I spent about the correct amount of time.
   d. I deployed it here: https://celucalc.netlify.app/ Just for easy viewing. I can take it down if 
   I am not meant to do this, just thought you might appreciate playing with it a little (find all my bugs!)
   e. I sincerely hope that it is a decent attempt and not way below your other applicants and a waste of time!
</pre>
