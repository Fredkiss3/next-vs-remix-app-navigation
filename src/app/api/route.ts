export const dynamic = "force-dynamic";
export function GET(req: Request) {
  return new Response(new Date().toISOString());
}
