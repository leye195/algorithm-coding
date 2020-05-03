
def uri_decoding(uri):
    ch_list={
        "%20":" ",
        "%21":"!",
        "%23":"#",
        "%24":"$",
        "%25":"%",
        "%26":"&",
        "%28":"(",
        "%29":")",
        "%2a":"*",
        "%2b":"+",
        "%2c":",",
        "%2d":"-",
        "%2e":".",
        "%2f":"/",
        "%3a":":",
        "%3b":";",
        "%3c":"<",
        "%3d":"=",
        "%3e":">",
        "%3f":"?",
        "%40":"@",
        "%5b":"[",
        "%5e":"^",
        "%5d":"]",
        "%5f":"_",
        "%7b":"{",
        "%7c":"|",
        "%7d":"}",
        "%7e":"-"
    }
    for key,val in ch_list.items():
        if(key in uri):
            uri=uri.replace(key,val)
    return uri

n=int(input())
for i in range(0,n):
    uri=str(input())
    print(uri_decoding(uri))

