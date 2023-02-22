FROM node:18.8.0-slim

LABEL description="This container serves as an entry point for our future Snek Function projects."
LABEL org.opencontainers.image.source="https://github.com/snek-functions/template"
LABEL maintainer="opensource@snek.at"

# Install Yarn
RUN npm install -g yarn

WORKDIR /app

COPY server.js /app

RUN yarn install --production

CMD ["sh", "-c", "node ./server.js $PORT"]

# SPDX-License-Identifier: (EUPL-1.2)
# Copyright © 2022 snek.at
