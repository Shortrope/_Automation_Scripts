#!/bin/bash
# mkproj    // make project
#           // this will create the base directory structure
#           // and copy the automation script into the project
#

# Get project name if not given as a command line arg
#-----------------------------------------------------
PNAME="$1"
if [ ! "$PNAME" ]; then
    # get project name
    until [ "$PNAME" ]; do
        printf "Project Name: "
        read PNAME
    done
fi

# create project folder
#-----------------------------------------------------
mkdir "$PNAME" || exit 1

# create base directory structure
#-----------------------------------------------------
cd $PNAME
mkdir -p src/scss
mkdir src/js
mkdir src/images

mkdir -p build/dev/css
mkdir build/dev/js
mkdir build/dev/images

mkdir -p build/production/css
mkdir build/production/js
mkdir build/production/images

cp E:/_Templates/index.jade src/
touch src/index.jade
touch src/scss/style.scss
touch src/js/script.js

# copy automation script
#-----------------------------------------------------
cp E:/_Automation_Scripts/gulp_browser-sync/package.json ./
cp E:/_Automation_Scripts/gulp_browser-sync/gulpfile.js ./

# edit package.json file: name, description
#-----------------------------------------------------
printf "Project Description: "
read PDESC
echo $PDESC
sed -i '/Project_Name/ s@Project_Name@'"$PNAME"'@g' package.json
sed -i '/Project_Description/ s@Project_Description@'"$PDESC"'@g' package.json
# run npm install
#-----------------------------------------------------
npm install

# initialize git
#-----------------------------------------------------
git init

# Show Validation
#-----------------------------------------------------
clear
echo -------------------------------------------------
echo Directory structure
echo -------------------------------------------------
echo
ll -Rd
cd ..
echo;echo -------------------------------------------------
echo package.json
echo -------------------------------------------------
cat $PNAME/package.json
echo
exit 0
