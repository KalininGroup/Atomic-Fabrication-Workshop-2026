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
  margin-top: 0;
  font-size: 1.6rem;
  font-weight: 600;
  text-align: center;
}

.reg-form label.section-title {
  display:block;
  font-weight:600;
  margin-top:1.3rem;
  margin-bottom:.4rem;
}

.reg-form input,
.reg-form textarea {
  width: 100%;
  padding: .65rem .75rem;
  border: 1px solid #d0d0d0;
  border-radius: 8px;
  background: #fafafa;
  font-size: 0.95rem;
}

.reg-form textarea {
  resize: vertical;
  min-height: 110px;
}

.reg-form input:focus,
.reg-form textarea:focus {
  border-color: #3066e8;
  background: #fff;
  outline: none;
  box-shadow: 0 0 0 3px rgba(48,102,232,0.18);
}

.radio-group {
  margin-top:.4rem;
}

.radio-group label {
  display:flex;
  align-items:center;
  gap:10px;
  font-weight:400;
  margin-top:.5rem;
  cursor:pointer;
}

.radio-group input[type="radio"] {
  margin:0;
  transform:scale(1.05);
}

.btn-submit {
  margin-top: 1.8rem;
  padding: .8rem 1.4rem;
  background: #3066e8;
  color: #fff;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  width: 100%;
}

.btn-submit:hover {
  background: #244eb6;
}

#reg-success {
  display:none;
  margin-top:1.4rem;
  padding:1rem 1.3rem;
  background:#e8f5e9;
  border:1px solid #c8e6c9;
  border-radius:8px;
  color:#256029;
  font-weight:600;
  text-align:center;
}
</style>

<div class="reg-card">
{% raw %}

<h2>Workshop Registration</h2>

<form class="reg-form" id="registration-form">

  <label class="section-title">Full Name *</label>
  <input type="text" name="entry.1673288629" required>

  <label class="section-title">Email Address *</label>
  <input type="email" name="entry.1726498577" required>

  <label class="section-title">University / Institution *</label>
  <input type="text" name="entry.2110780877" required>

  <label class="section-title">Dietary / Food Preferences *</label>
  <div class="radio-group">
    <label><input type="radio" name="entry.408319094" value="No restrictions" required> No restrictions</label>
    <label><input type="radio" name="entry.408319094" value="Vegetarian"> Vegetarian</label>
    <label><input type="radio" name="entry.408319094" value="Halal"> Halal</label>
    <label><input type="radio" name="entry.408319094" value="Gluten-free"> Gluten-free</label>
    <label><input type="radio" name="entry.408319094" value="Other"> Other</label>
  </div>

  <label class="section-title">Research Area</label>
  <input type="text" name="entry.859023005">

  <label class="section-title">Attendance *</label>
  <div class="radio-group">
    <label><input type="radio" name="entry.401581971" value="Day 1" required> Day 1</label>
    <label><input type="radio" name="entry.401581971" value="Day 2"> Day 2</label>
    <label><input type="radio" name="entry.401581971" value="Both days"> Both days</label>
  </div>

  <button type="submit" class="btn-submit" id="reg-submit">
    Submit Registration
  </button>

</form>

<div id="reg-success">
  ✅ Thank you! Your registration has been successfully received.
</div>

{% endraw %}
</div>

<script>
(function(){

  const form = document.getElementById("registration-form");
  const btn  = document.getElementById("reg-submit");
  const ok   = document.getElementById("reg-success");

  form.addEventListener("submit", function(e){
    e.preventDefault();

    btn.disabled = true;
    btn.textContent = "Submitting...";
    ok.style.display = "none";

    const data = new FormData(form);

    fetch("https://docs.google.com/forms/d/e/1FAIpQLSdmt-QcXADdEiq9MxGBvkdRLtzRjPOJ7bEc2QbiRDaPVy5QFQ/formResponse", {
      method: "POST",
      body: data,
      mode: "no-cors"
    }).then(() => {
      form.reset();
      btn.disabled = false;
      btn.textContent = "Submit Registration";
      ok.style.display = "block";
    }).catch(() => {
      btn.disabled = false;
      btn.textContent = "Submit Registration";
      alert("Submission failed. Please try again.");
    });

  });

})();
</script>
