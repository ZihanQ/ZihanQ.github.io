---
title: blog_2
tags: 算法
description: 初学完 01 背包和完全背包后一点总结
cover: /assets/blogimg/a.jpg
abbrlink: 7315bf55
date: 2022-10-29 21:28:44
---

## 初学完 01 背包和完全背包后一点总结

```c++
//1:01 背包:
for(int i=1;i<=n;i++)
for(int j=m;j>=v[i];j--)
f[j]=max(f[j],f[j-v[i]]+w[i]);

//2:完全背包:
for(int i=1;i<=n;i++)
for(int j=v[i];j<=m;j++)
f[j]=max(f[j],f[j-v[i]]+w[i]);
```

两者粗看完全一样，实则有所区别：
内层循环中 j 循环的顺序分别为正序和倒序

解释原因前，我们先看两者优化前的代码:

```c++
//1.01背包:
 for(int i=1;i<=n;i++)
    for(int j=1;j<=m;j++)
    {
        f[i][j]=f[i-1][j];
        if(v[i]<=j)f[i][j]=max(f[i][j],f[i-1][j-v[i]]+w[i]);
    }

//2.完全背包:
for(int i=1;i<=n;i++)
    for(int j=1;j<=m;j++)
        {
        f[i][j]=f[i-1][j];
        if(v[i]<=j)f[i][j]=max(f[i][j],f[i][j-v[i]]+w[i]);
        }
```

可以看见，两者取 max 时的第二个数有所不同:
在 01 背包中是 f[i-1]j-v[i]]+w[i];
在完全背包中是 f[i]j-v[i]]+w[i];
而优化后我们仅用一维数组 f[N]（下标是体积）来存最大值，很关键的是 j-v[i]<j，因此当我们正序遍历 j 时，我们遍历到 f[j]时要调用 f[j-v[i]],但在外循环为 i 层时 f[j-v[i]]在 f[j]之前已经遍历过了,
且(f[j])更新为 maxf[i]j-v[i]]而不再是 maxf[i-1]j-v[i]]，完全背包正好需要的是 f[i]j-v[i]]，所以完全背包正序遍历 j。
当我们逆序遍历 j 时，我们遍历到 f[j]时要调用 f[j-v[i],而 f[i]j-v[i]]还未被遍历，故 f[j-v[i]]依然保存的是 maxf[i-1]j-v[i]],因此逆序遍历适用于 01 背包。
