#!/usr/bin/env bash

if [ $# -eq 0 ]; then
  meteor run --settings private/config/product.json --port 9999
elif [ $# -ne 0 ]; then
  meteor run $1 $2
fi