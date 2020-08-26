# DB 캐시를 적용할 때 캐시 크기에 따른 실행시간 측정 프로그램 작성
#캐시크기,도시이름들
#cache hit일 경우 실행시간은 1이다.
#cache miss일 경우 실행시간은 5이다.
def solution(cacheSize, cities):
    answer = 0
    cache=['']*cacheSize
    for city in cities:
        c=city.upper()
        if c not in cache:
            cache.append(c)
            cache.pop(0)
            answer+=5
        else:
            cache.remove(c)
            cache.append(c)
            answer+=1
    return answer