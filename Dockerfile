# Use an official Node.js runtime as a parent image
FROM node:21-alpine3.18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install --force

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port that your NestJS app will run on
EXPOSE 3000

# Define the command to run your application
CMD ["npm", "start"]
# CMD ["npm", "run", "start:debug"]
