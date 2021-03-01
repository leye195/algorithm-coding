# Link: https://leetcode.com/problems/first-bad-version/
# The isBadVersion API is already defined for you.
# @param version, an integer
# @return an integer
# def isBadVersion(version):


# time exceeded
class Solution:
    def firstBadVersion(self, n):
        """
        :type n: int
        :rtype: int
        """
        for i in range(1,n+1):
            if(isBadVersion(i)):
                return i

# accept
class Solution:
    def firstBadVersion(self, n):
        """
        :type n: int
        :rtype: int
        """
        st,en = 1,n
        while(st<en):
            mid = (st+en)//2
            if(isBadVersion(mid)==False):
                st = mid + 1
            else:
                en = mid
        return st
