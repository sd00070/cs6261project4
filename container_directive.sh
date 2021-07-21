#!/bin/bash
ng build ./

http-server -p 4200 ./dist/cs6261project4/
