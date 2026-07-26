/**
 * Client-side API helpers for workflow integration.
 * Implement fetch wrappers here when connecting AI backend routes.
 */

const API_BASE = "/api";

export async function checkHealth() {
  const response = await fetch(`${API_BASE}/health`);
  return response.json();
}

export async function runWorkflow(payload: unknown) {
  const response = await fetch(`${API_BASE}/workflow`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return response.json();
}
