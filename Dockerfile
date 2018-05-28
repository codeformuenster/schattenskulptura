FROM node:9.11-alpine

RUN apk add --no-cache \
    python make g++ git libpng-dev \
  && apk add --no-cache --repository http://nl.alpinelinux.org/alpine/edge/testing \
    vips vips-dev fftw-dev

RUN npm install --global npm@6.1.0
RUN npm install --global gatsby-cli

WORKDIR /usr/src/app
COPY package.json /usr/src/app/
COPY package-lock.json /usr/src/app/

RUN npm install
# RUN npm audit fix (or something)
COPY . /usr/src/app

# RUN gatsby build

CMD [ "gatsby", "develop", "--host=0.0.0.0", "--port=8000" ]

# CMD [ "gatsby", "build" ]
