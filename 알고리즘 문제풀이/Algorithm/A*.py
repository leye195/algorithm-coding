import heapq
def check_linked(graph,f,t):
    if graph[f][t]:
        return graph[f][t]
    return None

def check_exist(open_list,i,h,g,p):
    for i in range(len(open_list)):
        if open_list[i][1]==i:
            open_list[i]=(h+g,i,h,g,p)
            return True
    return False

def a_star(graph,start,end):# A* 알고리즘
    open_list,close_list = [],{}
    close_list[start]={"p":None,"f":0,"h":0,"g":0}
    for i in range(len(graph[start])):
        # 시작 지점과 연결된 지점을 open_list에 넣어줌
        if graph[start][i]:
            cost = graph[start][i]
            h_value = check_linked(graph,i,end)
            if h_value!=None:
                heapq.heappush(open_list,(cost+h_value,i,h_value,cost,start)) 
    while open_list:
        f,pos,h,g,p = heapq.heappop(open_list)
        close_list[pos]={"p":p,"f":f,"h":h,"g":g}
        #f값이 가장 작은 부분을 close_list에 추가
        if pos == end: #close_list에 들어간 지점이 목표지점일 경우 종료
            break
        else:
            for i in graph[p]:
                if i not in close_list.keys():
                    h_value = check_linked(graph,i,end)
                    g_value = graph[p][i]+g
                    if check_exist(open_list,i,h_value,g_value,p)==False:
                        heapq.heappush(open_list,(g_value+h_value,i,h_value,g_value,p))
    #결과추출 
    result,c = [],end
    while True:
        result.append(c)
        p=close_list[c]["p"]
        if p==None:
            break
        c = p
    print("".join(map(str,result)))