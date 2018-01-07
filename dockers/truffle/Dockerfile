FROM node:carbon

RUN apt-get update
RUN apt-get install -y --no-install-recommends python-software-properties software-properties-common git

WORKDIR /usr/app

RUN npm install -g truffle http-server

RUN git clone https://github.com/mess110/html-games.git

COPY truffle.js .
COPY entry.sh /

CMD ["sh", "/entry.sh"]
