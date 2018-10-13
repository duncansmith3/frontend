let formPanel = document.getElementsByClassName('panel--form')[0];
let isScrolling = false;
let initTimestamp = 0;
let initPosition = 0;
let newPosition = 0;
let terminalPosition = 0;
let startScrollTimeout = null;
let scrollDuration = 750;
let scrollDelay = getTransitionDuration(formPanel);

function mobileScroll(e) {
  if (isScrolling) {
    return false;
  }
  if (window.innerWidth > 839) {
    return;
  }
  if (!this.checked) {
    clearTimeout(startScrollTimeout);
    initTimestamp = 0;
    isScrolling = false;
    return;
  }
  startScrollTimeout = setTimeout(() => {
    isScrolling = true;
    newPosition = initPosition = window.pageYOffset;
    terminalPosition = formPanel.offsetTop
    requestAnimationFrame(scrollToInfo);
  }, scrollDelay);
}

function scrollToInfo(timestamp) {
  if (!isScrolling) {
    return;
  }
  initTimestamp = initTimestamp || timestamp;
  let diffTime = timestamp - initTimestamp;
  if (diffTime > scrollDuration) {
    isScrolling = false;
    initTimestamp = 0;
    return;
  }
  let perc = diffTime / scrollDuration;
  //I gather that Platform45 prefers ease-in-out transitions :)
  let factor = easeInOut(perc);
  newPosition = initPosition + (terminalPosition - initPosition) * factor;
  window.scrollTo(0, newPosition);
  requestAnimationFrame(scrollToInfo);
}

function easeInOut(p){
    p *= 2;
    if (p < 1) {
      return 0.5 * p * p;
    }

    return - 0.5 * ((p - 1) * (p - 3) - 1);
}

function getTransitionDuration(el) {
  let duration = window.getComputedStyle(el, null).getPropertyValue('transition')
                   .split(' ')
                   .filter(param => param.match(/[\d|\.]+m?s/))
                   .map(time => {
                     time = time.replace(/s/, '');
                     return Number(time) ? +time * 1000 : +(time.replace(/m/, ''))
                     return time;
                   })
                   .reduce((collect, param) => collect);
  return duration;
}

document.getElementById('displayText')
  .addEventListener('change', mobileScroll, false);

