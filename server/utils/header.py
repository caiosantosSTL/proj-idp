import json

def GetHeader(scope):
    headers = {}
    for item in scope["headers"]:
        headers[item[0].decode('utf-8')] = item[1].decode('utf-8')
    return headers

def GetQueryString(scope):
    return { qs.split('=')[0] if '=' in qs else qs : qs.split('=')[1] if '=' in qs else True for qs in scope['query_string'].decode("utf-8").split("&") }

async def GetBody(receive):
    body = b''
    more_body = True
    while more_body:
        message = await receive()
        body += message.get('body', b'')
        more_body = message.get('more_body', False)

    post = {}
    for item in body.decode('utf-8').split("&"):
        if item:
            key, value = item.split("=")
            post[key] = value

    return post
