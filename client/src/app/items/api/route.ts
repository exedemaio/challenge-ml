export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get("search");
  const res = await fetch(`http://localhost:8080/items?q=${search}&limit=4`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const items = await res.json();
  return Response.json(items);
}
