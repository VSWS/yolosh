#!/usr/bin/env bash

set -x

APPDOMAIN="dev.yolosh.com"
APPENV=dev

if [ $1 = "product" ]; then
  APPDOMAIN="beta.yolosh.com"
  APPENV=product
fi

meteor deploy --settings "private/config/${APPENV}.json" $APPDOMAIN
sleep 20
curl "$APPDOMAIN/loadDatas"