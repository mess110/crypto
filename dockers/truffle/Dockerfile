FROM node:carbon

WORKDIR /usr/app

RUN npm install -g truffle http-server

COPY truffle.js .
COPY entry.sh /

CMD ["sh", "/entry.sh"]
