---
title: "What I like and Don't like about Circle's new blockchain Arc"
date: "2025-08-13"
excerpt: "I read the Arc litepaper so you don't have to. When my friend Sanket and his cracked team joined Circle a few months back, I knew something new was coming. Well, now Arc is here and here's what stands out for me."
readTime: "6 min read"
---

# What I like and Don't like about Circle's new blockchain Arc

I read the Arc litepaper so you don't have to.

When my friend SanketJain and his cracked team joined circle a few months back, I knew something new was coming.

Well, now Arc is here and here's what stands out for me in this launch:

First of all, yes you heard that right: Arc is circle's new Layer-1 blockchain, that is focused on building *regulated* financial apps & services with stablecoins. With Arc, they want to combine the programmability of smart contracts and the enforceability of law (GENIUS Act).

I'm going to skip the part about whether this could be an L2 and that entire discussion. There are plenty of brilliant speculators on crypto Twitter who can do a better job at that than me. However, I do find some really interesting design choices that I think are worth talking about.

Before we talk about design and feature set, it's worth wondering why a blockchain in the first place?

1/ If the 'yield on T-bills' biz model was as good as it seemed as per the public markets, and the Coinbase deal was working as intended, this just seems changing course, no?

2/ Is this the end of the fat protocol era? are we back to distribution is king? If yes, what happens to the base x circle deal?

btw no hate on changing course, in fact I respect biz leaders who are pragmatic. But if arc is now going to build a blockchain ecosystem, I would love to see more open comms on ecosystem decisions to build trust with builders.

Anywho - let's get back to what's underneath Arc:

According to the litepaper, Arc's three pillars are:

1/ Deterministic, sub-second finality with a permissioned consensus engine.
2/ Opt-in privacy for compliance and auditor-friendliness.
3/ Stablecoins (USDC and others via paymaster in the future) as network gas currency for predictable costs for enterprises

Initial design highlights:

- Permissioned Tendermint BFT w/ <1s finality
- USDC for gas + paymaster for other stables
- FX primitives (matching engine + RFQ)

Later releases:
- Privacy initially via TEEs but modular
- Encrypted mempool
- Multiple concurrent proposers
- PoA -> PoS

ok so, first - I find it fascinating that Arc is going to be openly permissioned. It will be run by a set of known institutions. fwiw, i think this is the pragmatic approach. The "next trillion dollars" will only come onchain when institutions can see accountability, directly. Arc claims to achieve sub-second finality with Malachite, which is a Rust-based, high-performance consensus engine achieving sub-second finality by finalizing blocks in milliseconds. 

It basically implements the Tendermint BFT protocol and Arc saw:

~ 3,000 TPS with

## On Privacy:

Don't forget, Sanket's previous company Gateway (acq. by Circle) was building in MPC. So it was a no brainer that there was going to be a privacy angle with USDC.

I am pleasantly surprised about Arc in this matter:

Arc will offer opt-in privacy features with an overall focus on confidential payments.

Other privacy features being considered:

- encrypted mempools
- privacy-preserving ai treasury management
- dark pools (w/ private order books?)

Note, arc specifically points out their backend is designed in a way so as to be easily compatible with other tech like FHE, MPC and ZK.

## On Native Assets:

While native support for USDC, EURC, and USYC was a no-brainer, I found it interesting that Arc wants to allow "other issuers of tokenized money - from fiat-backed stablecoins, to tokenized bank deposits and central bank money."

This ^ along with the paymaster to enable gas payments in other (local currency) stablecoins makes it clear that Arc's vision is bigger than just being Circle's onchain rails.

Other very interesting features/things:

- FX engine: pvp fx settlement between vetted counterparties.
- Offchain Request-for-Quote (RFQ) execution layer (permissioned).
- Invoicing metadata for Txs(!)
- Refund and dispute payments(!)

all very impressive.

## My take:

- I find the overall deliverable here close to what you'd expect from a team like Circle. It doesn't WOW me, but it's competitive and pragmatic.
- Circle has done tons for our industry (to their own advantage also ofc!) but I think on a spectrum of private to public

