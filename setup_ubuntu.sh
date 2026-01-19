#!/bin/bash

# Update package index
echo "Updating apt..."
sudo apt-get update -y

# Install prerequisites
echo "Installing prerequisites..."
sudo apt-get install -y ca-certificates curl gnupg

# Install Docker
echo "Installing Docker..."
sudo apt-get install -y docker.io

# Start and enable Docker
echo "Starting Docker service..."
sudo systemctl start docker
sudo systemctl enable docker

# Add current user to docker group to avoid using sudo for every command
echo "Adding user to docker group..."
sudo usermod -aG docker $USER

echo "----------------------------------------------------------------"
echo "Setup complete!"
echo "IMPORTANT: You must log out and log back in for the group changes to take effect."
echo "Alternatively, run: 'newgrp docker' to apply changes immediately."
echo "Then, run './deploy.sh' to start your app."
echo "----------------------------------------------------------------"
