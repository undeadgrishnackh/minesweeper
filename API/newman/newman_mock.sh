# Execution on Jenkins with a docker container.
docker pull postman/newman;
docker run -t postman/newman run "https://www.getpostman.com/collections/e018467c7934e97ae78f"
