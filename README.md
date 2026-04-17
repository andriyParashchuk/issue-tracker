# Demo
https://issue-tracker-sigma.vercel.app/

## 1. Clone repository

```bash
git clone git@github.com:andriyParashchuk/issue-tracker.git
cd issue-tracker
```

---

## 2. Install dependencies

```bash
npm install
# or
yarn install
```

---

## 3. Setup Supabase

### Enable required extensions:

In Supabase SQL editor:

```sql
create extension if not exists pg_graphql;
```

---

### Create tables (example)

```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  avatar_url TEXT
);

CREATE TABLE issues (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  status TEXT DEFAULT 'OPEN',
  priority TEXT DEFAULT 'MEDIUM',
  assignee_id UUID REFERENCES users(id),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE labels (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  color TEXT
);

CREATE TABLE issue_labels (
  issue_id UUID REFERENCES issues(id) ON DELETE CASCADE,
  label_id UUID REFERENCES labels(id) ON DELETE CASCADE,
  PRIMARY KEY (issue_id, label_id)
);

CREATE TABLE comments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  issue_id UUID REFERENCES issues(id) ON DELETE CASCADE,
  author_id UUID REFERENCES users(id),
  body TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER PUBLICATION supabase_realtime ADD TABLE issues;
```

---

### Ensure GraphQL API is enabled

Supabase automatically exposes GraphQL at:

```
https://<project-ref>.supabase.co/graphql/v1
```

---

## 4. Environment variables

Create `.env.local`:

```
NEXT_PUBLIC_SUPABASE_URL=your-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-key
NEXT_PUBLIC_GRAPHQL_ENDPOINT=https://your-project.supabase.co/graphql/v1
```

---

## 5. Run development server

```bash
npm run dev
```

App runs at:

```
http://localhost:3000
```

---

### Key fix

We replaced `nodeId` with `id` in Relay layer to ensure consistency across queries and mutations.


---

## ⚖️ Trade-offs

- Add filters
- Create Issue flow
- Strict UI structure
- Tests
- Linting
