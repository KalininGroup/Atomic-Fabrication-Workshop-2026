(async function () {
  // 1) Put your SHA-256 hash here (NOT the plain password)
  const HASH = "dfa1d888e7784fd68bdcc565f72ab29c50e830a3fb9bb2c22feeded2f2aea775";

  // 2) Hide until we decide
  document.documentElement.style.visibility = "hidden";

  // 3) If already unlocked in this tab/session, show immediately
  if (sessionStorage.getItem("workshop_unlocked") === "true") {
    document.documentElement.style.visibility = "visible";
    return;
  }

  const input = prompt("Enter workshop password:");
  if (!input) return deny();

  const digest = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(input)
  );

  const inputHash = [...new Uint8Array(digest)]
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  if (inputHash !== HASH) return deny();

  // Success
  sessionStorage.setItem("workshop_unlocked", "true");
  document.documentElement.style.visibility = "visible";

  function deny() {
    document.documentElement.style.visibility = "visible";
    document.body.innerHTML = "<h2>Access denied</h2>";
  }
})();
