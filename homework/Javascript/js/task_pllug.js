function fun_1(){
    var str_input='2,2';
    str_input=prompt('Input values  task #1',str_input);
    console.log(str_input);
    var rows=str_input.split(',')[1];
    var cell=str_input.split(',')[0];
    var array=[];
    var counter=1;
    for (var j=1;j<=cell;j++){
        var temp_array=[];
        for (var i=1;i<=rows;i++){
            temp_array.push(counter)
            counter++;
        }
        array.push(temp_array);
    }
    console.log(array);
}


function fun_2(){
    var  start_number=1000;
    var finish_number=1200

    //find first number
    var  array=[]

    start_number=start_number+(7-start_number%7)

    while (start_number<finish_number){
        var str=start_number.toString()
        var temp=str.charAt(str.length-1);
        if (!(temp==='0'  || temp==='5') )
            array.push(str);  //console.log(start_number);
        start_number=start_number+7;
    }
    console.log(array.join());
}

function fun_3_4(){
    var str_input='2,5,8';
    str_input=prompt('Input values task #3_4',str_input);
    console.log(str_input);
    var str_array_input=str_input.split(',');
    function maxnumber(count){
        var temp='';
        for (var i=1 ;i<=parseInt(count);i++){
            temp=temp+'9';
        }
        var current=parseInt(temp);
        while (current%count != 0){
            current--;
        }
        return current;
    }
    var array=[];
    for (var i=0; i<str_array_input.length; i++) {
        array.push(maxnumber(str_array_input[i]));
    }
    console.log(array.join());
}

function fun_5(){
    var str_input='0011,0100,0101,1001';
    str_input=prompt('Input values task #5',str_input);
    console.log(str_input);
    var str_array_input=str_input.split(',');
    var array=[];
    for (var i=0; i<str_array_input.length; i++) {
        var  BinarytoDec=parseInt(str_array_input[i],2);
        if (BinarytoDec%3===0)
            array.push(str_array_input[i]);
    }
    console.log(array.join()); //  на жаль відкидає нулі якщо на початку
}

function fun_6(){
    var test_input='Abc@1,a B1#,2w3E*,2We#3345';
    test_input=prompt('Input values task #6',test_input);
    console.log(test_input);
    var str_array_input=test_input.split(',');
    var reg1 = new RegExp("[a-z]");    //трошки погано анаисав дублювання коду
    var reg2 = new RegExp("[A-Z]");
    var reg3 = new RegExp("[0-9]");
    var reg4 = new RegExp("[*#+@]");
    var reg5 = new RegExp("[^\s]");
    var reg6 = new RegExp("^[a-zA-Z0-9*#+@]{4,6}$");
    var array=[];
    for (var i=0; i<str_array_input.length; i++) {
        var bool=reg1.test(str_array_input[i])
            && reg2.test(str_array_input[i])
            && reg3.test(str_array_input[i])
            && reg4.test(str_array_input[i])
            && reg5.test(str_array_input[i])
            && reg6.test(str_array_input[i])
        if  (bool)
            array.push(str_array_input[i]);
    }
    console.log(array.join());
}

function fun_7(){

    function RGBtoHex(R,G,B) {
        if (toHex(R)==="INVALID" || toHex(G)==="INVALID" || toHex(B)==="INVALID")
            return "INVALID";
        return toHex(R)+toHex(G)+toHex(B);
    }
    function toHex(N) {

        if (N==null) return "00";
        N=parseInt(N); if (N==0 || isNaN(N)) return "00";
        N=Math.round(N);
        if (N>255)
            return "INVALID"
        return "0123456789ABCDEF".charAt((N-N%16)/16)
            + "0123456789ABCDEF".charAt(N%16);
    }

    var test_input='12-13-14,45-156-23,234-234-256';
    test_input=prompt('Input values task #7',test_input);
    console.log(test_input);
    var str_array_input=test_input.split(',');
    var array=[];
    for (var i=0; i<str_array_input.length; i++) {
        var rgb_array=str_array_input[i].split('-');
        array.push("#"+RGBtoHex(rgb_array[0],rgb_array[1],rgb_array[2]));
    }
    console.log(array.join());
}

function fun_8(){
    function OptimalPrice(demand)
    {
        var C=50;
        var H=30;
        return Math.sqrt((2*C*demand)/H);
    }

    var test_input='100,150,180';
    test_input=prompt('Input values task #8',test_input);
    console.log(test_input);
    var str_array_input=test_input.split(',');
    var array=[];
    for (var i=0; i<str_array_input.length; i++) {
        array.push(Math.round(OptimalPrice(str_array_input[i])));
    }
    console.log(array.join());
}

function fun_9(){
    var test_input='order,hello,would,test';
    test_input=prompt('Input values task #9',test_input);
    console.log(test_input);
    var str_array_input=test_input.split(',');
    console.log(str_array_input.sort().join());
}

function fun_10(){
    var test_input='305,180,120';
    test_input=prompt('Input values task #10',test_input);
    console.log(test_input);
    var price_0_100=60;
    var price_100_300=70;
    var price_300=80;
    var str_array_input=test_input.split(',');
    var array=[];
    for (var i=0; i<str_array_input.length; i++) {
        if (str_array_input[i]<100)
            array.push(str_array_input[i]*price_0_100);
        else if (str_array_input[i]>300)
            array.push(100*price_0_100+200*price_100_300+(str_array_input[i]-300)*price_300);
        else{
            array.push(100*price_0_100+(str_array_input[i]-100)*price_100_300)
        }
    }
    console.log(array.join());
}

function fun_11(){
    var test_input='2000-D,4000-D,500-W';
    test_input=prompt('Input values task #11',test_input);
    console.log(test_input);
    var str_array_input=test_input.split(',');
    var temp=0;
    for (var i=0; i<str_array_input.length; i++) {
        if (str_array_input[i].split('-')[1]==='D'){
            temp=temp+parseInt(str_array_input[i].split('-')[0]);
        }else if (str_array_input[i].split('-')[1]==='W'){
            temp=temp-str_array_input[i].split('-')[0];
        }
    }
    if (temp>5000){
        temp=temp+0.05*temp;
    }
    console.log(temp);
}
function print(text,resultprint){
    console.log('=======================================================')
    console.log(text);
    resultprint();
}

print('завдання №1',fun_1);
print('завдання №2',fun_2);
print('завдання №3-4',fun_3_4);
print('завдання №5',fun_5);
print('завдання №6',fun_6);
print('завдання №7',fun_7);
print('завдання №8',fun_8);
print('завдання №9',fun_9);
print('завдання №10',fun_10);
print('завдання №11',fun_11);
