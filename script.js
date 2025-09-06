let targetUrl = ""; // Store which link to open

// Function to show link confirmation popup
function showLinkPopup(url, title, message) {
  targetUrl = url;
  document.getElementById("popupTitle").textContent = title;
  document.getElementById("popupMessage").textContent = message;
  document.getElementById("linkPopup").style.display = "flex";
}

// Function to show stats popup
function showStatsPopup(type) {
  const statsData = {
    photos: {
      title: "📷 Koleksioni i Fotove",
      images: [
        "https://via.placeholder.com/150x150/ff6b9d/ffffff?text=Foto+1",
        "https://via.placeholder.com/150x150/c44569/ffffff?text=Foto+2", 
        "https://via.placeholder.com/150x150/f8b500/ffffff?text=Foto+3",
        "https://via.placeholder.com/150x150/6c5ce7/ffffff?text=Foto+4",
        "https://via.placeholder.com/150x150/a29bfe/ffffff?text=Foto+5",
        "https://via.placeholder.com/150x150/fd79a8/ffffff?text=Foto+6",
        "https://via.placeholder.com/150x150/00b894/ffffff?text=Foto+7",
        "https://via.placeholder.com/150x150/00cec9/ffffff?text=Foto+8",
        "https://via.placeholder.com/150x150/0984e3/ffffff?text=Foto+9",
        "https://via.placeholder.com/150x150/74b9ff/ffffff?text=Foto+10",
        "https://via.placeholder.com/150x150/fd63c4/ffffff?text=Foto+11",
        "https://via.placeholder.com/150x150/e17055/ffffff?text=Foto+12"
      ],
      unlockUrl: "https://example.com/unlock-photos"
    },
    videos: {
      title: "🎥 Koleksioni i Videove",
      images: [
        "https://via.placeholder.com/150x150/636e72/ffffff?text=Video+1",
        "https://via.placeholder.com/150x150/2d3436/ffffff?text=Video+2",
        "https://via.placeholder.com/150x150/00b894/ffffff?text=Video+3", 
        "https://via.placeholder.com/150x150/00cec9/ffffff?text=Video+4",
        "https://via.placeholder.com/150x150/6c5ce7/ffffff?text=Video+5",
        "https://via.placeholder.com/150x150/a29bfe/ffffff?text=Video+6",
        "https://via.placeholder.com/150x150/fd79a8/ffffff?text=Video+7",
        "https://via.placeholder.com/150x150/fdcb6e/ffffff?text=Video+8",
        "https://via.placeholder.com/150x150/e17055/ffffff?text=Video+9",
        "https://via.placeholder.com/150x150/74b9ff/ffffff?text=Video+10",
        "https://via.placeholder.com/150x150/0984e3/ffffff?text=Video+11",
        "https://via.placeholder.com/150x150/f39c12/ffffff?text=Video+12"
      ],
      unlockUrl: "https://example.com/unlock-videos"
    }
  };
  
  const data = statsData[type];
  document.getElementById("statsTitle").textContent = data.title;
  
  const statsGrid = document.getElementById("statsGrid");
  statsGrid.innerHTML = "";
  statsGrid.style.position = "relative";
  
  // Create images
  data.images.forEach((imageSrc, index) => {
    const img = document.createElement("img");
    img.src = imageSrc;
    img.alt = `${type} ${index + 1}`;
    img.onclick = () => {
      const itemType = type === 'photos' ? 'Foto' : 'Video';
      showLinkPopup(
        `https://example.com/${type}/${index + 1}`,
        `📱 ${itemType} ${index + 1}`,
        `Ky link ju drejton në versionin e plotë të kësaj ${itemType.toLowerCase()}je. A doni të vazhdoni?`
      );
    };
    statsGrid.appendChild(img);
  });
  
  // Create unlock button
  const unlockBtn = document.createElement("button");
  unlockBtn.className = "popup-unlock-btn";
  unlockBtn.textContent = type === 'photos' ? '🔓 Shkyç Fotot' : '🔓 Shkyç Videot';
  unlockBtn.onclick = () => {
    const itemType = type === 'photos' ? 'fotot' : 'videot';
    showLinkPopup(
      data.unlockUrl,
      `🔓 Shkyç të gjitha ${itemType}`,
      `Ky link do t'ju drejojë në faqen e pagesës për të shkyçur të gjitha ${itemType}. A doni të vazhdoni?`
    );
  };
  statsGrid.appendChild(unlockBtn);
  
  document.getElementById("statsPopup").style.display = "flex";
}

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Close link popup
  document.getElementById("cancelBtn").onclick = () => {
    document.getElementById("linkPopup").style.display = "none";
    targetUrl = "";
  };
  
  // Confirm and go to link
  document.getElementById("confirmBtn").onclick = () => {
    if (targetUrl) {
      window.open(targetUrl, '_blank');
      document.getElementById("linkPopup").style.display = "none";
      targetUrl = "";
    }
  };
  
  // Close stats popup
  document.getElementById("closeStatsBtn").onclick = () => {
    document.getElementById("statsPopup").style.display = "none";
  };
  
  // Close popups when clicking overlay
  document.getElementById("linkPopup").onclick = (e) => {
    if (e.target.id === "linkPopup") {
      document.getElementById("linkPopup").style.display = "none";
      targetUrl = "";
    }
  };
  
  document.getElementById("statsPopup").onclick = (e) => {
    if (e.target.id === "statsPopup") {
      document.getElementById("statsPopup").style.display = "none";
    }
  };
  
  // Assign actions to buttons
  document.getElementById("explicitBtn").onclick = () => {
    showLinkPopup(
      "https://example.com/explicit", 
      "🔞 Përmbajtje Eksplicite",
      "Ky link përmban përmbajtje eksplicite për të rritur. A jeni të sigurt që doni të vazhdoni?"
    );
  };
  
  document.getElementById("livestreamBtn").onclick = () => {
    showLinkPopup(
      "https://example.com/livestream", 
      "👁️ Livestream +18",
      "Ky link ju drejton në një livestream për të rritur. A doni të vazhdoni?"
    );
  };
  
  document.getElementById("unlockBtn").onclick = () => {
    showLinkPopup(
      "https://example.com/unlock", 
      "🔓 Shkyç të Gjitha",
      "Ky link do t'ju drejojë në faqen e pagesës për të shkyçur të gjitha fotot. A doni të vazhdoni?"
    );
  };
  
  document.getElementById("bannerAd").onclick = () => {
    showLinkPopup(
      "https://example.com/banner", 
      "📢 Reklamë Banner",
      "Ky link ju drejton në një faqe partneri. A doni të vazhdoni?"
    );
  };
  
  document.getElementById("bannerAdImage").onclick = () => {
    showLinkPopup(
      "https://example.com/banner-image", 
      "📢 Reklamë",
      "Ky link ju drejton në një ofertë speciale. A doni të vazhdoni?"
    );
  };
  
  // Photos
  document.getElementById("photo1").onclick = () => {
    showLinkPopup(
      "https://example.com/photo1", 
      "📷 Foto 1",
      "Ky link ju drejton në versionin e plotë të kësaj fotoje. A doni të vazhdoni?"
    );
  };
  
  document.getElementById("photo2").onclick = () => {
    showLinkPopup(
      "https://example.com/photo2", 
      "📷 Foto 2",
      "Ky link ju drejton në versionin e plotë të kësaj fotoje. A doni të vazhdoni?"
    );
  };
  
  document.getElementById("photo3").onclick = () => {
    showLinkPopup(
      "https://example.com/photo3", 
      "📷 Foto 3",
      "Ky link ju drejton në versionin e plotë të kësaj fotoje. A doni të vazhdoni?"
    );
  };
  
  // Stats clicks
  document.getElementById("photoStats").onclick = () => {
    showStatsPopup("photos");
  };
  
  document.getElementById("videoStats").onclick = () => {
    showStatsPopup("videos");
  };
});
