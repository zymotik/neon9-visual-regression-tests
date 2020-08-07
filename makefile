#!/bin/bash
SHELL := /bin/bash
MSG_BUILD := +++ :cypress: :docker: Building image with custom dependencies
MSG_TEST := +++ :cypress: :mag: Executing Cypress tests

# use to test environment variables locally:
# include .env

get-domain-list:
ifeq (,$(wildcard ./out))
	mkdir out
endif
	curl -X GET "https://${PLESK-URL}/api/v2/domains" -H "accept: application/json" -H "X-API-Key: ${PLESK-API-KEY}" > ./out/domains.json


test:
	@echo $(MSG_BUILD)
	@docker-compose build cypress
	@echo $(MSG_TEST)
	@docker-compose run --rm -T cypress
