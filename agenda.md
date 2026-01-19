---
title: Agenda
menu_title: Agenda
menu_icon: clock
---

<style>
  .agenda-grid {
    width: 100%;
    border-collapse: collapse;
    font-size: 14px;
    table-layout: fixed;
  }

  .agenda-grid td,
  .agenda-grid th {
    border: 1px solid #999;
    padding: 6px 8px;
    vertical-align: middle;
    box-sizing: border-box;
  }

  /* Allow long titles to wrap correctly */
  .agenda-grid td {
    white-space: normal;
    overflow-wrap: anywhere;
    word-break: normal;
  }


  /* Keep time columns on one line */
  .agenda-grid td:nth-child(1),
  .agenda-grid td:nth-child(2) {
    white-space: nowrap;
  }

  /* Header and row colors */
  .dayhdr { background:#eee; font-weight:bold; }

  .purple { background:#9b00ff; font-weight:bold; text-align:center; color:#000; }
  .cyan { background:#00f0f0; font-weight:bold; }
  .lightblue { background:#d6e4ff; }
  .yellow { background:#f6e9b6; }
  .softgray { background:#f5f5f5; }

  /* Force color onto TDs (important for table-layout:fixed) */
  .agenda-grid tr.cyan td { background:#00f0f0; }
  .agenda-grid tr.yellow td { background:#f6e9b6; }
  .agenda-grid tr.lightblue td { background:#d6e4ff; }
  .agenda-grid tr.purple td { background:#9b00ff; color:#000; }
  .agenda-grid tr.softgray td { background:#f5f5f5; }

  .center { text-align:center; }

  .green, .blue, .red {
    color:#000;
    font-weight:700;
  }
</style>

<table class="agenda-grid">

<colgroup>
  <col style="width:10%">
  <col style="width:10%">
  <col style="width:15%">
  <col style="width:15%">
  <col style="width:15%">
  <col style="width:15%">
  <col style="width:10%">
  <col style="width:10%">
</colgroup>



  <!-- ===================== DAY 1 ===================== -->
  <tr class="dayhdr">
    <td colspan="8"><strong>Day 1 — Feb 19, 2026</strong></td>
  </tr>

  <tr>
    <td>7:30 AM</td><td>8:30 AM</td>
    <td colspan="6">
      <strong>Registration and Beakfast</strong>
    </td>
  </tr>

  <tr>
    <td>8:30 AM</td><td>8:45 AM</td>
    <td colspan="6"><strong>Welcome and Introductions</strong> — Anthony Macijewski (DD ECCS), NSF Program Directors??</td>
  </tr>

  <tr>
    <td>8:45 AM</td><td>9:00 AM</td>
    <td colspan="6"><strong>Workshop Overview</strong> — Sergei V. Kalinin</td>
  </tr>

  <tr class="yellow">
    <td rowspan="3">9:00 AM</td>
    <td rowspan="3">10:00 AM</td>
    <td colspan="4"><strong>Session 1: Opening and Vision</strong></td>
    <td class="center green" colspan="2">Chair: Adina Lucan-Maier</td>
  </tr>

  <tr>
    <td colspan="2">Speaker 1: 9:00 AM – 9:30 AM</td>
    <td colspan="6">David Awschalom: Emerging opportunities with quantum-engineered semiconductors and molecules</td>
  </tr>

  <tr>
    <td colspan="2">Speaker 2: 9:30 AM – 10:00 AM</td>
    <td colspan="6">Susanne Stemmer: Topological materials for quantum information systems</td>
  </tr>

  <tr class="softgray">
    <td>10:00 AM</td><td>10:30 AM</td>
    <td colspan="6">Coffee Break</td>
  </tr>


  <tr class="yellow">
    <td rowspan="4">10:30 AM</td><td rowspan="4">12:00 PM</td>
    <td colspan="4"><strong>Session 2: Quantum from Semiconductor and Molecular Perspectives</strong></td>
    <td class="center green" colspan="2">Chair: Shashank Misra</td>
  </tr>

  <tr>
    <td colspan="2">Speaker 3: 10:30 AM – 11:00 AM</td>
    <td colspan="6">Michael R Wasielewski: Exploiting Molecules and Molecular Materials for Quantum Information Science</td>
  </tr>

  <tr>
    <td colspan="2">Speaker 4: 11:00 AM – 11:30 AM</td>
    <td colspan="6">John Randall: Atomic Scale Fabrication - a Top-Down Digital Approach</td>
  </tr>

  <tr>
    <td colspan="2">Speaker 5: 11:30 AM – 12:00 PM</td>
    <td colspan="6">Oleg Gang: Programming 3D Assembly of Optical and Electronic Nanomaterials</td>
  </tr>

  <tr class="lightblue">
      <td>12:00 PM</td><td>1:00 PM</td>
      <td colspan="6"><strong>Lunch: </strong>Yves Idzerda: Transitioning 2D Technologies at the MonArk Quantum Foundry</td>
  </tr>

  <!-- Breakout Sessions (Day 1) -->
  <tr class="purple">
    <td colspan="8"><strong>Breakout Sessions</strong></td>
  </tr>

  <tr class="center softgray">
    <td></td>
    <td>1:00 PM</td><td>2:30 PM</td>
    <td>1:00 PM</td><td>2:30 PM</td>
    <td>1:00 PM</td><td>2:30 PM</td>
    <td></td>
  </tr>

  <tr class="center">
    <td></td>
    <td colspan="2" class="yellow"><strong>Breakout 1:</strong> Scaffold-driven self-assembly of quantum devices</td>
    <td colspan="2" class="softgray"><strong>Breakout 2:</strong> Soft Quantum Matter</td>
    <td colspan="2" class="lightblue"><strong>Breakout 3:</strong> Molecular Building Blocks and Hybrid Quantum Platforms</td>
    <td></td>
  </tr>

  <tr class="center">
    <td></td>
    <td colspan="2" class="green">Chair Greg Tikhomirov</td>
    <td colspan="2" class="green">Chair: Ulrich Wiesner</td>
    <td colspan="2" class="green">Chair: Marko Lončar</td>
    <td></td>
  </tr>

  <tr class="softgray">
    <td>2:30 PM</td><td>3:00 PM</td>
    <td colspan="6">Coffee Break</td>
  </tr>

  <tr class="yellow">
    <td>3:00 PM</td><td>4:00 PM</td>
    <td colspan="4"><strong>Session 3: Industry and National Labs</strong></td>
    <td class="center green" colspan="2">Chair: Jeremy Levy</td>
  </tr>

  <tr>
    <td></td><td></td>
    <td colspan="2">Speaker 1: 4:00 PM – 4:15 PM</td>
    <td colspan="2" class="blue">David Menasche, Google, TBD</td>
  </tr>

  <tr>
    <td></td><td></td>
    <td colspan="2">Speaker 2: 4:15 PM – 4:30 PM</td>
    <td colspan="2" class="blue">John Siopsis, TBD</td>
  </tr>

  <tr>
    <td></td><td></td>
    <td colspan="2">Speaker 3: 4:30 PM – 4:45 PM</td>
    <td colspan="2"><span class="blue">Vivien Zapf, LANL</span>: Quantum information and molecular magnetism</td>
  </tr>

  <tr>
    <td></td><td></td>
    <td colspan="2">Speaker 4: 4:45 PM – 5:00 PM</td>
    <td colspan="2" class="red">TBD</td>
    <td colspan="2"></td>
  </tr>

  <tr class="yellow">
    <td>4:10 PM</td><td>5:30 PM</td>
    <td colspan="4"><strong>Session 4: Integration between molecules and semiconductors</strong></td>
    <td class="center green" colspan="2">Chair: Vincent Meunier</td>
  </tr>

  <tr>
    <td></td><td></td>
    <td colspan="2">Speaker 1: 4:10 PM – 4:30 PM</td>
    <td colspan="4" class="green">Ulrich Wiesner: The Promise of Soft Matter enabled Quantum Devices</td>
  </tr>

  <tr>
    <td></td><td></td>
    <td colspan="2">Speaker 2: 4:30 PM – 4:50 PM</td>
    <td colspan="4" class="blue">Dmitri Basov?</td>
  </tr>

  <tr>
    <td></td><td></td>
    <td colspan="2">Speaker 3: 4:50 PM – 5:10 PM</td>
    <td colspan="4" class="blue">Marija Drndic?</td>
  </tr>

  <tr>
    <td></td><td></td>
    <td colspan="2">Speaker 4: 5:10 PM – 5:30 PM</td>
    <td colspan="4" class="green">Peter Maurer?</td>
  </tr>

  <tr class = "lightblue">
    <td>6:00 PM</td><td>8:00 PM</td>
    <td colspan="6"><strong>Dinner/Dinner Keynote: </strong>Rahul Sarpeshkar: Analog and Probabilistic Computers: From Quantum Atom To Living Body</td>
  </tr>

  <!-- spacer -->
  <tr><td colspan="8" style="border:none;height:14px;"></td></tr>

  <!-- ===================== DAY 2 ===================== -->
  <tr class="dayhdr">
    <td colspan="8"><strong>Day 2 — Feb 20, 2026</strong></td>
  </tr>

  <tr>
    <td>7:30 AM</td><td>8:20 AM</td>
    <td colspan="6"><strong>Registration and Beakfast</strong></td>
  </tr>

  <tr class="yellow">
    <td>8:20 AM</td><td>10:00 AM</td>
    <td colspan="4"><strong>Session 4: Silicon for Quantum and Novel Semiconductor Functionalities</strong></td>
    <td class="center green" colspan="2">Chair: Robert Butera</td>
  </tr>

  <tr>
    <td></td><td></td>
    <td colspan="2">Speaker 1: 8:20 AM – 8:40 AM</td>
    <td colspan="4" class="blue">Shashank Misra: Why is silicon quantum computing taking so long?</td>
  </tr>

  <tr>
    <td></td><td></td>
    <td colspan="2">Speaker 2: 8:40 AM – 9:00 AM</td>
    <td colspan="4" class="blue">Marco Loncar: Quantum Optical Interconnects</td>
  </tr>

  <tr>
    <td></td><td></td>
    <td colspan="2">Speaker 3: 9:00 AM – 9:20 AM</td>
    <td colspan="4" class="blue">Gregory David Fuchs: Quantum sensing and quantum magnonics using diamond spins and vanadium tetracyanoethylene</td>
  </tr>

  <tr>
    <td></td><td></td>
    <td colspan="2">Speaker 4: 9:20 AM – 9:40 AM</td>
    <td colspan="4" class="blue">Manfra: ?</td>
  </tr>

  <tr>
    <td></td><td></td>
    <td colspan="2">Speaker 5: 9:40 AM – 10:00 AM</td>
    <td colspan="4" class="blue">Xiuling Li: Quantum Sensing with Spin Defects in III-Nitrides</td>
  </tr>

  <tr class="softgray">
    <td>10:00 AM</td><td>10:20 AM</td>
    <td colspan="6">Coffee Break</td>
  </tr>

  <tr class="yellow">
    <td>10:20 AM</td><td>12:00 PM</td>
    <td colspan="4"><strong>Session 5: Molecules and AI assisted synthesis</strong></td>
    <td class="center green" colspan="2">Chair: TBD</td>
  </tr>

  <tr>
    <td></td><td></td>
    <td colspan="2">Speaker 1: 10:20 AM – 10:40 AM</td>
    <td colspan="4" class="blue">Danna Freedman: Molecular Color Centers</td>
  </tr>

  <tr>
    <td></td><td></td>
    <td colspan="2">Speaker 2: 10:40 AM – 11:00 AM</td>
    <td colspan="4" class="blue">Aram Amassian, TBA</td>
  </tr>

  <tr>
    <td></td><td></td>
    <td colspan="2">Speaker 3: 11:00 AM – 11:20 AM</td>
    <td colspan="4" class="blue">Masha Kamenetska: Quantum Properties of Molecular Circuits</td>
  </tr>

  <tr>
    <td></td><td></td>
    <td colspan="2">Speaker 4: 11:20 AM – 11:40 AM</td>
    <td colspan="4" class="blue">Justin Caram, TBA</td>
  </tr>

  <tr>
    <td></td><td></td>
    <td colspan="2">Speaker 5: 11:40 AM – 12:00 PM</td>
    <td colspan="4" class="blue">Chair Grigory Tikhomirov: Democratizing Nanofabrication of Quantum Systems via Molecular Self-assembly</td>
  </tr>

  <tr>
    <td>12:10 PM</td><td>1:00 PM</td>
    <td colspan="6"><strong>Lunch</strong> — Yves Idzerda: Transitioning 2D Technologies at the MonArk Quantum Foundry</td>
  </tr>

  <!-- Breakout Sessions (Day 2) -->
  <tr>
    <td></td>
    <td colspan="7" class="purple">Breakout Sessions</td>
  </tr>

  <tr class="center softgray">
    <td></td>
    <td>1:00 PM</td><td>2:30 PM</td>
    <td>1:00 PM</td><td>2:30 PM</td>
    <td>1:00 PM</td><td>2:30 PM</td>
    <td></td>
  </tr>

  <tr class="center">
    <td></td>
    <td colspan="2" class="yellow">Breakout 1: From direct Beam and Probe Fabrication into semiconductor pipelines</td>
    <td colspan="2" class="lightblue">Breakout 2: AI for Molecular Discovery and Automated Synthesis</td>
    <td colspan="2" class="softgray">Breakout 3: Photonic Sensing and Integration</td>
    <td></td>
  </tr>

  <tr class="center">
    <td></td>
    <td colspan="2" class="green">Chair: R. Wolkow and S. Spurgeon</td>
    <td colspan="2" class="green">Chair: Danna Freedman</td>
    <td colspan="2" class="green">Chair: Dmitri Basov</td>
    <td></td>
  </tr>

  <tr class="softgray">
    <td>2:30 PM</td><td>3:00 PM</td>
    <td colspan="6">Coffee Break</td>
  </tr>

  <tr class="yellow">
    <td>3:00 PM</td><td>4:00 PM</td>
    <td colspan="4"><strong>Session 6: Local Probing, Direct Atomic Fabrication Methods, and Integration into Classical Device Pipelines</strong></td>
    <td class="center green" colspan="2">Chair: Greg Fuchs</td>
  </tr>

  <tr>
    <td></td><td></td>
    <td colspan="2">Speaker 1: 3:00 PM – 3:20 PM</td>
    <td colspan="4" class="blue">Michael Flatte, TBA</td>
  </tr>

  <tr>
    <td></td><td></td>
    <td colspan="2">Speaker 2: 3:20 PM – 3:40 PM</td>
    <td colspan="4" class="blue">Adina Lucan-Maier: Quantum functionality of nanoscale-controlled 2D materials</td>
  </tr>

  <tr>
    <td></td><td></td>
    <td colspan="2">Speaker 3: 3:40 PM – 4:00 PM</td>
    <td colspan="4" class="blue">R. Wolkow, TBA</td>
  </tr>

</table>
