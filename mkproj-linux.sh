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
printf "4. Gulp w Browser Sync, Sass, Jade, JSHint\n"
printf "Choose Script (1): "
read SCRIPT
case $SCRIPT in
    2)
        cp /_Automation_Scripts/gulp_bsync_sass/package.json ./
        cp /_Automation_Scripts/gulp_bsync_sass/gulpfile.js ./
        ;;
    3)
        cp /_Automation_Scripts/gulp_bsync_sass_jade/package.json ./
        cp /_Automation_Scripts/gulp_bsync_sass_jade/gulpfile.js ./
        ;;
    4)
        cp E:/_Automation_Scripts/gulp_bsync_sass_jade_js/package.json ./
        cp E:/_Automation_Scripts/gulp_bsync_sass_jade_js/gulpfile.js ./
        cp E:/_Automation_Scripts/gulp_bsync_sass_jade_js/.jshintrc ./
        cp E:/_Automation_Scripts/gulp_bsync_sass_jade_js/.jscsrc ./
        ;;
    *)
        SCRIPT=1
        cp /_Automation_Scripts/gulp_browser-sync/package.json ./
        cp /_Automation_Scripts/gulp_browser-sync/gulpfile.js ./
        ;;
esac


# create base directory structure
#-----------------------------------------------------

if [ $SCRIPT -eq 1 ]; then
    mkdir -p src/css
    touch src/css/style.css
    cp /_Templates/index.html src/
else
    mkdir -p src/scss
    touch src/scss/style.scss

    if [ $SCRIPT -eq 2 ]; then
        cp /_Templates/index.html src/
    else
        cp /_Templates/index.jade src/
    fi
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
cp /_Templates/.gitignore ./
git add .
git commit -m "Begin Project $PNAME"

# Show Validation
#-----------------------------------------------------
clear
echo -------------------------------------------------
echo Directory structure
echo -------------------------------------------------
tree -L 3
echo;echo -------------------------------------------------
echo package.json
echo -------------------------------------------------
cat package.json
echo
git log
echo
git status
exit 0
