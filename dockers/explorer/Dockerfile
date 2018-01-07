FROM node:carbon

RUN apt-get update
RUN apt-get install -y --no-install-recommends supervisor python-software-properties software-properties-common git

WORKDIR /usr/src/
RUN git clone https://github.com/rsksmart/explorer /usr/src/explorer
WORKDIR /usr/src/explorer

RUN npm install

COPY mainnet.json /usr/src/explorer/
COPY testnet.json /usr/src/explorer/

COPY db.patch.js /usr/src/explorer/db.js
COPY grabber.patch.js /usr/src/explorer/tools/grabber.js

COPY explorer.conf /etc/supervisor/conf.d/explorer.conf
COPY grabber.conf /etc/supervisor/conf.d/grabber.conf

EXPOSE 3000

COPY entry.sh /
CMD ["sh", "/entry.sh"]
