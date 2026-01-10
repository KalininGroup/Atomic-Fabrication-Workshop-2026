---
title: Event Registration
menu_title: Registration
menu_icon: clipboard-check
event_status:
 - open
---

Please complete the form below to register for the **DEMOCritus Workshop**.

<style>
  .reg-card {
    max-width: 760px;
    margin: 1.5rem auto;
    padding: 1.6rem 1.9rem;
    background: #ffffff;
    border: 1px solid #e6e6e6;
    border-radius: 14px;
    box-shadow: 0 4px 14px rgba(0,0,0,0.05);
  }

  .reg-card h2 {
    margin: 0 0 1rem 0;
    font-size: 1.6rem;
    font-weight: 700;
    text-align: center;
  }

  .reg-form label {
    display: block;
    font-weight: 700;
    margin-top: 1.1rem;
  }

  .reg-form .hint {
    font-weight: 500;
    opacity: 0.7;
    font-size: 0.92rem;
    margin-top: 0.35rem;
  }

  .reg-form input,
  .reg-form textarea,
  .reg-form select {
    width: 100%;
    padding: 0.70rem 0.85rem;
    border: 1px solid #d0d0d0;
    border-radius: 10px;
    background: #fafafa;
    font-size: 1rem;
    margin-top: 0.45rem;
    box-sizing: border-box;
  }

  .reg-form textarea {
    resize: vertical;
    min-height: 120px;
  }

  .reg-form input:focus,
  .reg-form textarea:focus,
  .reg-form select:focus {
    border-color: #3066e8;
    background: #fff;
    outline: none;
    box-shadow: 0 0 0 3px rgba(48,102,232,0.18);
  }

  .row {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }

  .btn-submit {
    margin-top: 1.6rem;
    padding: 0.85rem 1.2rem;
    background: #3066e8;
    color: #fff;
    border-radius: 10px;
    border: none;
    font-weight: 700;
    font-size: 1rem;
    cursor: pointer;
    width: 100%;
  }

  .btn-submit:hover { background: #244eb6; }
  .btn-submit:disabled { opacity: 0.75; cursor: not-allowed; }

  #reg-success {
    display: none;
    margin-top: 1.2rem;
    padding: 1rem 1.2rem;
    background: #e8f5e9;
    border: 1px solid #c8e6c9;
    border-radius: 10px;
    color: #256029;
    font-weight: 700;
    text-align: center;
  }

  #reg-error {
    display: none;
    margin-top: 1.2rem;
    padding: 1rem 1.2rem;
    background: #ffebee;
    border: 1px solid #ffcdd2;
    border-radius: 10px;
    color: #b71c1c;
    font-weight: 700;
    text-align: center;
  }

  /* Hide "Other details" unless needed */
  #diet-other-wrap {
    display: none;
  }
</style>

<div class="reg-card">
  {% raw %}

  <h2>Workshop Registration</h2>

  <!-- Hidden target so Google doesn't navigate away -->
  <iframe name="gform_target" id="gform_target" style="display:none;"></iframe>

  <form class="reg-form"
        id="registration-form"
        action="https://docs.google.com/forms/d/e/1FAIpQLSdmt-QcXADdEiq9MxGBvkdRLtzRjPOJ7bEc2QbiRDaPVy5QFQ/formResponse"
        method="POST"
        target="gform_target">

    <label>Full Name <span style="color:#d32f2f">*</span>
      <input type="text" name="entry.1673288629" required>
    </label>

    <label>Email <span style="color:#d32f2f">*</span>
      <input type="email" name="entry.1726498577" required>
    </label>

    <label>University / Institution <span style="color:#d32f2f">*</span>
      <input type="text" name="entry.2110780877" required>
    </label>

    <!-- IMPORTANT: These options MUST match Google Form exactly -->
    <label>Dietary / Food Preferences <span style="color:#d32f2f">*</span>
      <select id="diet-select" name="entry.408319094" required>
        <option value="">-- Select --</option>
        <option value="No restrictions">No restrictions</option>
        <option value="Vegetarian">Vegetarian</option>
        <option value="Halal">Halal</option>
        <option value="Gluten-free">Gluten-free</option>
        <option value="Other">Other</option>
      </select>
      <div class="hint">Choose one option. If you select “Other”, please specify below.</div>
    </label>

    <!-- For Google Forms "Other" responses (this name matters) -->
    <div id="diet-other-wrap">
      <label>Other (please specify)
        <input type="text"
               id="diet-other"
               name="entry.408319094.other_option_response"
               placeholder="Type your dietary preference">
      </label>
    </div>

    <label>Research Area
      <input type="text" name="entry.859023005" placeholder="Optional">
    </label>

    <!-- IMPORTANT: These options MUST match Google Form exactly -->
    <label>Attendance <span style="color:#d32f2f">*</span>
      <select name="entry.401581971" required>
        <option value="">-- Select --</option>
        <option value="Day 1">Day 1</option>
        <option value="Day 2">Day 2</option>
        <option value="Both days">Both days</option>
      </select>
    </label>

    <button type="submit" class="btn-submit" id="reg-submit">Submit Registration</button>

    <div id="reg-success">✅ Thank you! Your registration was received.</div>
    <div id="reg-error">❌ Submission may have failed. Please try again, or use the Google Form link.</div>

    <div class="hint" style="margin-top:0.8rem;">
      If this page ever fails, you can still register directly here:
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSdmt-QcXADdEiq9MxGBvkdRLtzRjPOJ7bEc2QbiRDaPVy5QFQ/viewform" target="_blank" rel="noopener">Google Form</a>.
    </div>

  </form>

  {% endraw %}
</div>

<script>
(function() {
  const form   = document.getElementById('registration-form');
  const btn    = document.getElementById('reg-submit');
  const ok     = document.getElementById('reg-success');
  const err    = document.getElementById('reg-error');
  const iframe = document.getElementById('gform_target');

  const dietSelect = document.getElementById('diet-select');
  const dietOtherWrap = document.getElementById('diet-other-wrap');
  const dietOther = document.getElementById('diet-other');

  function syncDietOtherUI() {
    const isOther = (dietSelect.value === 'Other');
    dietOtherWrap.style.display = isOther ? 'block' : 'none';
    dietOther.required = isOther;
    if (!isOther) dietOther.value = '';
  }

  syncDietOtherUI();
  dietSelect.addEventListener('change', syncDietOtherUI);

  // This fires when Google returns something into the hidden iframe.
  iframe.addEventListener('load', function() {
    if (!form.dataset.submitted) return;

    // Treat iframe load as "done" (Google Forms doesn’t reliably give success/fail codes here)
    form.reset();
    syncDietOtherUI();

    btn.disabled = false;
    btn.textContent = 'Submit Registration';
    ok.style.display = 'block';
    err.style.display = 'none';

    form.dataset.submitted = '';
  });

  form.addEventListener('submit', function() {
    ok.style.display = 'none';
    err.style.display = 'none';

    btn.disabled = true;
    btn.textContent = 'Submitting...';
    form.dataset.submitted = '1';

    // If Google blocks or network fails, iframe might never load.
    // So we show a fallback message after a short timeout.
    window.setTimeout(function() {
      if (form.dataset.submitted === '1') {
        btn.disabled = false;
        btn.textContent = 'Submit Registration';
        err.style.display = 'block';
        form.dataset.submitted = '';
      }
    }, 8000);
  });
})();
</script>
