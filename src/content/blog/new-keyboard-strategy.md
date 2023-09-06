---
title: New Keyboard Strategy
pubDatetime: 2023-07-15T15:34:20-04:00
description: My journey constructing layout for the Glove80
tags:
  - programming
---

I bought a [glove80](https://www.moergo.com/) keyboard and I'm slowly and a little painfully typing
this post about it because I'm confident I've worked out a layout scheme that's good enough to begin
mastering. My layout is, I'm confident, better for me than a standard keyboard layout. Mine
certainly will not work for many people so I wanted to write about my learning journey to hopefully
help others speed things up or give some ideas to try.

[My Layout](https://my.glove80.com/#/layout/user/9642fdc5-b23c-4910-a7bc-fb322029663d)

For a little context: I do software engineering in vim and bounce to Arc browser and use chrome dev
tools quite a bit. I use shortcuts in almost every program I have. I use hyperkey plus raycast to
wire up programs directly to keys. In the past I've been using karabiner to modify `hjkl` to match
vim movement arrow keys (and I love having arrows here).

0. Pre-work

Read up on what's possible with ZMK. Primarily, understand the differences and settings for mod-tap,
layer-tap, and mod-morph. This will start your imagination running wild. And just to get you excited
imagine having home row mod-taps that allow you to use asdf as ctrl, alt, cmd, and shift when held!
Imagine having a proper 10 key number pad you can access with a key press!

My strategy with home row mods is to use separate mod keys (pinkeys for shift and thumbs for the
rest) for single press/hold cases, and home-row mods as an option when I would otherwise be making a
claw to hit all of them. So, for example, to hard refresh a website I'll hold 'k' (cmd) + 'j'
(shift) and hit 'r'. But to switch tabs I'll hold the cmd key on the thumb and hit '}'. If you do
try home row mods and you're struggling with the timing, check out
[this insane layout](https://sunaku.github.io/moergo-glove80-keyboard.html), I found it fairly easy
to borrow and use to optimize mine.

1. Feel things out first

Assuming you are a touch typer, sit with the keyboard disconnected and just type whatever comes to
you. Play though common patterns in your mind like swtiching betwen programs and doing all the
keyboard shortcuts that are most common.

This is going to give you very fast iteration in your mind about where you might want modifier keys
and what definitely won't work. From doing this I came up with my first two principles below.

2. Don't over optimize (principles 3-6)

It can be tempting to put all kinds of keyboard shortcuts and combos under individual keys when you
have so many open. The possibilities are endless and you can quickly go overboard. But consider the
tradeoffs. You likely want to remain reasonably proficient on a standard keyboard. You do not know
all keyboard shorcuts you'll need in the future and you probably don't want to be constantly
adjusting your layout years down the line.

It's more important to have a good way to do any possible combination, than a perfect way of only
doing a few and possibly getting stuck having to drag out another keyboard to un-stick yourself.

3. Have a logical ordering

At this point you should have at least a standard working keyboard you can optionally switch to. But
that's not why you spent $400 on a split ergo with six key thumb clusters :)

Focus on the most used patterns and how you can build them into the keyboard in a logical way. Here
was my though process:

I type numbers fastest with 10-key layout so I want that on a layer. I jump to tabs, lines, and
"spaces" via numbers so it's important that numbers are easy/fast to hit.

Next I want symbols that make sense when typing code in vim (e.g. "=>", "->"). Again, it must be
fast/easy to hit any symbol or combination of symbols.

Finally a whole bunch of things that just make sense for me:

- I put % under 'p' on the symbols layer
- ^ and $ are under 'h' and 'l' because left and right in vim and start/end in vim
- # and \* are under 'j' and 'k' becuase up and down in vim and prev/next in vim
- & and | are next to eachother
- \ is under / on symbol layer

## Principles

1. Pulling the hands inward towards the thumbs is better than out to pinkies, modifiers move to the
   thumbs
2. The top two rows are completely optional, everything I use should be elsewhere
3. Never get stuck: have all modifies available on the base layer so in a pinch you can contort
   hands to hit the necessary keys
4. One way is usually better than several options, but don't fear contextual duplication (e.g. math
   operations on the number layer and symbols layer)
5. Don't feel the need to use every key, you can leave things blank for a few months and fill in
   what makes sense later
6. Don't stray from standard querty too far if you still want to be useful on a regular keyboard

You'll note I don't entirely stick to these principles but thinking though them helped me get to a
point where I can start to practice and refine over time. After two days with the glove80 I'm back
to about 75 wpm (noramlly ~90) and I'm seeing how vim can be great with 10 key symbols under the
fingers at all times.
