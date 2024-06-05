---
title: My First Chrome Plugin
pubDatetime: 2021-04-29T12:13:24.000Z
description: My First Chrome Plugin
tags:
  - programming
---

# My First Chrome Plugin

It was much faster than I thought it would be.

## Generate the Project

I used [Yeoman](https://yeoman.io/) to generate the scaffolding. Make a project folder and run:

```
npm install -g yo generator-web-extension
yo web-extension
```

Lots of options but I'd go with the minimum for now. One thing I did include was a button in the
extension.

Then go to your [chrome extensions](chrome://extensions/) and click "Load Unpacked". Find the `dist`
directory that was generated and you should have your dev extension in chrome ready to go. Click the
puzzle piece in the extensions area and pin your extension.

Now we can fire up the watcher and start coding while getting a live refresh:

```
npm run dev chrome
```

## Code Structure

There's a little popup when you click the extension. Think of this as it's own separate web page. In
fact, you can right-click the extension and "inspect" just like it's a web page. This is where
you'll see any `console.log` for the extension bits.

We'll be injecting a super simple timer onto the page. To do this the extension needs to send a
message to the page.

Go to `app/pages/popup.html` and add a button with class `timerButton`.

Now look in `/app/scripts` and you'll see three files, two we'll be touching are:

`popup.js`: this is for code that runs inside the extension "page"

`contentscript.js`: this is for code that runs in the page the user is currently on

So we need to send a message from `popup.js` to `contentscript.js` to trigger injection of a timer
on the page.

`popup.js`:

```
document.querySelector('.timerButton').addEventListener('click', addTimer);
function addTimer() {
  browser.tabs
    .query({
      active: true,
      currentWindow: true,
    })
    .then(tabs => {
      browser.tabs
        .sendMessage(tabs[0].id, {
          timerMessage: `create`,
        })
        .then(response => {
          console.log({response});
        })
        .catch(({message}) => console.error('error', message));
    });
}

```

Once we hit the page we'll do all the timer stuff including injecting some html on the page that has
some hacky draggability:

```
const SECOND = 1000;
const MINUTE = SECOND * 60;
class Timer {
  timerHtmlHandle;
  timerInterval;
  originalTime;
  currentTime;
  startTimer() {
    this.timerInterval = setInterval(this.tick.bind(this), SECOND);
  }
  stopTimer() {
    clearInterval(this.timerInterval);
    this.timerInterval = null;
  }
  toggleTimer() {
    this.timerInterval ? this.stopTimer() : this.startTimer();
  }
  resetTimer(seedTime = prompt('Enter Timer Minutes') * MINUTE) {
    this.stopTimer();
    this.currentTime = this.originalTime = seedTime;
    this.tick();
  }
  refreshTimer() {
    this.stopTimer();
    this.currentTime = this.originalTime;
    this.tick();
  }
  addMinute() {
    this.currentTime = this.currentTime + MINUTE;
    this.tick();
  }
  tick() {
    const timerText = `${Math.floor(this.currentTime / MINUTE)}:${`${
      (this.currentTime % MINUTE) / SECOND
    }`.padStart(2, '0')}`;

    this.timerHtmlHandle.innerText = timerText;
    this.currentTime = this.currentTime - SECOND;

    if (this.currentTime < 0) {
      this.stopTimer();
    } else if (this.currentTime < MINUTE * 2) {
      // two minute warning
      this.timerHtmlHandle.style.color = '#f5b20a';
    } else if (this.currentTime < MINUTE) {
      // one minute warning
      this.timerHtmlHandle.style.color = '#da521f';
    }
  }
}
const duhlTimer = new Timer();

const addTimer = () => {
  const timerHtml = `
    <div draggable="true" class="duhl-timer">
      <div class="drag"></div>
      <div class="ext-timer">0:00</div>
      <button class="refreshTimer">🔂</button>
      <button class="addMinute">1️⃣</button>
      <button class="resetTimer">🆕</button>
      <button class="toggleTimer">⏯</button>
    </div>
  `;
  document.body.insertAdjacentHTML('afterbegin', timerHtml);
  duhlTimer.timerHtmlHandle = document.querySelector('.ext-timer');
  document
    .querySelector('.duhl-timer .refreshTimer')
    .addEventListener('click', () => duhlTimer.refreshTimer());
  document
    .querySelector('.duhl-timer .addMinute')
    .addEventListener('click', () => duhlTimer.addMinute());
  document
    .querySelector('.duhl-timer .resetTimer')
    .addEventListener('click', () => duhlTimer.resetTimer());
  document
    .querySelector('.duhl-timer .toggleTimer')
    .addEventListener('click', () => duhlTimer.toggleTimer());
  document.querySelector('.duhl-timer').addEventListener('dragend', e => {
    console.log(e);
    e.target.style.top = `${e.pageY}px`;
    e.target.style.left = `${e.pageX}px`;
  });
};

browser.runtime.onMessage.addListener((req, sender, sendResponse) => {
  // only one timer for you!
  if (duhlTimer && duhlTimer.timerHtmlHandle) {
    return;
  }
  addTimer();
  // reflow before starting things or it gets wonky
  setTimeout(() => {
    duhlTimer.resetTimer(5 * MINUTE);
  });
});

```

Finally the related `contentscript.css`

```
.duhl-timer {
  padding: 0 4px;
  position: absolute;
  z-index: 10000000;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
  border: 1px solid #fff;
  border-radius: 12px;
  color: #fff;
}

.duhl-timer .drag {
  position: absolute;
  top: 0;
  left: 0;
  width: 16px;
  height: 16px;
  border-radius: 12px 0 2px 0;
  background: repeating-linear-gradient(
    to bottom,
    #666,
    #666 2px,
    #333 2px,
    #333 4px
  );
  cursor: move;
}

.duhl-timer .ext-timer {
  font-size: 3rem;
  line-height: 3rem;
  text-align: center;
}

.duhl-timer button {
  padding: 2px 6px;
  border: none;
  background: none;
  border-radius: 4px;
}

.duhl-timer button:hover {
  cursor: pointer;
  background: rgba(255, 255, 255, 0.1);
}
.duhl-timer button:active {
  background: rgba(255, 255, 255, 0.2);
}

```

And that's my timer injection plugin!

[src](https://github.com/danieluhl/timer-chrome-
