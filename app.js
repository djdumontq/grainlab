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
  arrow: "M 5,35 H 60 V 15 L 95,50 L 60,85 V 65 H 5 Z",
  bike: "M 25 28.125 a 3.125 3.125 0 0 1 3.125 -3.125 H 37.5 a 3.125 3.125 0 0 1 0 6.25 v 3.125 h 25.875 l 2.413 -7.237 A 3.125 3.125 0 0 1 68.75 25 h 6.25 a 3.125 3.125 0 0 1 0 6.25 h -4 l -1.944 5.844 5.044 8.062 a 18.75 18.75 0 1 1 -5.3 3.312 l -3.175 -5.075 -12.975 20.762 A 3.125 3.125 0 0 1 50 65.625 H 37.244 a 18.75 18.75 0 1 1 -11.344 -20.462 L 31.25 36.6 V 31.25 h -3.125 a 3.125 3.125 0 0 1 -3.125 -3.125 m 9.375 15.269 -3.175 5.087 c 3.125 2.775 5.312 6.588 6.044 10.894 h 7.119 z M 50 56.606 59.988 40.625 H 40.013 z M 30.856 59.375 a 12.5 12.5 0 0 0 -3.044 -5.481 l -3.425 5.481 z M 22.519 50.575 A 12.5 12.5 0 1 0 30.856 65.625 H 18.75 a 3.125 3.125 0 0 1 -2.65 -4.781 z m 49.669 3.312 a 12.5 12.5 0 1 0 5.3 -3.312 l 6.413 10.269 a 3.125 3.125 0 1 1 -5.3 3.312 z",
  wrench: "M 0.637 13.894 A 18.775 18.775 0 0 0 23.625 36.856 l 39.631 39.075 A 18.769 18.769 0 0 0 81.25 100 a 18.75 18.75 0 1 0 -5.319 -36.737 L 36.856 23.631 A 18.775 18.775 0 0 0 13.894 0.625 l 13.381 13.387 L 25 25 l -10.981 2.275 z m 83.562 56.369 3.3 0.163 1.794 2.781 2.781 1.794 0.163 3.306 L 93.75 81.25 l -1.512 2.944 -0.163 3.306 -2.781 1.794 -1.794 2.781 -3.306 0.163 L 81.25 93.75 l -2.944 -1.512 -3.306 -0.163 -1.794 -2.781 -2.781 -1.794 -0.163 -3.306 L 68.75 81.25 l 1.512 -2.944 0.163 -3.306 2.781 -1.794 1.794 -2.781 3.306 -0.163 L 81.25 68.75 z",
  gear: "M 58.781 6.562 c -2.581 -8.75 -14.981 -8.75 -17.562 0 l -0.625 2.125 a 9.15 9.15 0 0 1 -13.156 5.45 l -1.938 -1.062 c -8.019 -4.362 -16.788 4.406 -12.419 12.419 l 1.056 1.944 c 2.788 5.125 0.144 11.506 -5.45 13.156 l -2.125 0.625 c -8.75 2.581 -8.75 14.981 0 17.562 l -2.125 -0.625 a 9.15 9.15 0 0 1 -5.45 -13.156 l 1.062 -1.938 c 4.362 -8.019 -4.406 -16.788 -12.419 -12.419 l -1.944 1.056 a 9.15 9.15 0 0 1 -13.156 -5.45 z M 50 68.312 a 18.306 18.306 0 1 1 0 -36.625 18.306 18.306 0 0 1 0 36.612 z",
  wheel: "M 50,5 A 45,45 0 1,0 50,95 A 45,45 0 1,0 50,5 Z M 50,12 A 38,38 0 1,1 50,88 A 38,38 0 1,1 50,12 Z M 50,42 A 8,8 0 1,0 50,58 A 8,8 0 1,0 50,42 Z M 49,12 H 51 V 88 H 49 Z M 12,49 V 51 H 88 V 49 Z M 24,22 L 76,74 L 78,72 L 26,20 Z M 22,74 L 74,22 L 76,24 L 24,76 Z",
  tools: "M 6.25 0 0 6.25 l 13.75 19.256 a 6.25 6.25 0 0 0 5.094 2.619 h 0.438 a 6.25 6.25 0 0 1 4.425 1.831 l 16.719 16.719 -16.356 16.587 A 18.769 18.769 0 0 0 0 81.25 a 18.75 18.75 0 1 0 36.737 -5.319 l 16.587 -16.356 6.05 6.05 -1.906 5.713 a 6.25 6.25 0 0 0 1.512 6.394 l 20.438 20.438 a 6.231 6.231 0 0 0 8.838 0 l 9.912 -9.912 a 6.231 6.231 0 0 0 0 -8.838 l -20.438 -20.438 a 6.25 6.25 0 0 0 -6.394 -1.512 L 65.625 59.375 l -6 -6 16.75 -16.519 A 18.781 18.781 0 0 0 100 18.75 q 0 -2.531 -0.637 -4.856 l -13.375 13.381 L 75 25 l -2.275 -10.981 L 86.106 0.637 a 18.75 18.75 0 0 0 -22.969 23 L 46.637 40.375 29.956 23.706 a 6.25 6.25 0 0 1 -1.831 -4.419 v -0.444 a 6.25 6.25 0 0 0 -2.619 -5.087 z m 60.288 66.538 a 3.125 3.125 0 0 1 4.425 0 l 18.213 18.219 a 3.125 3.125 0 0 1 -4.419 4.419 l -18.219 -18.213 a 3.125 3.125 0 0 1 0 -4.425 M 18.75 68.75 l 2.944 1.512 3.306 0.163 1.794 2.781 2.781 1.794 0.163 3.306 L 31.25 81.25 l -1.512 2.944 -0.163 3.306 -2.781 1.794 -1.794 2.781 -3.306 0.163 L 18.75 93.75 l -2.944 -1.512 L 12.5 92.075 l -1.794 -2.781 L 7.925 87.5 l -0.163 -3.306 L 6.25 81.25 l 1.512 -2.944 0.163 -3.306 2.781 -1.794 1.794 -2.781 3.306 -0.163 z",
  screwdriver: "M 0 6.219 6.219 0 l 19.15 13.688 a 6.25 6.25 0 0 1 2.606 5.056 v 0.438 c 0 1.65 0.656 3.231 1.819 4.4 l 35.481 35.475 5.681 -1.894 a 6.25 6.25 0 0 1 6.362 1.5 l 20.863 20.869 a 6.219 6.219 0 0 1 0 8.787 L 88.312 98.188 a 6.219 6.219 0 0 1 -8.787 0 l -20.856 -20.875 a 6.25 6.25 0 0 1 -1.5 -6.362 l 1.887 -5.681 -35.475 -35.481 a 6.25 6.25 0 0 0 -4.4 -1.819 H 18.75 a 6.25 6.25 0 0 1 -5.062 -2.606 z m 70.581 59.969 a 3.106 3.106 0 1 0 -4.394 4.394 l 18.65 18.65 a 3.106 3.106 0 0 0 4.394 -4.394 z",
  nut: "M 28.625 6.25 a 6.25 6.25 0 0 0 -5.425 3.15 l -21.425 37.5 a 6.25 6.25 0 0 0 0 6.2 l 21.425 37.5 A 6.25 6.25 0 0 0 28.625 93.75 h 42.75 a 6.25 6.25 0 0 0 5.425 -3.15 l 21.431 37.5 a 6.25 6.25 0 0 0 0 -6.2 l -21.431 37.5 A 6.25 6.25 0 0 0 71.375 6.25 z m 31.362 60.6 a 18.75 18.75 0 1 1 18.75 -32.475 18.75 18.75 0 0 1 18.75 32.475"
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
const noiseEngineInput = document.getElementById('noiseEngine');
const noiseTypeInput = document.getElementById('noiseType');
const baseFrequencyInput = document.getElementById('baseFrequency');
const baseFrequencyVal = document.getElementById('baseFrequencyVal');
const numOctavesInput = document.getElementById('numOctaves');
const numOctavesVal = document.getElementById('numOctavesVal');
const noiseOpacityInput = document.getElementById('noiseOpacity');
const noiseOpacityVal = document.getElementById('noiseOpacityVal');
const blendModeInput = document.getElementById('blendMode');
const exportPngBtn = document.getElementById('exportPngBtn');
const exportSvgBtn = document.getElementById('exportSvgBtn');

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

// Current active color theme name
let activeTheme = 'phineo';
let editingThemeId = null;
let newThemePalette = [];

// Auto-namespacing hash to prevent styling/id conflicts between blocks on a single page
let exportHash = 'a1b2';

// Color Themes Deducted from original presets (backdrop gradient + flat color palette list)
let THEMES = {
  phineo: {
    name: "Phineo Teaser",
    backdrop: ["#faf8f6", "#ebdcd0"],
    palette: ["#ff5e62", "#ff9966", "#1a8eff", "#00e5ff", "#e0d0b0", "#cbb490", "#e0533c", "#f39c12", "#1b5e94", "#4fa8c1", "#c0392b", "#e74c3c", "#faf8f6", "#ebdcd0"]
  },
  westwind: {
    name: "Westwind Hamburg",
    backdrop: ["#1e3c72", "#0f2027"],
    palette: ["#ffc759", "#ff9f43", "#b2ff9e", "#78e08f", "#fe654f", "#dd3e2c", "#2a5ba3", "#1e3c72", "#0f2027"]
  },
  cosmic: {
    name: "Cosmic Glow",
    backdrop: ["#0b001a", "#20093b"],
    palette: ["#ff007f", "#7f00ff", "#00f0ff", "#003b80", "#ffaa00", "#ff0055", "#ffffff", "#ff5500", "#0b001a", "#20093b"]
  },
  cyberpunk: {
    name: "Cyberpunk Neon",
    backdrop: ["#05050a", "#150525"],
    palette: ["#ff0055", "#3a0055", "#00ffcc", "#051535", "#ffff00", "#ff5500", "#ffffff", "#05050a", "#150525"]
  },
  minimal: {
    name: "Subtle Editorial",
    backdrop: ["#fdfbf7", "#f3efe6"],
    palette: ["#ffdbd4", "#ffe3d1", "#d8ebff", "#e8f4ff", "#fff0d0", "#fffdf0", "#1b5e94", "#fdfbf7", "#f3efe6"]
  },
  "dark-mono": {
    name: "Monochrome Dark",
    backdrop: ["#121316", "#1c1e24"],
    palette: ["#2e323b", "#191b20", "#474e5d", "#22252c", "#16171a", "#0d0e10", "#ffffff", "#121316", "#1c1e24"]
  }
};

// General UI elements
const randomizeBtn = document.getElementById('randomizeBtn');
const codeOutput = document.getElementById('codeOutput');
const copyCodeBtn = document.getElementById('copyCodeBtn');
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
  
  // Render themes list in sidebar
  renderThemesGrid();
  
  // Generate random layout on launch and apply default Phineo theme colors
  activeTheme = 'phineo';
  generateRandomLayout();
  loadTheme('phineo');
  
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
  noiseEngineInput.addEventListener('change', () => {
    updateNoiseEngine();
    updatePreviewAndCode();
  });

  noiseTypeInput.addEventListener('change', () => {
    updateNoiseEngine();
    updatePreviewAndCode();
  });
  
  baseFrequencyInput.addEventListener('input', () => {
    updateNoiseEngine();
  });
  baseFrequencyInput.addEventListener('change', updatePreviewAndCode);

  numOctavesInput.addEventListener('input', () => {
    updateNoiseEngine();
  });
  numOctavesInput.addEventListener('change', updatePreviewAndCode);

  noiseOpacityInput.addEventListener('input', () => {
    noiseOpacityVal.innerText = Math.round(noiseOpacityInput.value * 100) + '%';
    document.documentElement.style.setProperty('--noise-opacity', noiseOpacityInput.value);
    updateNoiseEngine();
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

  // Create Custom Theme form display toggler
  const showAddThemeBtn = document.getElementById('showAddThemeBtn');
  const addThemeForm = document.getElementById('addThemeForm');
  const saveThemeBtn = document.getElementById('saveThemeBtn');
  const newThemeNameInput = document.getElementById('newThemeName');
  const newThemeBg1 = document.getElementById('newThemeBg1');
  const newThemeBg2 = document.getElementById('newThemeBg2');
  const newThemePalettePreview = document.getElementById('newThemePalettePreview');
  const newPaletteColorPicker = document.getElementById('newPaletteColorPicker');

  showAddThemeBtn.addEventListener('click', () => {
    const isHidden = addThemeForm.style.display === 'none' || addThemeForm.style.display === '';
    if (isHidden) {
      editingThemeId = null;
      document.getElementById('themeFormTitle').innerText = 'Create Custom Theme';
      saveThemeBtn.innerText = 'Save Theme';
      newThemeNameInput.value = '';
      newThemePalette = [];
      newThemePalettePreview.innerHTML = '';
      addThemeForm.style.display = 'flex';
    } else {
      addThemeForm.style.display = 'none';
    }
  });

  // Palette color collector list
  const addPaletteColorBtn = document.getElementById('addPaletteColorBtn');

  addPaletteColorBtn.addEventListener('click', () => {
    const color = newPaletteColorPicker.value;
    if (newThemePalette.includes(color)) return;
    newThemePalette.push(color);
    
    // Render color tag bubble inside list preview
    const tag = document.createElement('div');
    tag.className = 'new-theme-color-tag';
    tag.style.backgroundColor = color;
    tag.title = `Click to remove ${color}`;
    tag.addEventListener('click', () => {
      newThemePalette = newThemePalette.filter(c => c !== color);
      tag.remove();
    });
    newThemePalettePreview.appendChild(tag);
  });

  // Save/Update theme
  saveThemeBtn.addEventListener('click', () => {
    const name = newThemeNameInput.value.trim();
    if (!name) {
      alert("Please enter a name for the theme.");
      return;
    }
    if (newThemePalette.length < 2) {
      alert("Please add at least 2 colors to the palette.");
      return;
    }

    let themeId;
    if (editingThemeId) {
      themeId = editingThemeId;
      THEMES[themeId].name = name;
      THEMES[themeId].backdrop = [newThemeBg1.value, newThemeBg2.value];
      THEMES[themeId].palette = [...newThemePalette];
    } else {
      themeId = 'custom-' + name.toLowerCase().replace(/[^a-z0-9]/g, '-');
      THEMES[themeId] = {
        name: name,
        backdrop: [newThemeBg1.value, newThemeBg2.value],
        palette: [...newThemePalette]
      };
    }

    // Re-render grid and apply the new theme
    renderThemesGrid();
    loadTheme(themeId);

    // Reset inputs and hide form
    newThemeNameInput.value = '';
    newThemePalette = [];
    newThemePalettePreview.innerHTML = '';
    document.getElementById('themeFormTitle').innerText = 'Create Custom Theme';
    saveThemeBtn.innerText = 'Save Theme';
    editingThemeId = null;
    addThemeForm.style.display = 'none';
  });

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
    } else if (e.target.type === 'range') {
      updatePreviewAndCode();
    }
  });

  bgContainer.addEventListener('click', (e) => {
    // Handle Custom Swatch Click
    const swatch = e.target.closest('.swatch-btn');
    if (swatch) {
      const picker = swatch.parentElement;
      const card = swatch.closest('.shape-settings-card');
      if (!card) return;
      const id = parseInt(card.dataset.id);
      const blob = bgBlobsData.find(b => b.id === id);
      if (!blob) return;

      const color = swatch.dataset.color;
      picker.querySelectorAll('.swatch-btn').forEach(b => b.classList.remove('active'));
      swatch.classList.add('active');

      if (picker.classList.contains('blob-color1-picker')) {
        blob.color1 = color;
      } else if (picker.classList.contains('blob-color2-picker')) {
        blob.color2 = color;
      }
      updateBgBlobElement(blob);
      updatePreviewAndCode();
      return;
    }

    // Handle Delete button click
    const deleteBtn = e.target.closest('.delete-blob-btn');
    if (deleteBtn) {
      const card = deleteBtn.closest('.shape-settings-card');
      const id = parseInt(card.dataset.id);
      deleteBgBlob(id);
    }
  });

  addBgBlobBtn.addEventListener('click', addBgBlob);

  // Event Delegation for Dynamic Vector Shapes Controls
  const container = document.getElementById('fgShapesControlsContainer');
  
  // Handle sliding inputs
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
    } else if (e.target.type === 'range') {
      updatePreviewAndCode();
    }
  });

  // Handle click events (swatches & deletes)
  container.addEventListener('click', (e) => {
    // Custom Swatch Select
    const swatch = e.target.closest('.swatch-btn');
    if (swatch) {
      const picker = swatch.parentElement;
      const card = swatch.closest('.shape-settings-card');
      if (!card) return;
      const id = parseInt(card.dataset.id);
      const shape = fgShapesData.find(s => s.id === id);
      if (!shape) return;

      const color = swatch.dataset.color;
      picker.querySelectorAll('.swatch-btn').forEach(b => b.classList.remove('active'));
      swatch.classList.add('active');

      if (picker.classList.contains('fg-color1-picker')) {
        shape.color1 = color;
      } else if (picker.classList.contains('fg-color2-picker')) {
        shape.color2 = color;
      }
      updateFgShapeGradient(shape);
      updatePreviewAndCode();
      return;
    }

    // Delete Vector Shape
    const deleteBtn = e.target.closest('.delete-shape-btn');
    if (deleteBtn) {
      const card = deleteBtn.closest('.shape-settings-card');
      const id = parseInt(card.dataset.id);
      deleteFgShape(id);
    }
  });

  // Add Shape button trigger
  addFgShapeBtn.addEventListener('click', addFgShape);

  // Layout randomize
  randomizeBtn.addEventListener('click', generateRandomLayout);
  copyCodeBtn.addEventListener('click', copyCodeToClipboard);
  
  // Export image handlers
  exportPngBtn.addEventListener('click', exportPng);
  exportSvgBtn.addEventListener('click', exportSvg);
}

let cachedNoiseDataURI = null;
let lastNoiseParams = '';

function getNoiseDataURI() {
  const opacity = parseFloat(noiseOpacityInput.value);
  const baseFreq = parseFloat(baseFrequencyInput.value);
  const type = noiseTypeInput.value;
  const octaves = numOctavesInput.value;
  const paramKey = `${opacity}-${baseFreq}-${type}-${octaves}`;
  
  if (cachedNoiseDataURI && lastNoiseParams === paramKey) {
    return cachedNoiseDataURI;
  }
  
  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext('2d');
  const imgData = ctx.createImageData(canvas.width, canvas.height);
  const data = imgData.data;
  
  for (let i = 0; i < data.length; i += 4) {
    const val = Math.floor(Math.random() * 255);
    data[i] = val;
    data[i+1] = val;
    data[i+2] = val;
    data[i+3] = 255;
  }
  
  ctx.putImageData(imgData, 0, 0);
  cachedNoiseDataURI = canvas.toDataURL('image/png');
  lastNoiseParams = paramKey;
  return cachedNoiseDataURI;
}

function updateNoiseEngine() {
  const engine = noiseEngineInput.value;
  const baseFreqVal = parseFloat(baseFrequencyInput.value);
  baseFrequencyVal.innerText = baseFreqVal.toFixed(2);
  
  numOctavesVal.innerText = numOctavesInput.value;
  noiseOpacityVal.innerText = Math.round(noiseOpacityInput.value * 100) + '%';

  if (engine === 'static-png') {
    const dataUri = getNoiseDataURI();
    const scale = 0.75 / baseFreqVal;
    const bgSize = 128 * scale;
    
    document.documentElement.style.setProperty('--noise-bg-image', `url(${dataUri})`);
    document.documentElement.style.setProperty('--noise-bg-size', `${bgSize}px ${bgSize}px`);
    document.documentElement.style.setProperty('--noise-bg-color', 'transparent');
    document.documentElement.style.setProperty('--noise-filter', 'none');
    
    const pattern = document.getElementById('svg-noise-pattern');
    const patternImg = document.getElementById('svg-noise-pattern-img');
    const maskRect = document.getElementById('grain-mask-rect');
    
    if (pattern && patternImg && maskRect) {
      patternImg.setAttribute('href', dataUri);
      pattern.setAttribute('width', bgSize);
      pattern.setAttribute('height', bgSize);
      maskRect.setAttribute('fill', 'url(#svg-noise-pattern)');
      maskRect.setAttribute('filter', 'none');
    }
  } else {
    document.documentElement.style.setProperty('--noise-bg-image', 'none');
    document.documentElement.style.setProperty('--noise-bg-color', 'white');
    document.documentElement.style.setProperty('--noise-filter', 'url(#noise-filter)');
    
    feTurbulence.setAttribute('type', noiseTypeInput.value);
    feTurbulence.setAttribute('baseFrequency', baseFreqVal);
    feTurbulence.setAttribute('numOctaves', numOctavesInput.value);
    
    if (svgFeTurbulence) {
      const canvasWidth = previewCanvas.clientWidth || 600;
      const svgFreqVal = baseFreqVal * (canvasWidth / 1000);
      svgFeTurbulence.setAttribute('type', noiseTypeInput.value);
      svgFeTurbulence.setAttribute('baseFrequency', svgFreqVal);
      svgFeTurbulence.setAttribute('numOctaves', numOctavesInput.value);
    }
    
    const maskRect = document.getElementById('grain-mask-rect');
    if (maskRect) {
      maskRect.setAttribute('fill', 'white');
      maskRect.setAttribute('filter', 'url(#svg-noise-filter)');
    }
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
    const wrapper = document.getElementById(`bgBlob-${blob.id}`);
    if (!wrapper) return;
    const child = wrapper.querySelector('.bg-blob-element');
    if (!child) return;
    const animIndex = (index % 3) + 1;
    child.style.animation = globalMotion.active && globalAnimationActive
      ? `float-bg-${animIndex} calc(${24 + (index % 3) * 6}s / var(--global-motion-speed, 1)) ease-in-out infinite alternate`
      : 'none';
  });

  // Update rendering state on shapes
  fgShapesData.forEach((shape, index) => toggleShapeAnimation(shape, index));
  
  updatePreviewAndCode();
}

function renderThemesGrid() {
  const grid = document.getElementById('themesGrid');
  if (!grid) return;
  grid.innerHTML = '';

  Object.keys(THEMES).forEach(themeKey => {
    const theme = THEMES[themeKey];
    const btn = document.createElement('button');
    btn.className = `preset-btn ${themeKey === activeTheme ? 'active' : ''}`;
    btn.dataset.theme = themeKey;

    // Theme text label
    const nameLabel = document.createElement('span');
    nameLabel.innerText = theme.name;
    btn.appendChild(nameLabel);

    // Edit theme button (pencil icon)
    const editBtn = document.createElement('button');
    editBtn.className = 'edit-theme-btn';
    editBtn.title = `Edit ${theme.name}`;
    editBtn.innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`;
    editBtn.addEventListener('click', (e) => {
      e.stopPropagation(); // Prevent loading theme on click
      startEditingTheme(themeKey);
    });
    btn.appendChild(editBtn);

    btn.addEventListener('click', () => {
      document.querySelectorAll('#themesGrid .preset-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      loadTheme(themeKey);
    });
    grid.appendChild(btn);
  });
}

function startEditingTheme(themeKey) {
  const theme = THEMES[themeKey];
  if (!theme) return;

  editingThemeId = themeKey;

  // Show / expand the form panel
  const addThemeForm = document.getElementById('addThemeForm');
  addThemeForm.style.display = 'flex';

  // Update header and button text
  document.getElementById('themeFormTitle').innerText = `Edit Theme: ${theme.name}`;
  document.getElementById('saveThemeBtn').innerText = 'Update Theme';

  // Pre-fill name and backdrop inputs
  document.getElementById('newThemeName').value = theme.name;
  document.getElementById('newThemeBg1').value = theme.backdrop[0];
  document.getElementById('newThemeBg2').value = theme.backdrop[1];

  // Pre-populate palette previews and state variable
  newThemePalette = [...theme.palette];
  const newThemePalettePreview = document.getElementById('newThemePalettePreview');
  newThemePalettePreview.innerHTML = '';

  newThemePalette.forEach(color => {
    const tag = document.createElement('div');
    tag.className = 'new-theme-color-tag';
    tag.style.backgroundColor = color;
    tag.title = `Click to remove ${color}`;
    tag.addEventListener('click', () => {
      newThemePalette = newThemePalette.filter(c => c !== color);
      tag.remove();
    });
    newThemePalettePreview.appendChild(tag);
  });
}

function renderSwatchPicker(activeColor, className) {
  const colors = THEMES[activeTheme] ? THEMES[activeTheme].palette : ["#ff0055", "#ffffff"];
  return `
    <div class="swatch-picker ${className}">
      ${colors.map(color => `
        <button class="swatch-btn ${color.toLowerCase() === activeColor.toLowerCase() ? 'active' : ''}" 
                style="background-color: ${color};" 
                data-color="${color}" 
                title="${color}"></button>
      `).join('')}
    </div>
  `;
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
        <div class="control-group">
          <label>Color 1</label>
          ${renderSwatchPicker(blob.color1, 'blob-color1-picker')}
        </div>
        <div class="control-group">
          <label>Color 2</label>
          ${renderSwatchPicker(blob.color2, 'blob-color2-picker')}
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
    // Create outer layout wrapper (GPU composited)
    const wrapper = document.createElement('div');
    wrapper.id = `bgBlob-${blob.id}`;
    wrapper.className = 'bg-blob-wrapper';
    if (!blob.active) {
      wrapper.style.display = 'none';
    }

    // Create inner animating/blur element
    const child = document.createElement('div');
    child.className = 'bg-blob-element';

    // Set dynamic floating animations on the inner child (preserving CPU layer bounds)
    const animIndex = (index % 3) + 1;
    child.style.animation = globalMotion.active && globalAnimationActive
      ? `float-bg-${animIndex} calc(${24 + (index % 3) * 6}s / var(--global-motion-speed, 1)) ease-in-out infinite alternate`
      : 'none';

    wrapper.appendChild(child);
    updateBgBlobElement(blob, wrapper);
    container.appendChild(wrapper);
  });
}

function updateBgBlobElement(blob, el) {
  const wrapper = el || document.getElementById(`bgBlob-${blob.id}`);
  if (!wrapper) return;

  const child = wrapper.querySelector('.bg-blob-element');
  if (!child) return;

  // Downsampling factors (divide base size and blur by 10)
  const factor = 10;
  const baseSize = blob.size / factor;
  const baseBlur = blob.blur / factor;

  // Position and Scale the wrapper (GPU isolated compositor layer)
  wrapper.style.width = `${baseSize}px`;
  wrapper.style.height = `${baseSize}px`;
  wrapper.style.left = `calc(${blob.x}% - (${baseSize}px / 2))`;
  wrapper.style.top = `calc(${blob.y}% - (${baseSize}px / 2))`;
  wrapper.style.transform = `scale(${factor})`;

  // Apply the downscaled blur and radial color gradients to the inner child
  child.style.filter = `blur(${baseBlur}px)`;
  child.style.background = `radial-gradient(circle, ${blob.color1} 0%, ${blob.color2} 100%)`;
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
            <option value="bike" ${shape.type === 'bike' ? 'selected' : ''}>Bicycle</option>
            <option value="wrench" ${shape.type === 'wrench' ? 'selected' : ''}>Wrench Tool</option>
            <option value="gear" ${shape.type === 'gear' ? 'selected' : ''}>Gear Sprocket</option>
            <option value="wheel" ${shape.type === 'wheel' ? 'selected' : ''}>Bicycle Wheel</option>
            <option value="tools" ${shape.type === 'tools' ? 'selected' : ''}>Crossed Tools</option>
            <option value="screwdriver" ${shape.type === 'screwdriver' ? 'selected' : ''}>Screwdriver Tool</option>
            <option value="nut" ${shape.type === 'nut' ? 'selected' : ''}>Hex Nut</option>
          </select>
        </div>
        <div class="control-group">
          <label>Color 1</label>
          ${renderSwatchPicker(shape.color1, 'fg-color1-picker')}
        </div>
        <div class="control-group">
          <label>Color 2</label>
          ${renderSwatchPicker(shape.color2, 'fg-color2-picker')}
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
  if (!defs || !canvasContainer) return;
  
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

function generateRandomLayout() {
  generateHash();
  const palette = THEMES[activeTheme] ? THEMES[activeTheme].palette : ["#ff0055", "#ffffff"];

  // 1. Generate 2 to 4 random background blobs
  const numBlobs = Math.floor(Math.random() * 3) + 2; // [2, 3, 4]
  bgBlobsData = [];
  for (let i = 0; i < numBlobs; i++) {
    bgBlobsData.push({
      id: Date.now() + i,
      active: true,
      color1: palette[i % palette.length],
      color2: palette[(i + 1) % palette.length],
      size: Math.floor(Math.random() * 900) + 450, // 450px to 1350px
      blur: Math.floor(Math.random() * 120) + 80,   // 80px to 200px
      x: Math.floor(Math.random() * 140) - 20,       // -20% to 120%
      y: Math.floor(Math.random() * 140) - 20        // -20% to 120%
    });
  }

  // 2. Generate 2 to 5 random foreground shapes
  const numShapes = Math.floor(Math.random() * 4) + 2; // [2, 3, 4, 5]
  fgShapesData = [];
  const types = Object.keys(PATHS);
  for (let i = 0; i < numShapes; i++) {
    fgShapesData.push({
      id: Date.now() + 100 + i,
      active: true,
      type: types[Math.floor(Math.random() * types.length)],
      color1: palette[(i * 2) % palette.length],
      color2: palette[(i * 2 + 1) % palette.length],
      size: Math.floor(Math.random() * 250) + 100,  // 100px to 350px
      blur: Math.random() < 0.35 ? Math.floor(Math.random() * 15) : 0, // 35% chance of blur
      rotate: Math.floor(Math.random() * 72) * 5,   // 0 to 360 step 5
      x: Math.floor(Math.random() * 70) + 15,       // 15% to 85%
      y: Math.floor(Math.random() * 70) + 15,       // 15% to 85%
      anim: true
    });
  }

  renderBgBlobsControls();
  renderBgBlobsCanvas();
  renderFgShapesControls();
  renderFgShapesCanvas();
  updatePreviewAndCode();
}

function addBgBlob() {
  const palette = THEMES[activeTheme] ? THEMES[activeTheme].palette : ["#ff0055", "#ffffff"];
  const color1 = palette[Math.floor(Math.random() * palette.length)];
  const color2 = palette[Math.floor(Math.random() * palette.length)];
  
  const newBlob = {
    id: Date.now(),
    active: true,
    color1: color1,
    color2: color2,
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
  const palette = THEMES[activeTheme] ? THEMES[activeTheme].palette : ["#ff0055", "#ffffff"];
  const color1 = palette[Math.floor(Math.random() * palette.length)];
  const color2 = palette[Math.floor(Math.random() * palette.length)];
  
  const newShape = {
    id: Date.now(),
    active: true,
    type: randomType,
    color1: color1,
    color2: color2,
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

function loadTheme(themeName) {
  generateHash();
  const theme = THEMES[themeName];
  if (!theme) return;

  activeTheme = themeName;

  // Apply backdrop theme gradient
  bgColor1Input.value = theme.backdrop[0];
  bgColor2Input.value = theme.backdrop[1];
  updateBackground();

  // Recolor current active layout elements with theme palette colors
  const palette = theme.palette;
  if (palette.length > 0) {
    bgBlobsData.forEach((blob, index) => {
      blob.color1 = palette[index % palette.length];
      blob.color2 = palette[(index + 1) % palette.length];
    });

    fgShapesData.forEach((shape, index) => {
      shape.color1 = palette[(index * 2) % palette.length];
      shape.color2 = palette[(index * 2 + 1) % palette.length];
    });
  }

  // Re-render pickers showing only active theme colors
  renderBgBlobsControls();
  renderBgBlobsCanvas();
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
  updateNoiseEngine();
  generateCodeOutput();
}

function generateCodeOutput() {
  let content = '';

  const noiseType = noiseTypeInput.value;
  const baseFreq = baseFrequencyInput.value;
  const octaves = numOctavesInput.value;
  const opacity = noiseOpacityInput.value;
  const blendMode = blendModeInput.value;
  const engine = noiseEngineInput.value;

  const bg1 = bgColor1Input.value;
  const bg2 = bgColor2Input.value;
  const bgAngle = bgAngleInput.value;

  // Calculate relative SVG base frequency for export template
  const canvasWidth = previewCanvas.clientWidth || 600;
  const svgFreqVal = (parseFloat(baseFreq) * (canvasWidth / 1000)).toFixed(4);

  // Motion active settings
  const motionActive = globalMotion.active;

  const dataUri = getNoiseDataURI();
  const scale = 0.75 / parseFloat(baseFreq);
  const bgSize = 128 * scale;

  let exportDefsHTML = '';
  let exportGlobalNoiseCSS = '';

  if (engine === 'static-png') {
    exportDefsHTML = `    <!-- Pattern for static PNG noise -->
    <pattern id="svg-noise-pattern-${exportHash}" width="${bgSize}" height="${bgSize}" patternUnits="userSpaceOnUse">
      <image href="${dataUri}" width="${bgSize}" height="${bgSize}" />
    </pattern>

    <!-- Transparency grain mask referencing the pattern -->
    <mask id="grain-mask-${exportHash}" maskUnits="userSpaceOnUse" x="-5000" y="-5000" width="10000" height="10000">
      <rect x="-5000" y="-5000" width="10000" height="10000" fill="url(#svg-noise-pattern-${exportHash})" />
    </mask>`;

    exportGlobalNoiseCSS = `  background-image: url(${dataUri});
  background-size: ${bgSize}px ${bgSize}px;
  background-repeat: repeat;
  background-color: transparent;`;
  } else {
    exportDefsHTML = `    <!-- Filter for CSS overlay (pixel space coordinate systems) -->
    <filter id="noise-grain-${exportHash}" x="-20%" y="-20%" width="140%" height="140%">
      <feTurbulence 
        type="${noiseType}" 
        baseFrequency="${baseFreq}" 
        numOctaves="${octaves}" 
        stitchTiles="stitch" />
      <feColorMatrix 
        type="matrix" 
        values="1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 0 0 0 1 0" />
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
        values="1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 0 0 0 1 0" />
    </filter>

    <!-- Transparency grain mask referencing the scaled filter -->
    <mask id="grain-mask-${exportHash}" maskUnits="userSpaceOnUse" x="-5000" y="-5000" width="10000" height="10000">
      <rect x="-5000" y="-5000" width="10000" height="10000" fill="white" filter="url(#svg-noise-grain-${exportHash})" />
    </mask>`;

    exportGlobalNoiseCSS = `  background: white;
  filter: url(#noise-grain-${exportHash});`;
  }

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

      const factor = 10;
      const baseSize = b.size / factor;
      const baseBlur = b.blur / factor;

      return `  <!-- Layer 1 Glow Blob ${index + 1} Wrapper -->
  <div class="bg-blob-wrapper-${exportHash} bg-blob-${b.id}-${exportHash}" 
       style="width: ${baseSize}px; height: ${baseSize}px; left: calc(${b.x}% - (${baseSize}px / 2)); top: calc(${b.y}% - (${baseSize}px / 2)); transform: scale(${factor}); transform-origin: center; will-change: transform;">
    <!-- Inner soft blur element handles floating motion -->
    <div class="bg-blob-element-${exportHash} ${motionActive ? 'animating' : ''}" 
         style="width: 100%; height: 100%; filter: blur(${baseBlur}px); background: radial-gradient(circle, ${b.color1} 0%, ${b.color2} 100%); ${animProperty}"></div>
  </div>`;
    }).join('\n');

    content = `<!-- 1. HTML: Add the SVG Filter & Mask definitions inside your body -->
<svg style="position: absolute; width: 0; height: 0;" xmlns="http://www.w3.org/2000/svg">
  <defs>
${exportDefsHTML}
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
${exportDefsHTML}

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

/* Layer 1: Background Soft Glowing Blobs (Downscaled for 10x rendering boost) */
.bg-blob-wrapper-${exportHash} {
  position: absolute;
  z-index: 2;
  transform-origin: center center;
  will-change: transform;
  backface-visibility: hidden;
  pointer-events: none;
}

.bg-blob-element-${exportHash} {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  will-change: transform;
  backface-visibility: hidden;
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
${exportGlobalNoiseCSS}
  mix-blend-mode: ${blendMode};
  opacity: ${opacity};
  pointer-events: none;
  z-index: 4;
}
${keyframesCSS}
</style>`;
  } 
  
  else if (activeTab === 'css-only') {
    let finalDataUri = '';
    if (engine === 'static-png') {
      finalDataUri = `url("${dataUri}")`;
    } else {
      const svgString = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
  <filter id="n">
    <feTurbulence type="${noiseType}" baseFrequency="${baseFreq}" numOctaves="${octaves}" stitchTiles="stitch" />
    <feColorMatrix type="matrix" values="1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 0 0 0 1 0" />
  </filter>
  <rect width="100%" height="100%" fill="white" filter="url(%23n)" />
</svg>`;
      const cleanSvg = svgString.replace(/\s+/g, ' ');
      finalDataUri = `url("data:image/svg+xml,${encodeURIComponent(cleanSvg)}")`;
    }

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
  background-image: ${finalDataUri};
  ${engine === 'static-png' ? `background-size: ${bgSize}px ${bgSize}px;\n  background-repeat: repeat;` : ''}
  mix-blend-mode: ${blendMode};
  pointer-events: none;
  opacity: ${opacity};
  z-index: 10;
}

/* Background ambient glow circle (Downscaled 10x with GPU acceleration) */
.glow-orb-${exportHash} {
  position: absolute;
  width: 35px;
  height: 35px;
  background: radial-gradient(circle, ${bgBlobsData[0] ? bgBlobsData[0].color1 : '#ff5e62'} 0%, ${bgBlobsData[0] ? bgBlobsData[0].color2 : '#ff9966'} 100%);
  filter: blur(8px);
  transform: scale(10);
  transform-origin: center center;
  will-change: transform;
  backface-visibility: hidden;
  z-index: 2;
}`;
  } 
  
  else if (activeTab === 'html-only') {
    content = `<svg width="0" height="0" style="position: absolute;" xmlns="http://www.w3.org/2000/svg">
  <defs>
${exportDefsHTML}
  </defs>
</svg>`;
  }
  
  else if (activeTab === 'svg-raw') {
    content = getSelfContainedSvgContent();
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

async function drawSvgToCanvas(ctx, width, height) {
  return new Promise((resolve) => {
    const svgElement = document.getElementById('fgShapesCanvas');
    const svgClone = svgElement.cloneNode(true);
    
    // Inject custom styling to ensure vectors maintain core styling when serialized
    const styleEl = document.createElementNS('http://www.w3.org/2000/svg', 'style');
    styleEl.textContent = `
      .fg-shape-container {
        will-change: transform;
      }
      .fg-shape-anim {
        transform-origin: 50px 50px;
      }
    `;
    svgClone.insertBefore(styleEl, svgClone.firstChild);
    
    const svgString = new XMLSerializer().serializeToString(svgClone);
    const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
    const URL = window.URL || window.webkitURL || window;
    const blobURL = URL.createObjectURL(svgBlob);
    
    const img = new Image();
    img.onload = () => {
      ctx.drawImage(img, 0, 0, width, height);
      URL.revokeObjectURL(blobURL);
      resolve();
    };
    img.onerror = (err) => {
      console.error("SVG image load failed during export:", err);
      URL.revokeObjectURL(blobURL);
      resolve();
    };
    img.src = blobURL;
  });
}

function downloadURI(uri, name) {
  const link = document.createElement("a");
  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

async function exportPng() {
  const canvas = document.createElement('canvas');
  canvas.width = 1000;
  canvas.height = 1000;
  const ctx = canvas.getContext('2d');
  
  // 1. Draw Backdrop Gradient
  const angle = parseFloat(bgAngleInput.value) || 135;
  const angleRad = (angle - 90) * Math.PI / 180;
  const x1 = 500 - Math.cos(angleRad) * 500;
  const y1 = 500 - Math.sin(angleRad) * 500;
  const x2 = 500 + Math.cos(angleRad) * 500;
  const y2 = 500 + Math.sin(angleRad) * 500;
  const grad = ctx.createLinearGradient(x1, y1, x2, y2);
  grad.addColorStop(0, bgColor1Input.value);
  grad.addColorStop(1, bgColor2Input.value);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 1000, 1000);
  
  // 2. Draw Background Blobs
  const canvasWidth = previewCanvas.clientWidth || 600;
  const svgScale = 1000 / canvasWidth;
  
  bgBlobsData.forEach((blob, index) => {
    if (!blob.active) return;
    
    const cx = (blob.x / 100) * 1000;
    const cy = (blob.y / 100) * 1000;
    const r = (blob.size / 2) * svgScale;
    const blur = blob.blur * svgScale;
    
    ctx.save();
    if (blur > 0) {
      ctx.filter = `blur(${blur}px)`;
    }
    
    const radialGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
    radialGrad.addColorStop(0, blob.color1);
    radialGrad.addColorStop(1, blob.color2);
    
    ctx.fillStyle = radialGrad;
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  });
  
  // 3. Draw Foreground Shapes SVG
  await drawSvgToCanvas(ctx, 1000, 1000);
  
  // 4. Draw Noise Overlay
  ctx.save();
  ctx.globalCompositeOperation = blendModeInput.value || 'overlay';
  ctx.globalAlpha = parseFloat(noiseOpacityInput.value) || 0.35;
  
  const noiseImg = new Image();
  await new Promise((resolve) => {
    noiseImg.onload = resolve;
    noiseImg.src = getNoiseDataURI();
  });
  
  const baseFreqVal = parseFloat(baseFrequencyInput.value);
  const scale = 0.75 / baseFreqVal;
  const bgSize = 128 * scale;
  
  const tempCanvas = document.createElement('canvas');
  tempCanvas.width = bgSize;
  tempCanvas.height = bgSize;
  const tempCtx = tempCanvas.getContext('2d');
  tempCtx.drawImage(noiseImg, 0, 0, bgSize, bgSize);
  
  const pattern = ctx.createPattern(tempCanvas, 'repeat');
  ctx.fillStyle = pattern;
  ctx.fillRect(0, 0, 1000, 1000);
  ctx.restore();
  
  // 5. Trigger download
  const dataUrl = canvas.toDataURL('image/png');
  downloadURI(dataUrl, `grainlab-illustration-${exportHash}.png`);
}

function getSelfContainedSvgContent() {
  const angle = parseFloat(bgAngleInput.value) || 135;
  const angleRad = (angle - 90) * Math.PI / 180;
  const x1 = (50 - Math.cos(angleRad) * 50).toFixed(1);
  const y1 = (50 - Math.sin(angleRad) * 50).toFixed(1);
  const x2 = (50 + Math.cos(angleRad) * 50).toFixed(1);
  const y2 = (50 + Math.sin(angleRad) * 50).toFixed(1);
  
  const backdropGradHTML = `    <linearGradient id="svg-export-backdrop" x1="${x1}%" y1="${y1}%" x2="${x2}%" y2="${y2}%">
      <stop offset="0%" stop-color="${bgColor1Input.value}" />
      <stop offset="100%" stop-color="${bgColor2Input.value}" />
    </linearGradient>`;

  const canvasWidth = previewCanvas.clientWidth || 600;
  const svgScale = 1000 / canvasWidth;

  const blobGradientsHTML = bgBlobsData.filter(b => b.active).map(b => `    <radialGradient id="svg-export-blob-grad-${b.id}" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="${b.color1}" />
      <stop offset="100%" stop-color="${b.color2}" />
    </radialGradient>
    <filter id="svg-export-blob-blur-${b.id}" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="${(b.blur * svgScale / 2).toFixed(1)}" />
    </filter>`).join('\n');

  const shapeGradientsHTML = fgShapesData.filter(s => s.active).map(s => `    <linearGradient id="svg-export-shape-grad-${s.id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${s.color1}" />
      <stop offset="100%" stop-color="${s.color2}" />
    </linearGradient>`).join('\n');

  const noiseType = noiseTypeInput.value;
  const baseFreq = baseFrequencyInput.value;
  const octaves = numOctavesInput.value;
  const opacity = noiseOpacityInput.value;
  const blendMode = blendModeInput.value;
  const engine = noiseEngineInput.value;
  const dataUri = getNoiseDataURI();
  const scale = 0.75 / parseFloat(baseFreq);
  const bgSize = 128 * scale;

  let svgDefsHTML = '';
  let noiseOverlayExportHTML = '';

  if (engine === 'static-png') {
    svgDefsHTML = `    <pattern id="svg-export-noise-pattern" width="${bgSize}" height="${bgSize}" patternUnits="userSpaceOnUse">
      <image href="${dataUri}" width="${bgSize}" height="${bgSize}" />
    </pattern>
    <mask id="svg-export-grain-mask" maskUnits="userSpaceOnUse" x="-5000" y="-5000" width="10000" height="10000">
      <rect x="-5000" y="-5000" width="10000" height="10000" fill="url(#svg-export-noise-pattern)" />
    </mask>`;

    noiseOverlayExportHTML = `  <rect width="1000" height="1000" fill="url(#svg-export-noise-pattern)" opacity="${opacity}" style="mix-blend-mode: ${blendMode}; pointer-events: none;" />`;
  } else {
    svgDefsHTML = `    <filter id="svg-export-noise-filter" x="-20%" y="-20%" width="140%" height="140%">
      <feTurbulence type="${noiseType}" baseFrequency="${baseFreq * (canvasWidth / 1000)}" numOctaves="${octaves}" stitchTiles="stitch" />
      <feColorMatrix type="matrix" values="1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 0 0 0 1 0" />
    </filter>
    <mask id="svg-export-grain-mask" maskUnits="userSpaceOnUse" x="-5000" y="-5000" width="10000" height="10000">
      <rect x="-5000" y="-5000" width="10000" height="10000" fill="white" filter="url(#svg-export-noise-filter)" />
    </mask>`;

    noiseOverlayExportHTML = `  <rect width="1000" height="1000" fill="white" filter="url(#svg-export-noise-filter)" opacity="${opacity}" style="mix-blend-mode: ${blendMode}; pointer-events: none;" />`;
  }

  const blobsExportHTML = bgBlobsData.filter(b => b.active).map(b => {
    const cx = (b.x / 100) * 1000;
    const cy = (b.y / 100) * 1000;
    const r = (b.size / 2) * svgScale;
    return `  <circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="${r.toFixed(1)}" fill="url(#svg-export-blob-grad-${b.id})" filter="url(#svg-export-blob-blur-${b.id})" />`;
  }).join('\n');

  const shapesExportHTML = fgShapesData.filter(s => s.active).map((s) => {
    const scale = s.size / 100;
    const xSvg = (s.x / 100) * 1000;
    const ySvg = (s.y / 100) * 1000;
    const xOffset = xSvg - (50 * scale);
    const yOffset = ySvg - (50 * scale);
    const pathD = PATHS[s.type] || PATHS.circle;
    const rotation = s.rotate || 0;
    
    return `  <g mask="url(#svg-export-grain-mask)">
    <g transform="translate(${xOffset.toFixed(1)}, ${yOffset.toFixed(1)}) scale(${scale.toFixed(2)})" ${s.blur > 0 ? `style="filter: blur(${s.blur}px);"` : ''}>
      <path d="${pathD}" fill="url(#svg-export-shape-grad-${s.id})" ${rotation > 0 ? `transform="rotate(${rotation}, 50, 50)"` : ''} />
    </g>
  </g>`;
  }).join('\n');

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="100%" height="100%">
  <defs>
    <clipPath id="svg-export-clip">
      <rect width="1000" height="1000" />
    </clipPath>
${backdropGradHTML}
${blobGradientsHTML}
${shapeGradientsHTML}
${svgDefsHTML}
  </defs>
  
  <!-- Main Frame Group clipped to 1000x1000 -->
  <g clip-path="url(#svg-export-clip)">
    <!-- Backdrop -->
    <rect width="1000" height="1000" fill="url(#svg-export-backdrop)" />
    
    <!-- Background Blobs -->
${blobsExportHTML}
    
    <!-- Foreground Shapes -->
${shapesExportHTML}
    
    <!-- Noise Overlay -->
${noiseOverlayExportHTML}
  </g>
</svg>`;
}

function exportSvg() {
  const svgContent = getSelfContainedSvgContent();
  const svgBlob = new Blob([svgContent], { type: 'image/svg+xml;charset=utf-8' });
  const URL = window.URL || window.webkitURL || window;
  const blobURL = URL.createObjectURL(svgBlob);
  downloadURI(blobURL, `grainlab-illustration-${exportHash}.svg`);
  setTimeout(() => URL.revokeObjectURL(blobURL), 500);
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
