import tags from "src/data/rssTags";

export async function GET(req: Request, res: Response) {
  return Response.json(tags);
}
