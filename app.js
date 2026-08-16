// SVG Paths for vector shapes (viewBox 0 0 100 100, centered at 50,50)
const PATHS = {
  circle: "M 50, 50 m -45, 0 a 45,45 0 1,0 90,0 a 45,45 0 1,0 -90,0",
  triangle: "M 50, 5 L 95, 90 H 5 Z",
  plus: "M 35, 5 H 65 V 35 H 95 V 65 H 65 V 95 H 35 V 65 H 5 V 35 H 35 Z",
  star: "M 50, 2 L 64, 32 L 98, 35 L 72, 57 L 80, 91 L 50, 72 L 20, 91 L 28, 57 L 2, 35 L 36, 32 Z",
  hexagon: "M 50, 2 L 95, 27 L 95, 73 L 50, 98 L 5, 73 L 5, 27 Z",
  heart: "M 50, 90 C 15, 60 5, 40 5, 25 C 5, 10 17, 3 30, 3 C 40, 3 47, 8 50, 12 C 53, 8 60, 3 70, 3 C 83, 3 95, 10 95, 25 C 95, 40 85, 60 50, 90 Z",
  
  // New Shapes
  square: "M 10,10 H 90 V 90 H 10 Z",
  rectangle: "M 5,22 H 95 V 78 H 5 Z",
  oval: "M 5,50 A 45,28 0 1,0 95,50 A 45,28 0 1,0 5,50 Z",
  rightTriangle: "M 10,10 L 90,90 H 10 Z",
  rhombus: "M 50,5 L 90,50 L 50,95 L 10,50 Z",
  pentagon: "M 50,5 L 92.8,36.1 L 76.5,86.4 L 23.5,86.4 L 7.2,36.1 Z",
  octagon: "M 30,5 H 70 L 95,30 V 70 L 70,95 H 30 L 5,70 V 30 Z",
  kite: "M 50,5 L 85,35 L 50,95 L 15,35 Z",
  diamond: "M 25,5 H 75 L 95,35 L 50,95 L 5,35 Z",
  parallelogram: "M 25,18 H 95 L 75,82 H 5 Z",
  trapezium: "M 28,18 H 72 L 95,82 H 5 Z",
  semicircle: "M 5,65 H 95 A 45,45 0 0,0 5,65 Z",
  crescent: "M 70,5 A 45,45 0 1,0 70,95 A 38,38 0 1,1 70,5 Z",
  ring: "M 50,5 A 45,45 0 1,1 49.9,5 Z M 50,25 A 25,25 0 1,0 49.9,25 Z",
  arrow: "M 5,35 H 60 V 15 L 95,50 L 60,85 V 65 H 5 Z"
};

// Organic base animation sets for foreground shapes (Speed and swing offsets)
const SHAPE_FLOAT_PRESETS = [
  { duration: 20, x: 18, y: -15, deg: 8 },
  { duration: 24, x: -22, y: 18, deg: -10 },
  { duration: 18, x: 15, y: 12, deg: 6 },
  { duration: 28, x: -16, y: -20, deg: -8 },
  { duration: 22, x: 20, y: -12, deg: 10 }
];

// DOM Elements - Noise Settings
const noiseTypeInput = document.getElementById('noiseType');
const baseFrequencyInput = document.getElementById('baseFrequency');
const baseFrequencyVal = document.getElementById('baseFrequencyVal');
const numOctavesInput = document.getElementById('numOctaves');
const numOctavesVal = document.getElementById('numOctavesVal');
const noiseOpacityInput = document.getElementById('noiseOpacity');
const noiseOpacityVal = document.getElementById('noiseOpacityVal');
const blendModeInput = document.getElementById('blendMode');

// DOM Elements - Canvas Backdrop
const previewCanvas = document.getElementById('previewCanvas');
const bgGradientEl = document.getElementById('bgGradient');
const bgColor1Input = document.getElementById('bgColor1');
const bgColor2Input = document.getElementById('bgColor2');
const bgAngleInput = document.getElementById('bgAngle');

// DOM Elements - Global Motion Controls
const globalMotionActiveInput = document.getElementById('globalMotionActive');
const globalMotionSpeedInput = document.getElementById('globalMotionSpeed');
const globalMotionSpeedVal = document.getElementById('globalMotionSpeedVal');
const globalMotionSizeInput = document.getElementById('globalMotionSize');
const globalMotionSizeVal = document.getElementById('globalMotionSizeVal');

// SVG Elements
const feTurbulence = document.getElementById('fe-turbulence');
const svgFeTurbulence = document.getElementById('svg-fe-turbulence');

// Layers States
let bgBlobsData = [];
let fgShapesData = [];

// Global Motion settings state
let globalMotion = {
  active: false,
  speed: 1.0,
  size: 1.0
};

// Auto-namespacing hash to prevent styling/id conflicts between blocks on a single page
let exportHash = 'a1b2';

// Presets Definition (Dreamy Backdrops + Overlayed Crisp Vectors)
const PRESETS = {
  phineo: {
    noiseType: "fractalNoise",
    baseFrequency: 0.85,
    numOctaves: 3,
    noiseOpacity: 0.30,
    blendMode: "overlay",
    bgColor1: "#faf8f6",
    bgColor2: "#ebdcd0",
    bgAngle: 135,
    bgBlobs: [
      { active: true, color1: "#ff5e62", color2: "#ff9966", size: 450, blur: 110, x: 20, y: 35 },
      { active: true, color1: "#1a8eff", color2: "#00e5ff", size: 500, blur: 120, x: 80, y: 65 },
      { active: true, color1: "#e0d0b0", color2: "#cbb490", size: 350, blur: 90, x: 50, y: 20 }
    ],
    fgShapes: [
      { active: true, type: "triangle", color1: "#e0533c", color2: "#f39c12", size: 180, blur: 0, rotate: 0, x: 30, y: 45 },
      { active: true, type: "plus", color1: "#1b5e94", color2: "#4fa8c1", size: 160, blur: 0, rotate: 45, x: 70, y: 55 },
      { active: true, type: "heart", color1: "#c0392b", color2: "#e74c3c", size: 130, blur: 0, rotate: 0, x: 48, y: 30 }
    ]
  },
  westwind: {
    noiseType: "fractalNoise",
    baseFrequency: 0.70,
    numOctaves: 3,
    noiseOpacity: 0.32,
    blendMode: "overlay",
    bgColor1: "#1e3c72", // Hamburg Maritime Blue
    bgColor2: "#0f2027", // Dark Deep Blue
    bgAngle: 135,
    bgBlobs: [
      { active: true, color1: "#ffc759", color2: "#ff9f43", size: 500, blur: 110, x: 25, y: 35 },
      { active: true, color1: "#b2ff9e", color2: "#78e08f", size: 450, blur: 120, x: 75, y: 60 },
      { active: true, color1: "#fe654f", color2: "#dd3e2c", size: 350, blur: 90, x: 50, y: 20 }
    ],
    fgShapes: [
      { active: true, type: "ring", color1: "#ffc759", color2: "#fe654f", size: 200, blur: 0, rotate: 15, x: 32, y: 45 },
      { active: true, type: "arrow", color1: "#2a5ba3", color2: "#b2ff9e", size: 180, blur: 0, rotate: -10, x: 68, y: 55 },
      { active: true, type: "heart", color1: "#fe654f", color2: "#ffc759", size: 130, blur: 0, rotate: 10, x: 48, y: 28 }
    ]
  },
  cosmic: {
    noiseType: "fractalNoise",
    baseFrequency: 0.65,
    numOctaves: 4,
    noiseOpacity: 0.42,
    blendMode: "soft-light",
    bgColor1: "#0b001a",
    bgColor2: "#20093b",
    bgAngle: 225,
    bgBlobs: [
      { active: true, color1: "#ff007f", color2: "#7f00ff", size: 500, blur: 120, x: 20, y: 60 },
      { active: true, color1: "#00f0ff", color2: "#003b80", size: 550, blur: 130, x: 75, y: 30 },
      { active: true, color1: "#ffaa00", color2: "#ff0055", size: 300, blur: 80, x: 50, y: 40 }
    ],
    fgShapes: [
      { active: true, type: "star", color1: "#ff007f", color2: "#ffffff", size: 160, blur: 0, rotate: 15, x: 35, y: 35 },
      { active: true, type: "hexagon", color1: "#00f0ff", color2: "#ffffff", size: 180, blur: 0, rotate: 90, x: 65, y: 60 },
      { active: true, type: "circle", color1: "#ffaa00", color2: "#ff5500", size: 120, blur: 0, rotate: 0, x: 50, y: 50 }
    ]
  },
  cyberpunk: {
    noiseType: "turbulence",
    baseFrequency: 0.95,
    numOctaves: 3,
    noiseOpacity: 0.50,
    blendMode: "screen",
    bgColor1: "#05050a",
    bgColor2: "#150525",
    bgAngle: 180,
    bgBlobs: [
      { active: true, color1: "#ff0055", color2: "#3a0055", size: 450, blur: 100, x: 30, y: 30 },
      { active: true, color1: "#00ffcc", color2: "#051535", size: 480, blur: 110, x: 70, y: 70 },
      { active: false, color1: "#ffff00", color2: "#ff5500", size: 350, blur: 90, x: 50, y: 50 }
    ],
    fgShapes: [
      { active: true, type: "triangle", color1: "#ff0055", color2: "#ffffff", size: 170, blur: 0, rotate: -25, x: 25, y: 30 },
      { active: true, type: "plus", color1: "#00ffcc", color2: "#ffffff", size: 160, blur: 0, rotate: 45, x: 75, y: 65 }
    ]
  },
  minimal: {
    noiseType: "fractalNoise",
    baseFrequency: 1.45,
    numOctaves: 2,
    noiseOpacity: 0.12,
    blendMode: "overlay",
    bgColor1: "#fdfbf7",
    bgColor2: "#f3efe6",
    bgAngle: 45,
    bgBlobs: [
      { active: true, color1: "#ffdbd4", color2: "#ffe3d1", size: 600, blur: 150, x: 20, y: 80 },
      { active: true, color1: "#d8ebff", color2: "#e8f4ff", size: 550, blur: 140, x: 80, y: 20 },
      { active: false, color1: "#fff0d0", color2: "#fffdf0", size: 300, blur: 90, x: 50, y: 50 }
    ],
    fgShapes: [
      { active: true, type: "circle", color1: "#ffdbd4", color2: "#ffe3d1", size: 150, blur: 0, rotate: 0, x: 35, y: 50 },
      { active: true, type: "triangle", color1: "#1b5e94", color2: "#f3efe6", size: 130, blur: 0, rotate: 180, x: 60, y: 40 }
    ]
  },
  "dark-mono": {
    noiseType: "fractalNoise",
    baseFrequency: 0.55,
    numOctaves: 4,
    noiseOpacity: 0.65,
    blendMode: "overlay",
    bgColor1: "#121316",
    bgColor2: "#1c1e24",
    bgAngle: 90,
    bgBlobs: [
      { active: true, color1: "#2e323b", color2: "#191b20", size: 450, blur: 100, x: 30, y: 30 },
      { active: true, color1: "#474e5d", color2: "#22252c", size: 480, blur: 110, x: 70, y: 70 },
      { active: true, color1: "#16171a", color2: "#0d0e10", size: 350, blur: 90, x: 50, y: 50 }
    ],
    fgShapes: [
      { active: true, type: "hexagon", color1: "#2e323b", color2: "#ffffff", size: 160, blur: 0, rotate: 30, x: 35, y: 40 },
      { active: true, type: "star", color1: "#474e5d", color2: "#ffffff", size: 170, blur: 0, rotate: 45, x: 65, y: 60 },
      { active: true, type: "plus", color1: "#16171a", color2: "#ffffff", size: 130, blur: 0, rotate: 0, x: 50, y: 30 }
    ]
  }
};

// General UI elements
const randomizeBtn = document.getElementById('randomizeBtn');
const codeOutput = document.getElementById('codeOutput');
const copyCodeBtn = document.getElementById('copyCodeBtn');
const presetBtns = document.querySelectorAll('.preset-btn');
const codeTabBtns = document.querySelectorAll('.code-tab-btn');
const addFgShapeBtn = document.getElementById('addFgShapeBtn');
const addBgBlobBtn = document.getElementById('addBgBlobBtn');

// State variables
let activeTab = 'combined';
let globalAnimationActive = true;

// Initialize
function init() {
  generateHash();
  bindInputs();
  bindCollapsibleSections();
  loadPreset('phineo');
  bindTabs();
  
  // Recalculate frequency scaling when layout sizes change
  window.addEventListener('resize', updateNoiseFrequency);
}

function bindCollapsibleSections() {
  const collapsibles = document.querySelectorAll('.collapsible');
  collapsibles.forEach(section => {
    const header = section.querySelector('.section-header');
    header.addEventListener('click', () => {
      section.classList.toggle('collapsed');
    });
  });
}

function bindInputs() {
  // Global Noise Overlay bindings
  noiseTypeInput.addEventListener('change', () => {
    feTurbulence.setAttribute('type', noiseTypeInput.value);
    if (svgFeTurbulence) {
      svgFeTurbulence.setAttribute('type', noiseTypeInput.value);
    }
    updatePreviewAndCode();
  });
  
  baseFrequencyInput.addEventListener('input', updateNoiseFrequency);
  baseFrequencyInput.addEventListener('change', updatePreviewAndCode);

  numOctavesInput.addEventListener('input', () => {
    numOctavesVal.innerText = numOctavesInput.value;
    feTurbulence.setAttribute('numOctaves', numOctavesInput.value);
    if (svgFeTurbulence) {
      svgFeTurbulence.setAttribute('numOctaves', numOctavesInput.value);
    }
  });
  numOctavesInput.addEventListener('change', updatePreviewAndCode);

  noiseOpacityInput.addEventListener('input', () => {
    noiseOpacityVal.innerText = Math.round(noiseOpacityInput.value * 100) + '%';
    document.documentElement.style.setProperty('--noise-opacity', noiseOpacityInput.value);
  });
  noiseOpacityInput.addEventListener('change', updatePreviewAndCode);

  blendModeInput.addEventListener('change', () => {
    document.documentElement.style.setProperty('--noise-blend-mode', blendModeInput.value);
    updatePreviewAndCode();
  });

  // Background Gradient inputs
  bgColor1Input.addEventListener('input', updateBackground);
  bgColor1Input.addEventListener('change', updatePreviewAndCode);
  bgColor2Input.addEventListener('input', updateBackground);
  bgColor2Input.addEventListener('change', updatePreviewAndCode);
  bgAngleInput.addEventListener('input', updateBackground);
  bgAngleInput.addEventListener('change', updatePreviewAndCode);

  // Global Motion Controls listeners
  globalMotionActiveInput.addEventListener('change', updateGlobalMotion);
  globalMotionSpeedInput.addEventListener('input', () => {
    globalMotion.speed = parseFloat(globalMotionSpeedInput.value);
    globalMotionSpeedVal.innerText = globalMotion.speed.toFixed(1) + 'x';
    document.documentElement.style.setProperty('--global-motion-speed', globalMotion.speed);
  });
  globalMotionSpeedInput.addEventListener('change', updatePreviewAndCode);
  
  globalMotionSizeInput.addEventListener('input', () => {
    globalMotion.size = parseFloat(globalMotionSizeInput.value) / 100;
    globalMotionSizeVal.innerText = Math.round(globalMotion.size * 100) + '%';
    document.documentElement.style.setProperty('--global-motion-size', globalMotion.size);
  });
  globalMotionSizeInput.addEventListener('change', updatePreviewAndCode);

  // Event Delegation for Dynamic Background Blobs Settings Cards
  const bgContainer = document.getElementById('bgBlobsControlsContainer');
  
  bgContainer.addEventListener('input', (e) => {
    const card = e.target.closest('.shape-settings-card');
    if (!card) return;
    const id = parseInt(card.dataset.id);
    const blob = bgBlobsData.find(b => b.id === id);
    if (!blob) return;

    if (e.target.classList.contains('blob-size-slider')) {
      blob.size = parseInt(e.target.value);
      card.querySelector('.blob-size-val').innerText = blob.size + 'px';
      updateBgBlobElement(blob);
    } else if (e.target.classList.contains('blob-blur-slider')) {
      blob.blur = parseInt(e.target.value);
      card.querySelector('.blob-blur-val').innerText = blob.blur + 'px';
      updateBgBlobElement(blob);
    } else if (e.target.classList.contains('blob-x-slider')) {
      blob.x = parseInt(e.target.value);
      card.querySelector('.blob-x-val').innerText = blob.x + '%';
      updateBgBlobElement(blob);
    } else if (e.target.classList.contains('blob-y-slider')) {
      blob.y = parseInt(e.target.value);
      card.querySelector('.blob-y-val').innerText = blob.y + '%';
      updateBgBlobElement(blob);
    } else if (e.target.classList.contains('blob-color1-input')) {
      blob.color1 = e.target.value;
      updateBgBlobElement(blob);
    } else if (e.target.classList.contains('blob-color2-input')) {
      blob.color2 = e.target.value;
      updateBgBlobElement(blob);
    }
  });

  bgContainer.addEventListener('change', (e) => {
    const card = e.target.closest('.shape-settings-card');
    if (!card) return;
    const id = parseInt(card.dataset.id);
    const blob = bgBlobsData.find(b => b.id === id);
    if (!blob) return;

    if (e.target.classList.contains('blob-active-chk')) {
      blob.active = e.target.checked;
      const body = card.querySelector('.card-body');
      const elBlob = document.getElementById(`bgBlob-${id}`);
      if (blob.active) {
        body.classList.remove('collapsed');
        if (elBlob) elBlob.style.display = 'block';
      } else {
        body.classList.add('collapsed');
        if (elBlob) elBlob.style.display = 'none';
      }
      updatePreviewAndCode();
    } else if (e.target.type === 'range' || e.target.type === 'color') {
      updatePreviewAndCode();
    }
  });

  bgContainer.addEventListener('click', (e) => {
    const deleteBtn = e.target.closest('.delete-blob-btn');
    if (!deleteBtn) return;
    const card = deleteBtn.closest('.shape-settings-card');
    const id = parseInt(card.dataset.id);
    deleteBgBlob(id);
  });

  addBgBlobBtn.addEventListener('click', addBgBlob);

  // Event Delegation for Dynamic Vector Shapes Controls
  const container = document.getElementById('fgShapesControlsContainer');
  
  // Handle sliding inputs and color pickers
  container.addEventListener('input', (e) => {
    const card = e.target.closest('.shape-settings-card');
    if (!card) return;
    const id = parseInt(card.dataset.id);
    const shape = fgShapesData.find(s => s.id === id);
    if (!shape) return;

    if (e.target.classList.contains('fg-size-slider')) {
      shape.size = parseInt(e.target.value);
      card.querySelector('.fg-size-val').innerText = shape.size + 'px';
      updateFgShapeElement(shape);
    } else if (e.target.classList.contains('fg-blur-slider')) {
      shape.blur = parseInt(e.target.value);
      card.querySelector('.fg-blur-val').innerText = shape.blur + 'px';
      updateFgShapeElement(shape);
    } else if (e.target.classList.contains('fg-rotate-slider')) {
      shape.rotate = parseInt(e.target.value);
      card.querySelector('.fg-rotate-val').innerText = shape.rotate + '°';
      updateFgShapeElement(shape);
    } else if (e.target.classList.contains('fg-x-slider')) {
      shape.x = parseInt(e.target.value);
      card.querySelector('.fg-x-val').innerText = shape.x + '%';
      updateFgShapeElement(shape);
    } else if (e.target.classList.contains('fg-y-slider')) {
      shape.y = parseInt(e.target.value);
      card.querySelector('.fg-y-val').innerText = shape.y + '%';
      updateFgShapeElement(shape);
    } else if (e.target.classList.contains('fg-color1-input')) {
      shape.color1 = e.target.value;
      updateFgShapeGradient(shape);
    } else if (e.target.classList.contains('fg-color2-input')) {
      shape.color2 = e.target.value;
      updateFgShapeGradient(shape);
    }
  });

  // Update text exporter only on mouse release/change for vectors
  container.addEventListener('change', (e) => {
    const card = e.target.closest('.shape-settings-card');
    if (!card) return;
    const id = parseInt(card.dataset.id);
    const shape = fgShapesData.find(s => s.id === id);
    if (!shape) return;

    if (e.target.classList.contains('fg-type-select')) {
      shape.type = e.target.value;
      const titleSpan = card.querySelector('.card-title');
      const cardIndex = Array.from(container.children).indexOf(card) + 1;
      titleSpan.innerText = `Vector Shape ${cardIndex} (${shape.type.toUpperCase()})`;
      updateFgShapePath(shape);
    } else if (e.target.classList.contains('fg-active-chk')) {
      shape.active = e.target.checked;
      const body = card.querySelector('.card-body');
      const elSvg = document.getElementById(`fgShape-${id}-container`);
      if (shape.active) {
        body.classList.remove('collapsed');
        if (elSvg) elSvg.style.display = 'block';
      } else {
        body.classList.add('collapsed');
        if (elSvg) elSvg.style.display = 'none';
      }
      updatePreviewAndCode();
    } else if (e.target.type === 'range' || e.target.type === 'color') {
      updatePreviewAndCode();
    }
  });

  // Handle shape deletion
  container.addEventListener('click', (e) => {
    const deleteBtn = e.target.closest('.delete-shape-btn');
    if (!deleteBtn) return;
    const card = deleteBtn.closest('.shape-settings-card');
    const id = parseInt(card.dataset.id);
    deleteFgShape(id);
  });

  // Add Shape button trigger
  addFgShapeBtn.addEventListener('click', addFgShape);

  // Presets
  presetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      presetBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      loadPreset(btn.dataset.preset);
    });
  });

  // Controls - Layout randomize
  randomizeBtn.addEventListener('click', randomizePositions);
  copyCodeBtn.addEventListener('click', copyCodeToClipboard);
}

function updateNoiseFrequency() {
  const baseFreqVal = parseFloat(baseFrequencyInput.value);
  baseFrequencyVal.innerText = baseFreqVal.toFixed(2);
  feTurbulence.setAttribute('baseFrequency', baseFreqVal);
  
  if (svgFeTurbulence) {
    const canvasWidth = previewCanvas.clientWidth || 600;
    const svgFreqVal = baseFreqVal * (canvasWidth / 1000);
    svgFeTurbulence.setAttribute('baseFrequency', svgFreqVal);
  }
}

function updateBackground() {
  const val1 = bgColor1Input.value;
  const val2 = bgColor2Input.value;
  const angle = bgAngleInput.value || 135;
  document.documentElement.style.setProperty('--canvas-bg', `linear-gradient(${angle}deg, ${val1} 0%, ${val2} 100%)`);
}

function updateGlobalMotion() {
  globalMotion.active = globalMotionActiveInput.checked;
  globalMotion.speed = parseFloat(globalMotionSpeedInput.value);
  globalMotion.size = parseFloat(globalMotionSizeInput.value) / 100;
  
  globalMotionSpeedVal.innerText = globalMotion.speed.toFixed(1) + 'x';
  globalMotionSizeVal.innerText = Math.round(globalMotion.size * 100) + '%';
  
  // Set global variables on Document Root so CSS animations pull them
  document.documentElement.style.setProperty('--global-motion-speed', globalMotion.speed);
  document.documentElement.style.setProperty('--global-motion-size', globalMotion.size);
  
  // Pause/Resume actual keyframe rendering loop
  if (globalMotion.active && globalAnimationActive) {
    previewCanvas.classList.remove('paused');
  } else {
    previewCanvas.classList.add('paused');
  }
  
  // Update rendering state on background blobs
  bgBlobsData.forEach((blob, index) => {
    const div = document.getElementById(`bgBlob-${blob.id}`);
    if (!div) return;
    const animIndex = (index % 3) + 1;
    div.style.animation = globalMotion.active && globalAnimationActive
      ? `float-bg-${animIndex} calc(${24 + (index % 3) * 6}s / var(--global-motion-speed, 1)) ease-in-out infinite alternate`
      : 'none';
  });

  // Update rendering state on shapes
  fgShapesData.forEach((shape, index) => toggleShapeAnimation(shape, index));
  
  updatePreviewAndCode();
}

// Render dynamic background glow settings cards
function renderBgBlobsControls() {
  const container = document.getElementById('bgBlobsControlsContainer');
  container.innerHTML = '';

  bgBlobsData.forEach((blob, index) => {
    const card = document.createElement('div');
    card.className = 'shape-settings-card';
    card.dataset.id = blob.id;
    card.innerHTML = `
      <div class="card-header">
        <span class="card-title">Glow Blob ${index + 1}</span>
        <div class="card-header-actions" style="display: flex; align-items: center; gap: 10px;">
          <label class="switch">
            <input type="checkbox" class="blob-active-chk" ${blob.active ? 'checked' : ''}>
            <span class="switch-slider"></span>
          </label>
          <button class="delete-blob-btn" title="Delete Glow" style="background: none; border: none; color: var(--text-muted); cursor: pointer; display: flex; align-items: center; padding: 2px;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
          </button>
        </div>
      </div>
      <div class="card-body ${blob.active ? '' : 'collapsed'}">
        <div class="color-picker-row">
          <div class="color-picker-wrapper">
            <input type="color" class="blob-color1-input" value="${blob.color1}">
            <span>Color 1</span>
          </div>
          <div class="color-picker-wrapper">
            <input type="color" class="blob-color2-input" value="${blob.color2}">
            <span>Color 2</span>
          </div>
        </div>
        <div class="control-group">
          <div class="control-label-val">
            <label>Size</label>
            <span class="val-display blob-size-val">${blob.size}px</span>
          </div>
          <input type="range" class="slider blob-size-slider" min="100" max="2500" step="10" value="${blob.size}">
        </div>
        <div class="control-group">
          <div class="control-label-val">
            <label>Blur (Softness)</label>
            <span class="val-display blob-blur-val">${blob.blur}px</span>
          </div>
          <input type="range" class="slider blob-blur-slider" min="10" max="400" step="5" value="${blob.blur}">
        </div>
        <div class="control-group">
          <div class="control-label-val">
            <label>Position X</label>
            <span class="val-display blob-x-val">${blob.x}%</span>
          </div>
          <input type="range" class="slider blob-x-slider" min="-50" max="150" value="${blob.x}">
        </div>
        <div class="control-group">
          <div class="control-label-val">
            <label>Position Y</label>
            <span class="val-display blob-y-val">${blob.y}%</span>
          </div>
          <input type="range" class="slider blob-y-slider" min="-50" max="150" value="${blob.y}">
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

// Render background glows into canvas preview
function renderBgBlobsCanvas() {
  const container = document.getElementById('bgBlobsCanvasContainer');
  if (!container) return;
  container.innerHTML = '';

  bgBlobsData.forEach((blob, index) => {
    const div = document.createElement('div');
    div.id = `bgBlob-${blob.id}`;
    div.className = 'bg-blob';
    if (!blob.active) {
      div.style.display = 'none';
    }

    // Set dynamic floating animations
    const animIndex = (index % 3) + 1;
    div.style.animation = globalMotion.active && globalAnimationActive
      ? `float-bg-${animIndex} calc(${24 + (index % 3) * 6}s / var(--global-motion-speed, 1)) ease-in-out infinite alternate`
      : 'none';

    updateBgBlobElement(blob, div);
    container.appendChild(div);
  });
}

function updateBgBlobElement(blob, el) {
  const div = el || document.getElementById(`bgBlob-${blob.id}`);
  if (!div) return;

  div.style.width = `${blob.size}px`;
  div.style.height = `${blob.size}px`;
  div.style.left = `calc(${blob.x}% - (${blob.size}px / 2))`;
  div.style.top = `calc(${blob.y}% - (${blob.size}px / 2))`;
  div.style.filter = `blur(${blob.blur}px)`;
  div.style.background = `radial-gradient(circle, ${blob.color1} 0%, ${blob.color2} 100%)`;
}

// Render dynamic vector cards in sidebar (Removed Enable Motion checkbox)
function renderFgShapesControls() {
  const container = document.getElementById('fgShapesControlsContainer');
  container.innerHTML = '';

  fgShapesData.forEach((shape, index) => {
    const card = document.createElement('div');
    card.className = 'shape-settings-card';
    card.dataset.id = shape.id;
    card.innerHTML = `
      <div class="card-header">
        <span class="card-title">Vector Shape ${index + 1} (${shape.type.toUpperCase()})</span>
        <div class="card-header-actions" style="display: flex; align-items: center; gap: 10px;">
          <label class="switch">
            <input type="checkbox" class="fg-active-chk" ${shape.active ? 'checked' : ''}>
            <span class="switch-slider"></span>
          </label>
          <button class="delete-shape-btn" title="Delete Vector">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
          </button>
        </div>
      </div>
      <div class="card-body ${shape.active ? '' : 'collapsed'}">
        <div class="control-group">
          <label>Shape Type</label>
          <select class="custom-select fg-type-select">
            <option value="triangle" ${shape.type === 'triangle' ? 'selected' : ''}>Triangle</option>
            <option value="rightTriangle" ${shape.type === 'rightTriangle' ? 'selected' : ''}>Right Triangle</option>
            <option value="square" ${shape.type === 'square' ? 'selected' : ''}>Square</option>
            <option value="rectangle" ${shape.type === 'rectangle' ? 'selected' : ''}>Rectangle</option>
            <option value="circle" ${shape.type === 'circle' ? 'selected' : ''}>Circle</option>
            <option value="oval" ${shape.type === 'oval' ? 'selected' : ''}>Oval</option>
            <option value="rhombus" ${shape.type === 'rhombus' ? 'selected' : ''}>Rhombus</option>
            <option value="pentagon" ${shape.type === 'pentagon' ? 'selected' : ''}>Pentagon</option>
            <option value="hexagon" ${shape.type === 'hexagon' ? 'selected' : ''}>Hexagon</option>
            <option value="octagon" ${shape.type === 'octagon' ? 'selected' : ''}>Octagon</option>
            <option value="kite" ${shape.type === 'kite' ? 'selected' : ''}>Kite</option>
            <option value="diamond" ${shape.type === 'diamond' ? 'selected' : ''}>Diamond (Gem)</option>
            <option value="parallelogram" ${shape.type === 'parallelogram' ? 'selected' : ''}>Parallelogram</option>
            <option value="trapezium" ${shape.type === 'trapezium' ? 'selected' : ''}>Trapezium</option>
            <option value="semicircle" ${shape.type === 'semicircle' ? 'selected' : ''}>Semicircle</option>
            <option value="crescent" ${shape.type === 'crescent' ? 'selected' : ''}>Crescent Moon</option>
            <option value="ring" ${shape.type === 'ring' ? 'selected' : ''}>Ring (Donut)</option>
            <option value="plus" ${shape.type === 'plus' ? 'selected' : ''}>Plus (+)</option>
            <option value="star" ${shape.type === 'star' ? 'selected' : ''}>Star</option>
            <option value="heart" ${shape.type === 'heart' ? 'selected' : ''}>Heart</option>
            <option value="arrow" ${shape.type === 'arrow' ? 'selected' : ''}>Arrow</option>
          </select>
        </div>
        <div class="color-picker-row">
          <div class="color-picker-wrapper">
            <input type="color" class="fg-color1-input" value="${shape.color1}">
            <span>Color 1</span>
          </div>
          <div class="color-picker-wrapper">
            <input type="color" class="fg-color2-input" value="${shape.color2}">
            <span>Color 2</span>
          </div>
        </div>
        <div class="control-group">
          <div class="control-label-val">
            <label>Size</label>
            <span class="val-display fg-size-val">${shape.size}px</span>
          </div>
          <input type="range" class="slider fg-size-slider" min="50" max="3000" step="10" value="${shape.size}">
        </div>
        <div class="control-group">
          <div class="control-label-val">
            <label>Blur Radius</label>
            <span class="val-display fg-blur-val">${shape.blur}px</span>
          </div>
          <input type="range" class="slider fg-blur-slider" min="0" max="60" step="1" value="${shape.blur}">
        </div>
        <div class="control-group">
          <div class="control-label-val">
            <label>Rotation</label>
            <span class="val-display fg-rotate-val">${shape.rotate || 0}°</span>
          </div>
          <input type="range" class="slider fg-rotate-slider" min="0" max="360" step="5" value="${shape.rotate || 0}">
        </div>
        <div class="control-group">
          <div class="control-label-val">
            <label>Position X</label>
            <span class="val-display fg-x-val">${shape.x}%</span>
          </div>
          <input type="range" class="slider fg-x-slider" min="0" max="100" value="${shape.x}">
        </div>
        <div class="control-group">
          <div class="control-label-val">
            <label>Position Y</label>
            <span class="val-display fg-y-val">${shape.y}%</span>
          </div>
          <input type="range" class="slider fg-y-slider" min="0" max="100" value="${shape.y}">
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

// Render dynamic vectors and gradients inside the canvas SVG container
function renderFgShapesCanvas() {
  const defs = document.getElementById('fgGradientsDefs');
  const canvasContainer = document.getElementById('fgShapesCanvasContainer');
  
  defs.innerHTML = '';
  canvasContainer.innerHTML = '';

  fgShapesData.forEach((shape, index) => {
    const namespace = "http://www.w3.org/2000/svg";
    
    const grad = document.createElementNS(namespace, 'linearGradient');
    grad.setAttribute('id', `fgShape-${shape.id}-grad`);
    grad.setAttribute('x1', '0%');
    grad.setAttribute('y1', '0%');
    grad.setAttribute('x2', '100%');
    grad.setAttribute('y2', '100%');
    grad.innerHTML = `
      <stop offset="0%" stop-color="${shape.color1}" />
      <stop offset="100%" stop-color="${shape.color2}" />
    `;
    defs.appendChild(grad);

    const containerGroup = document.createElementNS(namespace, 'g');
    containerGroup.setAttribute('id', `fgShape-${shape.id}-container`);
    containerGroup.setAttribute('class', 'fg-shape-container');
    containerGroup.setAttribute('mask', 'url(#grain-mask)');
    if (!shape.active) {
      containerGroup.style.display = 'none';
    }

    const posGroup = document.createElementNS(namespace, 'g');
    posGroup.setAttribute('id', `fgShape-${shape.id}-pos`);
    posGroup.setAttribute('class', 'fg-shape-pos');

    const animGroup = document.createElementNS(namespace, 'g');
    animGroup.setAttribute('id', `fgShape-${shape.id}-anim`);
    animGroup.setAttribute('class', 'fg-shape-anim');

    const path = document.createElementNS(namespace, 'path');
    path.setAttribute('id', `fgShape-${shape.id}-path`);
    path.setAttribute('fill', `url(#fgShape-${shape.id}-grad)`);
    const pathD = PATHS[shape.type] || PATHS.circle;
    path.setAttribute('d', pathD);

    animGroup.appendChild(path);
    posGroup.appendChild(animGroup);
    containerGroup.appendChild(posGroup);
    canvasContainer.appendChild(containerGroup);

    updateFgShapeElement(shape);
    toggleShapeAnimation(shape, index);
  });
}

// Update SVG transform coordinates
function updateFgShapeElement(shape) {
  const elPos = document.getElementById(`fgShape-${shape.id}-pos`);
  const elPath = document.getElementById(`fgShape-${shape.id}-path`);
  if (!elPos) return;
  
  const sizeVal = shape.size;
  const xPct = shape.x;
  const yPct = shape.y;
  
  const xSvg = (xPct / 100) * 1000;
  const ySvg = (yPct / 100) * 1000;
  const scale = sizeVal / 100;
  
  const xOffset = xSvg - (50 * scale);
  const yOffset = ySvg - (50 * scale);
  
  elPos.setAttribute('transform', `translate(${xOffset.toFixed(1)}, ${yOffset.toFixed(1)}) scale(${scale.toFixed(2)})`);
  
  if (elPath) {
    elPath.setAttribute('transform', `rotate(${shape.rotate || 0}, 50, 50)`);
  }
  
  elPos.style.filter = shape.blur > 0 ? `blur(${shape.blur}px)` : 'none';
}

function updateFgShapeGradient(shape) {
  const grad = document.getElementById(`fgShape-${shape.id}-grad`);
  if (!grad) return;
  grad.innerHTML = `
    <stop offset="0%" stop-color="${shape.color1}" />
    <stop offset="100%" stop-color="${shape.color2}" />
  `;
}

// Update SVG paths on shape dropdown selections
function updateFgShapePath(shape) {
  const path = document.getElementById(`fgShape-${shape.id}-path`);
  if (!path) return;
  const pathD = PATHS[shape.type] || PATHS.circle;
  path.setAttribute('d', pathD);
}

function toggleBlobAnimation(blob) {
  const div = document.getElementById(`bgBlob-${blob.id}`);
  if (!div) return;

  const isEnabled = globalMotion.active && globalAnimationActive;
  if (isEnabled) {
    div.classList.add('animating');
  } else {
    div.classList.remove('animating');
  }
}

// Assigns organic base speed offsets dynamically by shape index
function toggleShapeAnimation(shape, index) {
  const animEl = document.getElementById(`fgShape-${shape.id}-anim`);
  if (!animEl) return;
  
  // Motion is always active when global play state is active
  if (globalMotion.active && globalAnimationActive) {
    animEl.classList.add('animating');
  } else {
    animEl.classList.remove('animating');
  }

  // Look up our base organic speed/swing coordinates preset by indexing
  const shapeIdx = index !== undefined ? index : fgShapesData.indexOf(shape);
  const motionPreset = SHAPE_FLOAT_PRESETS[Math.max(0, shapeIdx) % SHAPE_FLOAT_PRESETS.length];

  animEl.style.setProperty('--float-duration', `${motionPreset.duration}s`);
  animEl.style.setProperty('--float-x', `${motionPreset.x}px`);
  animEl.style.setProperty('--float-y', `${motionPreset.y}px`);
  animEl.style.setProperty('--float-deg', `${motionPreset.deg}deg`);
}

function addBgBlob() {
  const randomColors = [
    { c1: '#ff5e62', c2: '#ff9966' },
    { c1: '#1a8eff', c2: '#00e5ff' },
    { c1: '#e0d0b0', c2: '#cbb490' },
    { c1: '#fe654f', c2: '#ffc759' },
    { c1: '#b2ff9e', c2: '#78e08f' }
  ];
  const choice = randomColors[Math.floor(Math.random() * randomColors.length)];
  const newBlob = {
    id: Date.now(),
    active: true,
    color1: choice.c1,
    color2: choice.c2,
    size: 500,
    blur: 120,
    x: Math.floor(Math.random() * 80) + 10,
    y: Math.floor(Math.random() * 80) + 10
  };
  
  generateHash();
  bgBlobsData.push(newBlob);
  renderBgBlobsControls();
  renderBgBlobsCanvas();
  updatePreviewAndCode();
}

function deleteBgBlob(id) {
  generateHash();
  bgBlobsData = bgBlobsData.filter(b => b.id !== id);
  renderBgBlobsControls();
  renderBgBlobsCanvas();
  updatePreviewAndCode();
}

function addFgShape() {
  const types = Object.keys(PATHS);
  const randomType = types[Math.floor(Math.random() * types.length)];
  const randomColors = [
    { c1: '#e0533c', c2: '#f39c12' },
    { c1: '#1b5e94', c2: '#4fa8c1' },
    { c1: '#9b59b6', c2: '#8e44ad' },
    { c1: '#2ecc71', c2: '#27ae60' },
    { c1: '#ff0055', c2: '#ff9900' }
  ];
  const choice = randomColors[Math.floor(Math.random() * randomColors.length)];
  
  const newShape = {
    id: Date.now(),
    active: true,
    type: randomType,
    color1: choice.c1,
    color2: choice.c2,
    size: 150,
    blur: 0,
    rotate: Math.floor(Math.random() * 8) * 45,
    x: Math.floor(Math.random() * 60) + 20,
    y: Math.floor(Math.random() * 60) + 20,
    anim: true
  };
  
  generateHash();
  fgShapesData.push(newShape);
  renderFgShapesControls();
  renderFgShapesCanvas();
  updatePreviewAndCode();
}

function deleteFgShape(id) {
  generateHash();
  fgShapesData = fgShapesData.filter(s => s.id !== id);
  renderFgShapesControls();
  renderFgShapesCanvas();
  updatePreviewAndCode();
}

function randomizePositions() {
  generateHash();
  
  // Randomize Background Blobs positions dynamically
  bgBlobsData.forEach(blob => {
    if (blob.active) {
      blob.x = Math.floor(Math.random() * 80) + 10;
      blob.y = Math.floor(Math.random() * 80) + 10;
      const card = document.querySelector(`.shape-settings-card[data-id="${blob.id}"]`);
      if (card) {
        card.querySelector('.blob-x-slider').value = blob.x;
        card.querySelector('.blob-x-val').innerText = blob.x + '%';
        card.querySelector('.blob-y-slider').value = blob.y;
        card.querySelector('.blob-y-val').innerText = blob.y + '%';
      }
      updateBgBlobElement(blob);
    }
  });

  // Randomize Layer 2 Foreground Shapes positions dynamically
  fgShapesData.forEach(shape => {
    if (shape.active) {
      shape.x = Math.floor(Math.random() * 60) + 20;
      shape.y = Math.floor(Math.random() * 60) + 20;
      
      const card = document.querySelector(`.shape-settings-card[data-id="${shape.id}"]`);
      if (card) {
        card.querySelector('.fg-x-slider').value = shape.x;
        card.querySelector('.fg-x-val').innerText = shape.x + '%';
        card.querySelector('.fg-y-slider').value = shape.y;
        card.querySelector('.fg-y-val').innerText = shape.y + '%';
      }
      updateFgShapeElement(shape);
    }
  });
}

function loadPreset(presetName) {
  generateHash();
  const preset = PRESETS[presetName];
  if (!preset) return;

  // Global settings
  noiseTypeInput.value = preset.noiseType;
  feTurbulence.setAttribute('type', preset.noiseType);
  if (svgFeTurbulence) {
    svgFeTurbulence.setAttribute('type', preset.noiseType);
  }

  baseFrequencyInput.value = preset.baseFrequency;
  updateNoiseFrequency();

  numOctavesInput.value = preset.numOctaves;
  numOctavesVal.innerText = preset.numOctaves;
  feTurbulence.setAttribute('numOctaves', preset.numOctaves);
  if (svgFeTurbulence) {
    svgFeTurbulence.setAttribute('numOctaves', preset.numOctaves);
  }

  noiseOpacityInput.value = preset.noiseOpacity;
  noiseOpacityVal.innerText = Math.round(preset.noiseOpacity * 100) + '%';
  document.documentElement.style.setProperty('--noise-opacity', preset.noiseOpacity);

  blendModeInput.value = preset.blendMode;
  document.documentElement.style.setProperty('--noise-blend-mode', preset.blendMode);

  bgColor1Input.value = preset.bgColor1;
  bgColor2Input.value = preset.bgColor2;
  bgAngleInput.value = preset.bgAngle;
  updateBackground();

  // Reset global motion settings back to defaults
  globalMotionActiveInput.checked = false;
  globalMotionSpeedInput.value = 1.0;
  globalMotionSizeInput.value = 100;
  updateGlobalMotion();

  // Map dynamic background glows from preset
  bgBlobsData = preset.bgBlobs.map((b, index) => ({
    id: index + 1,
    active: b.active,
    color1: b.color1,
    color2: b.color2,
    size: b.size,
    blur: b.blur,
    x: b.x,
    y: b.y
  }));

  renderBgBlobsControls();
  renderBgBlobsCanvas();

  // Load Layer 2: Foreground Shapes
  fgShapesData = preset.fgShapes.map((s, index) => ({
    id: index + 1,
    active: s.active,
    type: s.type,
    color1: s.color1,
    color2: s.color2,
    size: s.size,
    blur: s.blur,
    rotate: s.rotate || 0,
    x: s.x,
    y: s.y,
    anim: s.anim
  }));

  renderFgShapesControls();
  renderFgShapesCanvas();
  updatePreviewAndCode();
}

function bindTabs() {
  codeTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      codeTabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeTab = btn.dataset.tab;
      generateCodeOutput();
    });
  });
}

function updatePreviewAndCode() {
  generateCodeOutput();
}

function generateCodeOutput() {
  let content = '';

  const noiseType = noiseTypeInput.value;
  const baseFreq = baseFrequencyInput.value;
  const octaves = numOctavesInput.value;
  const opacity = noiseOpacityInput.value;
  const blendMode = blendModeInput.value;

  const bg1 = bgColor1Input.value;
  const bg2 = bgColor2Input.value;
  const bgAngle = bgAngleInput.value;

  // Calculate relative SVG base frequency for export template
  const canvasWidth = previewCanvas.clientWidth || 600;
  const svgFreqVal = (parseFloat(baseFreq) * (canvasWidth / 1000)).toFixed(4);

  // Motion active settings
  const motionActive = globalMotion.active;

  if (activeTab === 'combined') {
    // Render HTML LinearGradients definitions for all active shapes
    const gradientsHTML = fgShapesData.filter(s => s.active).map(s => `      <!-- Gradient for Vector ${s.type} -->
      <linearGradient id="shape-grad-${s.id}-${exportHash}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${s.color1}" />
        <stop offset="100%" stop-color="${s.color2}" />
      </linearGradient>`).join('\n');

    // Render HTML groups and paths for all active shapes
    const shapesHTML = fgShapesData.filter(s => s.active).map((s, index) => {
      const scale = s.size / 100;
      
      const xSvg = (s.x / 100) * 1000;
      const ySvg = (s.y / 100) * 1000;
      const xOffset = xSvg - (50 * scale);
      const yOffset = ySvg - (50 * scale);
      const pathD = PATHS[s.type] || PATHS.circle;
      const rotation = s.rotate || 0;
      
      // Inline styles to store dynamic offset parameters inside HTML variables
      const motionPreset = SHAPE_FLOAT_PRESETS[index % SHAPE_FLOAT_PRESETS.length];
      const inlineStyle = motionActive
        ? `style="--float-duration: ${motionPreset.duration}s; --float-x: ${motionPreset.x}px; --float-y: ${motionPreset.y}px; --float-deg: ${motionPreset.deg}deg;"`
        : '';
      
      const animClass = motionActive ? `fg-shape-anim-${exportHash} animating` : `fg-shape-anim-${exportHash}`;
      
      return `    <!-- Vector Shape Container (${s.type}) -->
    <g class="fg-shape-container-${exportHash}" mask="url(#grain-mask-${exportHash})">
      <g transform="translate(${xOffset.toFixed(1)}, ${yOffset.toFixed(1)}) scale(${scale.toFixed(2)})" ${s.blur > 0 ? `style="filter: blur(${s.blur}px);"` : ''}>
        <!-- Inner group handles float animation -->
        <g class="${animClass}" ${inlineStyle}>
          <path d="${pathD}" fill="url(#shape-grad-${s.id}-${exportHash})" ${rotation > 0 ? `transform="rotate(${rotation}, 50, 50)"` : ''} />
        </g>
      </g>
    </g>`;
    }).join('\n');

    // Conditional elements based on whether motion is active
    const motionVarsCSS = motionActive
      ? `\n  /* Global motion scale variables */\n  --global-motion-speed: ${globalMotion.speed};\n  --global-motion-size: ${globalMotion.size};`
      : '';

    const pauseCSS = motionActive
      ? `\n/* Pause animations globally */\n.canvas-container-${exportHash}.paused *,\n#previewCanvas.paused * {\n  animation-play-state: paused !important;\n}\n`
      : '';

    const keyframesCSS = motionActive
      ? `\n/* Floating Animations for Background Blobs scaled by size factor */
@keyframes float-bg-1-${exportHash} {
  0% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(calc(60px * var(--global-motion-size, 1)), calc(-80px * var(--global-motion-size, 1))) scale(1.1); }
  100% { transform: translate(calc(-40px * var(--global-motion-size, 1)), calc(40px * var(--global-motion-size, 1))) scale(0.9); }
}
@keyframes float-bg-2-${exportHash} {
  0% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(calc(-80px * var(--global-motion-size, 1)), calc(50px * var(--global-motion-size, 1))) scale(0.95); }
  100% { transform: translate(calc(40px * var(--global-motion-size, 1)), calc(-40px * var(--global-motion-size, 1))) scale(1.08); }
}
@keyframes float-bg-3-${exportHash} {
  0% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(calc(50px * var(--global-motion-size, 1)), calc(60px * var(--global-motion-size, 1))) scale(1.12); }
  100% { transform: translate(calc(-50px * var(--global-motion-size, 1)), calc(-30px * var(--global-motion-size, 1))) scale(0.88); }
}

/* Dynamic Floating Animations for Foreground Shapes */
.fg-shape-anim-${exportHash}.animating {
  animation: dynamic-float-${exportHash} calc(var(--float-duration, 20s) / var(--global-motion-speed, 1)) ease-in-out infinite alternate;
}

@keyframes dynamic-float-${exportHash} {
  0% {
    transform: translate(0, 0) rotate(0deg);
  }
  50% {
    transform: translate(calc(var(--float-x, 15px) * var(--global-motion-size, 1)), calc(var(--float-y, -15px) * var(--global-motion-size, 1))) rotate(calc(var(--float-deg, 10deg) * var(--global-motion-size, 1)));
  }
  100% {
    transform: translate(calc(var(--float-x, 15px) * -0.7 * var(--global-motion-size, 1)), calc(var(--float-y, -15px) * -0.7 * var(--global-motion-size, 1))) rotate(calc(var(--float-deg, 10deg) * -0.7 * var(--global-motion-size, 1)));
  }
}`
      : '';

    // Render HTML code elements for glows inline
    const blobsHTML = bgBlobsData.filter(b => b.active).map((b, index) => {
      const animIndex = (index % 3) + 1;
      const animProperty = motionActive
        ? `animation: float-bg-${animIndex}-${exportHash} calc(${24 + (index % 3) * 6}s / var(--global-motion-speed, 1)) ease-in-out infinite alternate;`
        : '';
      return `  <!-- Layer 1 Glow Blob ${index + 1} -->
  <div class="bg-blob-${exportHash} bg-blob-${b.id}-${exportHash} ${motionActive ? 'animating' : ''}" 
       style="width: ${b.size}px; height: ${b.size}px; left: calc(${b.x}% - (${b.size}px / 2)); top: calc(${b.y}% - (${b.size}px / 2)); filter: blur(${b.blur}px); background: radial-gradient(circle, ${b.color1} 0%, ${b.color2} 100%); ${animProperty}"></div>`;
    }).join('\n');

    content = `<!-- 1. HTML: Add the SVG Filter & Mask definitions inside your body -->
<svg style="position: absolute; width: 0; height: 0;" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Filter for CSS overlay (pixel space coordinate systems) -->
    <filter id="noise-grain-${exportHash}" x="-20%" y="-20%" width="140%" height="140%">
      <feTurbulence 
        type="${noiseType}" 
        baseFrequency="${baseFreq}" 
        numOctaves="${octaves}" 
        stitchTiles="stitch" />
      <feColorMatrix 
        type="matrix" 
        values="1 0 0 0 0
                1 0 0 0 0
                1 0 0 0 0
                0 0 0 1 0" />
    </filter>

    <!-- Filter for SVG shapes (viewBox coordinate space) -->
    <filter id="svg-noise-grain-${exportHash}" x="-20%" y="-20%" width="140%" height="140%">
      <feTurbulence 
        type="${noiseType}" 
        baseFrequency="${svgFreqVal}" 
        numOctaves="${octaves}" 
        stitchTiles="stitch" />
      <feColorMatrix 
        type="matrix" 
        values="1 0 0 0 0
                1 0 0 0 0
                1 0 0 0 0
                0 0 0 1 0" />
    </filter>

    <!-- Transparency grain mask referencing the scaled filter -->
    <mask id="grain-mask-${exportHash}" maskUnits="userSpaceOnUse" x="-5000" y="-5000" width="10000" height="10000">
      <rect x="-5000" y="-5000" width="10000" height="10000" fill="white" filter="url(#svg-noise-grain-${exportHash})" />
    </mask>
  </defs>
</svg>

<!-- 2. HTML: Stacking layout of background glows and crisp vector shapes -->
<div class="canvas-container-${exportHash} ${motionActive && globalMotion.active ? '' : 'paused'}">
  <!-- Layer 0: Backdrop Gradient -->
  <div class="backdrop-gradient-${exportHash}"></div>

${blobsHTML}

  <!-- Layer 2: Unified SVG viewport for foreground vectors (using overflow: visible to bleed margins) -->
  <svg class="fg-shapes-canvas-${exportHash}" viewBox="0 0 1000 1000" style="overflow: visible;">
    <defs>
      <!-- Filter for CSS overlay (pixel space coordinate systems) -->
      <filter id="noise-grain-${exportHash}" x="-20%" y="-20%" width="140%" height="140%">
        <feTurbulence 
          type="${noiseType}" 
          baseFrequency="${baseFreq}" 
          numOctaves="${octaves}" 
          stitchTiles="stitch" />
        <feColorMatrix 
          type="matrix" 
          values="1 0 0 0 0
                  1 0 0 0 0
                  1 0 0 0 0
                  0 0 0 1 0" />
      </filter>

      <!-- Filter for SVG shapes (viewBox coordinate space) -->
      <filter id="svg-noise-grain-${exportHash}" x="-20%" y="-20%" width="140%" height="140%">
        <feTurbulence 
          type="${noiseType}" 
          baseFrequency="${svgFreqVal}" 
          numOctaves="${octaves}" 
          stitchTiles="stitch" />
        <feColorMatrix 
          type="matrix" 
          values="1 0 0 0 0
                  1 0 0 0 0
                  1 0 0 0 0
                  0 0 0 1 0" />
      </filter>

      <!-- Transparency grain mask referencing the scaled filter -->
      <mask id="grain-mask-${exportHash}" maskUnits="userSpaceOnUse" x="-5000" y="-5000" width="10000" height="10000">
        <rect x="-5000" y="-5000" width="10000" height="10000" fill="white" filter="url(#svg-noise-grain-${exportHash})" />
      </mask>

${gradientsHTML}
    </defs>
    
${shapesHTML}
  </svg>

  <!-- Layer 3: Global noise overlay div -->
  <div class="global-noise-${exportHash}"></div>
</div>

<!-- 3. CSS Layout & Layering -->
<style>
.canvas-container-${exportHash} {
  position: relative;
  width: 100%;
  height: 500px;
  border-radius: 12px;
  overflow: hidden;
  z-index: 1;${motionVarsCSS}
}
${pauseCSS}
.backdrop-gradient-${exportHash} {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: linear-gradient(${bgAngle}deg, ${bg1} 0%, ${bg2} 100%);
  z-index: 1;
}

/* Layer 1: Glowing Blobs structural base styling */
.bg-blob-${exportHash} {
  position: absolute;
  border-radius: 50%;
  z-index: 2;
  will-change: transform;
}

.fg-shapes-canvas-${exportHash} {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  z-index: 3;
  pointer-events: none;
  overflow: visible; /* Bleed shapes outside margins */
}

.global-noise-${exportHash} {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: white;
  filter: url(#noise-grain-${exportHash});
  mix-blend-mode: ${blendMode};
  opacity: ${opacity};
  pointer-events: none;
  z-index: 4;
}
${keyframesCSS}
</style>`;
  } 
  
  else if (activeTab === 'css-only') {
    const svgString = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
  <filter id="n">
    <feTurbulence type="${noiseType}" baseFrequency="${baseFreq}" numOctaves="${octaves}" stitchTiles="stitch" />
    <feColorMatrix type="matrix" values="1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 0 0 0 1 0" />
  </filter>
  <rect width="100%" height="100%" fill="white" filter="url(%23n)" />
</svg>`;
    const cleanSvg = svgString.replace(/\s+/g, ' ');
    const dataUri = `url("data:image/svg+xml,${encodeURIComponent(cleanSvg)}")`;

    content = `/* Fully self-contained CSS Background (No SVG block required in HTML) */
.self-contained-grain-${exportHash} {
  position: relative;
  width: 100%;
  height: 500px;
  border-radius: 12px;
  overflow: hidden;
  background: linear-gradient(${bgAngle}deg, ${bg1} 0%, ${bg2} 100%);
}

.self-contained-grain-${exportHash}::after {
  content: "";
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background-image: ${dataUri};
  mix-blend-mode: ${blendMode};
  pointer-events: none;
  opacity: ${opacity};
  z-index: 10;
}

/* Background ambient glow circle */
.glow-orb-${exportHash} {
  position: absolute;
  width: 350px;
  height: 350px;
  background: radial-gradient(circle, ${bgBlobsData[0] ? bgBlobsData[0].color1 : '#ff5e62'} 0%, ${bgBlobsData[0] ? bgBlobsData[0].color2 : '#ff9966'} 100%);
  filter: blur(80px);
  z-index: 2;
}`;
  } 
  
  else if (activeTab === 'html-only') {
    content = `<svg width="0" height="0" style="position: absolute;" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- High-Contrast Monochrome Noise Filter (CSS Overlay) -->
    <filter id="noise-grain-${exportHash}" x="-20%" y="-20%" width="140%" height="140%">
      <feTurbulence 
        type="${noiseType}" 
        baseFrequency="${baseFreq}" 
        numOctaves="${octaves}" 
        stitchTiles="stitch" />
      <feColorMatrix 
        type="matrix" 
        values="1 0 0 0 0
                1 0 0 0 0
                1 0 0 0 0
                0 0 0 1 0" />
    </filter>

    <!-- High-Contrast Monochrome Noise Filter (SVG Shapes viewBox) -->
    <filter id="svg-noise-grain-${exportHash}" x="-20%" y="-20%" width="140%" height="140%">
      <feTurbulence 
        type="${noiseType}" 
        baseFrequency="${svgFreqVal}" 
        numOctaves="${octaves}" 
        stitchTiles="stitch" />
      <feColorMatrix 
        type="matrix" 
        values="1 0 0 0 0
                1 0 0 0 0
                1 0 0 0 0
                0 0 0 1 0" />
    </filter>

    <!-- Transparency Grain Mask for Shapes -->
    <mask id="grain-mask-${exportHash}" maskUnits="userSpaceOnUse" x="-5000" y="-5000" width="10000" height="10000">
      <rect x="-5000" y="-5000" width="10000" height="10000" fill="white" filter="url(#svg-noise-grain-${exportHash})" />
    </mask>
  </defs>
</svg>`;
  }

  codeOutput.textContent = content;
}

function copyCodeToClipboard() {
  const code = codeOutput.textContent;
  navigator.clipboard.writeText(code).then(() => {
    copyCodeBtn.classList.add('copied');
    copyCodeBtn.querySelector('.copy-text').innerText = 'Copied!';
    setTimeout(() => {
      copyCodeBtn.classList.remove('copied');
      copyCodeBtn.querySelector('.copy-text').innerText = 'Copy Code';
    }, 2000);
  }).catch(err => {
    console.error('Could not copy text: ', err);
  });
}

function generateHash() {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < 5; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  exportHash = result;
}

// Start
window.addEventListener('DOMContentLoaded', init);
