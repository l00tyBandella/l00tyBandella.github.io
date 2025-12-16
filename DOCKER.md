# Dockerizing this site

Build the production static site and serve it with nginx inside a container.

Build locally (produces the image):

```bash
# from repo root
docker build -t l00tybandella-site:latest .
```

Run container:

```bash
docker run -p 5000:80 --rm l00tybandella-site:latest
# open http://localhost:5000
```

Or use docker-compose:

```bash
docker compose up --build
# open http://localhost:5000
```

Notes:
- The Dockerfile uses a multi-stage build: Node (build) → nginx (serve).
- If you change code, rebuild the image to see updates.
