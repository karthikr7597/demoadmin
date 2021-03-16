var express=require('express');
var app = exports.app = express();
var mod=require('./modules.js');
app.post('api/admin/LoadEmployee',mod.LoadEmployee);
app.post('api/admin/addEmployee',mod.addEmployee);
app.post('api/admin/login',mod.Login);
