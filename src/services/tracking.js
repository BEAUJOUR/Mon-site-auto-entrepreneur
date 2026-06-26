const GOOGLE_ADS_LEAD_SEND_TO = "AW-18236565518/SEND_TO_ID";

function getGtag() {
  return typeof window !== "undefined" && typeof window.gtag === "function"
    ? window.gtag
    : null;
}

function getFbq() {
  return typeof window !== "undefined" && typeof window.fbq === "function"
    ? window.fbq
    : null;
}

export function trackLandingEvent(eventName, parameters = {}) {
  const gtag = getGtag();
  if (!gtag) return { sent: false, reason: "gtag unavailable" };

  gtag("event", eventName, {
    page_name: "estimation_projet",
    page_location:
      typeof window !== "undefined" ? window.location.href : undefined,
    ...parameters,
  });

  return { sent: true };
}

export function trackGenerateLead(payload = {}) {
  const gtag = getGtag();
  if (!gtag) return { sent: false, reason: "gtag unavailable" };

  gtag("event", "generate_lead", {
    currency: "EUR",
    value: payload.budget || 0,
    lead_source: payload.source || "site_vitrine",
    lead_type: payload.typeProjet || "",
    event_category: "lead",
    event_label: "estimation_projet",
  });

  return { sent: true };
}

export function trackGoogleAdsLeadConversion(payload = {}) {
  const gtag = getGtag();
  if (!gtag) return { sent: false, reason: "gtag unavailable" };
  if (GOOGLE_ADS_LEAD_SEND_TO.includes("SEND_TO_ID")) {
    return { sent: false, reason: "missing send_to id" };
  }

  gtag("event", "conversion", {
    send_to: GOOGLE_ADS_LEAD_SEND_TO,
    value: payload.budget || 0,
    currency: "EUR",
  });

  return { sent: true };
}

export function trackMetaLead(payload = {}) {
  const fbq = getFbq();
  if (!fbq) return { sent: false, reason: "fbq unavailable" };

  fbq("track", "Lead", {
    content_name: "Demande estimation projet",
    content_category: payload.typeProjet || "Agencement interieur",
    value: payload.budget || 0,
    currency: "EUR",
  });

  return { sent: true };
}

export function trackLeadSuccess(payload = {}) {
  return {
    ga4: trackGenerateLead(payload),
    googleAds: trackGoogleAdsLeadConversion(payload),
    meta: trackMetaLead(payload),
  };
}
