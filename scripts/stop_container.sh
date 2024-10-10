#!/bin/bash
set -e
# Uncomment the next line for debugging purposes
# set -x

# Stop the running containers (if any)
container_ids=$(docker ps -q)

if [ -n "$container_ids" ]; then
    echo "Stopping and removing the following containers:"
    echo "$container_ids"
    docker rm -f $container_ids
else
    echo "No running containers to stop."
fi
