# daftcode-practices

Solution of recruitment tasks for daftcode practices 2019

## information about structure:

** ⚠️ Special Folder For fast Check task ⚠️ **
only on branch: https://github.com/SebastianWesolowski/daftcode-practices/tree/daftcode

### Structure Project

```shell

├── check_task                  # → ️⚠️ ️Special Folder For fast Check task
├── TODO                        # → Folder with document all task todo
├── gulpfile.js                 # → Gulp task for easy development
├── package.json                # → File with all dependency and decryption project
└── src                         # → Project in develop version
    ├── js                      # → All JavaScript file
    │   ├── form_search.js      # → Script for Task 3
    │   └── modal.js            # → Script for Task 2
    ├── sass                    # → All Scss File ready to compile to css
    │   ├── components          # → Folder for reuse file scss
    │   │   ├── _reset.scss     # → reset style
    │   │   └── _variable.scss  # → Variable collor and mixin
    │   ├── style_1.scss        # → Style for Task 1
    │   ├── style_2.scss        # → Style for Task 2
    │   └── style_3.scss        # → Style for Task 3
    ├── svg                     # → Folder for all SVG file
    │   └── search.svg          # → File use in Task 3
    └── views                   # → Folder with all file html
        ├── 1                   # → Folder for Task 1
        │   ├── 1.html          # → Html file for Task 1
        │   └── README.md       # → File with task 1 todo
        ├── 2                   # → Folder for Task 2
        │   ├── 2.html          # → Html file for Task 2
        │   └── README.md       # → File with task 2 todo
        ├── 3                   # → Folder for Task 3
        │   ├── 3.html          # → Html file for Task 3
        │   └── README.md       # → File with task 3 todo
        └── index.html          # → Main file html with link to all task
```

## If You need build project

Quick Start:

```shell

# Install browserSync and other dependencies
$ yarn

# Start server
$ gulp watch

# Build Project and also minify the created CSS,JS,HTML files and copy to build folder.
$ gulp
```
