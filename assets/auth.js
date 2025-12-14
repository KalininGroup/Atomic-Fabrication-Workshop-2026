(async function () {
  // 1) Put your SHA-256 hash here (NOT the plain password)
  const HASH = "ef631b32d1dcffdee82523d5fbc28ea4246167248c25ffc502fb07e00c7ffde5";

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
