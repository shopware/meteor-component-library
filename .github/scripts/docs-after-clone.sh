#! /usr/bin/env bash
set -e

DIR=/tmp/mount-all
URL=https://shopware.github.io/meteor-component-library
PARAMS="&viewMode=docs&shortcuts=false&singleStory=true"

echo "Creating Storybook docs dir"
mkdir -p $DIR/docs/preview

echo "Discovering Storybook stories"
find $DIR -type f -name "*.stories.js" -print0 | while read -d $'\0' file
do
  if [[ $file == *".interactive."* ]]; then
    # ./src/components/icons-media/sw-icon/sw-icon.interactive.stories.js
    echo "$file is interactive"

  # ./src/components/icons-media/sw-icon/sw-icon.stories.js
  elif [[ $file == *"/components/"* ]]; then
    # split to array
    split=($(echo "$file" | tr '/' ' '))
    component="${split[6]//.stories.js/''}"
    identifier="${split[3]}-${split[4]}-${split[5]}--default"

    # create dir
    if [[ ! -d "$DIR/docs/component" ]]; then
      echo "Creating dir docs/component"
      mkdir -p $DIR/docs/component

      cat <<EOT > $DIR/docs/component/index.md
---
sidebar: true
---

# Components

EOT
    fi

    # components-navigation-sw-tabs--default
    # create file
    echo "Creating file component/$component.md"
    cat <<EOT > $DIR/docs/component/$component.md
---
sidebar: true
aside: false
nav:
  title: $component
---
<iframe
  src="$URL/iframe.html?id=$identifier$PARAMS"
  style="border: 0; min-height: 50vh; width: 100%;"
></iframe>
EOT
  cat $DIR/docs/component/$component.md

  # ./src/directives/tooltip.stories.js
  elif [[ $file == *"/directives/"* ]]; then

    # split to array
    split=($(echo "$file" | tr '/' ' '))
    component="${split[4]//.stories.js/''}"
    identifier="${split[3]}-${component}--default"

    # create dir
    if [[ ! -d "$DIR/docs/directive" ]]; then
      echo "Creating dir docs/directive"
      mkdir -p $DIR/docs/directive

      cat <<EOT > $DIR/docs/directive/index.md
---
sidebar: true
---

# Directives

EOT
    fi

    # create file
    echo "Creating file directive/$component.md"
    cat <<EOT > $DIR/docs/directive/$component.md
---
sidebar: true
aside: false
nav:
  title: $component
---
<iframe
  src="$URL/iframe.html?id=$identifier$PARAMS"
  style="border: 0; min-height: 50vh; width: 100%;"
></iframe>
EOT
  cat $DIR/docs/directive/$component.md

  else
    echo "$file is unknown"
  fi
done