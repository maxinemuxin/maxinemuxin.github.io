/* Click the sidebar photo to flip it and reveal the second image.
   Kept in its own file: the site's HTML compressor collapses newlines inside
   inline <script> blocks, which silently breaks any line comment. */
(function () {
  document.addEventListener('click', function (e) {
    var btn = e.target.closest && e.target.closest('.avatar-flip');
    if (!btn) return;

    var flipped = btn.classList.toggle('is-flipped');
    btn.setAttribute('aria-pressed', flipped ? 'true' : 'false');

    /* Fade the "click to flip" nudge once it has served its purpose. */
    var hint = btn.parentNode.querySelector('.avatar-hint');
    if (hint) hint.classList.add('is-used');
  });
})();
