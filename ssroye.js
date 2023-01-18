const observer = new MutationObserver((mutations) => {
    const panel = document.querySelector('div.lol-settings-options > lol-uikit-scrollable');
    if (panel && mutations.find((record) => Array.from(record.addedNodes).includes(panel))) 
      {const row = document.createElement('div');
       row.classList.add('lol-settings-general-row');
       const label = document.createElement('p');
       label.classList.add('lol-settings-window-size-text');
       label.textContent = 'Reload Theme';
       label.style.marginBottom = '12px';
       const searchdiv = document.createElement('searchbox-container');
       searchdiv.style.marginBottom = '12px';
       searchdiv.style.display = 'inline-block'
       const input = document.createElement('lol-uikit-flat-input');
       const btn = document.createElement('lol-uikit-flat-button-secondary');
       btn.style.display = 'flex';
       btn.textContent = 'Reload theme';
       btn.style.marginBottom = '12px';
       btn.onclick = () =>
          {location.reload();
          themeReload();};
       row.append(label);
       row.append(btn);
       row.append(input);
       panel.prepend(row);}});
 function accessCSS(value) 
    {const root = document.documentElement;
    root.style.setProperty('--background', `url(${decodeURIComponent(value)})`);}
 function themeReload() 
    {var style = document.createElement('link');
    style.href = 'https://raw.githubusercontent.com/RevolvrOcelot/Sky-Strikers-LoL-Theme/main/ssraze.css';
    style.type = 'text/css';
    style.rel = 'stylesheet';
    head.append(style);}
 window.addEventListener('load', () => {
    const interval = setInterval(() => {
       const manager = document.getElementById(
          'lol-uikit-layer-manager-wrapper');
       if (manager) {
          clearInterval(interval);
          observer.observe(manager, {
             attributes: true,
             childList: true,
             subtree: true,
             characterData: true,
          });}}, 500);
    document
       .getElementsByTagName('body')[0]
       .insertAdjacentHTML(
          'afterbegin',
          '<link rel="stylesheet" href="https://raw.githubusercontent.com/RevolvrOcelot/Sky-Strikers-LoL-Theme/main/ssraze.css" />'
       );
    document.querySelector('body').innerHTML += "<video src="+"'https://raw.githubusercontent.com/RevolvrOcelot/Sky-Strikers-LoL-Theme/main/BG.mp4' style='position: absolute;top: 0;width: 1280px;z-index: -1;pointer-events: none;' autoplay loop muted></video>"
    console.clear();
 });
 