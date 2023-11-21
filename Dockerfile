# Use an official Node runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) files
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the project files into the working directory
COPY . .

# Build the app
RUN npm run build

# Set the port the app runs on
EXPOSE 4173

# Define the command to run the app
CMD ["npm", "run", "preview"]
