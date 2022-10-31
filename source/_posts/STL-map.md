---
title: STL-map
tags: STL
abbrlink: bbf9d7b7
date: 2022-10-29 22:16:24
cover: /assets/hp_img/22.jpg
---

## map 与 unordered_map 的遍历

### 1.while

```c++
map<int, int>::iterator iter;
    iter = _map.begin();
    while(iter != _map.end())
    {
        cout << iter->first << ' ' << iter->second << endl;
        iter++;
    }

```

### 2.for(本质上和第一种一样)

```c++
map<int, int>::iterator iter;
for(iter = _map.begin(); iter != _map.end(); iter++)
{
    cout << iter->first << ' ' << iter->second << endl;
}
```

### 3. auto

```c++
for(auto v:_map)
    cout << v.first << ' ' << v.second << endl;
```
