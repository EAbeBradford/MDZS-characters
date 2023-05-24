# # syntax = docker/dockerfile:1

# # Adjust NODE_VERSION as desired
# ARG NODE_VERSION=16.18.0
# FROM node:${NODE_VERSION}-slim as base

# LABEL fly_launch_runtime="NestJS"

# # NestJS app lives here
# WORKDIR /app

# # Set production environment
# ENV NODE_ENV=production


# # Throw-away build stage to reduce size of final image
# FROM base as build

# # Install packages needed to build node modules
# RUN apt-get update -qq && \
#     apt-get install -y python pkg-config build-essential 

# # Install node modules
# COPY --link package.json package-lock.json ./
# RUN npm ci --include=dev

# # Copy application code
# COPY --link . .

# # Build application
# RUN npm run build


# # Final stage for app image
# FROM base

# # Copy built application
# COPY --from=build /app /app

# # Start the server by default, this can be overwritten at runtime
# EXPOSE 3000
# CMD [ "npm", "run", "start" ]




# new docker file

# PRODUCTION DOCKERFILE
# ---------------------
# This Dockerfile allows to build a Docker image of the NestJS application
# and based on a NodeJS 16 image. The multi-stage mechanism allows to build
# the application in a "builder" stage and then create a lightweight production
# image containing the required dependencies and the JS build files.
# 
# Dockerfile best practices
# https://docs.docker.com/develop/develop-images/dockerfile_best-practices/
# Dockerized NodeJS best practices
# https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md
# https://www.bretfisher.com/node-docker-good-defaults/
# http://goldbergyoni.com/checklist-best-practice-of-node-js-in-production/

FROM node:16-alpine as builder

ENV NODE_ENV build

# USER node
WORKDIR /home/node

COPY package*.json ./
RUN npm ci

COPY --chown=node:node . .
RUN npm run build \
    && npm prune --production

# ---

FROM node:16-alpine

ENV NODE_ENV production

# USER node
WORKDIR /home/node

COPY --from=builder --chown=node:node /home/node/package*.json ./
COPY --from=builder --chown=node:node /home/node/node_modules/ ./node_modules/
COPY --from=builder --chown=node:node /home/node/dist/ ./dist/

CMD ["node", "dist/main.js"]