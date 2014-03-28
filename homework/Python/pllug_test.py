import re
from symbol import return_stmt
import math

file_data=open('data');

def fun_1(input):
    print input
    rows=input.split(',')[0]
    cels=input.split(',')[1]
    res=[]
    for  x in range(1,int(rows)+1):
        res.append([y for y in xrange(x,x+int(cels))])
    print res

fun_1(file_data.readline());

def fun_2():
    start_number=1000;
    finish_number=1200;
    start_number=start_number+(7-start_number%7);
    res=[y for y in xrange(start_number,finish_number) if (y % 7==0 and y%5!=0) ]
    print ','.join(str(x) for x in res);


fun_2()


def fun_3_4(input):

    def maxnumber(length):
        s = ""
        for i in range(length):
            s+='9'
        return int(s)-int(s)%length

    print input
    str_array_input=input.split(',')
    res=[]
    for  x in str_array_input:
        res.append(maxnumber(int(x)))
    print ','.join(str(x) for x in res);


fun_3_4(file_data.readline())

def fun_5(input):
    print input;
    str_array_input=input.split(',')
    res=[]
    for  x in str_array_input:
        if (int(x,2)%3==0):
            res.append(x)
    print ','.join(str(x) for x in res);

fun_5(file_data.readline())


def fun_6(input):
    print input;
    str_array_input=input.split(',')
    reg2 = re.compile(r'\s');
    reg1=re.compile(r"^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{4,6}$")
    res=[]
    for  x in str_array_input:
        if re.search(reg1,x):
             if not re.search(reg2,x):
                res.append(x)
    print ','.join(str(x) for x in res);

fun_6(file_data.readline())


def fun_7(input):

    def validator(R,G,B):
       if (R>255 or G>255 or B>255):
           return "INVALID"
       return   '#%02x%02x%02x' % (R, G, B)

    print input;
    str_array_input=input.split(',')
    res=[]
    for  x in str_array_input:
        rgb_dec=x.split('-')
        value=validator(int(rgb_dec[0]), int(rgb_dec[1]), int(rgb_dec[2]))
        res.append(value)
    print ','.join(str(x) for x in res);

fun_7(file_data.readline())

def fun_8(input):

    def OptimalPrice(demand):
        C=50;
        H=30;
        return int(round(math.sqrt((2*C*demand)/H),0));

    print input;
    str_array_input=input.split(',')
    res=[OptimalPrice(int(str_array_input[y])) for y in xrange(0,len(str_array_input))]
    print ','.join(str(x) for x in res);

fun_8(file_data.readline())

def fun_9(input):
    print input
    str_array_input=input.split(',')
    res=sorted(str_array_input)
    print ','.join(x for x in res);

fun_9(file_data.readline())












