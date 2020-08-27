# -*- coding: utf-8 -*-
# UTF-8 encoding when using korean
t = int(input())
def solution(t):
	for i in range(0,t):
		n,m = [int(i) for i in input().split(" ")]
	#n:시즌한정 쿠폰 수 m:일반 쿠폰 수
	#12장 필요, 최소 5개는 한정 쿠폰
		answer = 0
		if(m==0):# 일반 쿠폰이 없음
			if(n>=12): 
				answer  = n//12
		elif(m>0): # 일반 쿠폰이 소지중
			if(n>0): # 시즌 한정 쿠폰 소지중
				if(n>=5 and m>=7): 
					answer+=min(n//5,m//7)
					n = n-(m//7)*5
					m = m%7
				if(m<7 and n-(12-m)>=0): #일반 쿠폰이 7장 이하이며 한정 쿠폰이 12-m개 이상 가지고 있는 경우
					if(m==0): #일반 쿠폰다 소진한 경우 한정 쿠폰에서 사용 
						answer+=n//12
					elif(m>0): #일반 쿠폰을 소지중인 경우
						answer+=min(n//(12-m),m//m)
						if(n-(12-m)>=0):
							n=n-(12-m)
							answer+= n//12
		print(answer)

solution(t)

		
