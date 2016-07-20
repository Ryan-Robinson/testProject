/**
 * Created by ryan on 7/12/16.
 */
//var buf = new Buffer(10);

//var buf = new Buffer([10, 20, 30, 40, 50]);

// var buf = new Buffer("Simply Easy Learning", "utf-8");

// writing
// buf.write(string[, offset][, length][, encoding])

buf = new Buffer(256);
leny = buf.write("Simply Easy Learning");

console.log("Octets written : "+  leny);

//reading
//buf.toString([encoding][, start][, end])