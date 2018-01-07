FROM node:carbon

RUN apt-get update
RUN apt-get install -y --no-install-recommends python-software-properties software-properties-common

WORKDISR /usr/src/

RUN npm install -g bitcore-node
RUN bitcore-node create mynode
RUN cd mynode
RUN bitcore-node install insight-api
RUN bitcore-node install insight-ui
# RUN bitcore-node start

EXPOSE 3000

CMD ["bitcore-node", "start"]
