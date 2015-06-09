# Fastpassword

[![npm version](https://badge.fury.io/js/fastpassword.svg)](http://badge.fury.io/js/fastpassword)
[![Build Status](https://travis-ci.org/ZIJ/fastpassword.svg?branch=master)](https://travis-ci.org/ZIJ/fastpassword)

Command-line utility that generates fast-to-type passwords.

### Why
1. Most (if not all) existing password generators are focused on security or readability, but not ease of typing
2. I wanted to get hands dirty with ES 2015 features

### Installation
```
npm install -g fastpassword
```

### How to use
* `fastpassword` Simply generate easy-to-type password
* `fastpassword -l 10 -d 4` Generate password of 10 chars with minimum 4 sequent chars guaranteed for different fingers
* Get help `fastpassword -h`

### Options
* `-l` Length of the password
* `-d` Minimum sequent chars guaranteed for different fingers
* `-h` Help
