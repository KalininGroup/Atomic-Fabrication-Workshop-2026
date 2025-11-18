---
layout: page
title: DEMOCritus
menu_title: Home
menu_icon: house-door
---

<style>
.animated-title {
  font-size: 2.8rem;
  font-weight: 900;
  text-align: center;
  letter-spacing: -0.5px;

  /* Multi-color gradient that will animate */
  background: linear-gradient(
    90deg,
    #2d2e32c3,
    #0077ffc5,
    #1f2025c3
  );
  background-size: 400% 100%; /* Needed for smooth sweeping effect */

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  /* Combine color wave + soft vertical float motion */
  animation: colorwave 35s linear infinite, floatwave 15s ease-in-out infinite;
}

/* Left → Right color sweep */
@keyframes colorwave {
  0%   { background-position:   0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position:   0% 50%; }
}

/* Gentle up–down wave motion */
@keyframes floatwave {
  0%, 100% { transform: translateY(0px); }
  50%      { transform: translateY(-4px); }
}

/* Mobile scaling */
@media (max-width: 700px) {
  .animated-title {
    font-size: 2rem;
  }
}
</style>

<h1 class="animated-title">
  DEterministic MOlecular & Atomic Construction for Quantum Devices
</h1>

---

This **invitation-only workshop** will convene leading researchers across **materials science, nanofabrication, quantum information, and molecular systems**, together with key federal stakeholders (NSF, DoD, DOE).  
The workshop will focus on identifying **strategic research opportunities** required to advance **atomically precise and molecularly programmable quantum device platforms**.

A major output will be a collaboratively authored **Roadmap for Atomic Precision Quantum Technologies**, outlining:
- Scientific challenges and emerging directions  
- Experimental and computational capability gaps  
- Infrastructure + workforce development needs  
- Strategies for scalable hybrid quantum materials platforms

---

### 📽 Workshop Introductory Videos

<div style="
  display:flex;
  gap:20px;
  flex-wrap:wrap;
  justify-content:center;
  margin-top:1.5rem;
">

  <!-- Video 1 -->
  <video autoplay muted loop playsinline
         style="
           width:48%;
           min-width:300px;
           border-radius:8px;
           border:3px solid #ccc;
         ">
    <source src="{{ '/assets/moving-Si-1.mp4' | relative_url }}" type="video/mp4">
  </video>

  <!-- Video 2 -->
  <video autoplay muted loop playsinline
         style="
           width:48%;
           min-width:300px;
           border-radius:8px;
           border:3px solid #ccc;
         ">
    <source src="{{ '/assets/moving-Si-2.mp4' | relative_url }}" type="video/mp4">
  </video>

</div>


---

### Confirmed Speakers

<div style="margin-top:1.5rem; margin-bottom:1.5rem;">
<table style="width:100%; border-collapse:separate; border-spacing:0 12px;">
  <thead style="display:none;"></thead>
  <tbody>

    <!-- Row Template Example -->
    <tr style="background:#f8f8f8; border-radius:6px;">
      <td style="padding:12px 16px; font-weight:600;">David Awschalom</td>
      <td style="padding:12px 16px;">University of Chicago</td>
      <td style="padding:12px 16px; font-style:italic;">Opening Keynote</td>
    </tr>

    <tr style="background:#f8f8f8;">
      <td style="padding:12px 16px; font-weight:600;">Susanne Stemmer</td>
      <td style="padding:12px 16px;">UC Santa Barbara</td>
      <td style="padding:12px 16px; font-style:italic;">Topological Materials for Quantum Information Systems</td>
    </tr>

    <tr style="background:#f8f8f8;">
      <td style="padding:12px 16px; font-weight:600;">Marko Lončar</td>
      <td style="padding:12px 16px;">Harvard University</td>
      <td style="padding:12px 16px; font-style:italic;">Quantum Optical Interconnects</td>
    </tr>

    <tr style="background:#f8f8f8;">
      <td style="padding:12px 16px; font-weight:600;">Shashank Misra</td>
      <td style="padding:12px 16px;">Sandia National Laboratories</td>
      <td style="padding:12px 16px; font-style:italic;">Why Is Silicon Quantum Computing Taking So Long?</td>
    </tr>

    <tr style="background:#f8f8f8;">
      <td style="padding:12px 16px; font-weight:600;">Greg Tikhomirov</td>
      <td style="padding:12px 16px;">UC Berkeley</td>
      <td style="padding:12px 16px; font-style:italic;">Democratizing Nanofabrication via Molecular Self-Assembly</td>
    </tr>

    <tr style="background:#f8f8f8;">
      <td style="padding:12px 16px; font-weight:600;">Danna Freedman</td>
      <td style="padding:12px 16px;">MIT</td>
      <td style="padding:12px 16px; font-style:italic;">Molecular Color Centers</td>
    </tr>

    <tr style="background:#f8f8f8;">
      <td style="padding:12px 16px; font-weight:600;">Xiuling Li</td>
      <td style="padding:12px 16px;">UT Austin</td>
      <td style="padding:12px 16px; font-style:italic;">Quantum Sensing with Spin Defects in III-Nitrides</td>
    </tr>

    <tr style="background:#f8f8f8;">
      <td style="padding:12px 16px; font-weight:600;">Uli Wiesner</td>
      <td style="padding:12px 16px;">Cornell University</td>
      <td style="padding:12px 16px; font-style:italic;">Soft Matter Enabled Quantum Devices</td>
    </tr>

    <tr style="background:#f8f8f8;">
      <td style="padding:12px 16px; font-weight:600;">John Randall</td>
      <td style="padding:12px 16px;">Zyvex Labs</td>
      <td style="padding:12px 16px; font-style:italic;">Atomic Precision Fabrication — A Top-Down Approach</td>
    </tr>

  </tbody>
</table>
</div>

---


### Workshop Roadmap (Coming Soon)

<div style="background:#fafafa; padding:1.2rem 1.5rem; border-radius:6px; border:1px solid #e0e0e0; margin-top:1.5rem;">
The roadmap will be drafted during and after the workshop and will be shared here publicly following review and synthesis.
</div>

---


### Participation

This workshop is **invitation-only** to maintain focused discussion and actionable outcomes.  
If you believe your research group or organization should be represented, please contact the organizers.

**Workshop Chair:** Sergei V. Kalinin  
**Contact:** *sergei2@utk.edu*

<div style="text-align:center; font-size:0.9rem; opacity:0.7; margin-top:2rem;">
More details and session structure will be posted as finalized.
</div>


