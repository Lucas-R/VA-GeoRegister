FROM node:22-alpine AS builder
WORKDIR /backend
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:22-alpine
RUN npm install -g npm@11.3.0
WORKDIR /backend
COPY --from=builder /backend/dist ./dist
COPY --from=builder /backend/node_modules ./node_modules
COPY --from=builder /backend/package*.json ./

EXPOSE 2000
CMD ["node", "dist/index.js"]