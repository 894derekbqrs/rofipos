async function loadPOSConfig() {
  // Get part of the path after "/pos/"
  const path = window.location.pathname.split('/').filter(Boolean);
  const key = path[1] || "restaurant1"; // default if none given

  try {
    const response = await fetch(`../configs/${key}.json`);
    const config = await response.json();

    document.getElementById("title").textContent = `${config.name} POS`;
    document.getElementById("content").innerHTML = `
      <p>Type: ${config.type}</p>
      <pre>${JSON.stringify(config, null, 2)}</pre>
    `;
  } catch (err) {
    document.getElementById("title").textContent = "Not Found";
    document.getElementById("content").textContent = "No configuration found for this URL.";
  }
}

loadPOSConfig();
