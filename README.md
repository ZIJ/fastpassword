# Fastpassword

[![npm version](https://badge.fury.io/js/fastpassword.svg)](http://badge.fury.io/js/fastpassword)
[![Build Status](https://travis-ci.org/ZIJ/fastpassword.svg?branch=master)](https://travis-ci.org/ZIJ/fastpassword)

Generates easy-to-type passwords.

### Why
Speed of typing is often overlooked for passwords. But if you enter it countless times a day, saved split seconds can add up to a considerable time saving.

### How it works
The utility ensures that any D sequential characters are entered with different fingers based on standard QWERTY keyboard layout, where D stands for "depth".

### Installation
```
npm install -g fastpassword
```

### How to use
* `fastpassword` Simply generate an easy-to-type password
* `fastpassword -l 10 -d 4` Generate password of 10 chars with minimum 4 sequent chars guaranteed for different fingers
* `fastpassword -h` Help

### Options
* `-l` Length of the password
* `-d` Minimum sequent chars guaranteed for different fingers
* `-h` Help
