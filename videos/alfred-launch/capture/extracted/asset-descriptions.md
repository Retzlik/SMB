# Asset inventory

**No assets were captured.** `npx hyperframes capture https://www.yext.com/`
returned `ok: false` (`net::ERR_TUNNEL_CONNECTION_FAILED`) and wrote
`capture/BLOCKED.md`; `capture/assets/` and `capture/screenshots/` are empty
and nothing from them is consumed.

The user supplied a brief instead (product renamed to **Alfred**), which is the
one condition under which Step 1 permits the no-capture path.

Everything visual in this video is authored in-composition:

| Asset | Origin |
| --- | --- |
| "Alfred" wordmark | Type-set in Inter 900. Original. |
| Palette | Authored (near-black + amber). Not sampled from any site. |
| Channel chips | CSS/HTML, authored. |
| Alfred console UI | CSS/HTML mock, authored. Not a screenshot of any product. |
| Inter (variable, latin subset) | Vendored from Google Fonts, OFL. |
| GSAP 3.14.2 | Vendored from npm. |
