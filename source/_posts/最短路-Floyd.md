---
title: 最短路-Floyd
tags: 算法
abbrlink: ba6c2cfe
date: 2022-10-31 20:39:21
cover: /assets/hp_img/3.png
---
## Floyd最短路

### 时间复杂度n^3

### 注意一下几个问题

1.44行:由于有重边，所以读入是要确保g[a][b]存的是a->b的‘最短’距离

2.49行:将重边舍去，g[i][i]保证为0;

3.动态规划
    状态表示f(k,i,j)---从i到j且经过1-k中的点的最短距离
    三重循环-->k在最外层，i和j可以互换

4.64行:不能用==/!=0x3f3f3f3f来判断是否不为/为通路
因为由于存在负权边，所以g[i,j]=min(g[i,j],g[i,k]+g[k,j])时，i到k 和 k到j可能有一条为通路(长度为负)，另一条不通(长度正无穷),此时本不应该更新g[i,j]却被更新了，即g[i,j]变小了。
为了避免结果错误，故将判断条件改为>=0x3f3f3f3f/2 ，因为即便由于上述原因导致本不为通路的两点间距离变小，
也不会减少0x3f3f3f3f/2（边长绝对值都不大），所以可以用该判条件

```c++
#include<iostream>
#include<algorithm>
#include<cstring>
using namespace std;

const int N=210;

int g[N][N];

int main()
{
    memset(g,0x3f,sizeof g);
    
    int n,m,t;
    cin>>n>>m>>t;
    
    for(int i=0;i<m;i++)
    {
        int a,b,c;
        cin>>a>>b>>c;
        g[a][b]=min(g[a][b],c);
    }
    for(int i=1;i<=n;i++)
        g[i][i]=0;
    for(int k=1;k<=n;k++)
        for(int i=1;i<=n;i++)
            for(int j=1;j<=n;j++)
                if(i!=j)g[i][j]=min(g[i][j],g[i][k]+g[k][j]);
    for(int i=1;i<=t;i++)
    {
        int a,b;
        cin>>a>>b;
        if(g[a][b]<=0x3f3f3f3f/2)cout<<g[a][b]<<endl;
        else puts("impossible");
    }
    return 0;
        
}
```
