# Everyday at PPSU

A student blog about everyday life at **P P Savani University** — built as a
college web development assignment using plain **HTML, CSS, and JavaScript**
(no frameworks, no build step).

## Live demo

Enable GitHub Pages for this repo (Settings → Pages → Deploy from branch →
`main` / root) and it will be live at:

```
https://<your-username>.github.io/<repo-name>/
```

## Features

- **Home page** — a hero section, a featured/latest post panel, and an
  editorial-style index of all entries, all rendered dynamically from a
  single JavaScript data file.
- **Post detail page** (`post.html`) — one reusable template that reads a
  post's `id` from the URL (`post.html?id=morning-chai`) and fills in the
  title, date, category, and body paragraphs, with previous/next entry
  navigation.
- **About page** — background on the blog and a few facts about P P Savani
  University.
- **Contact page** — a client-side validated contact form (no backend; it
  simulates a successful submission).
- Responsive layout with a mobile nav toggle, and a warm editorial visual
  style (Fraunces + Work Sans, navy/marigold/sage palette).

## Project structure

```
ppsu-blog/
├── index.html          # Home page
├── about.html          # About page
├── contact.html        # Contact page with form
├── post.html           # Single post template (reads ?id= from the URL)
├── css/
│   └── style.css       # All styling
├── js/
│   ├── posts-data.js   # Blog post content lives here
│   ├── icons.js         # Small inline SVG icons per category
│   ├── main.js          # Shared behavior (nav toggle, footer year)
│   ├── home.js          # Renders the homepage featured post + list
│   ├── post.js           # Renders a single post detail page
│   └── contact.js       # Contact form validation
└── README.md
```

## Adding a new blog post

Open `js/posts-data.js` and add a new object to the `POSTS` array:

```js
{
  id: "unique-slug",
  category: "Category Name",
  icon: "sun",          // one of: sun, book, cup, moon, drum
  title: "Post title",
  date: "2026-09-01",   // YYYY-MM-DD
  readTime: "4 min read",
  excerpt: "One or two sentences shown in the list view.",
  body: [
    "First paragraph...",
    "Second paragraph...",
    "..."
  ]
}
```

No HTML editing needed — the homepage and post page pick it up
automatically.

## Running locally

Since everything is static, you can open `index.html` directly in a browser,
or serve the folder locally, e.g.:

```
python3 -m http.server 8000
```

then visit `http://localhost:8000`.

## Notes

This is a fan-made student project and is not an official publication of
P P Savani University.
