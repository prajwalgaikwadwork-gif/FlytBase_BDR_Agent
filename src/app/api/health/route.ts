import { NextResponse } from "next/server";

/**
 * Placeholder health check endpoint.
 * Extend with workflow orchestration in the next phase.
 */
export async function GET() {
  return NextResponse.json({
    status: "ok",
    service: "flytbase-bdr-agent",
    message: "API ready for AI workflow integration",
  });
}
