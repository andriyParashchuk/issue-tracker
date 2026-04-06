export async function fetchGraphQL<T>(
  request: string | { text: string }, 
  variables?: Record<string, unknown>
): Promise<T> {

  const queryText = typeof request === 'string' ? request : request.text;

  if (process.env.NODE_ENV === "development") {
    console.log("GraphQL Request:", { query: queryText, variables });
  }

  const res = await fetch(process.env.NEXT_PUBLIC_SUPABASE_GRAPHQL!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "apikey": process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      "Authorization": `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!}`
    },
    body: JSON.stringify({
      query: queryText,
      variables
    }),
    cache: "no-store"
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Network error: ${res.status} - ${errorText}`);
  }

  const json = await res.json();

  if (json.errors) {
    console.error("GraphQL errors:", json.errors);
    throw new Error(json.errors[0].message || "GraphQL Error");
  }

  return json;
}
