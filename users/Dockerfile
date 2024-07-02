############
# COMPILE TS
############

FROM node:22-slim AS builder

WORKDIR /app

RUN apt-get update -y && \
    apt-get install -y openssl && \
    npm install -g pnpm

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm dlx prisma migrate deploy && \
    pnpm dlx prisma generate && \
    pnpm build

###################
# BUILD FINAL IMAGE
###################

FROM node:22-slim

WORKDIR /app

COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/package.json /app/package.json

CMD ["node", "dist/main.js"]