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

.reg-form label {
  display: block;
  font-weight: 600;
  margin-top: 1.1rem;
}

.reg-form input,
.reg-form textarea,
.reg-form select {
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
.reg-form textarea:focus,
.reg-form select:focus {
  border-color: #3066e8;
  background: #fff;
  outline: none;
  box-shadow: 0 0 0 3px rgba(48,102,232,0.18);
}

.btn-submit {
  margin-top: 1.6rem;
  padding: .75rem 1.4rem;
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
  display: none;
  margin-top: 1.4rem;
  padding: 1rem 1.3rem;
  background: #e8f5e9;
  border: 1px solid #c8e6c9;
  border-radius: 8px;
  color: #256029;
  font-weight: 600;
  text-align: center;
}
</style>

<div class="reg-card">
{% raw %}

<h2>Workshop Registration</h2>

<form class="reg-form" id="registration-form">

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

  <label>Attendance *
    <select name="entry.401581971" required>
      <option value="">-- Select --</option>
      <option value="Both days">Both days</option>
      <option value="Day 1">Day 1</option>
      <option value="Day 2">Day 2</option>
      <option value="Not sure yet">Not sure yet</option>
    </select>
  </label>

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
(function() {

  const form = document.getElementById("registration-form");
  const btn  = document.getElementById("reg-submit");
  const ok   = document.getElementById("reg-success");

  form.addEventListener("submit", function(e){
    e.preventDefault();

    ok.style.display = "none";
    btn.disabled = true;
    btn.textContent = "Submitting...";

    const data = new FormData(form);

    fetch("https://docs.google.com/forms/d/e/1FAIpQLSdmt-QcXADdEiq9MxGBvkdRLtzRjPOJ7bEc2QbiRDaPVy5QFQ/formResponse", {
      method: "POST",
      body: data,
      mode: "no-cors"
    })
    .then(() => {
      form.reset();
      btn.disabled = false;
      btn.textContent = "Submit Registration";
      ok.style.display = "block";
    })
    .catch(() => {
      btn.disabled = false;
      btn.textContent = "Submit Registration";
      alert("Submission failed. Please try again.");
    });

  });

})();
</script>
