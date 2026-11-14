/*
 * Cinematakis - renders upcoming screenings from data/events.json.
 *
 * Usage: add data-events-src="<path to events.json>" to a container element.
 * Optional: data-limit="1" shows only the next N screenings.
 * The language comes from <html lang>. If there are no upcoming screenings,
 * or the file cannot be loaded, the container keeps its existing content.
 * All text is inserted with textContent, never innerHTML.
 */
(function () {
  "use strict";

  var lang = document.documentElement.lang === "en" ? "en" : "el";
  var labels = {
    el: { at: "Τόπος: " },
    en: { at: "Place: " }
  };

  function todayInGreece() {
    // YYYY-MM-DD in Greek local time (en-CA formats dates as ISO).
    return new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Athens" }).format(new Date());
  }

  function pick(value) {
    if (!value) { return ""; }
    if (typeof value === "string") { return value; }
    return value[lang] || value.el || value.en || "";
  }

  function isValid(e) {
    return e && /^\d{4}-\d{2}-\d{2}$/.test(e.date) &&
      /^\d{2}:\d{2}$/.test(e.time) && pick(e.title) !== "" && pick(e.location) !== "";
  }

  function formatDate(iso) {
    return new Intl.DateTimeFormat(lang === "en" ? "en-GB" : "el-GR", {
      weekday: "long", day: "numeric", month: "long", year: "numeric", timeZone: "UTC"
    }).format(new Date(iso + "T00:00:00Z"));
  }

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) { node.className = className; }
    if (text) { node.textContent = text; }
    return node;
  }

  function render(container, events, headingTag) {
    var fragment = document.createDocumentFragment();
    var list = null;
    var currentDate = null;

    events.forEach(function (e) {
      if (e.date !== currentDate) {
        currentDate = e.date;
        fragment.appendChild(el(headingTag, "event-date", formatDate(e.date)));
        list = el("ul", "cards events");
        fragment.appendChild(list);
      }
      var item = el("li", "card");
      item.appendChild(el("h3", "", pick(e.title)));
      item.appendChild(el("p", "event-meta", e.time + " · " + labels[lang].at + pick(e.location)));
      if (pick(e.note)) { item.appendChild(el("p", "", pick(e.note))); }
      list.appendChild(item);
    });

    container.textContent = "";
    container.classList.remove("notice");
    container.appendChild(fragment);

    var section = container.closest("[hidden]");
    if (section) { section.hidden = false; }
  }

  function load(container) {
    var limit = parseInt(container.getAttribute("data-limit"), 10);
    var headingTag = container.getAttribute("data-limit") ? "h3" : "h2";

    fetch(container.getAttribute("data-events-src"), { cache: "no-cache" })
      .then(function (response) {
        if (!response.ok) { throw new Error("HTTP " + response.status); }
        return response.json();
      })
      .then(function (data) {
        var today = todayInGreece();
        var upcoming = (Array.isArray(data.events) ? data.events : [])
          .filter(function (e) { return isValid(e) && e.date >= today; })
          .sort(function (a, b) { return (a.date + a.time).localeCompare(b.date + b.time); });
        if (limit > 0) { upcoming = upcoming.slice(0, limit); }
        if (upcoming.length > 0) { render(container, upcoming, headingTag); }
      })
      .catch(function () {
        // Keep the existing fallback text. Details are not shown to visitors.
      });
  }

  Array.prototype.forEach.call(document.querySelectorAll("[data-events-src]"), load);
})();
