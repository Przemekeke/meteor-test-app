#!/bin/bash 
APP_NAME=myapp
APP_DOMAIN=localhost
APP_PORT=3000
SETTINGS_PATH=.config/staging/settings.json
MONGO_URL=localhost
MONGO_PORT=27017
MONGO_DB=myappdb
echo "=> Removing ../${APP_NAME}-build"
rm -R ../${APP_NAME}-build
echo "=> Executing Meteor Build…"
meteor build \
--allow-superuser \
--directory ../${APP_NAME} \
--server=http://${APP_DOMAIN}:${APP_PORT}/
echo "=> Copying settings file"
cp ${SETTINGS_PATH} ../${APP_NAME}/bundle/sesettings.json
echo "=> Moving to ../${APP_NAME}/bundle"
cd ../${APP_NAME}/bundle
touch Dockerfile
echo "FROM node:4.4.7
COPY . /bundle
RUN (cd /bundle/programs/server && npm install)
ENV PORT=80
EXPOSE 80
CMD node /bundle/main.js" >> Dockerfile
docker build -t khamoud/myapp .
docker run -d -p 8080:80 -e ROOT_URL=http://localhost khamoud/myapp




