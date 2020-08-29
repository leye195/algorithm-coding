# -*- coding: utf-8 -*-
# UTF-8 encoding when using korean
# 최대 심박수: 220 - age
import sys
age = int(input())
maxValue,cnt = 220 - age,0
v1,v2,v3,v4,v5,v6 = 0,0,0,0,0,0
p = sys.stdin.read()

values = p.split("\n")
values = values[0:len(values)-1]
if(len(values)>=1 and len(values)<14400):
    for value in values:
	# 초당 심
        percent = int(value)/maxValue
        if(percent<0.6):
            v1+=1
        elif(percent>=0.6 and percent<0.68):
            v2+=1
        elif(percent>=0.68 and percent<0.75): 
            v3+=1
        elif(percent>=0.75 and percent<0.8):
            v4+=1
        elif(percent>=0.8 and percent<0.9):
            v5+=1
        else:
            v6+=1
        cnt+=1

print(v6,v5,v4,v3,v2,v1)