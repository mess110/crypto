#!/usr/bin/env sh
cp $EXPLORER_CONFIG /usr/src/explorer/config.json
/usr/bin/supervisord
