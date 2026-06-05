import { getSupabase } from "@/lib/supabase";

const VALID_PROJECT_TYPES = new Set([
  "Product Design",
  "Creative Direction",
  "Web Build",
  "Brand Systems",
  "Other",
]);

type ContactSubmission = {
  name: string;
  email: string;
  message: string;
  project_type: string;
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = typeof body?.name === "string" ? body.name.trim() : "";
    const email = typeof body?.email === "string" ? body.email.trim() : "";
    const message = typeof body?.message === "string" ? body.message.trim() : "";
    const projectType =
      typeof body?.projectType === "string" &&
      VALID_PROJECT_TYPES.has(body.projectType)
        ? body.projectType
        : "Other";

    if (!name || !email || !message) {
      return Response.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const supabase = getSupabase();

    if (!supabase) {
      return Response.json(
        { error: "Contact form is not configured yet." },
        { status: 503 }
      );
    }

    const { error } = await (supabase as any)
      .from("contact_submissions")
      .insert({
        name,
        email,
        message,
        project_type: projectType,
      });

    if (error) {
      return Response.json(
        { error: error.message ?? "Unable to save message." },
        { status: 500 }
      );
    }

    return Response.json({ ok: true });
  } catch (error) {
    return Response.json(
      { error: error instanceof Error ? error.message : "Unexpected error." },
      { status: 500 }
    );
  }
}
