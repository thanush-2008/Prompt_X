// PROMPT_X — generate/edit page script

document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("navToggle");
  const mainNav = document.getElementById("mainNav");

  const uploadBox = document.getElementById("uploadBox");
  const fileInput = document.getElementById("fileInput");
  const uploadPreview = document.getElementById("uploadPreview");
  const removeImg = document.getElementById("removeImg");

  const promptSelect = document.getElementById("promptSelect");
  const promptPreview = document.getElementById("promptPreview");
  const generateBtn = document.getElementById("generateBtn");
  const copyPromptBtn = document.getElementById("copyPromptBtn");

  const sourceBox = document.getElementById("sourceBox");
  const resultBox = document.getElementById("resultBox");

  let uploadedImageData = null;

  // ---------- Mobile nav ----------
  if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => mainNav.classList.toggle("open"));
  }

  // ---------- Populate prompt select ----------
  PROMPTS.forEach((p) => {
    const opt = document.createElement("option");
    opt.value = p.id;
    opt.textContent = `${p.title} — ${p.category}`;
    promptSelect.appendChild(opt);
  });

  // Pre-select from URL
  const params = new URLSearchParams(window.location.search);
  const preselectPrompt = params.get("prompt");
  const preselectStyle = params.get("style");

  if (preselectPrompt && PROMPTS.some((p) => p.id === preselectPrompt)) {
    promptSelect.value = preselectPrompt;
  } else if (preselectStyle) {
    const match = PROMPTS.find(
      (p) => p.category.toLowerCase().replace(/[^a-z]+/g, "-") === preselectStyle
        || p.category.toLowerCase().includes(preselectStyle.replace(/-/g, " ").split(" ")[0])
    );
    if (match) promptSelect.value = match.id;
  }

  function updatePromptPreview() {
    const item = PROMPTS.find((p) => p.id === promptSelect.value);
    promptPreview.textContent = item ? item.prompt : "";
  }

  promptSelect.addEventListener("change", updatePromptPreview);
  updatePromptPreview();

  // ---------- Copy prompt ----------
  copyPromptBtn.addEventListener("click", () => {
    const item = PROMPTS.find((p) => p.id === promptSelect.value);
    if (!item) return;
    navigator.clipboard.writeText(item.prompt).then(() => {
      const original = copyPromptBtn.textContent;
      copyPromptBtn.textContent = "Copied!";
      setTimeout(() => (copyPromptBtn.textContent = original), 1600);
    }).catch(() => {
      alert("Could not copy automatically — please copy manually:\n\n" + item.prompt);
    });
  });

  // ---------- Upload handling ----------
  function handleFile(file) {
    if (!file || !file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      uploadedImageData = e.target.result;
      uploadPreview.src = uploadedImageData;
      uploadBox.classList.add("has-image");
      sourceBox.innerHTML = `<img src="${uploadedImageData}" alt="Uploaded photo">`;
      resultBox.innerHTML = `<div class="placeholder">Click "Generate Image" to apply your selected prompt</div>`;
    };
    reader.readAsDataURL(file);
  }

  fileInput.addEventListener("change", (e) => {
    if (e.target.files && e.target.files[0]) handleFile(e.target.files[0]);
  });

  ["dragenter", "dragover"].forEach((evt) => {
    uploadBox.addEventListener(evt, (e) => { e.preventDefault(); uploadBox.classList.add("dragover"); });
  });
  ["dragleave", "dragend", "drop"].forEach((evt) => {
    uploadBox.addEventListener(evt, (e) => { e.preventDefault(); uploadBox.classList.remove("dragover"); });
  });
  uploadBox.addEventListener("drop", (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) handleFile(e.dataTransfer.files[0]);
  });

  removeImg.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    uploadedImageData = null;
    fileInput.value = "";
    uploadPreview.src = "";
    uploadBox.classList.remove("has-image");
    sourceBox.innerHTML = `<div class="placeholder">Upload a photo to see it here</div>`;
    resultBox.innerHTML = `<div class="placeholder">Your generated image will appear here</div>`;
  });

  // ---------- Generate ----------
  generateBtn.addEventListener("click", () => {
    const item = PROMPTS.find((p) => p.id === promptSelect.value);
    if (!item) return;

    if (!uploadedImageData) {
      uploadBox.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    generateBtn.disabled = true;
    const originalLabel = generateBtn.innerHTML;
    generateBtn.innerHTML = "Generating…";

    setTimeout(() => {
      resultBox.innerHTML = `
        <div class="placeholder">
          Sorry, Currently unable to generate image 😥<br><br>
          <small style="color:var(--text-dim); line-height:1.8;">
            Copy the prompt above and paste it into<br>
            <strong style="color:var(--accent-2);">Gemini</strong> (gemini.google.com) or
            <strong style="color:var(--accent-2);">ChatGPT</strong> (chatgpt.com)<br>
            along with your photo to get your edited image for free!
          </small>
        </div>
      `;
      generateBtn.disabled = false;
      generateBtn.innerHTML = originalLabel;
    }, 800);
  });
});