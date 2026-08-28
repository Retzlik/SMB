---
workflow: product-launch-video
flow: autonomous
storyboard: false
length_s: 10
aspect: "16:9"
canvas: { w: 1920, h: 1080 }
capture: no-capture
vo_mode: none
audio: none
---

# Brief — Alfred launch intro

## Intent

A 10-second product intro for **Alfred**, an enterprise agentic marketing /
digital-presence platform. Promo intent (sell), not a site tour.

## Angle

Problem → product → payoff → lockup. A brand's presence is scattered across
every surface a customer might ask on; Alfred is the single brain behind every
answer. The product is shown as original mock UI, not a captured page.

## Capture mode — no-capture (forced, then authorized)

`npx hyperframes capture https://www.yext.com/` returned `ok: false`
(`net::ERR_TUNNEL_CONNECTION_FAILED`, exit 1) and wrote `capture/BLOCKED.md`.
That is the skill's Step 1 hard stop. curl and WebFetch hit the same
network-layer egress denial, so no approved path to the origin exists in this
session.

Per Step 1, the no-capture path continues only on a user-supplied brief. The
user supplied one by renaming the product to **Alfred**. Accordingly:

- No Yext screenshot, logo, DOM, colour token, or asset is used anywhere.
- No reconstruction of yext.com from memory — the skill forbids recreating a
  page that failed capture ("an unusable capture alone is not authorization").
- Alfred's wordmark, palette, type, and product UI are original work authored
  for this video.
- Category positioning (agentic marketing / digital presence / multi-location
  visibility across AI and traditional search) is public, sourced knowledge
  about the category, used as messaging scaffold only.

## Must-haves

- **length** 10s · **destination** 16:9 landscape · **angle** as above
- Silent: signed out of HeyGen, and local Kokoro/MusicGen deps are absent, so
  there is no VO or BGM. Motion and type carry the piece.

## Customizations

Original mock product UI assembles on screen (sequenced UI life) rather than a
captured screen. Motion follows `motion-doctrine`: one LEFT current, seams
velocity-matched, the Z pull reserved for the arrival.
