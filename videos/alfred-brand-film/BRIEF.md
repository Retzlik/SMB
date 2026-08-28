---
workflow: product-launch-video
flow: autonomous
length_s: 42.5
aspect: "16:9"
canvas: { w: 1920, h: 1080 }
fps: 30
audio: none
lang: sv
---

# Alfred — brand film

## Intent

A brand film for Alfred (getalfred.se · Authoricy AB, Stockholm) that keeps
Alfred's **visual identity** and replaces Alfred's **communication**.

The founder's note was explicit: *"I do not like the way Alfred communicates.
That is the whole point."* The shipped site sells Alfred as a cheaper agency —
its strongest on-site line is a price comparison. This film sells the **effect
of the platform** at Yext's altitude instead. **No pricing appears anywhere.**

## Where the brand came from

Every token is quoted from `Retzlik/KAL` (read-only), not invented:

- Palette + type: `apps/marketing/src/styles/global.css:58-96`
- Design spec: `apps/marketing/design-src/README.md`
- Logo artwork: `apps/marketing/public/assets/alfred-mark.png`
- Faces: self-hosted Schibsted Grotesk + Cormorant Garamond

Two systems exist in that repo. The **marketing** system governs a film (the
portal system "Obsidian ljus" is scoped to signed-in surfaces and its persona
is "a plumber, in a van, who glances"). Conflicts resolved to the current
value: forest `#1f6146` not the legacy `#1F4D3C`; night `#101215` not
`#0A0C0F`; hairline `0.14` not `0.13`.

Both colour hard rules are honoured: forest green is never text on night (the
one dark scene uses `--sand #dcd7ca` for its kicker), and `--mute` never
appears on paper.

## Structure — 42.5s

| # | t | Beat | Copy (sv) |
| --- | --- | --- | --- |
| 01 | 0.0 | The shift | Sökningen har blivit ett samtal. |
| 02 | 5.5 | The stakes | Och svaret om dig skrivs utan dig. |
| 03 | 11.0 | The problem (night) | Sex verktyg. Ingen helhet. |
| 04 | 17.0 | The platform | Sex avdelningar. En intelligens. |
| 05 | 23.5 | Six capabilities | Webbplats · Synlighet · Reception · Rykte · Annonser · Kampanjer |
| 06 | 35.5 | The effect | Varje del gör nästa starkare. |
| 07 | 39.5 | Lockup | ALFRED |

## The device

Alfred's mark is six interlaced loops on twelve nodes. The film draws that mark
live as SVG and uses it as the **carrier through every scene** — one thread at
the open, scattered and dimmed on the night scene, braiding closed as the
platform lands, its nodes lighting two-per-capability, and finally travelling to
frame centre and shrinking until it *becomes* the real logo artwork.

This is deliberately NOT the existing film's device. That film is one continuous
vertical camera descent down a 1920×7560 strip
(`apps/marketing/design-src/alfred-film-full.jsx`).

## Motion

Alfred's film vocabulary, honoured: enter 0.7s, draw 1.2s, nothing slides more
than 18px, nothing scales more than 8%. The single site easing curve
`cubic-bezier(0.22, 1, 0.36, 1)` is solved directly in JS (GSAP core has no
CustomEase). The weave carries a slow rotational "breath", the equivalent of the
existing film's permanent `sin(T*0.42)*5px` drift.

The product token sheet says *"state changes only — never entrances, never
layout"*. That governs product UI, not film; the two are separated by medium.

## Production notes

- **Silent.** Signed out of HeyGen and local Kokoro/MusicGen deps absent, so
  there is no VO or music bed. The existing site film is also silent.
- **Self-hosted fonts only** — a CDN font request is a disclosure, and
  `packages/ui/src/no-remote-fonts.test.ts` is the repo-wide law.
- The site's film slot expects 1600×900 (`Filmen.astro`) and its label reads
  "Filmen · 48 sekunder"; this cut is 42.5s, so that string would need updating
  if it replaces the current film. `renders/film-poster.webp` is a matching poster.
- The KAL repo was treated as strictly read-only; assets were copied out.
