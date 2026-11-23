(() => {
  const target = new URL("https://medpanel.orquestrator.ai/");
  const prefix = "/medpainel-redirecionamento";
  let path = window.location.pathname;
  if (window.location.hostname.endsWith(".github.io") && path.startsWith(prefix + "/")) path = path.slice(prefix.length);
  target.pathname = path;
  target.search = window.location.search;
  target.hash = window.location.hash;
  window.location.replace(target.href);
})();
