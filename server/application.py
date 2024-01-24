# -*- coding: utf-8 -*-
#!/usr/bin/env python

import os
import time
import random
import traceback

# TEMPLATE
from mako.template import Template
from mako.lookup import TemplateLookup

# UTILS
from .utils.header import GetHeader, GetQueryString, GetBody
from .utils.static import IsStatic, StaticContent

async def app(scope, receive, send):

    # REQUEST VARS
    PATH = scope["path"]
    HEADERS = GetHeader(scope)
    QUERY_STRING = GetQueryString(scope)

    try:
        # SE ARQUIVO ESTÁTICO
        if IsStatic(PATH):
            await StaticContent(PATH, send)

        else:

            # PATTERN DEFAULT PATH
            if PATH == '/':
                PATH = '/index'

            if PATH.endswith('/'):
                PATH = PATH[:-1]

            # TEMPLATE LOOKUP
            lookup = TemplateLookup(directories=['__html__'], default_filters=['decode.utf8'], input_encoding='utf-8', output_encoding='utf-8', encoding_errors='replace')

            # GET FILE URL
            html = f"{PATH[1:]}.html"

            # LOAD TEMPLATE
            template = lookup.get_template(html).render()

            await send({
                'type': 'http.response.start',
                'status': 200,
                'headers': [
                    [b'content-type', b'text/html'],
                ]
            })

            # RESPONSE HTML
            await send({
                'type': 'http.response.body',
                'body': template,
            })


    except Exception as e:

        print(e)
        print(traceback.print_exc())
