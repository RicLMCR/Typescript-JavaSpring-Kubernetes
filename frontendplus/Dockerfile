# parent layer
FROM node:17-alpine

# create working dir to store app
WORKDIR /app

# copy package json file to
COPY package.json .

# Install dependencies
RUN npm install

# copy remaining files to
COPY . .

# Expose Port
EXPOSE 3000

# Startup app
CMD ["npm", "start"]

# build image
#  docker build -t kuberappfe .

# build & run container plus map ports and run in detached mode 
# docker run --name kuberapp1 -p 3000:3000 -d kuberappfe 

# start container
# docker start kuberapp1

# stop container
# docker stop kuberapp1