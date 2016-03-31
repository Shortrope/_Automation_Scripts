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

# Get project description 
#-----------------------------------------------------
printf "Project Description: "
read PDESC

# create project folder
#-----------------------------------------------------
mkdir "$PNAME" || exit 1
cd $PNAME

# select automation script
#-----------------------------------------------------
printf "\n1. Gulp w Browser Sync\n"
printf "2. Gulp w Browser Sync and Sass\n"
printf "3. Gulp w Browser Sync, Sass and Jade\n"
printf "Choose Script (1): "
read SCRIPT
case $SCRIPT in
    2)
        cp E:/_Automation_Scripts/gulp_bsync_sass/package.json ./
        cp E:/_Automation_Scripts/gulp_bsync_sass/gulpfile.js ./
        ;;
    3)
        cp E:/_Automation_Scripts/gulp_bsync_sass_jade/package.json ./
        cp E:/_Automation_Scripts/gulp_bsync_sass_jade/gulpfile.js ./
        ;;
    *)
        SCRIPT=1
        cp E:/_Automation_Scripts/gulp_browser-sync/package.json ./
        cp E:/_Automation_Scripts/gulp_browser-sync/gulpfile.js ./
        ;;
esac


# create base directory structure
#-----------------------------------------------------

if [ $SCRIPT -eq 1 ]; then
    mkdir -p src/css
    touch src/css/style.css
    cp E:/_Templates/index.html src/
else
    mkdir -p src/scss
    touch src/scss/style.scss

    if [ $SCRIPT -eq 2 ]; then
        cp E:/_Templates/index.html src/
    else
        cp E:/_Templates/index.jade src/
    fi

    mkdir -p build/dev/css
    mkdir build/dev/js
    mkdir build/dev/images

    mkdir -p build/production/css
    mkdir build/production/js
    mkdir build/production/images

fi

mkdir src/js
mkdir src/images
touch src/js/script.js


# edit package.json file: name, description
#-----------------------------------------------------
sed -i '/Project_Name/ s@Project_Name@'"$PNAME"'@g' package.json
sed -i '/Project_Description/ s@Project_Description@'"$PDESC"'@g' package.json

# run npm install
#-----------------------------------------------------
npm install

# initialize git
#-----------------------------------------------------
git init
cp E:/_Templates/.gitignore ./
git add .
git commit -m "Begin Project $PNAME"

# Show Validation
#-----------------------------------------------------
clear
echo -------------------------------------------------
echo Directory structure
echo -------------------------------------------------
printf "${PNAME}/\n"
ls --color=auto -F --group-directories-first
printf "${PNAME}/src/\n"
ls --color=auto -F --group-directories-first src/
if [ $SCRIPT -ne 1 ]; then
    printf "${PNAME}/build/\n"
    ls --color=auto -F --group-directories-first build/
fi
echo;echo -------------------------------------------------
echo package.json
echo -------------------------------------------------
cat package.json
echo
git log
echo
git status
exit 0
