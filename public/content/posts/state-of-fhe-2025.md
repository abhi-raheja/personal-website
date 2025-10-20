---
title: "State of FHE | 2025"
date: "2025-08-09"
excerpt: "Imagine being able to compute on secrets, without ever seeing them. That's the magic of Fully Homomorphic Encryption (FHE), a cryptography technique that lets you process encrypted data as if it were unlocked. It's privacy's holy grail."
readTime: "7 min read"
---

# State of FHE | 2025

Imagine being able to compute on secrets, without ever seeing them.

That's the magic of Fully Homomorphic Encryption (FHE), a cryptography technique that lets you process encrypted data as if it were unlocked. It's privacy's holy grail.

## A Quick Explainer:

Think of regular encryption as kind of a black box: you can store things 'securely', but to use them, you must unlock the box and take those things out.

FHE is like a magic box that lets you do computations (like execute smart contract functions, tally votes, or run algorithms), while the box itself stays sealed and data inside encrypted.

At its core, FHE allows two main tricks:

1/ Homomorphic addition: Encrypted(A) + Encrypted(B) = Encrypted(A+B)

2/ Homomorphic multiplication: Encrypted(A) × Encrypted(B) = Encrypted(A×B)

This means you can compute on encrypted numbers, and when you finally unlock the result, you get the answer as if you'd worked with the original data.

## Why should we care?

Stablecoins are taking off and the world's largest financial institutions and corporations are coming in. But big businesses don't want their competitors to see their day-to-day operations activity like who they're paying, how much and, when.

Hospitals want to share patient data with AI companies to train models that can help diagnose or cure life-threatening diseases, but cannot do so while upholding patient privacy.

Consumers apps want to outsource computations to powerful AI models in the cloud but do not want to give up user secrets.

FHE could make all this possible, from finance to machine learning.

## So, Why isn't FHE Everywhere?

Here's where our ongoing and future work lies:

### 1/ More theory, less applications.

FHE schemes come in three main types: Boolean (good for comparisons), Modular Arithmetic (for integers), and Floating Point (for machine learning). Each has its own quirks and trade-offs, but there's little guidance on which to use. Choosing between them requires a cryptography PhD itself. Our team at Sunscreen turns frontier FHE research into production-ready products, tooling, and infrastructure.

### 2/ Efficiency

FHE is powerful, but slow (for now). Operations that are instant on normal data can take minutes or hours when encrypted. Multiplications, especially, are like trying to run in a suit of armor, each step adds "noise" to the data, and too much noise means you can't decrypt the result. Some schemes limit how many steps you can take before the noise drowns everything out. For Sunscreen, it means focusing on FHE applications that are practical today and justify the added time and cost for high-value use cases.

### 3/ Usability

Using FHE until a few years ago was like assembling a rocket from blueprints, every parameter matters, and the smallest mistake can send you off course. Libraries are complex, documentation is sparse, and you need a cryptography PhD just to get started. There was no "easy mode," until our Parasol Compiler and Secure Processing Framework (SPF) to write and deploy FHE programs.

## What's Being Done?

✦ **Net New Applications**: Apple is using already using homomorphic encryption on a billion devices for privacy-preserving live caller ID lookup and private information retrieval. This is a great example of focusing FHE applications on use cases that were simply not possible before.

✦ **Public Benchmarking**: Comprehensive, clear and nuanced evaluation of different schemes on equal footing to guide builders.

✦ **Standardization**: Efforts like the Privacy-Enhancing Cryptography project at NIST, and the Homomorphic Encryption Standardization consortium will be crucial in pave the way for standardization, especially crucial for highly regulated industries.

✦ **Hardware acceleration**: GPUs, FPGAs, and eventually ASICs will speed things up dramatically. Sunscreen's FHE libraries and tooling is designed to leverage the most cutting-edge developments in both, hardware and software.

