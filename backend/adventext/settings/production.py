from .common import *

DEBUG = False
SECRET_KEY = env('DJANGO_SECRET_KEY')
SIMPLE_JWT['SIGNING_KEY'] = env('JWT_SIGNING_KEY')
