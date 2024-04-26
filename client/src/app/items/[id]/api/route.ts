export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const res = await fetch(`http://localhost:8080/items/${params.id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const item = await res.json();

  return Response.json(item);
}
