# parent layer
FROM node:17-alpine

# create working dir to store app
WORKDIR /app

# copy files from/to
COPY . .

# Install dependencies
RUN npm install

# Expose Port
EXPOSE 3000

# Startup app
CMD ["npm", "start"]

# build image
#  docker build -t kuberappfe .

# build & run container
# docker run --name kuberapp1 -p 3000:3000 -d kuberappfe 

# start container
# docker start kuberapp1

# stop container
# docker stop kuberapp1