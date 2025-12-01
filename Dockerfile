FROM --platform=$BUILDPLATFORM docker.io/library/node:24-alpine AS builder 
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

FROM docker.io/joseluisq/static-web-server:2.40.0
USER 1000
WORKDIR /var/www
COPY --from=builder /app/dist .
EXPOSE 3000/tcp
CMD ["--port", "3000", "--root", ".", "--cache-control-headers", "true", "--page-fallback", "./index.html", "--health"]