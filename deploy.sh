#!/bin/bash

# Build the Docker image
echo "Building Docker image..."
docker build -t vulneb-app .

# Stop any running instance
echo "Stopping existing container..."
docker stop vulneb-container 2>/dev/null || true
docker rm vulneb-container 2>/dev/null || true

# Run the container
echo "Starting container on port 3000..."
docker run -d \
  --name vulneb-container \
  -p 3000:3000 \
  --restart unless-stopped \
  vulneb-app

echo "Deployment complete! App running at http://localhost:3000 (or your EC2 IP)"
