export async function fetchGraphQL<T>(
  text: string,
  variables?: Record<string, unknown>
): Promise<T> {
  if (process.env.NODE_ENV === "development") {
    console.log("GraphQL Request:", { text, variables });
  }

  const res = await fetch(process.env.NEXT_PUBLIC_SUPABASE_GRAPHQL!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    },
    body: JSON.stringify({
      query: text,
      variables
    }),
    cache: "no-store"
  });

  if (!res.ok) {
    throw new Error(`Network error: ${res.status}`);
  }

  const json: GraphQLResponse<T> = await res.json();

  if (json.errors) {
    console.error("GraphQL errors:", json.errors);
    throw new Error(json.errors[0].message);
  }

  return json.data as T;
}
