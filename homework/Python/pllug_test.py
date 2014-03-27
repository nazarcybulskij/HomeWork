
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





