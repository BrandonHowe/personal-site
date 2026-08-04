---
title: COOL Compiler
dates: 2025
order: 5
links:
  - label: Source
    href: https://github.com/BrandonHowe/cool-compiler
---

I wrote a typechecker and optimizing compiler for the COOL programming language for [CS485 at NJIT](https://kelloggm.github.io/martinjkellogg.com/teaching/cs485-sp25/). The whole compiler is written by hand in C. It type checks COOL programs, then generates x86 assembly with a variety of dataflow and performance optimizations.