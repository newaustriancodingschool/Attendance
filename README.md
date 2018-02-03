# Attendance
Check system for participent attendence.

## HOW TO INSTALL

If you want to install development mode then follow the following steps:

### --> Product environment (Easy Way) (You can't edite system files)
OR use the simple way by running the the products file

* You have to install nodejs in your machine
* get a clone of the repo. by using
```
git clone https://github.com/RefugeesCodeAT/Attendance.git
```
* Get inside Attendace/dist folder
```
cd attendance/dist
```
* Now you can run the system by the following code but you have to be sure that you are inside the right folder (previous steps)
```
node index.js
```

### --> Development environment (Hard Way) (You can edite system files)
* You have to install nodejs in your machine
* get a clone of the repo. by using
```
git clone https://github.com/RefugeesCodeAT/Attendance.git
```
* Get inside Attendace folder
```
cd attendance
```
* Install all packages
```
npm install
```
* Finally run the system as development environment
```
ng serve
```

NOTE: You both way you will get the following link to run the system in your browser `http://localhost:4200/`. unless you change the port.
IMPORTANT: You have to go to the following link to run the system `http://localhost:PORT/admin`.

## SOME DEVELOPMENT INFO
## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## System Info

This project generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.9.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

### Related repositories:

Backend: https://github.com/RefugeesCodeAT/rc-check-in-backend  
NFC card reader: https://github.com/RefugeesCodeAT/rc-check-in-card-reader  
