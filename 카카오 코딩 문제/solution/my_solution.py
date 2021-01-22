import requests

url = "https://pegkq2svv6.execute-api.ap-northeast-2.amazonaws.com/prod/users"
token = "97fd4e96f4f8f66af0f3a6ae426c19f6"
def start(token,problem_id):
    uri = url+"/start"
    return requests.post(url=uri,headers={'X-Auth-Token':token},params={"problem":problem_id}).json()

def location(key):
    uri = url+"/locations"
    return requests.get(url=uri,headers={"Authorization":key}).json()

def trucks(key):
    uri = url+"/trucks"
    return requests.get(url=uri,headers={"Authorization":key}).json()

def simulate(key,commands):
    uri = url+"/simulate"
    return requests.put(url=uri,headers={"Authorization":key},json={"commands":commands}).json()

def score(key):
    uri = url+"/score"
    return requests.get(url=uri,headers={"Authorization":key}).json()

def get_empty_pos(board,visited):
    empty_list = []
    for i in range(len(board)):
        for j in range(len(board)):
            if board[i][j]==0:
                empty_list.append((i*len(board))+j)
    return empty_list

start_response = start(token,2)
auth_key,time,problem = start_response["auth_key"],start_response["time"],start_response["problem"]
n = 5
if problem==2:
    n = 60

while True:
    board,visited = [[0]*n for i in range(n)],[[0]*n for i in range(n)]
    bike_locations = location(auth_key)["locations"]
    trucks_info = trucks(auth_key)["trucks"]
    for i in range(len(bike_locations)):
        id = bike_locations[i]["id"]
        if id<n:
            board[0][bike_locations[i]["id"]] = bike_locations[i]["located_bikes_count"]
        else:
            board[id//5][id%5] = bike_locations[i]["located_bikes_count"]
    if time<720:
        commands = [{"truck_id":0,"command":[]},
        {"truck_id":1,"command":[]},
        {"truck_id":2,"command":[]},
        {"truck_id":3,"command":[]},
        {"truck_id":4,"command":[]}]
        empty_list = get_empty_pos(board,visited)
        if len(empty_list)>0:
            for i in range(5):
                truck_pos = trucks_info[i]["location_id"]
        response = simulate(auth_key,commands)
        if(response["time"]):
            time = response["time"]
            print(response)
    else:
        break
print(score(auth_key))

