FROM python:3.11-slim
WORKDIR /usr/src/wind_bnb

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN pip install --upgrade pip
COPY ./requirements.txt /usr/src/wind_bnb/requirements.txt
RUN pip install -r requirements.txt

COPY ./wind_bnb /usr/src/wind_bnb
COPY ./manage.py /usr/src/wind_bnb
