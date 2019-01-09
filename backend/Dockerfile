FROM python:3.7
MAINTAINER fiona "yum@fiona.pizza"

WORKDIR /adventext/backend
COPY requirements.txt /adventext/backend
COPY entrypoint.sh /adventext/backend

RUN pip install -r requirements.txt

EXPOSE 8000
CMD ["/adventext/backend/entrypoint.sh"]
