# Step 1: Use an official Node.js runtime as a parent image
FROM node:18 AS build

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json (if present)
COPY package*.json ./

# Step 4: Install the app dependencies
RUN npm install

# Step 5: Copy the rest of the application code
COPY . .

# Step 6: Build the app for production
RUN npm run build

# Step 7: Serve the app using a lightweight web server (e.g., serve)
FROM nginx:alpine

# Step 8: Copy the build folder from the previous image
COPY --from=build /app/build /usr/share/nginx/html

# Step 9: Expose the port the app will run on
EXPOSE 80

# Step 10: Run nginx in the foreground to serve the app
CMD ["nginx", "-g", "daemon off;"]
