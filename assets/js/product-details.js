document.addEventListener("DOMContentLoaded", () => {
  const host = document.querySelector("#productDetail");
  if (!host) return;
  const slug =
    new URLSearchParams(location.search).get("slug") || PRODUCTS[0].slug;
  const p = PRODUCTS.find((x) => x.slug === slug) || PRODUCTS[0];
  document.title = `${p.productName} | Polar Foods`;
  const msg = `Hello, I would like to enquire about ${p.productName}, ${p.brand}, ${p.packSizes.join(", ")}. Please share availability and supply details. Page: ${location.href}`;
  host.innerHTML = `<div class="detail-image"><img src="${p.mainImage}" alt="${p.productName}"></div><div><span class="kicker">${p.brand} · ${p.category}</span><h1>${p.productName}</h1><p>${p.fullDescription}</p><div class="badges"><span class="badge">${p.storageType}</span><span class="badge">${p.foodType}</span><span class="badge">${p.availability}</span></div><table class="detail-table"><tr><td>Product code</td><td>${p.productCode}</td></tr><tr><td>Pack sizes</td><td>${p.packSizes.join(", ")}</td></tr><tr><td>Storage</td><td>${p.storageType}</td></tr><tr><td>Suitable for</td><td>${p.industries.join(", ")}</td></tr></table><div class="hero-actions"><a class="btn btn-primary" target="_blank" href="${wa(msg)}">Enquire on WhatsApp</a><a class="btn btn-dark" data-phone>Call Now</a><button class="btn btn-outline" id="copyLink">Copy Product Link</button></div><div class="notice">Prices are shared only after confirming current availability, pack size and supply quantity.</div></div>`;
  shared();
  document.querySelector("#copyLink").onclick = async () => {
    await navigator.clipboard.writeText(location.href);
    document.querySelector("#copyLink").textContent = "Link Copied";
  };
  const rel = PRODUCTS.filter(
    (x) =>
      x.id !== p.id &&
      (x.categorySlug === p.categorySlug || x.brand === p.brand),
  ).slice(0, 4);
  document.querySelector("#relatedProducts").innerHTML = rel
    .map(productCard)
    .join("");
});
