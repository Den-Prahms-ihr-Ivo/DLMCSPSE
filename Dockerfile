# Build Stage
FROM node:18-alpine AS build
WORKDIR /app
COPY /plane-rotation/package*.json ./
RUN npm install
COPY /plane-rotation .
RUN npm run build
 

# Production Stage
FROM nginx:stable-alpine AS production
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 3137
CMD ["nginx", "-g", "daemon off;"]