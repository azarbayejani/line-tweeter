#!/bin/bash

cd "$(dirname "$0")";
node index.js
tail +2 in.txt > in.txt.bak
cp in.txt.bak in.txt
