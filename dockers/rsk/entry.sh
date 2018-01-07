#!/usr/bin/env sh
chown -R rsk:rsk /var/lib/rsk/database/
/usr/bin/supervisord
