# Node.js CRUD API

A simple Node.js/Express REST API for managing goals, deployable on [Render](https://render.com).

## Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/goals` | List all goals |
| POST | `/api/goals` | Create a new goal |
| PUT | `/api/goals/:id` | Update a goal by ID |
| DELETE | `/api/goals/:id` | Delete a goal by ID |

### Example requests

```bash
# Get all goals
curl http://localhost:3000/api/goals

# Create a goal
curl -X POST http://localhost:3000/api/goals \
  -H "Content-Type: application/json" \
  -d '{"title": "My new goal"}'

# Update a goal
curl -X PUT http://localhost:3000/api/goals/1 \
  -H "Content-Type: application/json" \
  -d '{"title": "Updated goal"}'

# Delete a goal
curl -X DELETE http://localhost:3000/api/goals/1
```

## Running locally

```bash
npm install
node api.js
```

The server starts at `http://localhost:3000`.

## Using with OpenClaw

This API has [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) enabled, so it can be accessed directly from any browser-based client, including OpenClaw.

Point OpenClaw at your deployed API URL (e.g. `https://your-app.onrender.com`) and use the endpoints above to read and write goals data.
