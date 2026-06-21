# Thank You, Chelli 🤍

A Father's Day thank-you website for Mottu — replying to her wishes calling me her "second father."

## Folder structure

```
thank_you_chelli/
├── index.html          → main page
├── css/
│   └── style.css        → all styling and animations
├── js/
│   └── script.js         → scroll reveal, floating petals, heart-burst button
├── assets/
│   └── images/
│       └── us.jpg         → photo goes here (see below)
└── README.md
```

## How to add the photo

1. Pick a photo of you and Mottu.
2. Rename it exactly to: `us.jpg`
3. Place it inside `assets/images/`
4. That's it — the page already points to `assets/images/us.jpg`.

If your photo is a `.png` instead of `.jpg`, either:
- Rename the file extension to `.jpg`, or
- Open `index.html`, find the line with `src="assets/images/us.jpg"` and change it to `src="assets/images/us.png"`.

If no photo is added, the frame just shows a soft heart icon placeholder instead — the page still works fine.

## Local preview

Just double-click `index.html` to open it in your browser. No build step, no install needed — pure HTML/CSS/JS.
