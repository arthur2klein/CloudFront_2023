# Angular
FROM node:21.2
RUN npm install -g @angular/cli

# WORKSPACE
RUN mkdir project
WORKDIR project

# Dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Run
COPY . .
CMD ng serve --host 0.0.0.0
