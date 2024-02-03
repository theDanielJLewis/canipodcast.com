import apps from "src/data/apps";

export async function GET(req: Request, res: Response) {
  return Response.json(apps);
}
