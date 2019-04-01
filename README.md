#  一个React UI轮子
[![npm version](https://badge.fury.io/js/react-golu.svg)](https://badge.fury.io/js/react-golu)
[![CircleCI](https://circleci.com/gh/yangdepp/react-golu-ui.svg?style=svg)](https://circleci.com/gh/yangdepp/react-golu-ui)


#  npm配合CIRCLECI发布
由于每次npm publish 都要adduser
因此可以用npm token设置  
...  
npm publish  

##  npm自动更改version发布
```npm version patch```  
这个命令会自动更改```package.json```版本号，并提交一次代码  
只会更改version的最后一位:  ```0.0.2 => 0.0.3```  
表示：api不变，修复了bug  
\
```npm version minor```  
这个命令会升级version的第二位  ```0.0.2 => 0.1.0```  
表示：api有变化，但是变化并不大，完全不影响现有代码  
\
```npm version major```  
这个命令会升级version的第一位  ```0.0.2 => 1.0.0```  
表示：api变化很大，影响现有代码  

##  打tag配合CIRCLECI发布
git add代码后，执行```sh ./deploy.sh patch```  
```npm version $1 && git push```  
如：npm version patch就是小升级代码  

再配合config.yml中publish中的filters,可以完成： 
1. 平时提交只测试  
2. 命令行提交会发布  
```
- publish:
    requires:
      - build
    filters:
      tags:
        only: /^v[0-9]+(\.[0-9]+)*/
      branches: 
        ignore: /.*/
```