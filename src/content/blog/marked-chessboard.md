---
title: 'Chessboard showing square control'
description: 'A small web app that gives a visual indication of which squares are controlled by which player.'
pubDate: '2025-05-06'
heroImage: '/marked-chessboard-practical-position.jpg'
---

I coded and published a small web app that gives a visual indication, for any chess position, of which squares on a chessboard are controlled by which player.

It is [published here](https:///visualize-chessboard-territory.codemonkeyfromspace.com/), so you can try that out if you want. You can set a position in [Forsythe-Edwards Notation](https://en.wikipedia.org/wiki/Forsyth%E2%80%93Edwards_Notation), or you can do it by playing through a game (click once on a piece, and then on its destination square). If anyone asks me, I'd gladly add the ability to set a position by dragging and dropping. The whole thing is open source, so you can see how it's done (the source code is linked from each app at the bottom of the page.)

If you don't want to click the [link](https:///visualize-chessboard-territory.codemonkeyfromspace.com/), here's what the app looks like:

![screenshot of Paul's marked-chessboard app](/marked-chessboard-position.jpg)

I had done this maybe twenty or thirty of years ago in C, and I thought it might be fun to modernize it. Turns out I'm not the first to think of this, though.

This guy named ciphrd has a tool like mine <a href="https://chess-coverage.ciphrd.com/#:~:text=Chess%20Coverage%20is%20a%20tool%20to%20explore%20the,squares%20controlled%20by%20players%20on%20a%20chess%20board">still published</a>. It lets you load a PGN file, and it also lets you set the board position by hand. Two things my implementation don't do right now. Mine lets you input by FEN, instead.

There's also <a href="https://chess.yzrin.com/">chess.yzrin.com</a> which has more features than either ciphrd or myself. I kind of like that it gives a number for each square coverage. 

<h3> Is this really useful? </h3>

A disclaimer before I start talking about the benefits of marking up a virtual chessboard like this. I have aphantasia, meaning I can't conjure up images in my mind. Apparently, only three percent of the population have that. It's not nearly as serious a problem as you might think; apparently there's actually no impairment at all to visualization-related cognitive exercises in people with aphantasia compared to people without. Still, I think it's worth mentioning, given the subject matter.

To be honest, when I first implemented this kind of a visualization tool and started using it, I realized it wasn't nearly as useful as I thought it would be. My brain can't make much sense of it, anyway; maybe I need more practice. I guess if you played with it a lot you might get used to the extra visual information and it might help avoid blunders, but I don't think that would be a good thing, because you can't play with that board all the time, and if you tried it would probably be considered cheating.

However, during my research I did encounter some visualization techniques that actually seem likely to improve your chess. Like being able to identify each square by coordinates and color immediately without having to think. Or knowing immediately what squares a given piece can get to from a given square, without thinking about it. Stuff like that. Here's a decent article on the topic if you want to <a href="https://www.chessjournal.com/chess-visualization/">learn more</a>.

That's all, for now. If anyone knows for sure whether or not this kind of thing would be considered cheating, if you used it to connect as a client to the lichess API and play some rated games, for example, I'd be really curious to know. Also, if anyone has any other interesting ideas for features that could be helpful as a web-accessible tool, I'd probably be willing to implement it, if it's not too ambitious.