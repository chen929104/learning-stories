# 欧几里得算法

计算最大公约数的一种方法

> 其计算原理依赖于下面的定理：定理：两个整数的最大公约数等于其中较小的那个数和两数相除余数的最大公约数。最大公约数（Greatest Common Divisor）缩写为 GCD。 gcd(a,b) = gcd(b,a mod b) (不妨设 a>b 且 r=a mod b ,r 不为 0)

## 证法 1

- a 可以表示成 a = kb + r（a，b，k，r 皆为正整数，且 r 小于 b），则 r = a mod b 假设 d 是 a,b 的一个公约数，记作 d|a,d|b，即 a 和 b 都可以被 d 整除。而 r = a - kb，两边同时除以 d，r/d=a/d-kb/d=m，由等式右边可知 m 为整数，因此 d|r 因此 d 也是 b,a mod b 的公约数。因(a,b)和(b,a mod b)的公约数相等，则其最大公约数也相等，得证。

## 证法二

- 假设 c = gcd(a,b),则存在 m,n，使 a = mc, b = nc; 令 r = a mod b，即存在 k，使 r = a-kb = mc - knc = (m-kn)c; 故 gcd(b,a mod b) = gcd(b,r) = gcd(nc,(m-kn)c) = gcd(n,m-kn)c; 则 c 为 b 与 a mod b 的公约数; 假设 d = gcd(n,m-kn), 则存在 x,y, 使 n = xd, m-kn = yd; 故 m = yd+kn = yd+kxd = (y+kx)d; 故有 a = mc = (y+kx)dc, b = nc = xdc; 可得 gcd(a,b) = gcd((y+kx)dc,xdc) = dc; 由于 gcd(a,b) = c, 故 d = 1; 即 gcd(n,m-kn) = 1, 故可得 gcd(b,a mod b) = c; 故得证 gcd(a,b) = gcd(b,a mod b).
