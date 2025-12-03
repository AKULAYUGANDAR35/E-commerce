// // // // const chatContainer = document.getElementById("chat-container");
// // // // const sendBtn = document.getElementById("send-btn");
// // // // const userInput = document.getElementById("user-input");
// // // // const photoUpload = document.getElementById("photo-upload");
// // // // const canvas = document.getElementById("tryon-canvas");
// // // // const ctx = canvas.getContext("2d");

// // // // function addMessage(message, sender) {
// // // //   const msgDiv = document.createElement("div");
// // // //   msgDiv.classList.add(sender === "bot" ? "bot-message" : "user-message");
// // // //   msgDiv.textContent = message;
// // // //   chatContainer.appendChild(msgDiv);
// // // //   chatContainer.scrollTop = chatContainer.scrollHeight;
// // // // }

// // // // // Send message
// // // // sendBtn.addEventListener("click", () => {
// // // //   const text = userInput.value.trim();
// // // //   if (!text) return;

// // // //   addMessage(text, "user");
// // // //   userInput.value = "";

// // // //   setTimeout(() => {
// // // //     if (text.toLowerCase().includes("shirt")) {
// // // //       addMessage("Great choice! Upload your photo to try the shirt on 👕", "bot");
// // // //     } else if (text.toLowerCase().includes("jeans")) {
// // // //       addMessage("Cool! Upload your photo and I’ll overlay jeans 👖", "bot");
// // // //     } else {
// // // //       addMessage("I can help you try shirts, jeans, or dresses. Type one!", "bot");
// // // //     }
// // // //   }, 800);
// // // // });

// // // // // Handle photo upload + overlay demo
// // // // photoUpload.addEventListener("change", (event) => {
// // // //   const file = event.target.files[0];
// // // //   if (!file) return;

// // // //   const reader = new FileReader();
// // // //   reader.onload = function(e) {
// // // //     const img = new Image();
// // // //     img.onload = function() {
// // // //       canvas.width = img.width;
// // // //       canvas.height = img.height;
// // // //       ctx.drawImage(img, 0, 0);

// // // //       // Demo: overlay product (you can replace with actual product PNGs)
// // // //       const product = new Image();
// // // //       product.src = "shirt.png"; // transparent PNG of product
// // // //       product.onload = function() {
// // // //         ctx.drawImage(product, img.width / 3, img.height / 3, img.width / 3, img.height / 3);
// // // //       };
// // // //     };
// // // //     img.src = e.target.result;
// // // //   };
// // // //   reader.readAsDataURL(file);

// // // //   addMessage("Photo uploaded! Applying outfit…", "bot");
// // // // });
// // // const photoUpload = document.getElementById("photo-upload");
// // // const canvas = document.getElementById("tryon-canvas");
// // // const ctx = canvas.getContext("2d");

// // // // Function to draw uploaded image
// // // function drawImageWithFilter(img, filter = "none") {
// // //   canvas.width = img.width;
// // //   canvas.height = img.height;

// // //   ctx.filter = filter; // apply filter (CSS-like)
// // //   ctx.drawImage(img, 0, 0);
// // // }

// // // // Handle image upload
// // // photoUpload.addEventListener("change", (event) => {
// // //   const file = event.target.files[0];
// // //   if (!file) return;

// // //   const reader = new FileReader();
// // //   reader.onload = function (e) {
// // //     const img = new Image();
// // //     img.onload = function () {
// // //       drawImageWithFilter(img, "brightness(1.1) contrast(1.2)");
// // //     };
// // //     img.src = e.target.result;
// // //   };
// // //   reader.readAsDataURL(file);
// // // });

// // // // Example: Apply a virtual product overlay (shirt.png, must be transparent PNG)
// // // function addProductOverlay(productSrc) {
// // //   const product = new Image();
// // //   product.src = productSrc;
// // //   product.onload = function () {
// // //     // Adjust overlay position & size relative to canvas
// // //     const overlayWidth = canvas.width / 3;
// // //     const overlayHeight = canvas.height / 3;
// // //     ctx.drawImage(product, canvas.width / 3, canvas.height / 3, overlayWidth, overlayHeight);
// // //   };
// // // }

// // // // Example buttons for filters
// // // document.getElementById("btn-grayscale").addEventListener("click", () => {
// // //   const img = new Image();
// // //   img.src = canvas.toDataURL();
// // //   img.onload = () => drawImageWithFilter(img, "grayscale(100%)");
// // // });

// // // document.getElementById("btn-sepia").addEventListener("click", () => {
// // //   const img = new Image();
// // //   img.src = canvas.toDataURL();
// // //   img.onload = () => drawImageWithFilter(img, "sepia(100%)");
// // // });

// // // document.getElementById("btn-clear").addEventListener("click", () => {
// // //   const img = new Image();
// // //   img.src = canvas.toDataURL();
// // //   img.onload = () => drawImageWithFilter(img, "none");
// // // });

// // // // Example: add product overlay
// // // document.getElementById("btn-shirt").addEventListener("click", () => {
// // //   addProductOverlay("shirt.png");
// // // });
// // const photoUpload = document.getElementById("photo-upload");
// // const canvas = document.getElementById("tryon-canvas");
// // const ctx = canvas.getContext("2d");

// // // Load saved cart from localStorage
// // function getCartItems() {
// //   return JSON.parse(localStorage.getItem("cart")) || [];
// // }

// // // Draw uploaded image
// // function drawBaseImage(img) {
// //   canvas.width = img.width;
// //   canvas.height = img.height;
// //   ctx.clearRect(0, 0, canvas.width, canvas.height);
// //   ctx.drawImage(img, 0, 0);
// // }

// // // Overlay cart items
// // function overlayCartItems() {
// //   const cart = getCartItems();

// //   cart.forEach((item, index) => {
// //     const product = new Image();
// //     product.src = item.image; // transparent PNG of product
// //     product.onload = function () {
// //       // Position each product differently
// //       const overlayWidth = canvas.width / 3;
// //       const overlayHeight = canvas.height / 3;
// //       const x = canvas.width / 3;
// //       const y = (canvas.height / 3) + (index * 20); // shift each slightly
// //       ctx.drawImage(product, x, y, overlayWidth, overlayHeight);
// //     };
// //   });
// // }

// // // Handle photo upload
// // photoUpload.addEventListener("change", (event) => {
// //   const file = event.target.files[0];
// //   if (!file) return;

// //   const reader = new FileReader();
// //   reader.onload = function (e) {
// //     const img = new Image();
// //     img.onload = function () {
// //       drawBaseImage(img);
// //       overlayCartItems(); // Apply cart products on top
// //     };
// //     img.src = e.target.result;
// //   };
// //   reader.readAsDataURL(file);
// // });
// const photoUpload = document.getElementById("photo-upload");
// const canvas = document.getElementById("tryon-canvas");
// const ctx = canvas.getContext("2d");
// const downloadBtn = document.getElementById("download-btn");

// // Load saved cart items
// function getCartItems() {
//   return JSON.parse(localStorage.getItem("cart")) || [];
// }

// // Draw base user photo
// function drawBaseImage(img, callback) {
//   canvas.width = img.width;
//   canvas.height = img.height;
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   ctx.drawImage(img, 0, 0);

//   if (callback) callback();
// }

// // Overlay cart products onto canvas
// function overlayCartItems() {
//   const cart = getCartItems();

//   cart.forEach((item, index) => {
//     const product = new Image();
//     product.src = item.image; // must be transparent PNG
//     product.onload = function () {
//       // Position item (can be improved with face/body detection)
//       const overlayWidth = canvas.width / 3;
//       const overlayHeight = canvas.height / 3;
//       const x = canvas.width / 3;
//       const y = (canvas.height / 3) + (index * 30); 
//       ctx.drawImage(product, x, y, overlayWidth, overlayHeight);
//     };
//   });
// }

// // Handle upload
// photoUpload.addEventListener("change", (event) => {
//   const file = event.target.files[0];
//   if (!file) return;

//   const reader = new FileReader();
//   reader.onload = function (e) {
//     const img = new Image();
//     img.onload = function () {
//       drawBaseImage(img, overlayCartItems);
//     };
//     img.src = e.target.result;
//   };
//   reader.readAsDataURL(file);
// });

// // Download final "converted" virtual try-on image
// downloadBtn.addEventListener("click", () => {
//   const virtualImage = canvas.toDataURL("image/png");
//   const link = document.createElement("a");
//   link.href = virtualImage;
//   link.download = "virtual-tryon.png";
//   link.click();
// });
// tryon.js
// Robust implementation: upload photo -> apply cart items (from localStorage) -> allow position/scale editing -> download merged image
// Important: If product images are hosted on a different origin and don't send CORS headers, canvas.toDataURL() will be blocked (tainted).
// For testing, use the "Load sample cart items" button which uses data-URLs (no CORS issues).

const photoUpload = document.getElementById('photo-upload');
const canvas = document.getElementById('tryon-canvas');
const ctx = canvas.getContext('2d');
const downloadBtn = document.getElementById('download-btn');
const loadSampleBtn = document.getElementById('load-sample');
const applyCartBtn = document.getElementById('apply-cart');
const clearAllBtn = document.getElementById('clear-all');
const cartListEl = document.getElementById('cart-list');
const logEl = document.getElementById('log');

let baseImage = null; // Image object of uploaded photo
let canvasScale = 1;   // scale factor between original image and canvas display
let overlays = [];     // cart items loaded for try-on (with runtime props: img object, x,y,scale,enabled)

// ---------- Helpers ----------
function log(msg) {
  console.log(msg);
  logEl.textContent = msg;
}

function loadImage(src, allowCrossOrigin = true) {
  // Returns Promise<Image>. Uses crossOrigin='anonymous' to allow toDataURL when server permits CORS.
  return new Promise((resolve, reject) => {
    const img = new Image();
    if (allowCrossOrigin && !src.startsWith('data:')) img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = (e) => reject(new Error('Failed to load ' + src));
    img.src = src;
  });
}

// create sample overlay as transparent PNG dataURL (shirt/pants look)
function createSampleOverlay(type = 'shirt', w = 600, h = 600, color = 'rgba(8,129,120,0.6)') {
  const off = document.createElement('canvas');
  off.width = w; off.height = h;
  const c = off.getContext('2d');
  c.clearRect(0,0,w,h);
  c.fillStyle = 'rgba(0,0,0,0)';
  c.fillRect(0,0,w,h);

  c.fillStyle = color;
  c.strokeStyle = 'rgba(0,0,0,0.12)';
  c.lineWidth = 2;

  if (type === 'shirt') {
    // simple shirt-ish shape
    c.beginPath();
    c.moveTo(w*0.25, h*0.28);
    c.quadraticCurveTo(w*0.5, h*0.1, w*0.75, h*0.28);
    c.lineTo(w*0.78, h*0.55);
    c.quadraticCurveTo(w*0.5, h*0.9, w*0.22, h*0.55);
    c.closePath();
    c.fill();
    c.stroke();
  } else {
    // pants-like block
    c.fillRect(w*0.28, h*0.45, w*0.44, h*0.38);
    c.strokeRect(w*0.28, h*0.45, w*0.44, h*0.38);
  }
  return off.toDataURL('image/png');
}

// ---------- Cart/localStorage handling ----------
function getCartFromStorage() {
  return JSON.parse(localStorage.getItem('cart') || '[]');
}
function saveCartToStorage(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// For demo: create sample cart items (data URLs so no CORS)
function createSampleCartAndSave() {
  const sample = [
    { id: 's1', name: 'Sample Shirt', image: createSampleOverlay('shirt', 600, 600, 'rgba(8,129,120,0.65)'), default: true },
    { id: 'p1', name: 'Sample Pants', image: createSampleOverlay('pants', 600, 600, 'rgba(120,40,150,0.6)'), default: true }
  ];
  saveCartToStorage(sample);
  log('Sample cart items saved to localStorage.');
  loadCartToPanel();
}

// Load cart into overlays[] and UI panel (but do not draw until a base photo exists)
async function loadCartToPanel() {
  const cart = getCartFromStorage();
  overlays = cart.map((it, idx) => ({
    id: it.id || ('cart' + idx),
    name: it.name || ('Item ' + idx),
    src: it.image,
    enabled: true,
    x: null, y: null,
    scale: 1,
    img: null // will be Image object after load
  }));

  // Create UI list
  cartListEl.innerHTML = '';
  overlays.forEach((ov, idx) => {
    const itemEl = document.createElement('div');
    itemEl.className = 'cart-item';
    itemEl.innerHTML = `
      <div class="row">
        <img src="${ov.src}" alt="${ov.name}" />
        <div style="flex:1">
          <div><strong>${ov.name}</strong></div>
          <div style="margin-top:6px">
            <label>Enable <input type="checkbox" class="enable" data-idx="${idx}" checked></label>
            <button class="remove" data-idx="${idx}" title="Remove item">Remove</button>
          </div>
        </div>
      </div>
      <div style="margin-top:8px;display:flex;gap:6px;flex-wrap:wrap">
        <label>X: <input type="number" class="pos-x" data-idx="${idx}" value="0" step="1"></label>
        <label>Y: <input type="number" class="pos-y" data-idx="${idx}" value="0" step="1"></label>
        <label>Scale: <input type="number" class="scale" data-idx="${idx}" value="1" min="0.1" step="0.05"></label>
      </div>
    `;
    cartListEl.appendChild(itemEl);
  });

  // Attach UI events
  cartListEl.querySelectorAll('.enable').forEach(cb => cb.addEventListener('change', (e)=>{
    const i = +e.target.dataset.idx;
    overlays[i].enabled = e.target.checked;
    renderCanvas();
  }));
  cartListEl.querySelectorAll('.remove').forEach(btn => btn.addEventListener('click', (e)=>{
    const i = +e.target.dataset.idx;
    overlays.splice(i,1);
    // also remove from localStorage cart
    const stored = getCartFromStorage();
    stored.splice(i,1);
    saveCartToStorage(stored);
    loadCartToPanel();
    renderCanvas();
  }));
  cartListEl.querySelectorAll('.pos-x').forEach(inp => inp.addEventListener('input', (e)=>{
    const i = +e.target.dataset.idx;
    overlays[i].x = Number(e.target.value);
    renderCanvas();
  }));
  cartListEl.querySelectorAll('.pos-y').forEach(inp => inp.addEventListener('input', (e)=>{
    const i = +e.target.dataset.idx;
    overlays[i].y = Number(e.target.value);
    renderCanvas();
  }));
  cartListEl.querySelectorAll('.scale').forEach(inp => inp.addEventListener('input', (e)=>{
    const i = +e.target.dataset.idx;
    overlays[i].scale = Number(e.target.value) || 1;
    renderCanvas();
  }));

  // Preload overlay images (best-effort; if fail, fallback will draw a rectangle)
  await Promise.all(overlays.map(async ov => {
    try {
      ov.img = await loadImage(ov.src, false); // dataURLs or same-origin; allowCrossOrigin false is safe
    } catch (err) {
      console.warn('Overlay image load failed, will draw fallback:', ov.src, err);
      ov.img = null;
    }
  }));
  log('Cart panel loaded. Upload a photo and click "Apply Cart Items".');
}

// ---------- Canvas rendering ----------
function fitCanvasToImage(img, maxW = 1200, maxH = 1000) {
  // Keep aspect ratio, scale down if too large
  let w = img.width, h = img.height;
  const ratio = Math.min(1, maxW / w, maxH / h);
  canvas.width = Math.round(w * ratio);
  canvas.height = Math.round(h * ratio);
  canvasScale = ratio;
}

function clearCanvas() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
}

async function renderCanvas() {
  if (!baseImage) {
    clearCanvas();
    return;
  }
  // draw base
  fitCanvasToImage(baseImage);
  ctx.clearRect(0,0,canvas.width,canvas.height);
  // draw base image scaled
  ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);

  // overlay each enabled overlay in order
  for (let ov of overlays) {
    if (!ov.enabled) continue;

    // If overlay image is available, draw it. If not, draw a fallback block.
    const img = ov.img;
    // default placement if not set: center-ish upper for shirts, lower for pants
    if (ov.x === null) ov.x = canvas.width * 0.25;
    if (ov.y === null) ov.y = canvas.height * 0.2;

    if (img) {
      // compute size based on image natural size and overlay.scale
      const naturalW = img.width;
      const naturalH = img.height;
      // base overlay width relative to canvas (tweak as needed)
      let baseOverlayW = canvas.width * 0.5; // default width of overlay
      let drawW = baseOverlayW * (ov.scale || 1);
      let drawH = (naturalH / naturalW) * drawW;
      ctx.drawImage(img, ov.x, ov.y, drawW, drawH);
    } else {
      // fallback: draw a labeled semi-transparent rectangle
      const w = (canvas.width * 0.4) * (ov.scale || 1);
      const h = (canvas.height * 0.35) * (ov.scale || 1);
      ctx.fillStyle = 'rgba(200,200,200,0.45)';
      ctx.fillRect(ov.x, ov.y, w, h);
      ctx.strokeStyle = 'rgba(0,0,0,0.1)';
      ctx.strokeRect(ov.x, ov.y, w, h);
      ctx.fillStyle = '#222';
      ctx.font = '16px Arial';
      ctx.fillText(ov.name || 'Item', ov.x + 8, ov.y + 20);
    }
  }
}

// ---------- File upload handling ----------
photoUpload.addEventListener('change', (ev) => {
  const f = ev.target.files[0];
  if (!f) return;
  const reader = new FileReader();
  reader.onload = function(e){
    const img = new Image();
    img.onload = function(){
      baseImage = img;
      log('Photo loaded. Now click "Apply Cart Items" to overlay cart items.');
      renderCanvas();
    };
    img.onerror = function(){ log('Failed to load the selected photo.'); };
    img.src = e.target.result; // dataURL -> no cross-origin problem
  };
  reader.readAsDataURL(f);
});

// ---------- Buttons ----------
loadSampleBtn.addEventListener('click', ()=>{
  createSampleCartAndSave();
  loadCartToPanel();
});

applyCartBtn.addEventListener('click', async ()=>{
  if (!baseImage) { log('Please upload a photo first.'); return; }
  // If overlays have image src that are external, try to preload them again with crossOrigin:'anonymous'
  // reload overlay images to attempt CORS-safe images (if hosted properly)
  await Promise.all(overlays.map(async ov => {
    if (!ov.src) return;
    if (ov.src.startsWith('data:')) return; // already data URI
    try {
      ov.img = await loadImage(ov.src, true);
    } catch(err) {
      console.warn('Could not load overlay with CORS, leaving fallback or previously loaded image.', ov.src);
    }
  }));
  renderCanvas();
});

clearAllBtn.addEventListener('click', ()=>{
  baseImage = null;
  clearCanvas();
  log('Canvas cleared.');
});

// ---------- Download (export merged image) ----------
downloadBtn.addEventListener('click', () => {
  try {
    const data = canvas.toDataURL('image/png'); // may throw if canvas is tainted
    const link = document.createElement('a');
    link.href = data;
    link.download = 'virtual-tryon.png';
    document.body.appendChild(link);
    link.click();
    link.remove();
    log('Download started.');
  } catch (err) {
    console.error(err);
    log('Unable to export image. This usually happens when overlay images come from a different origin without CORS. Use same-origin images or enable CORS on the server.');
    alert('Export blocked by cross-origin images. See console/log for details.');
  }
});

// On load: populate panel with existing cart (if any)
loadCartToPanel().catch(e => {
  console.error('Failed to load cart panel:', e);
  log('Failed to load cart items.');
});
