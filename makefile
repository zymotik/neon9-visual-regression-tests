#!/bin/bash
SHELL := /bin/bash

# use to test environment variables locally:
# include .env

get-domain-list:
ifeq (,$(wildcard ./out))
	mkdir out
endif
	curl -X GET "https://${PLESK-URL}/api/v2/domains" -H "accept: application/json" -H "X-API-Key: ${PLESK-API-KEY}" > ./out/domains.json


test:
	@docker-compose build cypress
	@docker-compose run --rm cypress
