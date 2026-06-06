function LoadVideo() {
  const linkInput = document.getElementById("input-video-link");
  const videoUrl = linkInput.value.trim();
  const container = document.getElementById("videoContainer");
  const areaUpload = document.getElementById("input-area");
  const spam_title = document.getElementById("spam-title");

  if (!videoUrl) {
    const warning = document.getElementById("warn-invalid");
    if (warning) {
      warning.style.opacity = "1";
      warning.style.transform = "translate(-50%, -50%) scale(1)";
    }
    return;
  }

  // Injeta o iframe de forma limpa no fim do container
  const novoVideo = `
    <div style="margin-bottom: 20px; display: inline-block;">
        <iframe 
            frameborder="0"
            src="${videoUrl}" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe>
    </div>
  `;
  container.insertAdjacentHTML("beforeend", novoVideo);

  linkInput.value = "";

  if (areaUpload) {
    areaUpload.style.opacity = "0";
    areaUpload.style.pointerEvents = "none";
  }
  if (spam_title) {
    spam_title.style.display = "none";
  }
}

function UploadFile() {
  const fileInput = document.getElementById("input-file");
  if (!fileInput) return;

  const file = fileInput.files[0];
  const container = document.getElementById("videoContainer");
  const areaUpload = document.getElementById("input-area");
  const spam_title = document.getElementById("spam-title");

  if (!file) {
    const warning = document.getElementById("warn-invalid");
    if (warning) {
      warning.style.opacity = "1";
      warning.style.transform = "translate(-50%, -50%) scale(1)";
    }
    return;
  }

  const fileURL = URL.createObjectURL(file);
  const isVideo = file.type.startsWith("video");
  const mediaTag = isVideo ? "video" : "audio";

  // Injeta a mídia local de forma limpa no fim do container
  const novaMidia = `
    <div style="margin-bottom: 20px; display: inline-block;">
        <${mediaTag} controls style="max-width: 480px; border-radius: 1rem;">
            <source src="${fileURL}" type="${file.type}">
            Seu navegador não suporta a tag de ${mediaTag}.
        </${mediaTag}>
    </div>
  `;
  container.insertAdjacentHTML("beforeend", novaMidia);

  fileInput.value = "";

  if (areaUpload) {
    areaUpload.style.opacity = "0";
    areaUpload.style.pointerEvents = "none";
  }
  if (spam_title) {
    spam_title.style.display = "none";
  }
}

function openAreaUpload() {
  const areaUpload = document.getElementById("input-area");
  if (areaUpload) {
    areaUpload.style.opacity = "1";
    areaUpload.style.pointerEvents = "auto";
  }
}
