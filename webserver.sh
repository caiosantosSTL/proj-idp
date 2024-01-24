env/bin/uvicorn server.application:app --port 8080 --interface=asgi3 --workers 4 --lifespan off
