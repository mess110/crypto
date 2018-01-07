FROM ubuntu:latest

MAINTAINER RSK Release <support@rsk.co>

ARG DEBIAN_FRONTEND=noninteractive

RUN apt-get update
RUN apt-get install -y --no-install-recommends supervisor python-software-properties software-properties-common

RUN groupadd --gid 888 rsk && useradd rsk -d /var/lib/rsk -s /sbin/nologin --uid=888 --gid=888

RUN \
  add-apt-repository -y ppa:rsksmart/rskj && \
  apt-get update && \
  (echo rskj shared/accepted-rsk-license-v1-1 select true | /usr/bin/debconf-set-selections )&& \
  apt-get install -y --no-install-recommends rskj && \
  apt-get clean && \
  rm -rf /var/lib/apt/lists/*

COPY rskj-core-0.4.0-BAMBOO-all.jar /usr/share/rsk/
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf
COPY mainnet.conf /etc/rsk/mainnet.conf
COPY testnet.conf /etc/rsk/testnet.conf
COPY entry.sh /

EXPOSE 4444
EXPOSE 50505

CMD ["sh", "entry.sh"]
