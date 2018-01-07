FROM ubuntu:18.04

ENV BITCOIN_URL https://bitcoin.org/bin/bitcoin-core-0.15.1/bitcoin-0.15.1-x86_64-linux-gnu.tar.gz
ENV BITCOIN_DATA /data

RUN apt-get update \
  && apt-get install -y curl

RUN cd /tmp \
  && curl $BITCOIN_URL -o bitcoin.tar.gz \
  && tar -xzf bitcoin.tar.gz -C /usr/local --strip-components=1 --exclude=*-qt \
  && rm -rf /tmp/*

RUN mkdir "$BITCOIN_DATA" \
  && ln -sfn "$BITCOIN_DATA" /root/.bitcoin
VOLUME /data

COPY entry.sh /

COPY bitcoin.conf /root/
COPY bitcoin-client.conf /root/

COPY testnet.conf /root/
COPY testnet-client.conf /root/

EXPOSE 8332
EXPOSE 29000

CMD ["sh", "/entry.sh"]
