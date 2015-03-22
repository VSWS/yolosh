#!/usr/bin/env bash

set -x

APPHOST="dev.yolosh"

if [ $1 = "product" ]; then
  APPHOST="yolosh"
fi


APPDOMAIN="$APPHOST.meteor.com"
APPENV=product

meteor deploy --settings "private/config/${APPENV}.json" $APPDOMAIN
sleep 20
curl "$APPDOMAIN/loadDatas"