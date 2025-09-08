// ----------------- CONFIGURATION -----------------
const creatorData = {
  name: "Nia Aliyah",
  handle: "@alitah",
  title: "Premium Content Creator",
  avatar: "v1_4.png",
  cover: "v4_144.png",
  photos: 546,
  videos: 362,
  likes: "5k",
  status: "Available now",
  bannerAd: "https://via.placeholder.com/400x90/ff6b6b/ffffff?text=Banner+Ad",
  photoGrid: [
    "https://via.placeholder.com/150x150/ff9ff3/ffffff?text=Photo+1",
    "https://via.placeholder.com/150x150/54a0ff/ffffff?text=Photo+2",
    "https://via.placeholder.com/150x150/5f27cd/ffffff?text=Photo+3"
  ],
  profilePopup: {
    bullets: [
      "Ekskluzive përmbajtje të personalizuara",
      "Interaksion direkt dhe i vazhdueshëm",
      "Përditësime të rregullta me material të ri"
    ],
    banner: "https://via.placeholder.com/400x100/764ba2/ffffff?text=Special+Offer+50%25+OFF",
    actionText: "🎯 Shiko Ofertën Speciale",
    actionUrl: "https://example.com/premium-access"
  }
};

// ----------------- RENDER FUNCTION -----------------
function renderCreator(data) {
  // Cover & avatar
  document.querySelector(".cover").style.backgroundImage = `url(${data.cover})`;
  document.getElementById("profilePicture").src = data.avatar;

  // Name, handle, stats
  document.getElementById("creatorName").innerHTML = `${data.name} <span class="verified">✓</span>`;
  document.getElementById("creatorHandle").innerHTML = `${data.handle} 
    <span class="status"><span class="dot"></span> ${data.status}</span>`;
  document.getElementById("photoStats").textContent = `📷 ${data.photos} photos`;
  document.getElementById("videoStats").textContent = `🎥 ${data.videos} videos`;
  document.getElementById("likesStats").textContent = `❤️ ${data.likes}`;

  // Banner ad
  document.getElementById("bannerAdImg").src = data.bannerAd;

  // Photo grid
  const grid = document.getElementById("photoGrid");
  grid.innerHTML = "";
  data.photoGrid.forEach((src, i) => {
    let img = document.createElement("img");
    img.src = src;
    img.alt = `Photo ${i+1}`;
    grid.appendChild(img);
  });

  // Popup
  document.getElementById("profilePopupName").textContent = data.name;
  document.getElementById("profilePopupTitle").textContent = data.title;
  document.getElementById("profileBulletPoints").innerHTML = "";
  data.profilePopup.bullets.forEach(b => {
    let li = document.createElement("li");
    li.textContent = b;
    document.getElementById("profileBulletPoints").appendChild(li);
  });
  document.getElementById("profilePopupBannerImg").src = data.profilePopup.banner;
  document.getElementById("profileActionBtn").textContent = data.profilePopup.actionText;
  document.getElementById("profileActionBtn").onclick = () => {
    window.open(data.profilePopup.actionUrl, "_blank");
  };
}

// ----------------- INIT -----------------
document.addEventListener("DOMContentLoaded", () => {
  renderCreator(creatorData);

  // Klik per te hapur/ mbyllur popup
  document.getElementById("profilePicture").onclick = () => {
    document.getElementById("profilePopup").style.display = "flex";
  };
  document.getElementById("bannerArea").onclick = () => {
    document.getElementById("profilePopup").style.display = "flex";
  };
  document.getElementById("closeProfileIcon").onclick = () => {
    document.getElementById("profilePopup").style.display = "none";
  };
});
