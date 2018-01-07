FROM node:carbon

RUN apt-get update
RUN apt-get install -y --no-install-recommends python-software-properties software-properties-common git

WORKDIR /usr/src/
RUN git clone https://github.com/rsksmart/explorer /usr/src/explorer
WORKDIR /usr/src/explorer

RUN npm install
COPY mainnet.json /usr/src/explorer/
COPY testnet.json /usr/src/explorer/
COPY db.patch.js /usr/src/explorer/db.js
COPY entry.sh /

EXPOSE 3000
CMD ["sh", "/entry.sh"]
