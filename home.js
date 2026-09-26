/* home.js
   Builds the homepage from POSTS (posts-data.js): the newest post
   becomes the featured panel, the rest render as an editorial list. */

document.addEventListener("DOMContentLoaded", () => {
  const sorted = [...POSTS].sort((a, b) => new Date(b.date) - new Date(a.date));
  const [featured, ...rest] = sorted;

  renderFeatured(featured);
  renderList(rest);
});

function renderFeatured(post) {
  const el = document.getElementById("featured-post");
  if (!el || !post) return;

  el.innerHTML = `
    <div class="featured-panel">
      <div class="featured-label">This week's entry</div>
      <blockquote>&ldquo;${post.body[0]}&rdquo;</blockquote>
    </div>
    <div class="featured-text">
      <span class="featured-category">${getIcon(post.icon)} ${post.category}</span>
      <h2>${post.title}</h2>
      <p>${post.excerpt}</p>
      <a class="read-link" href="post.html?id=${post.id}">Continue reading &rarr;</a>
    </div>
  `;
}

function renderList(posts) {
  const el = document.getElementById("post-list");
  if (!el) return;

  el.innerHTML = posts
    .map(
      (post) => `
    <div class="post-row">
      <div class="post-date">${formatDate(post.date)}</div>
      <a class="title-link" href="post.html?id=${post.id}">
        ${getIcon(post.icon)}
        <span class="post-category">${post.category}</span>
        <h3>${post.title}</h3>
        <p>${post.excerpt}</p>
      </a>
      <div class="post-readtime">${post.readTime}</div>
    </div>
  `
    )
    .join("");
}
