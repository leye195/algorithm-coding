import requests
url = "https://swapi.dev/api/films"
def send_get_request():
    return requests.get(url).json()
def send_post_request(token):
    return requests.post(url,header={"X-Auth-Token":token},json={}).json()
