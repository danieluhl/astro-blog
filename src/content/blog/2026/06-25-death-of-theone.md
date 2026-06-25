---
title: Death of TheOne
pubDatetime: 2026-06-25T14:43:37.442Z
description: Mistakes and Lessons at a Startup
draft: true
tags: 
  - philosophy
  - management
  - productivity
  - programming
---


> The opposite of sad is not happy, it's interested.

-- Hank Green

## The Context

Once I worked for a startup with an incredibly dynamic CEO. Projects, names,
domains, even top level companies would change multiple times per year,
sometimes weekly.

Stepping into this environment I felt, as I often did, that I was working in the
wrong way. Less than ideal legacy codebase, trouble across teams, legacy
infrastructure getting in my way. All the classic reasons doing a side project
is _so_ awesome - you don't have to worry about any of that, you can just go.

One day my team was chatting with the CEO and we led him down this line of
reasoning. His surprising response was, "what if we just do the project like a side
project?"

## The Ramp Up

The next day he restructured the entire engineering org around this idea. I was
landed on a team of two who would own the entire stack, soup to nuts. It was a
dream come true. I slaved over every decision. What stack do we
use? What about observability? What's the latest and greatest way to deploy and
scale up? What about dev experience? What about AI future concerns?

Within three days we had the most impressive setup I've ever worked in by a
long shot! 

We had ephemeral environments automatically managed for both dev and
branches. We were able to pivot and move in an instant! We were unstoppable. It
was so awesome we named the codebase "TheOne".

This may not age well, but for context here's the stack we went with in 2026:

- cloudflare all the way (workers, R2, KV, queues, hyperdrive)
- TanStack with zod, drizzle, a hono backing api (we needed a public api), react
email
- turborepo
- playwright
- vite
- biome
- github
- betterstack
- neon (postgres)
- resend (email)

But the real power was not just a coherent and complementary stack, it's that
one team owned the thing end-to-end and had expertise across the entire stack.
There is an enormous amount of cognitive load to crossing team boundaries and
dealing with conflicting backlogs and personalities that just go away when one
teams owns the stack. This was huge!

## The Turning Point

About a week into the project my co-worker found something strange. The CEO had
started a new codebase. That's nothing new, but looking at the codebase it
looked like it was attempting to do the same project that TheOne was addressing.
This was our first sign of trouble.

Over the next week I watched the CEO's work. He was working nearly 20 hour days
and had at least one commit every hour of every day. He worked solidly over a
three day holiday weekend. He pulled in a backend developer who was working similarly
unsustainable hours.

The CEO was using an old crufty stack with all the same issues, fully vibe
coding (he was not a seasoned engineer). He was using TanStack with full AWS and
a rails backend. That's right, in 2026 on a new project he picked rails. But
given the time he was putting into it, he was making strides that demoed well.
And he did demo his app to the company, with awkward justification for both
projects existing.

At this point I still had hope. Surely at some point we would have to have a
conversation about which setup was better. I could make my case and we'd make
the clear and correct decision. Their codebase was a vibecoded prototype, ours
was the sustainable and futuristic setup that we needed.

## The Downfall

One Monday morning the CEO called me up to meet. He said, without ceremony or
explanation, they were shutting down TheOne and moving my team over to theirs to
continue work on the vibe coded app.

I had a lot of feelings at this, but mostly it was confusion. The CEO spoke in
clear terms - the decision had already been made. I found the situation so awful
that it was funny. Not only was this objectively a poor decision based on reason
and logic, but it was so poorly executed that it was comical. The analogy that
came to mind was a soccer goalie grabbing the ball and chucking it in his own
goal.

It's at this point that I started thinking about how different people may react
to this situation. The easy path would be to get angry or sad, but there was
another path - to become interested. I became deeply interested in how such an
"own goal" could be made within such a small organization. What information and
narrative was driving this path. Why was the alternative app even started in
the first place.

It's always better to become interested than angry. In the moment the
physiological response may take over. But given a little time, get curious and
you'll find quicker recovery and bigger gains. Ask, "what can I learn from this
situation?", and, "what is happening right now?"

Another realization I made was that I had been far too emotionally invested in
this stack. Don't get me wrong, it really was something special: an opportunity
for a company like I'd never seen before and I'm not counting on ever seeing
again (unless I start my own company). But even then, as we learn from the
stoics, we should not get too attached to anything. Nothing lives forever.

## The Post Mortem

I tried to dig around to learn more about the situation. The root of why the CEO
decided to start a competing project is still a mystery to me and I don't think
there really is logic to it. It was an emotional impulse that seemed harmless
enough at the time. Later, after pouring his heart and soul into the vibes, it
makes perfect sense that he would pick his solution over ours from a human
psychology point of view. He was not working with the same expertise and data
that I had, and of course went with ego over logic, it's an expected human thing
to do. My hope was he wouldn't fall into this trap, but he's only a CEO, not a
trained rational skeptic who understands logical fallacies or cognitive biases.

Another layer of context I didn't quite understand at the time but was able to
reason out later, is the overall "mode" the company was in when starting the
project. There was an existing profitable product that, while having tons of
issues, was working. All new projects or rewrites of parts of existing systems
came with a deep level of fear and anxiety for leadership in the organization.
Feelings of having something that's working and deploying a rewrite may break
everything. 

So leadership was already not tightly tied to the concept of the project in the
first place. Of course, TheOne team was thinking of this and building towards a
safe migration plan... but leadership didn't take the time to ask these
questions to dissuade their fear and anxiety.

The lesson for leadership is: no matter your position or level of expertise,
there will always be other around you that are better at certain things and you
can always learn from them. At least talk to them and hear them out!

## The Downstream Consequences

As time went on, each week I would see an issue, a slow down, some friction, or
outright bugs and downtime, all of which TheOne would have prevented outright.

The pace ground down, engineers started working the old way, the CEO of course
couldn't keep working 20 hour days coding, and eventually the alternate project
got scrapped. That's right - after all of this poor decision making the entire
concept of the rewrite was abandoned. A new term entered my vocabulary that I
later found to be common at startups: abandonware.

I started working on a brand new project and just to get a database setup with
one staging environment took over 2 weeks. Again, with TheOne we had a far
superior setup in only three days! Updating env vars takes days, alignment on
features takes weeks, coordination and process is a constant grind,
misunderstandings abound.

To this day the CEO fully believes he made the right decision despite my trying
to explain to the contrary. He refuses to acknowledge the real problems with why
development goes so slowly. He doesn't understand the dissonance in the old
stack, or the magic of what we built with TheOne, and of course, he thinks AI
can fix everthing.

And maybe it can! I still have hope.

## Lessons for the Future

What would I have done differently if I was zoomed back to the start of this
project?

1. Gain total business context. How is this going to get rolled out? Do we have
   concerns? What are alternative paths the business is considering? Is this an
   experiment that we are not really taking seriously?
2. Align on the problems we're solving. TheOne solved organizational issues that
   unlocked insane speed of development, reliability, scalability, performance,
   etc, but the CEO was still looking at it from a "number of user features"
   point of view.
3. Drop to the CEO level. CEOs think in terms of promises/contracts and cost and
   profit. Push the CEO to commit to this project fully with exit criteria. Push
   them to formally declare when and how to evaluate making the next decision.
   Give them an out, but not without due process and understanding of the
   consequences.

Finally, a note to myself. You are the expert in these areas and others rely on
you to step up and be loud sometimes. You are not an imposter, you've proven
time and time that your decision making is sound. You see the right path, you
just need to help others see it too.



