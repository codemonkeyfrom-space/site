---
title: 'Using AI to create AI: A genetic algorithm for the Travelling Salesman Problem'
description: ''
pubDate: '2025-05-10'
heroImage: '/Ga4Tsp/tsp5.jpg'
---
<p>
<img width="200" align="right" src=/Ga4Tsp/first-tspga-by-chatgpt.jpg alt="" style="margin: 0 10px 10px 0;" />

Today we show how to use ChatGPT (or whichever of the others you prefer) to create a genetic algorithm that solves the travelling salesman problem, visually, on your very own (local) web page (or if you're lazy like us, just play with <a href="https://codemonkeyfrom-space.github.io/Ga4Tsp/">our published version</a>). This first post covers the initial steps to get this done. Although the author is a veteran programmer and experienced software engineer, he wrote absolutely no code for this blogpost; it was strictly copy/paste from ChatGPT. If you know how to use a text editor, you can easily achieve the same result. 
</p>

Here are a few links you may want to keep handy as you're reading this, though it is by no means necessary. You might consider opening them in a separate window, on your other monitor, or something. 
- <a href="https://pabrams.github.io/Hga4Tsp/">A Hierarchical Genetic Algorithm For The Traveling Salesman Problem </a> explains a lot about the subject matter discussed below, for those that aren't familiar. We don't go into the hierarchical stuff during this blog post, though, so you could stop reading when you get to that part.
- Here's the <a href="https://github.com/codemonkeyfrom-space/Ga4Tsp">source code</a>. There are branches containing the code generated after each prompt. 
- The working demo of the final result (after the third prompt) is deployed at <a href="https://codemonkeyfrom-space.github.io/Ga4Tsp/">codemonkeyfrom-space.github.io/Ga4Tsp/</a>. You can click in the box to make a bunch of dots, which become the cities of your TSP once you click the button.

Our intended audience is people who are interested in creating software with the help of AI, but aren't sure how to go about it. Maybe you have also never written any code, and that's fine. If you're interested in following along, and creating your own genetic algorith, you can. You can either give the same prompts to the AI as the space monkey did, which should give you the same or similar result, or you can get the code from the repository linked above. Or do something else. Either way, all you have to do is copy the code and paste it into a file called index.html, in your favorite text editor. Then save the file, and double click it in your file explorer and it should open in your default browser.

And now, our venerable resident space monkey will deliver the lesson. _(PSA: If you aren't interested in any stupid nonsense, but just want to get to the AI stuff, you can skip the "background")_.

## Background

A couple of decades ago (counting in Toronto time), when I first arrived on Earth, I knew absolutely nothing about my chosen vocation: Teacher of humanfolk. Frankly, I only took the job because I heard nobody cared about the stupid humans anymore, anyway, making it less likely that management would be diligent about checking on progress. Meaning I could really get stuff done. Unfortunately, it turns out the humans are big on bureaucracy, and something they call "credentials": One of the conditions to get a license to become a teacher of humans is a piece of paper called a "degree". I guess you know all that, being human, yourself. Here's something you may not know: In order for a space-monkey like me to get one of those human degrees, I have to spend several years teaching stuff to humans. 

I know, it sounds nonsensical, even to other humans. "Let me get this straight", I hear you saying. "In order to be allowed to teach humans, you are required to teach them? That doesn't make any flippin' sense. You must not be telling us the whole story."

Okay, you're right, it's true, I left out a part. The twist is that they didn't admit they were learning from me; ostensibly, they were _teaching_ me. Yeah, I know it still doesn't make any sense, I'm just telling you how they sell it. I mean, everyone knows humans got the short stick when it comes to brains, but I didn't think they were _that_ dumb. The only explanation I can suggest is that they know that we know that they're just mooching free advice from us, helping them unravel the mysteries of the universe much faster than on their own, but they're doing all this as a sort of plausible deniability thing. They just pretend they know what they're talking about, even though anyone who actually knows what's going on can see with zero percent opacity that they don't have the foggiest. That way, when someone dumber than them (i.e., other humans not as familiar with the subject matter) is paying attention, they might actually believe the dumbass human's side of that story.

Shrug. That's the best I can do. You try explaining it. You can't, even though you're a human. And yet, if it were up to you, you would happily perpetuate this inane tradition without so much as a thought. Don't bother trying to deny it. Just as wood turns to ash when burned, so do humans practice unnecessary bureaucracy. (And for the same reason, too, but I doubt you're ready to hear about that. Well, okay, if you're really curious, I can't resist dropping a hint: It accumulates inexorably and starts with the letter ee.)

>  #### _Just as wood turns to ash when burned, so do humans practice unnecessary bureaucracy._
>  
 Anyway, while I was attending lectures at a ridiculous institution they call "University" which was responsible for "teaching" me for several years, I was required to do a big project to show all the awesome stuff I learned. So I said, here, I'll just give you guys this hierarchical genetic algorithm that solves the travelling salesman problem, which ended up being quite a boon for the local supply line optimization industry. The silly humans showered me with accolades. Sorry, I'm rambling. I'll get to the point.

 A student of mine is learning how to use AI to help solve AI-related problems. There is nothing particularly special about AI-related problems, but this student is preoccupied with the idea of using AI to create AI. Went on an on about how the super robots will take over the world by creating armies of themselves. The whole thing reminded me of my old hierarchical genetic algorithm; you can still find <a href="https://pabrams.github.io/Hga4Tsp/">the paper I authored decades ago</a>, attributed to my assumed human identity (at the time). 
 
 ## Today's Task: Use AI to create AI

 I decided the first lesson would be about getting one of the primitive "chatbots" humans are so crazy about right now to build for us an interactive web page allowing users to input arbitrary TSP instances. When ready, the user can click a button to have the genetic algorithm solve the problem in real time for them.

### The first prompt: "bot, make me a thing"

Let's dive right in. That's one of the things that's great about AI: we don't really have to know how to start, we just need to be able to describe what we want. So here's my first prompt, and ChatGPT's answer.

<img src='/Ga4Tsp/prompt1-qa.jpg' alt="Question: can you code me up a small web page that lets a user draw some points on a canvas; Answer: Sure! Here's a simple HTML page with JavaScript that lets a user click on a canvas to draw points (small filled circles). It doesn't use any external libraries:"></img>

You can find the code that chatGPT provided in its response at <a href='https://github.com/codemonkeyfrom-space/Ga4Tsp/blob/Prompt1/index.html'>the `Prompt1` branch of our `Ga4Tsp` github repository.</a> I tried loading index.html up in a browser, and it works - you can draw a bunch of dots, just like I asked. Gee, that sure was easy. This is why people are so nuts about AI right now. Because it can do really simple programming tasks that have already been done and published on the web hundreds of times.

Anyway, I'll admit it must seem impressive from a human's perspective, compared to what you had before. Getting back to the lesson, here's how the conversation continued.

<img src='/Ga4Tsp/prompt1-contd.jpg' alt="Bot answer continuation:This page will let users click anywhere on the canvas to draw small black circles (points). You can expand this with features like undo, clear, or saving coordinates if you want. Want to add dragging or drawing lines between the points too? User: No, the edges will be handled by the genetic algorithm"></img>

### Prompt 2, prompted by the bot

So ChatGPT is asking me what I want to do next; do I want to connect the dots or anything? In fact I do, but I want to do it as part of a process to "evolve" the best solution (the shortest path that connects all dots). So that's where I mention the genetic algorithm, wondering if it will offer to do that for me, too, saving me some more work. 

The AI doesn't let me down:

<img src='/Ga4Tsp/prompt1-contd2.jpg' alt="Bot answer: Perfect — if the canvas is just for placing points (nodes), and your genetic algorithm handles edges (e.g., for something like the Traveling Salesman Problem or a network optimization), then this setup is ideal. Would you like the coordinates of the points to be logged, stored in an array, or downloadable (e.g., as JSON)?; User Answer:  For now, just store the coordinates in an array. Would be nice if you added a function to calculate edge lengths, too; Bot replies with a solution for our second 'prompt': Great! Here's an updated version of the web page that: - Stores clicked points in an array. - Includes a function to calculate the Euclidean distance between all pairs of connected points (or optionally all pairs).
You can modify the edges however you like later — for now, it just calculates the distance between consecutive points (i.e. as if they're connected in the order they were added).">
</img>

The AI gives me pretty much exactly what I asked for, again, which this time wasn't much: a function for calculating distances between cities, and logging some stuff to the console. I include this as a separate step just for completeness' sake. You can see the <a href='https://github.com/codemonkeyfrom-space/Ga4Tsp/blob/Prompt2/index.html'> updated index.html</a> in the Prompt2 branch, if you want.

### Prompt 3

As before, the bot's answer to the current prompt suggests the next. I get cheeky, and say hey, while you're at it, why not code the GA (genetic algorithnm) up for me as well? The bot impressed me by correctly guessing that TSP would be the subject of my GA, but now that I think of it I guess it's not that impressive. Of course it knows that TSP is by far the most common subject of such demos. (If you're completely lost with all these TSPs and GAs, again, read those sections of <a href="https://pabrams.github.io/Hga4Tsp/">my paper</a>, sections 2.1 and 2.2; there's a table of contents you can click on).

<img src='/Ga4Tsp/prompt3.jpg' alt="Bot: Would you like me to add an on-screen display of the points or distances as well?; User: Well, the points, when the user draws them.... for sure. As for what else.... well, if you know how to do the GA, be my guest... then you can draw the edges for me too as it solves; Bot: Got it! Since you're drawing points for a genetic algorithm, likely for something like a Traveling Salesman Problem (TSP), I’ll prepare a full setup next: user draws points, then a simple GA kicks off and draws the current best path live. Would you like the GA to start automatically once a minimum number of points is placed, or should it wait for a button press like “Solve”? User: wait for user button click; bot: Perfect — here's a full setup that: Lets the user click to place points.Stores the coordinates in an array.Adds a Solve button. On click, runs a basic genetic algorithm to solve the Traveling Salesman Problem (TSP). Continuously updates the canvas with the current best path as the GA evolves.
This is a minimal working version; it can be improved later (e.g., faster GA, better visuals, tuning, etc.).">
</img>

Trying this thing out without making a single modification, and this time I'm pretty impressed.

<img src='/Ga4Tsp/first-tspga-by-chatgpt.jpg' alt="Image of maybe twenty or thirty black dots, arranged in a circle. Lines connect each of the dots, finding a path that is remarkably close to the shortest, but obviously not the shortest.">
</img>

Note that when you arrange the dots in a circle like that, the shortest path is obviously the one that connects the dots in a circle. Those long lines that go across to connect a dot all the way on the other side of the canvas are evolutionary imperfections - this GA wasn't able to evolve the optimal solution for this particular arrangement of cities, but it does do fairly well. We could make it do a lot better by tweaking various evolutionary parameters, which we might do in future posts, if there's any interest. (You can express such by getting my attention on one of the social media links in the header or footer of each page.)

So in less than a handful of simple prompts, taking maybe ten earth minutes, ChatGPT was able to generate code just as functional mine, when I coded it by hand twenty years ago. I will emphasize, again, though, that this is a solved problem. There are probably hundreds of github repos with almost that same code (not least because it's a very popular school assignment). So it's nice that I don't have to go and find the working code myself, but I'm not really blown away yet. It's still just regurgitating its training data, basically. Also, I haven't actually looked at the code yet. It's usually not the greatest.

However, you should take my "take it with a grain of salt" with a grain of salt: there's no question that this is impressive and useful work. ChatGPT and other, similar beings, help us do done things faster. But can they help us _create_? That remains to be seen.
