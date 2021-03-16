require('./db.js');

exports.addEmployee=function(req,res){

    var sql="insert into employee values((Select Max(id)+1 from employee),'"+req.body.first+"','"+req.body.last+"','"+req.body.date+"'";
    conn.query(sql,function(err,rows,field){
        if(err)
            console.log("error");
        else
            res.send("Success");
    });

};

exports.LoadEmployee=function(req,res){
    var sql="select * from employee where jdate between '"+req.body.from+"'  And '"+req.body.To+"' ";
    conn.query(sql,function(err,rows,field){
        if(err)
        console.log("error");
        else
        res.send(JSON.stringify(rows));
    });
};
exports.Login=function(req,res){
    var sql="select * from userlogin where '"+req.body.uname+"'=username AND '"+req.body.pwd+"'";
    conn.query(sql,function(err,rows,field){
        if(err)
            console.log("error");
        else if(rows.length==0)
        console.log("invalid");
        else
            res.send(JSON.stringify(rows));
    });
};
