---
title: 'Webrogue Part 2: map generation: simplex noise with warping'
description: 'Webrogue Part 2: map generation: simplex noise with warping'
pubDate: '2025-06-08'
heroImage: '/webrogue/part2-mapgen/ss1.jpg'
demoUrl: '/'
---

<p>
To continue our series on our new web-based roguelike project called "webrogue", we examine some of our map generation options. 
We wanted to start by generating a relatively realistic overworld map using configurable terrain types represented by ascii glyphs and colors. 
As usual, we sought to save some time by asking an AI to help.
</p>
<p>
Working with ChatGPT, we quickly honed in on an implementation involving simplex noise, which generated a nice looking and somewhat realistic seeming random map which reminds us a little of a contour map.

There was a problem, though; the generated biomes tended to "streak" to the right and downwards. When we told ChatGPT, it sent us searching through a whole warren of rabbit holes, adding increasingly more complicated "noise" techniques. Since each one did seem to improve the streakiness, none would get rid of it entirely. 
 </p>
<p>
After suggesting to ChatGPT multiple times that the problem was due to the order the cells in the map were being generated (to the right and downward, since x=0, y=0 is the upper left corner), it seemeed stuck on hiding the problem by adding more noise. Finally, we tried reversing the direction of looping on the y-values and told ChatGPT that the result was that the streaking changed direction, whereupon it finally believed us and fixed the problem.
</p>

<p>
Anyway, this post isn't about map generation theory - we might do a separate post on that - but rather about the map generation tool we made to facilitate finding parameter values that generated the types of maps we were interested in.  
</p>

You can find the source code and corresponding deployment at the following links:
- [deployment](https://codemonkeyfrom-space.github.io/webrogue/mapgenDemo.html)
- [source code](https://github.com/codemonkeyfrom-space/webrogue/tree/part2-mapgen)


<br/>
If you click the "deployment" link above you should see a randomly generated map. Click the gear <img src='/webrogue/part2-mapgen/gear.jpg' alt="settings" title="settings"></img> icon at the bottom right to open the settings. 


Here are some examples of what a generated map looks like under various parameters.

<h3>Default Parameters</h3>
<img src="webrogue/part2-mapgen/1_1_linear-increase-threshold.jpg" alt="generated map with settings open"></img>


