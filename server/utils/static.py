import os

def IsStatic(path):
    is_static = False
    if "/static/" in path:
        is_static = True
    elif "/assets/" in path:
        is_static = True
    elif path == "/service-worker.js":
        is_static = True
    elif path == "/manifest.json":
        is_static = True
    elif path == "/robots.txt":
        is_static = True
    elif path == "/favicon.ico":
        is_static = True
    return is_static

async def StaticContent(path, send):

    _static_file  = open(f"__html__{path}",'rb').read()

    content_type = b'application/javascript'

    if path.endswith('svg'):
        content_type = b'image/svg+xml'

    elif path.endswith('css'):
        content_type = b'text/css'

    await send({
        'type': 'http.response.start',
        'status': 200,
        'headers': [
            [b'content-type', content_type],
        ]
    })

    # RESPONSE HTML
    await send({
        'type': 'http.response.body',
        'body': _static_file,
    })
