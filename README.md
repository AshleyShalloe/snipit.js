# snipit.js

## What is this?

A reimplementation of the fabulous snipit ([Aine O'Toole, snipit (2024) GitHub repository, https://github.com/aineniamh/snipit](https://github.com/aineniamh/snipit)), a tool which summarises SNPs relative to a reference sequence, in HTML5/JavaScript.

For the most part, I've copied the overall look and feel - including the colourscheme.

## How dare you!

JavaScript is cool, okay? [Also...](https://github.com/aineniamh/snipit/blob/master/LICENSE)

## What things are/aren't implemented?

Implemented

* summarise a predefined nucleotide multiple sequence alignment (`res/testFasta.js`)

Not implemented (a select list of major missing features...)

* recombi-mode
* amino acid colouring
* any sort of input validation
* export files

Oh, we're also missing a frontend that lets you actually upload your own fasta. That's kind of important, I suppose.

At some point the whole thing needs a refactor. We could probably process huge fasta files with some optimisation (read: don't load the entire thing into RAM like we do now).

It'd be cool to maybe [use Biowasm to run mafft](https://biowasm.com/cdn/v3/mafft/) on inputs, so it would be possible to provide unaligned sequences.

## How can I use this?

I probably wouldn't. Not yet anyway - it's still in development and probably has at least one shambolic off-by-one error. Check back in a few weeks maybe.
