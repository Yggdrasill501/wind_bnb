"""Module with ASGI config for wind_bnb project."""
import os
from django.core.asgi import get_asgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'wind_bnb.settings')

application = get_asgi_application()
