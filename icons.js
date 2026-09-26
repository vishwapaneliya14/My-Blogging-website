/* icons.js
   Tiny hand-picked SVG icons, one per post category, so the blog
   index has a visual cue for the kind of entry without using photos. */

const ICONS = {
  sun: '<svg class="post-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="4.2"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/></svg>',
  book: '<svg class="post-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 5.5C4 4.7 4.7 4 5.5 4H12v16H5.5c-.8 0-1.5-.7-1.5-1.5v-13Z"/><path d="M20 5.5c0-.8-.7-1.5-1.5-1.5H12v16h6.5c.8 0 1.5-.7 1.5-1.5v-13Z"/></svg>',
  cup: '<svg class="post-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M5 8h11v6a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V8Z"/><path d="M16 9.5h1.5a2.5 2.5 0 0 1 0 5H16"/><path d="M8 4.5c.3.6.3 1.1 0 1.7M12 4.5c.3.6.3 1.1 0 1.7"/></svg>',
  moon: '<svg class="post-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a6.6 6.6 0 0 0 10.5 10.5Z"/></svg>',
  drum: '<svg class="post-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><ellipse cx="12" cy="6.5" rx="7" ry="3"/><path d="M5 6.5v9c0 1.7 3.1 3 7 3s7-1.3 7-3v-9"/><path d="M4 9l3-2.2M20 9l-3-2.2"/></svg>'
};

function getIcon(name) {
  return ICONS[name] || ICONS.sun;
}
