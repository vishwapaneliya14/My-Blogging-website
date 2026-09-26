/* post.js
   post.html has no content of its own — this script reads the ?id=
   value from the URL, looks up the matching post in POSTS, and
   renders its title, meta line, and body paragraphs. It also wires
   up "previous entry" / "next entry" links based on post order. */

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const index = POSTS.findIndex((p) => p.id === id);

  if (index === -1) {
    renderNotFound();
    return;
  }

  renderPost(POSTS[index]);
  renderFooterNav(index);
});

function renderPost(post) {
  document.title = `${post.title} — Everyday at PPSU`;

  const heroEl = document.getElementById("post-hero-content");
  heroEl.innerHTML = `
    <span class="post-category">${getIcon(post.icon)} ${post.category}</span>
    <h1>${post.title}</h1>
    <div class="post-meta-line">${formatDate(post.date)} &middot; ${post.readTime}</div>
  `;

  const bodyEl = document.getElementById("post-body-content");
  bodyEl.innerHTML = post.body.map((para) => `<p>${para}</p>`).join("");
}

function renderFooterNav(index) {
  const prev = POSTS[index - 1];
  const next = POSTS[index + 1];
  const el = document.getElementById("post-footer-nav");

  const prevLink = prev
    ? `<a href="post.html?id=${prev.id}">&larr; ${prev.title}</a>`
    : `<a href="index.html">&larr; Back to all entries</a>`;

  const nextLink = next
    ? `<a href="post.html?id=${next.id}">${next.title} &rarr;</a>`
    : `<a href="index.html">Back to all entries &rarr;</a>`;

  el.innerHTML = `
    <div style="display:flex; justify-content:space-between; gap:20px; flex-wrap:wrap; font-size:0.95rem; font-weight:600;">
      <span>${prevLink}</span>
      <span>${nextLink}</span>
    </div>
  `;
}

function renderNotFound() {
  const heroEl = document.getElementById("post-hero-content");
  heroEl.innerHTML = `
    <h1>Entry not found</h1>
    <p class="post-meta-line">That entry doesn't exist. <a href="index.html" style="color: var(--sage); font-weight:600;">Go back to all entries</a>.</p>
  `;
  document.getElementById("post-body-content").innerHTML = "";
}
