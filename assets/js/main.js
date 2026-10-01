(function () {
  "use strict";

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  var header = document.getElementById("header");
  var nav = document.getElementById("site-nav");
  var toggle = document.getElementById("nav-toggle");
  var hero = document.getElementById("hero");
  var toTop = document.getElementById("to-top");

  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });

  var spyLinks = Array.prototype.slice.call(document.querySelectorAll("[data-spy]"));
  var spyIds = spyLinks.map(function (a) { return a.getAttribute("href").slice(1); });

  function onScroll() {
    if (header) header.classList.toggle("is-stuck", window.scrollY > 40);
    if (toTop) toTop.classList.toggle("is-on", window.scrollY > 600);
    spy();
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  function spy() {
    var y = window.scrollY + 120;
    var current = spyIds[0];
    spyIds.forEach(function (id) {
      var el = document.getElementById(id);
      if (el && el.offsetTop <= y) current = id;
    });
    spyLinks.forEach(function (a) {
      var on = a.getAttribute("href") === "#" + current;
      if (on) a.setAttribute("aria-current", "true");
      else a.removeAttribute("aria-current");
    });
  }

  function closeNav() {
    if (!nav || !toggle) return;
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("nav-open");
  }
  function openNav() {
    nav.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
    document.body.classList.add("nav-open");
    var first = nav.querySelector("a");
    if (first) first.focus();
  }
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      if (toggle.getAttribute("aria-expanded") === "true") closeNav();
      else openNav();
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) closeNav();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeNav();
      if (e.key !== "Tab" || !nav.classList.contains("is-open")) return;
      var nodes = [toggle].concat(Array.prototype.slice.call(nav.querySelectorAll("a, button")));
      var first = nodes[0];
      var last = nodes[nodes.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    });
  }

  var slides = [
    { a: "The Best Global", b: "Logistics Solutions.", sub: "Competitive advantages to some of the largest companies all over the world." },
    { a: "Innovative", b: "Transportation!", sub: "Empowering leading companies nationwide with superior logistics strategies." },
    { a: "TRAEZ", b: "Delivery Management System", sub: "End-to-end trip and delivery management with real-time tracking, automation and transparency — cutting costs and idle time while maximizing driver efficiency." },
    { a: "Manpower", b: "Services", sub: "End-to-end manpower solutions across South India, with tailored team selection and ongoing monitoring to ensure reliability across industries." },
    { a: "Driver", b: "Services", sub: "Local and outstation services for goods and passenger segments, on a trip, hourly, daily or monthly basis — with 24/7 support, vehicle stock-movement tracking and reliable assistance." }
  ];
  var titleEl = document.getElementById("hero-title");
  var subEl = document.getElementById("hero-sub");
  var live = document.getElementById("hero-live");
  var segs = Array.prototype.slice.call(document.querySelectorAll(".seg"));
  var slideEls = Array.prototype.slice.call(document.querySelectorAll(".hero__slide"));
  var slideIndex = 0;
  var heroPaused = false;

  function ensureImage(el) {
    if (!el || el.querySelector("img") || !el.getAttribute("data-src")) return;
    var img = document.createElement("img");
    img.src = el.getAttribute("data-src");
    img.alt = "";
    img.width = Number(el.getAttribute("data-w")) || 1600;
    img.height = Number(el.getAttribute("data-h")) || 900;
    img.decoding = "async";
    el.appendChild(img);
  }

  function paintSlide(i) {
    slideIndex = i;
    var data = slides[i];
    if (titleEl) {
      titleEl.innerHTML = '<span class="line"><span>' + data.a + "</span></span>" +
        '<span class="line"><span class="fade">' + data.b + "</span></span>";
    }
    if (subEl) subEl.textContent = data.sub;
    var note = document.getElementById("hero-note");
    if (note) note.hidden = i < 2;
    if (live) live.textContent = "Slide " + (i + 1) + " of " + slides.length + ". " + data.a + " " + data.b;
    slideEls.forEach(function (el, n) {
      el.classList.toggle("is-active", n === i);
      if (n === i || n === (i + 1) % slideEls.length) ensureImage(el);
    });
    segs.forEach(function (seg, n) {
      seg.classList.toggle("is-active", n === i);
      seg.classList.toggle("is-done", n < i);
      if (n === i) seg.setAttribute("aria-current", "true");
      else seg.removeAttribute("aria-current");
      var bar = seg.querySelector("i");
      if (bar && n === i && !reduce) {
        bar.style.animation = "none";
        void bar.offsetWidth;
        bar.style.animation = "";
      }
    });
    if (hero && !reduce) {
      hero.classList.remove("is-playing");
      void hero.offsetWidth;
      hero.classList.add("is-playing");
    }
  }

  function nextSlide() {
    if (heroPaused || reduce) return;
    paintSlide((slideIndex + 1) % slides.length);
  }

  if (hero && titleEl) {
    paintSlide(0);
    if (!reduce) hero.classList.add("is-playing");
    segs.forEach(function (seg, n) {
      seg.addEventListener("click", function () { paintSlide(n); });
    });
    hero.addEventListener("animationend", function (e) {
      if (e.animationName === "fill" && !heroPaused && !reduce) nextSlide();
    });
    function pause() { heroPaused = true; hero.classList.add("is-paused"); }
    function resume() { heroPaused = false; hero.classList.remove("is-paused"); }
    hero.addEventListener("mouseenter", pause);
    hero.addEventListener("mouseleave", resume);
    hero.addEventListener("focusin", pause);
    hero.addEventListener("focusout", function (e) {
      if (!hero.contains(e.relatedTarget)) resume();
    });
  }

  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role="tab"][data-service]'));
  var panels = Array.prototype.slice.call(document.querySelectorAll('[role="tabpanel"]'));
  var services = document.getElementById("textContentSection");

  function openService(id, scroll) {
    var tab = document.getElementById("tab-" + id);
    if (!tab) return;
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute("aria-selected", on ? "true" : "false");
      t.tabIndex = on ? 0 : -1;
    });
    panels.forEach(function (p) {
      var on = p.id === "panel-" + id;
      p.hidden = !on;
    });
    var hash = "#service=" + id;
    if (location.hash !== hash) history.pushState(null, "", hash);
    if (scroll && services) {
      services.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    }
    if (window.matchMedia("(max-width: 991px)").matches) {
      tab.scrollIntoView({ inline: "center", block: "nearest", behavior: reduce ? "auto" : "smooth" });
    }
  }

  tabs.forEach(function (tab, index) {
    tab.addEventListener("click", function () { openService(tab.getAttribute("data-service"), false); });
    tab.addEventListener("keydown", function (e) {
      var vertical = window.matchMedia("(min-width: 992px)").matches;
      var prev = e.key === "ArrowUp" || e.key === "ArrowLeft";
      var next = e.key === "ArrowDown" || e.key === "ArrowRight";
      if (!prev && !next && e.key !== "Home" && e.key !== "End") return;
      if (vertical && (e.key === "ArrowLeft" || e.key === "ArrowRight")) return;
      e.preventDefault();
      var dest = index;
      if (e.key === "Home") dest = 0;
      else if (e.key === "End") dest = tabs.length - 1;
      else if (next) dest = (index + 1) % tabs.length;
      else if (prev) dest = (index - 1 + tabs.length) % tabs.length;
      tabs[dest].focus();
      openService(tabs[dest].getAttribute("data-service"), false);
    });
  });

  document.addEventListener("click", function (e) {
    var trigger = e.target.closest("[data-open]");
    if (!trigger) return;
    e.preventDefault();
    openService(trigger.getAttribute("data-open"), true);
  });

  function readHash() {
    var match = (location.hash || "").match(/^#service=([a-z0-9-]+)$/);
    if (match) openService(match[1], true);
  }
  window.addEventListener("popstate", readHash);
  readHash();

  var cityButtons = Array.prototype.slice.call(document.querySelectorAll(".city"));
  var addrName = document.getElementById("addr-name");
  var addrBody = document.getElementById("addr-body");
  var mapFrame = document.getElementById("location-map");

  function showCity(btn) {
    cityButtons.forEach(function (b) { b.setAttribute("aria-pressed", b === btn ? "true" : "false"); });
    if (addrName) addrName.textContent = btn.getAttribute("data-name");
    if (addrBody) {
      var phones = (btn.getAttribute("data-phones") || "").split(";").map(function (pair) {
        var bits = pair.split("|");
        return "<p><a href=\"" + bits[1] + "\">" + bits[0] + "</a></p>";
      }).join("");
      addrBody.innerHTML = "<p>" + btn.getAttribute("data-address") + "</p>" + phones +
        "<p><a href=\"mailto:info@avanzalogistics.in\">info@avanzalogistics.in</a></p>";
    }
    if (mapFrame) {
      mapFrame.src = btn.getAttribute("data-map");
      mapFrame.title = btn.getAttribute("data-title");
    }
  }
  cityButtons.forEach(function (btn) {
    btn.addEventListener("click", function () { showCity(btn); });
  });

  var copyBtn = document.getElementById("copy-address");
  if (copyBtn) {
    copyBtn.addEventListener("click", function () {
      var card = document.getElementById("addr-card");
      var text = card ? card.innerText.replace("Copy address", "").trim() : "";
      var label = copyBtn.querySelector("span");
      function done() { if (label) { label.textContent = "Copied"; setTimeout(function () { label.textContent = "Copy address"; }, 1600); } }
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done);
    });
  }

  var stat = document.querySelector("[data-count]");
  if (stat) {
    var target = Number(stat.getAttribute("data-count"));
    if (reduce) {
      stat.textContent = target.toLocaleString("en-IN");
    } else {
      var counted = false;
      var counterWatch = new IntersectionObserver(function (entries) {
        if (!entries[0].isIntersecting || counted) return;
        counted = true;
        var start = performance.now();
        var dur = 1200;
        function tick(now) {
          var t = Math.min(1, (now - start) / dur);
          var eased = 1 - Math.pow(1 - t, 3);
          stat.textContent = Math.round(target * eased).toLocaleString("en-IN");
          if (t < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      }, { threshold: 0.6 });
      counterWatch.observe(stat);
    }
  }

  if (!reduce && "IntersectionObserver" in window) {
    var revealWatch = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        revealWatch.unobserve(entry.target);
      });
    }, { threshold: 0.16 });
    document.querySelectorAll(".reveal").forEach(function (el) { revealWatch.observe(el); });
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("is-in"); });
  }

  if (fine && !reduce) {
    document.querySelectorAll(".glass").forEach(function (card) {
      card.addEventListener("pointermove", function (e) {
        var r = card.getBoundingClientRect();
        card.style.setProperty("--mx", (e.clientX - r.left) + "px");
        card.style.setProperty("--my", (e.clientY - r.top) + "px");
      });
    });
  }

  var parallax = document.querySelector(".solutions__bg");
  var solutions = document.getElementById("Banner2");
  if (parallax && solutions && !reduce) {
    window.addEventListener("scroll", function () {
      var rect = solutions.getBoundingClientRect();
      var shift = Math.max(-24, Math.min(24, rect.top / window.innerHeight * 24));
      parallax.style.transform = "translateY(" + shift + "px)";
    }, { passive: true });
  }

  document.querySelectorAll(".cert img").forEach(function (img) {
    function show() {
      if (img.naturalWidth > 0) {
        img.hidden = false;
        var badge = img.parentElement.querySelector(".cert__badge");
        if (badge) badge.hidden = true;
      }
    }
    img.addEventListener("load", show);
    if (img.complete) show();
  });

  if (toTop) {
    toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
    });
  }
})();
