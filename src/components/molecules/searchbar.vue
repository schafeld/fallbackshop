<template>
  <div class="search-bar js_search search-bar--hidden">
    <form class="search" action="/privatkunden/suchergebnisseite/">
      <input
        type="search"
        autocomplete="off"
        name="q1"
        placeholder="Suche nach..."
        class="search-input js_search-input"
        tabindex="1"
      >
      <button type="submit" class="search-btn" tabindex="2"></button>
      <div class="search-results js_search-results"></div>
    </form>
  </div>
</template>
