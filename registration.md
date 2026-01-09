---
title: Event registration
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
.reg-form label {
  display:block;
  font-weight:600;
  margin-top:1rem;
}
.reg-form input, .reg-form textarea {
  width:100%;
  padding:.6rem .7rem;
  border:1px solid #d0d0d0;
  border-radius:8px;
  background:#fafafa;
}
.radio-group label {
  font-weight:400;
  display:block;
  margin:.3rem 0;
}
.btn-submit {
  margin-top:1.4rem;
  padding:.7rem 1.3rem;
  background:#3066e8;
  color:#fff;
  border-radius:8px;
  border:none;
  font-weight:600;
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

<form id="registration-form" class="reg-form">

<label>Full Name *</label>
<input name="entry.1673288629" required>

<label>Email *</label>
<input type="email" name="entry.1726498577" required>

<label>University / Institution *</label>
<input name="entry.2110780877" required>

<label>Dietary Requirements *</label>
<div class="radio-group">
<label><input type="radio" name="entry.408319094" value="No restrictions" required> No restrictions</label>
<label><input type="radio" name="entry.408319094" value="Vegetarian"> Vegetarian</label>
<label><input type="radio" name="entry.408319094" value="Vegan"> Vegan</label>
<label><input type="radio" name="entry.408319094" value="Halal"> Halal</label>
<label><input type="radio" name="entry.408319094" value="Kosher"> Kosher</label>
<label><input type="radio" name="entry.408319094" value="Gluten-free"> Gluten-free</label>
<label><input type="radio" name="entry.408319094" value="Other"> Other</label>
</div>

<label>Research Area (optional)</label>
<textarea name="entry.859023005" placeholder="e.g., atomic fabrication, microscopy, quantum devices"></textarea>

<label>Attendance *</label>
<div class="radio-group">
<label><input type="radio" name="entry.401581971" value="Both days" required> Both days</label>
<label><input type="radio" name="entry.401581971" value="Day 1"> Day 1</label>
<label><input type="radio" name="entry.401581971" value="Day 2"> Day 2</label>
<label><input type="radio" name="entry.401581971" value="Not sure yet"> Not sure yet</label>
</div>

<button type="submit" class="btn-submit" id="reg-submit">Submit Registration</button>

</form>

<div id="reg-success">✅ Thank you! Your registration was received.</div>

{% endraw %}
</div>

<script>
(function(){
  const form=document.getElementById("registration-form");
  const btn=document.getElementById("reg-submit");
  const ok=document.getElementById("reg-success");

  form.addEventListener("submit",e=>{
    e.preventDefault();
    btn.disabled=true;
    btn.textContent="Submitting...";

    fetch("https://docs.google.com/forms/d/e/1FAIpQLSdmt-QcXADdEiq9MxGBvkdRLtzRjPOJ7bEc2QbiRDaPVy5QFQ/formResponse",{
      method:"POST",
      body:new FormData(form),
      mode:"no-cors"
    }).then(()=>{
      form.reset();
      ok.style.display="block";
      btn.disabled=false;
      btn.textContent="Submit Registration";
    });
  });
})();
</script>
