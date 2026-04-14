import { useState, useEffect } from "react";

const C = {f:"#2A4636",ink:"#1A1C1A",mid:"#787874",brd:"#C4C3BE",wg:"#E6E5E1",st:"#F4F4F1",pp:"#FAFAF8",mt:"#9BA69E"};
const se = "'Instrument Serif', Georgia, serif";
const sn = "'Libre Franklin', 'Helvetica Neue', sans-serif";
const mono = "'Courier New', Consolas, monospace";

const ScreenshotZone = ({ label, alt, height = 320 }) => (
  <div style={{ background: C.st, borderRadius: 8, border: `1px solid ${C.wg}`, height, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8 }}>
    <div style={{ width: 32, height: 32, borderRadius: 6, background: C.wg, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="1" y="3" width="14" height="10" rx="1.5" stroke={C.brd} strokeWidth="1.2"/><circle cx="5.5" cy="7" r="1.5" stroke={C.brd} strokeWidth="1"/><path d="M1 11l3.5-3 2.5 2 3-3.5L14 11" stroke={C.brd} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/></svg>
    </div>
    <span style={{ fontFamily: sn, fontSize: 10, color: C.brd, textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 500, textAlign: "center", padding: "0 16px" }}>{label}</span>
    <span style={{ fontFamily: sn, fontSize: 10, color: C.brd, opacity: 0.6, textAlign: "center", padding: "0 16px" }}>{alt}</span>
  </div>
);

const ReportInput = ({ dark }) => {
  const bg = dark ? "rgba(244,244,241,0.1)" : C.st;
  const border = dark ? "rgba(244,244,241,0.2)" : C.wg;
  const text = dark ? C.st : C.ink;
  const btnBg = dark ? C.st : C.f;
  const btnColor = dark ? C.f : C.st;
  return (
    <div style={{ display: "flex", gap: 0, maxWidth: 460, borderRadius: 4, overflow: "hidden", border: `1.5px solid ${border}` }}>
      <input type="text" placeholder="Enter your business name or website" style={{ flex: 1, padding: "14px 16px", fontFamily: sn, fontSize: 14, border: "none", background: bg, color: text, outline: "none", minWidth: 0 }} />
      <button style={{ fontFamily: sn, fontSize: 14, fontWeight: 500, padding: "14px 20px", border: "none", background: btnBg, color: btnColor, cursor: "pointer", whiteSpace: "nowrap" }}>See your report →</button>
    </div>
  );
};

const KarlMark = ({ size = 20, color = C.f }) => (
  <svg width={size} height={size * 1.2} viewBox="0 0 40 48" style={{ display: "block", flexShrink: 0 }}>
    <path d="M8 4 L8 18" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" />
    <path d="M8 26 L8 44" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" />
    <path d="M14 20 L32 4" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" />
    <path d="M8 26 L32 44" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const KarlLogo = ({ fontSize = 18, color = C.ink, markColor }) => {
  const mc = markColor || color;
  const markH = fontSize * 1.15;
  const markW = markH / 1.2;
  const gap = fontSize * -0.04;
  return (
    <span style={{ display: "inline-flex", alignItems: "flex-end", gap, lineHeight: 1 }}>
      <svg width={markW} height={markH} viewBox="0 0 40 48" style={{ display: "block", flexShrink: 0, marginBottom: fontSize * 0.02 }}>
        <path d="M8 4 L8 18" fill="none" stroke={mc} strokeWidth="3" strokeLinecap="round" />
        <path d="M8 26 L8 44" fill="none" stroke={mc} strokeWidth="3" strokeLinecap="round" />
        <path d="M14 20 L32 4" fill="none" stroke={mc} strokeWidth="3" strokeLinecap="round" />
        <path d="M8 26 L32 44" fill="none" stroke={mc} strokeWidth="3" strokeLinecap="round" />
      </svg>
      <span style={{ fontFamily: se, fontSize, color, letterSpacing: "-0.02em", lineHeight: 1 }}>arl</span>
    </span>
  );
};

export default function KarlHome() {
  const [ac, setAc] = useState(0);
  const [sc, setSc] = useState(false);
  const [vis, setVis] = useState({});

  useEffect(() => {
    const h = () => setSc(window.scrollY > 40);
    window.addEventListener("scroll", h, { passive: true });
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setVis(p => ({ ...p, [e.target.dataset.s]: true })); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll("[data-s]").forEach(el => obs.observe(el));
    return () => { window.removeEventListener("scroll", h); obs.disconnect(); };
  }, []);

  const fade = (id, d = 0) => ({
    opacity: vis[id] ? 1 : 0, transform: vis[id] ? "translateY(0)" : "translateY(16px)",
    transition: `opacity 0.5s ${d}s, transform 0.5s ${d}s`,
  });

  const Msg = ({ from, children, time }) => (
    <div style={{ display: "flex", justifyContent: from === "you" ? "flex-end" : "flex-start", marginBottom: 8 }}>
      <div style={{
        maxWidth: 260, padding: "10px 14px",
        borderRadius: from === "you" ? "14px 14px 4px 14px" : "14px 14px 14px 4px",
        background: from === "you" ? C.wg : C.f, color: from === "you" ? C.ink : C.st,
        fontFamily: sn, fontSize: 13, lineHeight: 1.5,
      }}>
        {children}
        <div style={{ fontFamily: mono, fontSize: 9, marginTop: 4, opacity: 0.5, textAlign: from === "you" ? "right" : "left" }}>{time}</div>
      </div>
    </div>
  );

  const caps = [
    { label: "Reviews", role: "Review specialist", title: "Monitors, responds, and requests — across every platform.",
      screenshot: "Review management dashboard", screenshotAlt: "Replace with: Vendasta review management showing reviews with AI responses",
      items: [
        "Watches Google, Facebook, Trustpilot, TripAdvisor, Jameda, ProvenExpert, and 20+ sites for new reviews",
        "Drafts and publishes responses in your tone — you can review first or let Karl handle it",
        "Sends review requests to recent customers via SMS or email after each visit or job",
        "Flags negative reviews instantly so you can decide whether to respond personally",
        "Monthly trend report: how many reviews came in, your average rating, which platforms are growing",
      ]},
    { label: "Listings", role: "Listings coordinator", title: "Your name, address, phone, and hours — correct on 40+ directories.",
      screenshot: "Listing sync dashboard", screenshotAlt: "Replace with: Vendasta citation dashboard showing sync status across 40+ sites",
      items: [
        "Submits and syncs to Google Maps, Apple Maps, Bing, Yelp, Gelbe Seiten, Jameda, Foursquare, and 30+ more",
        "Detects and corrects inconsistencies — wrong phone numbers, outdated hours, old addresses",
        "Locks your data so aggregators cannot overwrite it with stale information",
        "Finds and suppresses duplicate listings that dilute your visibility",
        "You text Karl a change, he updates it everywhere — typically within the hour",
      ]},
    { label: "Local SEO", role: "SEO analyst", title: "Optimises your visibility in local Google search results.",
      screenshot: "Local SEO grid tracker", screenshotAlt: "Replace with: Vendasta local SEO grid showing keyword rankings by geographic area",
      items: [
        "Optimises your Google Business Profile — categories, services, descriptions, attributes, Q&A, photos",
        "Tracks your ranking for local keywords on a geographic grid — see where you rank, block by block",
        "Builds citations across hundreds of directories to strengthen local authority signals",
        "Can publish SEO-optimised blog content to your website to attract long-tail search traffic",
        "Monthly ranking report: which keywords moved, which need attention, what's planned next",
      ]},
    { label: "AI Receptionist", role: "Receptionist", title: "Answers calls, texts, WhatsApp, web chat, and social DMs. Always.",
      screenshot: "AI Receptionist inbox", screenshotAlt: "Replace with: Vendasta unified inbox showing conversations across channels",
      items: [
        "AI voice agent answers phone calls — greets callers by your business name, answers questions, books appointments",
        "Replies to WhatsApp, Facebook Messenger, Instagram DMs, and website chat — 24 hours a day",
        "When you miss a call, automatically sends an SMS: \"Sorry I missed you — how can I help?\"",
        "Captures every enquiry: name, need, phone number, preferred time — forwarded to you immediately",
        "Currently supports German and English with more languages in development",
      ]},
    { label: "Social media", role: "Content creator", title: "Creates, schedules, and publishes posts to your channels.",
      screenshot: "Social media scheduler", screenshotAlt: "Replace with: Vendasta social scheduler showing calendar with posts",
      items: [
        "Posts to Facebook, Instagram, LinkedIn, and Google Business Profile on a consistent schedule",
        "AI generates images and copy tailored to your business — not generic stock templates",
        "You can approve each post first, or set Karl to publish automatically on a schedule",
        "Tracks engagement on each post and adjusts content focus based on what resonates",
        "Nothing publishes without your permission — unless you choose auto-post",
      ]},
    { label: "Google Ads", role: "Ads manager", title: "Sets up, manages, and optimises Google Search campaigns.",
      screenshot: "Google Ads dashboard", screenshotAlt: "Replace with: Vendasta advertising dashboard showing campaign performance",
      items: [
        "Creates Google Search campaigns targeting your services in your geographic area",
        "Writes ad copy, selects keywords, configures location targeting, sets daily budget from your input",
        "Monitors and adjusts bids weekly — pauses underperforming keywords, increases what converts",
        "Tracks clicks, calls, and form submissions — attributes leads to specific campaigns",
        "Monthly plain-language report: what you spent, what you got, what each lead cost",
      ]},
    { label: "Campaigns", role: "Campaign manager", title: "Email and SMS campaigns to your existing customer list.",
      screenshot: "Campaign builder", screenshotAlt: "Replace with: Vendasta email/SMS campaign editor or performance report",
      items: [
        "Sends targeted campaigns via email, SMS, or WhatsApp to past customers and leads",
        "Use cases: seasonal promotions, re-engagement, appointment reminders, referral requests",
        "AI drafts the copy — you review and approve, or let Karl send on a schedule",
        "Segmentation by visit recency, service type, or custom tags you define",
        "Performance tracking: opens, clicks, replies, and bookings attributed to each campaign",
      ]},
    { label: "Website", role: "Web specialist", title: "A mobile-first website built for local search.",
      screenshot: "Website builder", screenshotAlt: "Replace with: Vendasta website builder or preview of a sample site",
      items: [
        "3–5 page professional website — designed, built, hosted, and maintained",
        "Optimised for local SEO: fast loading, proper schema markup, mobile-first design",
        "Includes click-to-call, Google Maps embed, booking integration, and contact form",
        "Annual refresh included — your site never looks outdated",
        "Or Karl connects to your existing website and manages your other channels around it",
      ]},
  ];

  const dayLog = [
    { t: "07:02", a: "Karl's review specialist responded to Anna M.'s 5-star review on Google — thanked her for mentioning how comfortable the new waiting room chairs are.", tag: "Reviews" },
    { t: "08:15", a: "Karl's content creator published the Tuesday Instagram and Facebook post — a photo of the practice entrance with a caption about welcoming new patients.", tag: "Social" },
    { t: "09:23", a: "You texted Karl: \"We're closing at 3pm on Fridays now.\" His listings coordinator updated the hours on Google Maps, Apple Maps, Yelp, Jameda, and 37 other directories.", tag: "Listings" },
    { t: "09:47", a: "New patient called while you were in a session. Karl's receptionist answered, explained that you take private and public insurance, and booked them for Thursday at 2pm.", tag: "Receptionist" },
    { t: "10:30", a: "Karl's review specialist sent review requests via SMS to four patients who visited yesterday.", tag: "Reviews" },
    { t: "12:15", a: "Your Google Ad for \"Zahnarzt Schöneberg\" received two clicks today — €3.40 total, within your set daily budget of €10.", tag: "Ads" },
    { t: "14:08", a: "WhatsApp message: \"Do you do teeth whitening?\" Karl's receptionist replied with your whitening options and pricing, and offered to book an appointment.", tag: "Receptionist" },
    { t: "17:45", a: "Karl prepared your weekly summary — covers new reviews, messages handled, calls answered, ad spend, and this week's social posts.", tag: "Report" },
    { t: "22:14", a: "Facebook message: \"Are you taking new patients?\" Karl's receptionist replied: \"Yes — would you like me to book you in this week?\"", tag: "Receptionist" },
  ];

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Libre+Franklin:wght@400;500&display=swap" rel="stylesheet" />
      <style>{`*{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}::selection{background:${C.f};color:${C.st}}body{background:${C.pp};overflow-x:hidden}input::placeholder{color:${C.brd}}.tl-scroll::-webkit-scrollbar{width:4px}.tl-scroll::-webkit-scrollbar-track{background:transparent}.tl-scroll::-webkit-scrollbar-thumb{background:${C.wg};border-radius:2px}.tl-scroll::-webkit-scrollbar-thumb:hover{background:${C.brd}}`}</style>

      {/* NAV */}
      <nav style={{ position: "sticky", top: 0, zIndex: 100, background: sc ? "rgba(250,250,248,0.97)" : C.pp, backdropFilter: sc ? "blur(12px)" : "none", borderBottom: `0.5px solid ${sc ? C.wg : "transparent"}`, transition: "all 0.3s", padding: "0 24px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 56 }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <KarlLogo fontSize={18} color={C.ink} markColor={C.f} />
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
            {["What Karl does", "Industries", "Pricing"].map(t => <a key={t} href="#" style={{ fontFamily: sn, fontSize: 13, color: C.mid, textDecoration: "none" }}>{t}</a>)}
            <a href="#" style={{ fontFamily: sn, fontSize: 13, color: C.brd, textDecoration: "none" }}>Log in</a>
            <button style={{ fontFamily: sn, fontSize: 13, fontWeight: 500, padding: "8px 16px", borderRadius: 4, border: "none", background: C.f, color: C.st, cursor: "pointer" }}>See your report</button>
          </div>
        </div>
      </nav>

      {/* ═══ HERO ═══ */}
      <section style={{ padding: "100px 24px 80px", background: C.pp }} data-s="hero">
        <div style={{ maxWidth: 1080, margin: "0 auto", display: "flex", gap: 48, alignItems: "center", flexWrap: "wrap" }}>
          <div style={{ flex: "1 1 420px", ...fade("hero") }}>
            <h1 style={{ fontFamily: se, fontSize: 52, fontWeight: 400, color: C.ink, lineHeight: 1.08, letterSpacing: "-0.03em" }}>
              You run the business.<br /><em style={{ color: C.f }}>Karl grows it.</em>
            </h1>
            <p style={{ fontFamily: sn, fontSize: 17, color: C.mid, lineHeight: 1.65, maxWidth: 460, marginTop: 20 }}>
              Karl is your AI marketing director. He brings his own team — review management, local SEO, receptionist, social media, Google Ads, campaigns — and runs your entire digital presence. You just run your business.
            </p>
            <div style={{ marginTop: 28 }}>
              <ReportInput />
            </div>
            <p style={{ fontFamily: sn, fontSize: 13, color: C.brd, marginTop: 16 }}>From €299/month · No contracts · GDPR-native · Built in Stockholm</p>
          </div>
          <div style={{ flex: "0 1 340px", ...fade("hero", 0.15) }}>
            <div style={{ background: C.st, borderRadius: 12, padding: 16, border: `1px solid ${C.wg}` }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14, paddingBottom: 10, borderBottom: `1px solid ${C.wg}` }}>
                <div style={{ width: 7, height: 7, borderRadius: "50%", background: C.f, boxShadow: `0 0 0 3px rgba(42,70,54,0.12)` }} />
                <span style={{ fontFamily: sn, fontSize: 10, fontWeight: 500, color: C.f, letterSpacing: "0.06em", textTransform: "uppercase" }}>Karl</span>
                <span style={{ fontFamily: sn, fontSize: 10, color: C.brd, marginLeft: "auto" }}>Today</span>
              </div>
              <Msg from="you" time="09:23">We're closing at 3pm on Fridays now.</Msg>
              <Msg from="karl" time="09:24">Done. I've had my listings coordinator update it on Google Maps, Apple Maps, Yelp, Jameda, and 37 other directories.</Msg>
              <Msg from="you" time="14:30">Did anyone call while I was with a patient?</Msg>
              <Msg from="karl" time="14:30">Two calls. My receptionist handled both — one reschedule confirmed for Tuesday, and a new whitening enquiry booked for Thursday 3pm. Details in your inbox.</Msg>
              <Msg from="you" time="14:31">Perfect, thank you.</Msg>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TRUST BAR ═══ */}
      <div style={{ borderTop: `1px solid ${C.wg}`, borderBottom: `1px solid ${C.wg}`, background: C.st, padding: "16px 24px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "center", gap: 28, flexWrap: "wrap" }}>
          <span style={{ fontFamily: sn, fontSize: 12, color: C.mid }}>Built in Stockholm · GDPR-native · Works across Europe</span>
          <div style={{ display: "flex", gap: 16 }}>
            {["Google", "WhatsApp", "Facebook", "Trustpilot", "Instagram"].map(n => (
              <span key={n} style={{ fontFamily: sn, fontSize: 10, fontWeight: 500, color: C.brd, letterSpacing: "0.04em", textTransform: "uppercase" }}>{n}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ═══ A DAY WITH KARL ═══ */}
      <section style={{ padding: "80px 24px", background: C.pp }} data-s="day">
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ marginBottom: 40, ...fade("day") }}>
            <div style={{ fontFamily: sn, fontSize: 10, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: C.brd, marginBottom: 10 }}>A day with Karl</div>
            <h2 style={{ fontFamily: se, fontSize: 28, fontWeight: 400, color: C.ink, lineHeight: 1.2, letterSpacing: "-0.02em" }}>
              Here is what Karl and his team can do for a dental practice on a typical Tuesday.
            </h2>
            <p style={{ fontFamily: sn, fontSize: 14, color: C.mid, marginTop: 8 }}>
              The dentist sees patients all day. She doesn't open a dashboard, write a social post, or check her reviews. Karl and his team handle everything around her business while she runs it.
            </p>
          </div>
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 24, background: `linear-gradient(to bottom, ${C.pp}, transparent)`, zIndex: 2, pointerEvents: "none", opacity: 0 }} id="fade-top" />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 40, background: `linear-gradient(to top, ${C.pp}, transparent)`, zIndex: 2, pointerEvents: "none" }} />
            <div className="tl-scroll" style={{ maxHeight: 380, overflowY: "auto", paddingLeft: 48, paddingRight: 8, paddingBottom: 20, position: "relative" }}
              onScroll={e => { const top = document.getElementById("fade-top"); if (top) top.style.opacity = e.target.scrollTop > 10 ? 1 : 0; }}>
              <div style={{ position: "absolute", left: 19, top: 8, bottom: 8, width: 1, background: C.wg }} />
              {dayLog.map((item, i) => (
                <div key={i} style={{ position: "relative", paddingBottom: i < dayLog.length - 1 ? 20 : 0 }}>
                  <div style={{ position: "absolute", left: -48 + 13, top: 5, width: 13, height: 13, borderRadius: "50%", background: C.pp, border: `2px solid ${C.f}`, zIndex: 1 }} />
                  <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
                    <div style={{ flex: 1 }}>
                      <span style={{ fontFamily: mono, fontSize: 12, color: C.brd }}>{item.t}</span>
                      <p style={{ fontFamily: sn, fontSize: 13, color: C.ink, lineHeight: 1.55, margin: "3px 0 0" }}>{item.a}</p>
                    </div>
                    <span style={{ fontFamily: sn, fontSize: 9, fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase", color: C.f, background: "rgba(42,70,54,0.07)", padding: "3px 8px", borderRadius: 3, whiteSpace: "nowrap", flexShrink: 0, height: "fit-content" }}>{item.tag}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ marginTop: 32, paddingLeft: 48 }}>
            <button style={{ fontFamily: sn, fontSize: 14, fontWeight: 500, padding: "12px 24px", borderRadius: 4, border: "none", background: C.f, color: C.st, cursor: "pointer" }}>See how your business looks online</button>
          </div>
        </div>
      </section>

      {/* ═══ YOUR DASHBOARD ═══ */}
      <section style={{ padding: "64px 24px", background: C.st, borderTop: `1px solid ${C.wg}`, borderBottom: `1px solid ${C.wg}` }} data-s="dash">
        <div style={{ maxWidth: 880, margin: "0 auto", ...fade("dash") }}>
          <div style={{ marginBottom: 32 }}>
            <h2 style={{ fontFamily: se, fontSize: 24, fontWeight: 400, color: C.ink, letterSpacing: "-0.01em" }}>Check in whenever you want.</h2>
            <p style={{ fontFamily: sn, fontSize: 14, color: C.mid, lineHeight: 1.65, marginTop: 8, maxWidth: 480 }}>
              Your dashboard shows everything Karl and his team are doing — reviews, listings, social posts, ads, and messages. Log in any time, or just read Karl's weekly email summary.
            </p>
            <a href="#" style={{ fontFamily: sn, fontSize: 13, color: C.f, textDecoration: "none", fontWeight: 500, display: "inline-block", marginTop: 12 }}>Log in to your dashboard →</a>
          </div>
          <ScreenshotZone label="Executive overview dashboard" alt="Replace with: Full-width screenshot of Vendasta Business App executive overview" height={400} />
        </div>
      </section>

      {/* ═══ CAPABILITY EXPLORER — with team roles ═══ */}
      <section style={{ padding: "80px 24px", background: C.pp }} data-s="caps">
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <div style={{ marginBottom: 32, ...fade("caps") }}>
            <div style={{ fontFamily: sn, fontSize: 10, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: C.brd, marginBottom: 10 }}>Karl's team</div>
            <h2 style={{ fontFamily: se, fontSize: 28, fontWeight: 400, color: C.ink, letterSpacing: "-0.02em" }}>
              Eight specialists. One director. Zero effort from you.
            </h2>
            <p style={{ fontFamily: sn, fontSize: 14, color: C.mid, marginTop: 6 }}>You talk to Karl. He coordinates everything. Click each role to see what that specialist handles.</p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 3, marginBottom: 28, ...fade("caps", 0.08) }}>
            {caps.map((c, i) => (
              <button key={c.label} onClick={() => setAc(i)} style={{
                fontFamily: sn, fontSize: 13, fontWeight: ac === i ? 500 : 400,
                padding: "9px 16px", borderRadius: 4, border: "none", cursor: "pointer",
                background: ac === i ? C.f : "transparent", color: ac === i ? C.st : C.mid,
                transition: "all 0.15s",
              }}>{c.label}</button>
            ))}
          </div>
          <div style={{ display: "flex", gap: 32, flexWrap: "wrap", alignItems: "flex-start" }}>
            <div style={{ flex: "1 1 380px" }}>
              <div style={{ fontFamily: sn, fontSize: 10, fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase", color: C.f, marginBottom: 6 }}>Karl's {caps[ac].role}</div>
              <h3 style={{ fontFamily: se, fontSize: 21, fontWeight: 400, color: C.ink, lineHeight: 1.25, margin: 0 }}>{caps[ac].title}</h3>
              <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 10 }}>
                {caps[ac].items.map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <div style={{ width: 4, height: 4, borderRadius: "50%", background: C.f, marginTop: 7, flexShrink: 0 }} />
                    <p style={{ fontFamily: sn, fontSize: 13, color: C.ink, lineHeight: 1.55, margin: 0 }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ flex: "1 1 360px", maxWidth: 480 }}>
              <ScreenshotZone label={caps[ac].screenshot} alt={caps[ac].screenshotAlt} height={280} />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ VERTICALS ═══ */}
      <section style={{ padding: "64px 24px", background: C.st, borderTop: `1px solid ${C.wg}`, borderBottom: `1px solid ${C.wg}` }} data-s="vert">
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <h2 style={{ fontFamily: se, fontSize: 24, fontWeight: 400, color: C.ink, letterSpacing: "-0.01em", marginBottom: 20, ...fade("vert") }}>Karl works for your industry.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: 10 }}>
            {[
              { c: "Healthcare", l: "You treat patients.", e: "Karl fills your schedule.", t: "Dental · Physiotherapy · Veterinary · Pet services" },
              { c: "Professional services", l: "You advise clients.", e: "Karl finds new ones.", t: "Accountants · Law firms · Estate agents" },
              { c: "Home and trade", l: "You fix the pipes.", e: "Karl fills your calendar.", t: "Plumbers · Electricians · Builders · Cleaners" },
              { c: "Automotive", l: "You teach them to drive.", e: "Karl brings them to your door.", t: "Garages · Dealerships · Driving schools" },
            ].map((v, i) => (
              <div key={v.c} style={{ background: C.pp, borderRadius: 8, padding: 22, border: `1px solid ${C.wg}`, cursor: "pointer", transition: "border-color 0.2s", ...fade("vert", 0.05 * i) }}
                onMouseEnter={e => e.currentTarget.style.borderColor = C.f}
                onMouseLeave={e => e.currentTarget.style.borderColor = C.wg}>
                <div style={{ fontFamily: sn, fontSize: 9, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.08em", color: C.mid, marginBottom: 8 }}>{v.c}</div>
                <h3 style={{ fontFamily: se, fontSize: 18, fontWeight: 400, color: C.ink, margin: 0, lineHeight: 1.25 }}>{v.l}<br /><em style={{ color: C.f }}>{v.e}</em></h3>
                <p style={{ fontFamily: sn, fontSize: 11, color: C.brd, marginTop: 8 }}>{v.t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PRICING — with team framing ═══ */}
      <section style={{ padding: "80px 24px", background: C.pp }} data-s="price">
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <div style={fade("price")}>
            <h2 style={{ fontFamily: se, fontSize: 28, fontWeight: 400, color: C.ink, letterSpacing: "-0.02em" }}>Transparent pricing.</h2>
            <p style={{ fontFamily: sn, fontSize: 14, color: C.mid, marginTop: 6 }}>Every plan includes Karl as your marketing director. Higher tiers give him a bigger team.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 12, marginTop: 32, ...fade("price", 0.1) }}>
            {[
              { n: "Starter", p: "299", s: "Karl + 3 specialists", r: false, team: "Review specialist · Listings coordinator · Content creator", feats: ["AI chat receptionist — web, social, WhatsApp", "Review monitoring — Google and Facebook", "Directory sync — 40+ sites", "Local SEO grid — 10 keywords tracked", "Social posting — Facebook and Google"] },
              { n: "Growth", p: "499", s: "Karl + 5 specialists", r: true, team: "Everything in Starter + Receptionist (SMS) · Campaign manager", feats: ["Everything in Starter, plus:", "AI chat + SMS + missed call text-back", "AI review responses — all platforms", "Full social media — all channels, AI content", "Email and SMS campaigns to past customers"] },
              { n: "Leader", p: "799", s: "Karl + the full team", r: false, team: "Everything in Growth + Voice receptionist · Ads manager · SEO analyst", feats: ["Everything in Growth, plus:", "AI voice receptionist — answers calls 24/7", "Automated review solicitation after visits", "Google Ads — setup, management, reporting", "Managed SEO and content services"] },
            ].map(t => (
              <div key={t.n} style={{ background: C.pp, borderRadius: 8, padding: 28, border: t.r ? `2px solid ${C.f}` : `1px solid ${C.wg}`, position: "relative" }}>
                {t.r && <div style={{ position: "absolute", top: -1, left: "50%", transform: "translateX(-50%) translateY(-50%)", fontFamily: sn, fontSize: 9, fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase", background: C.f, color: C.st, padding: "3px 10px", borderRadius: 3 }}>Recommended</div>}
                <div style={{ fontFamily: sn, fontSize: 11, fontWeight: 500, color: C.mid, textTransform: "uppercase", letterSpacing: "0.06em" }}>{t.n}</div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 3, marginTop: 6 }}>
                  <span style={{ fontFamily: se, fontSize: 36, color: C.ink }}>€{t.p}</span>
                  <span style={{ fontFamily: sn, fontSize: 13, color: C.mid }}>/month</span>
                </div>
                <p style={{ fontFamily: sn, fontSize: 14, color: C.f, fontWeight: 500, margin: "6px 0 4px" }}>{t.s}</p>
                <p style={{ fontFamily: sn, fontSize: 11, color: C.brd, margin: "0 0 16px", lineHeight: 1.4 }}>{t.team}</p>
                {t.feats.map((feat, i) => (
                  <div key={i} style={{ fontFamily: sn, fontSize: 13, color: C.ink, display: "flex", gap: 7, alignItems: "flex-start", marginBottom: 7 }}>
                    {!(i === 0 && t.r) && <span style={{ color: C.f, fontSize: 12, marginTop: 1 }}>✓</span>}
                    <span style={{ lineHeight: 1.45 }}>{feat}</span>
                  </div>
                ))}
                <button style={{ fontFamily: sn, fontSize: 13, fontWeight: 500, padding: "10px 0", borderRadius: 4, border: t.r ? "none" : `1.5px solid ${C.f}`, background: t.r ? C.f : "transparent", color: t.r ? C.st : C.f, cursor: "pointer", marginTop: 14, width: "100%" }}>See how your business looks online</button>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: sn, fontSize: 12, color: C.mid, textAlign: "center", marginTop: 18 }}>No contracts · No onboarding fees · Cancel anytime</p>
        </div>
      </section>

      {/* ═══ WHAT HAPPENS WHEN YOU SIGN UP ═══ */}
      <section style={{ padding: "64px 24px", background: C.st, borderTop: `1px solid ${C.wg}`, borderBottom: `1px solid ${C.wg}` }} data-s="setup">
        <div style={{ maxWidth: 680, margin: "0 auto", ...fade("setup") }}>
          <h2 style={{ fontFamily: se, fontSize: 24, fontWeight: 400, color: C.ink, marginBottom: 28 }}>What happens when you sign up.</h2>
          {[
            { period: "Day 1", items: ["Karl's receptionist is live — answering web chat, social messages, and WhatsApp", "Karl's SEO analyst reviews your Google Business Profile and begins optimisation", "Karl's listings coordinator submits your business to 40+ directories for sync"] },
            { period: "Week 1", items: ["Karl's review specialist sends first review requests to recent customers", "Karl's content creator publishes first social media posts to your channels", "Your local SEO grid is set up — you can see where you rank"] },
            { period: "Ongoing", items: ["Monthly report from Karl: what his team did, what changed, what's planned next", "You can text Karl any time — changes, questions, requests", "Every specialist runs continuously without you logging into anything"] },
          ].map((block, bi) => (
            <div key={block.period} style={{ marginBottom: bi < 2 ? 24 : 0, paddingBottom: bi < 2 ? 24 : 0, borderBottom: bi < 2 ? `1px solid ${C.wg}` : "none" }}>
              <div style={{ fontFamily: sn, fontSize: 10, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.08em", color: C.f, marginBottom: 10 }}>{block.period}</div>
              {block.items.map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 6 }}>
                  <span style={{ color: C.f, fontSize: 12, marginTop: 1 }}>✓</span>
                  <p style={{ fontFamily: sn, fontSize: 13, color: C.ink, lineHeight: 1.5, margin: 0 }}>{item}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section style={{ background: C.f, padding: "80px 24px" }} data-s="cta">
        <div style={{ maxWidth: 520, margin: "0 auto", textAlign: "center", ...fade("cta") }}>
          <h2 style={{ fontFamily: se, fontSize: 40, fontWeight: 400, color: C.st, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
            You run the business.<br /><em style={{ opacity: 0.6 }}>Karl grows it.</em>
          </h2>
          <p style={{ fontFamily: sn, fontSize: 15, color: C.mt, margin: "18px 0 28px", lineHeight: 1.6 }}>
            See how your business looks online — your reviews, listings, social media, and website — with a clear picture of what Karl and his team would do for you.
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <ReportInput dark />
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer style={{ background: C.ink, padding: "44px 24px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 28 }}>
          <div>
            <div style={{ marginBottom: 8 }}>
              <KarlLogo fontSize={16} color={C.st} />
            </div>
            <p style={{ fontFamily: sn, fontSize: 11, color: C.mid, lineHeight: 1.5, maxWidth: 180 }}>Your AI marketing director.<br />Authoricy AB · Stockholm</p>
          </div>
          {[{ t: "Product", l: ["What Karl does", "Pricing", "See your report", "Log in"] }, { t: "Industries", l: ["Healthcare", "Professional services", "Home services", "Automotive"] }, { t: "Company", l: ["About", "Blog", "Privacy", "Terms"] }].map(c => (
            <div key={c.t}>
              <div style={{ fontFamily: sn, fontSize: 9, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em", color: C.mid, marginBottom: 8 }}>{c.t}</div>
              {c.l.map(l => <a key={l} href="#" style={{ fontFamily: sn, fontSize: 12, color: "#8A8A85", textDecoration: "none", display: "block", marginBottom: 6 }}>{l}</a>)}
            </div>
          ))}
        </div>
        <div style={{ maxWidth: 1080, margin: "24px auto 0", paddingTop: 16, borderTop: "1px solid #2C2C2A", display: "flex", justifyContent: "space-between" }}>
          <span style={{ fontFamily: sn, fontSize: 10, color: C.mid }}>© 2026 Authoricy AB</span>
          <div style={{ display: "flex", gap: 12 }}>{["EN", "DE", "SE"].map((l, i) => <span key={l} style={{ fontFamily: sn, fontSize: 10, color: i === 0 ? "#ccc" : "#555", cursor: "pointer" }}>{l}</span>)}</div>
        </div>
      </footer>
    </>
  );
}
