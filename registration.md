---
#title: Event registration
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
  padding: 1.4rem 1.8rem;
  background: #fff;
  border: 1px solid #e6e6e6;
  border-radius: 14px;
  box-shadow: 0 4px 14px rgba(0,0,0,0.05);
}
.reg-card h2 {
  margin-top: 0;
  font-size: 1.55rem;
  font-weight: 600;
}
.reg-form label {
  display: block;
  font-weight: 600;
  margin-top: 1rem;
}
.reg-form input,
.reg-form textarea,
.reg-form select {
  width: 100%;
  padding: .6rem .7rem;
  border: 1px solid #d0d0d0;
  border-radius: 8px;
  background: #fafafa;
}
.reg-form textarea { resize: vertical; min-height: 110px; }

.reg-form input:focus,
.reg-form textarea:focus,
.reg-form select:focus {
  border-color: #3066e8;
  background: #fff;
  outline: none;
  box-shadow: 0 0 0 3px rgba(48,102,232,0.18);
}

.btn-submit {
  margin-top: 1.4rem;
  padding: .7rem 1.3rem;
  background: #3066e8;
  color: #fff;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  cursor: pointer;
}
.btn-submit:hover {
  background: #244eb6;
}
#reg-success {
  display:none;
  margin-top:1rem;
  padding:.9rem 1.2rem;
  background:#e8f5e9;
  border:1px solid #c8e6c9;
  border-radius:8px;
  color:#256029;
}
</style>

<div class="reg-card">
  {% raw %}
  <iframe name="gform_target" id="gform_target" style="display:none;"></iframe>

  <form class="reg-form"
        action="https://docs.google.com/forms/d/e/1FAIpQLSdmt-QcXADdEiq9MxGBvkdRLtzRjPOJ7bEc2QbiRDaPVy5QFQ/formResponse"
        method="POST"
        target="gform_target"
        id="registration-form">

    <label>Full Name *
      <input type="text" name="entry.1673288629" required>
    </label>

    <label>Email *
      <input type="email" name="entry.1726498577" required>
    </label>

    <label>University / Institution *
      <input type="text" name="entry.2110780877" required>
    </label>

    <label>Dietary Requirements
      <select name="entry.408319094">
        <option value="No restrictions">No restrictions</option>
        <option value="Vegetarian">Vegetarian</option>
        <option value="Vegan">Vegan</option>
        <option value="Halal">Halal</option>
        <option value="Kosher">Kosher</option>
        <option value="Gluten-free">Gluten-free</option>
        <option value="Other">Other</option>
      </select>
    </label>

    <label>Research Area (optional)
      <textarea name="entry.859023005" placeholder="e.g., atomic fabrication, microscopy, quantum devices"></textarea>
    </label>

    <label>Attendance
    <select name="entry.401581971" required>
        <option value="">-- Select --</option>
        <option value="Both days">Both days</option>
        <option value="Day 1">Day 1</option>
        <option value="Day 2">Day 2</option>
        <option value="Not sure yet">Not sure yet</option>
    </select>
    </label>

    <button type="submit" class="btn-submit" id="reg-submit">Submit Registration</button>
  </form>

  <div id="reg-success">
    ✅ Thank you! Your registration was received.
  </div>
  {% endraw %}
</div>

<script>
(function() {
  const form = document.getElementById('registration-form');
  const btn  = document.getElementById('reg-submit');
  const ok   = document.getElementById('reg-success');
  const iframe = document.getElementById('gform_target');

  iframe.addEventListener('load', function(){
    if (!form.dataset.submitted) return;
    form.reset();
    btn.disabled = false;
    btn.textContent = 'Submit Registration';
    ok.style.display = 'block';
    form.dataset.submitted = '';
  });

  form.addEventListener('submit', function(){
    ok.style.display='none';
    btn.disabled = true;
    btn.textContent='Submitting...';
    form.dataset.submitted = '1';
  });

})();
</script>
