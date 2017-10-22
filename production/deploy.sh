#!/bin/bash
cd .deploy
echo "running mup setup"
mup setup
echo "deploying"
mup deploy
