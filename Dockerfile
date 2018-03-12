FROM node:8.9.4
RUN mkdir -p /user/src/proxy
WORKDIR /user/src/proxy
COPY . /user/src/proxy
RUN npm install
EXPOSE 3000
CMD npm run docker