const API_URL = process.env.REACT_APP_API_URL || "";
const LEADS_API_PATH = "/api/public/leads";
const LEADS_REQUEST_TIMEOUT_MS = 10000;

function mapBudgetToNumber(budget) {
  const budgets = {
    "Moins de 1 000 EUR": 1000,
    "1 000 a 3 000 EUR": 3000,
    "3 000 a 7 000 EUR": 7000,
    "7 000 a 15 000 EUR": 15000,
    "Plus de 15 000 EUR": 15000,
    "Je ne sais pas encore": 0,
  };

  return budgets[budget] ?? 0;
}

export function mapEstimationFormToLeadPayload(formData) {
  const searchParams =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search)
      : new URLSearchParams();

  return {
    prenom: formData.firstName.trim(),
    nom: formData.lastName.trim(),
    email: formData.email.trim(),
    telephone: formData.phone.trim(),
    ville: formData.city.trim(),
    codePostal: formData.postalCode.trim(),
    typeProjet: formData.projectType,
    budget: mapBudgetToNumber(formData.budget),
    budgetLabel: formData.budget,
    delai: formData.timeline,
    description: formData.description.trim(),
    source: "site_vitrine",
    landingPage:
      typeof window !== "undefined" ? window.location.pathname : "/estimation-projet",
    utmSource: searchParams.get("utm_source") || "",
    utmMedium: searchParams.get("utm_medium") || "",
    utmCampaign: searchParams.get("utm_campaign") || "",
    utmContent: searchParams.get("utm_content") || "",
    utmTerm: searchParams.get("utm_term") || "",
  };
}

export function getLeadsApiEndpoint() {
  if (!API_URL) return "";
  return `${API_URL.replace(/\/$/, "")}${LEADS_API_PATH}`;
}

export async function submitLead(payload) {
  const endpoint = getLeadsApiEndpoint();

  if (!endpoint) {
    throw new Error("Configuration API manquante. REACT_APP_API_URL est absent.");
  }

  const controller = new AbortController();
  const timeoutId = window.setTimeout(
    () => controller.abort(),
    LEADS_REQUEST_TIMEOUT_MS
  );

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    let data = null;
    try {
      data = await response.json();
    } catch {
      data = null;
    }

    if (!response.ok) {
      const message =
        data?.message ||
        data?.error ||
        "La demande n'a pas pu etre envoyee. Verifiez les informations saisies.";
      throw new Error(message);
    }

    return data;
  } catch (error) {
    if (error.name === "AbortError") {
      throw new Error("Le serveur met trop de temps a repondre. Reessayez dans un instant.");
    }

    throw error;
  } finally {
    window.clearTimeout(timeoutId);
  }
}
