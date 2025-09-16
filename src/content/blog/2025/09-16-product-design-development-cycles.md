---
title: Product Design Engineering Cycles
pubDatetime: 2025-09-16T13:06:41.919Z
description: How product, design, and engineering can work together
tags: 
  - management
  - programming
---

# Specialties

In an organization that has specific roles for Product, Design, and Engineering,
the purpose is to specialize with overlap. I'll focus primarily on frontend
engineering.

## Product

Specializes in getting into the customers head so they can model the world and
needs of the customer as accurately as possible.

## Design

Specializes in taking a large nebulous world of possibilities and honing in on
one good possibility. With wholistic systems thinking about the product
design.

## FE Engineering

Specializes in adapting designs to work with the code and domain model (types).
With good UX/A11y and systematic component design practices.

# Cycles and Overlap

There is significant overlap between each specialty, and when we add the
customer we complete the larger product development cycle.

## Product <-> Engineering

The team brainstorms ideas on how to best solve the most important problems
given the current system capabilities or what capabilities can reasonably be
added (cost vs benefit).

## Product <-> Design

Product and design have quick internal cycles where Design questions assumptions
and Product gives data points to help the designer sift through the multiverse
of possibilities to find the one that is right for the moment.

## Design <-> FE engineering

Design and engineering have quick internal cycles to adapt the design to what is
reasonable and consistent for the code to represent in final form to the
customer. Note that the output of this can be going back to re-work the design,
update to the domain model, or can be a successful deploy.

# The Larger Cycle

What really matters is the larger cycle, and so we aim to optimize for success
in the larger cycle:

**Typical Large Cycle**

Product identifies a problem  
=> Devs + Product ideate on solutions  
=> Finalize any backend capabilities required  
=> Begin design cycle  
=> BE + Data side of FE work  
=> FE UI/UX work  
=> Deploy and get customer feedback

That last step is a big one! It completes the larger cycle. It's where we learn
if we were solving the right problem and if we solved it in the right way.

# Optimizing the Larger Cycle

We can validate success with data. We must work scientifically by setting success
criteria before we begin the project. We must have all of the required data to
know success/failure before we begin the project.

_Most_ of the time we're not creating the right solution, and _much_ of
the time we're not solving the right problem.

Therefore, we should optimize for speed of iteration on the _larger_ cycle, and
focus less on optimizing internal cycles. Coming up with the perfect design and
implementation for the wrong solution is a waste on both ends.

**How can we optimize to get customer feedback quickly?**

If the problem and solution are small or straight forward then we don't need to
deviate from the typical cycle.

If the problem and solution have new success criteria or assumptions we need to
check, we can break into two customer feedback cycles. The first cycle cuts out
the steps that take the longest (BE and Design work) to quickly get customer
feedback.

**First quick assumption check**

Product identifies a problem  
=> Devs + Product ideate on solutions  
=> Devs + Product identify first assumptions of the customer, success criteria  
=> FE UI/UX work to check an assumption  
=> Deploy to get customer feedback  

**Back to typical cycle**

Based on data, begin design cycle  
=> Begin design cycle  
=> BE + Data side of FE work  
=> FE UI/UX work  
=> Deploy and get customer feedback  


