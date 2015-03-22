#!/usr/bin/env bash

if [ $# -eq 0 ]; then
  meteor run --settings private/config/dev.json --port 8888
elif [ $# -ne 0 ]; then
  meteor run $1 $2
fi