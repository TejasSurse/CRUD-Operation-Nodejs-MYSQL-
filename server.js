// Creating express server 
const express = require("express");
const app = express();
//app.use(express.json());
const mysql = require("mysql2");
const { createConnection } = require("net");
app.get('/', (req, res)=>{
    res.send("hi");
});


app.listen(5000, ()=>{
    console.log("Server listening in http://localhost:5000");
});


const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'studentdata'
});

// Select Query  = read 

try{
    conn.query("SELECT * FROM student", (err, result)=>{
        if (err){
            throw err;
        }
        else{
            console.log(result);
        }
    }
);
}catch(e){
    console.log("Exception occured");

}

// // Non Select Query read 

//inserting values into database dynamically    
//using placeholders 
let u1 = [222, "Tejas", 23, 33, 44];
let quryInsert = "INSERT INTO student values (?, ?, ?, ?, ?)";
try{
    conn.query(quryInsert, u1, (err, result)=>{
        if(err){
            throw err;
        }
        console.log(result);

    });
}catch(e){
    console.log("exception");
}


// Update data
let updateQuery = "Update student set m1 = 100, m2 = 100, m3 = 100 where sname='Yogesh'";
try{
    conn.query(updateQuery, (err, result)=>{
        if(err){
            console.log("not executed ");
        }else{
            console.log(result);
        }
    })
}catch(e){
    console.log("exception");
}

try{
    conn.query("SELECT * FROM student", (err, result)=>{
        if (err){
            throw err;
        }
        else{
            console.log(result);
        }
    }
);
}catch(e){
    console.log("Exception occured");

}


// Deleting Data ;
let dquery = "DELETE FROM student where sno=230";
try{
    conn.query(dquery, (err, result)=>{
        if(err){
            console.log(err);
        }else{
            console.log(result);
        }
    });
}catch(e){
    console.log("Exception ");
}

conn.end();