const form = document.getElementById("quoteForm");
const result = document.getElementById("formResult");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());
  result.hidden = false;
  result.textContent = [
    "PROJECT INQUIRY PREVIEW",
    "-----------------------",
    `Name: ${data.name || ""}`,
    `Phone: ${data.phone || ""}`,
    `Email: ${data.email || ""}`,
    `Service: ${data.service || ""}`,
    `Location: ${data.location || ""}`,
    `Timing: ${data.timing || ""}`,
    "",
    "Project details:",
    data.details || "",
    "",
    "Prototype mode: nothing was sent."
  ].join("\n");
  result.scrollIntoView({ behavior: "smooth", block: "nearest" });
});
