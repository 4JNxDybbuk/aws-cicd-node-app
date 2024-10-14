#!/bin/bash
set -e

# Pull the Docker image from Docker Hub
docker pull aniketnitu2026/node-app-aws-devops

# Run the Docker image as a container
docker run --init -d -p 5000:5000 aniketnitu2026/node-app-aws-devops
