ARG NODE_VERSION=20.9.0

# Setup PNPM
FROM node:${NODE_VERSION}-alpine AS base
RUN apk add --no-cache libc6-compat
RUN apk update
WORKDIR /workspace
# enable corepack for pnpm
RUN corepack enable

FROM base as fetcher
# pnpm fetch only requires lockfile, but we'll need to build workspaces
COPY pnpm*.yaml ./
# COPY patches ./patches
# mount pnpm store as cache & fetch dependencies
RUN --mount=type=cache,id=pnpm-store,target=/root/.local/share/pnpm-store \
  pnpm fetch --ignore-scripts

FROM fetcher as builder
ARG APP_NAME="@ham/annie"
ENV APP_NAME=${APP_NAME}
WORKDIR /workspace
COPY . .

RUN pnpm install --frozen-lockfile --offline 

RUN --mount=type=cache,target=/workspace/node_modules/.cache \
  pnpm turbo run build --filter="${APP_NAME}"

FROM builder as deployer
WORKDIR /workspace
# deploy app
RUN pnpm --filter ${APP_NAME} deploy --prod --ignore-scripts ./out

FROM base as runner
WORKDIR /workspace
# Don't run production as root
RUN addgroup --system --gid 1001 mygroup
RUN adduser --system --uid 1001 myuser
USER myuser
# copy files needed to run the app
COPY --chown=myuser:mygroup --from=deployer /workspace/out/package.json .
COPY --chown=myuser:mygroup --from=deployer /workspace/out/node_modules/ ./node_modules
COPY --chown=myuser:mygroup --from=deployer /workspace/out/dist/ ./dist

ENV NODE_ENV=${NODE_ENV}
ENV DATABASE_URL=${DATABASE_URL}
ENV DATABASE_TOKEN=${DATABASE_TOKEN}
ENV DISCORD_TOKEN=${DISCORD_TOKEN}
ENV DISCORD_CLIENT_ID=${DISCORD_CLIENT_ID}

CMD ["node", "./dist/index.js"]

