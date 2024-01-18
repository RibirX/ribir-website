#!/bin/bash

# Accepts the `Ribir` relative to the root directory of the project as the first parameter

rm -rf ./docs
ln -s  "$1/docs/en" docs

rm -rf ./i18n/zh/docusaurus-plugin-content-docs/current
ln -s  ../../../$1/docs/zh ./i18n/zh/docusaurus-plugin-content-docs/current

