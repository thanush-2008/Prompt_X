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

  let uploadedImageData = null; // base64 string
  let uploadedMimeType = "image/jpeg";

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

  // Pre-select from URL (?prompt=id or ?style=key)
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
    uploadedMimeType = file.type;
    const reader = new FileReader();
    reader.onload = (e) => {
      const fullDataUrl = e.target.result;
      // Strip the "data:image/...;base64," prefix — we only want raw base64
      uploadedImageData = fullDataUrl.split(",")[1];
      uploadPreview.src = fullDataUrl;
      uploadBox.classList.add("has-image");
      sourceBox.innerHTML = `<img src="${fullDataUrl}" alt="Uploaded photo">`;
      resultBox.innerHTML = `<div class="placeholder">Click "Generate Image" to apply your selected prompt</div>`;
    };
    reader.readAsDataURL(file);
  }

  fileInput.addEventListener("change", (e) => {
    if (e.target.files && e.target.files[0]) handleFile(e.target.files[0]);
  });

  // Drag and drop
  ["dragenter", "dragover"].forEach((evt) => {
    uploadBox.addEventListener(evt, (e) => {
      e.preventDefault();
      uploadBox.classList.add("dragover");
    });
  });
  ["dragleave", "dragend", "drop"].forEach((evt) => {
    uploadBox.addEventListener(evt, (e) => {
      e.preventDefault();
      uploadBox.classList.remove("dragover");
    });
  });
  uploadBox.addEventListener("drop", (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
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
  generateBtn.addEventListener("click", async () => {
    const item = PROMPTS.find((p) => p.id === promptSelect.value);
    if (!item) return;

    if (!uploadedImageData) {
      uploadBox.scrollIntoView({ behavior: "smooth", block: "center" });
      resultBox.innerHTML = `<div class="placeholder">⬆️ Upload a photo first, then click Generate.</div>`;
      return;
    }

    // Show loading spinner
    resultBox.innerHTML = `
      <div class="placeholder">
        <div class="spinner"></div>
        Generating with AI… this may take 10–20 seconds
      </div>
    `;

    generateBtn.disabled = true;
    const originalLabel = generateBtn.innerHTML;
    generateBtn.innerHTML = "Generating…";

    try {
      const response = await fetch("/.netlify/functions/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          imageBase64: uploadedImageData,
          mimeType: uploadedMimeType,
          prompt: item.prompt
        })
      });

      const data = await response.json();

      if (!response.ok || data.error) {
        throw new Error(data.error || "Generation failed");
      }

      // Display the returned image
      const imgSrc = `data:${data.mimeType};base64,${data.imageBase64}`;
      resultBox.innerHTML = `<img src="${imgSrc}" alt="Generated result">`;

    } catch (err) {
      console.error("Generate error:", err);
      resultBox.innerHTML = `
        <div class="placeholder">
          ❌ Generation failed: ${err.message}<br><br>
          <small>Please try again or check your API key setup.</small>
        </div>
      `;
    } finally {
      generateBtn.disabled = false;
      generateBtn.innerHTML = originalLabel;
    }
  });
});