export default function () {
    const root = document.documentElement;
    const main = document.querySelector('main');
  
    if (main.dataset.theme === 'dark') {
      root.style.setProperty('--bg-color', '#e0f7fa');
      root.style.setProperty('--border-color', '#00c0ce');
      root.style.setProperty('--font-color', '#00afa4');
      root.style.setProperty('--primary-color', '#00afa4');
      root.style.setProperty('--glow', '0 0 2px var(--primary-color), 0 0 5px var(--primary-color)');
      main.dataset.theme = 'light';
    } else {
      root.style.setProperty('--bg-color', '#0a0f1e');
      root.style.setProperty('--border-color', '#00eaff');
      root.style.setProperty('--font-color', '#00eaff');
      root.style.setProperty('--primary-color', '#00fff2');
      root.style.setProperty('--glow', '0 0 2px var(--primary-color), 0 0 5px var(--primary-color)');
      main.dataset.theme = 'dark';
    }
  }