#  一个React UI轮子



#  发布
npm adduser  
...  
npm publish  
\
npm version patch  
这个命令会自动更改```package.json```版本号，并提交一次代码  
只会更改version的最后一位:  0.0.2 => 0.0.3  
api不变，修复了bug  
\
npm version minor  
这个命令会升级version的第二位  0.0.2 => 0.1.0  
api有变化，但是变化并不大，完全不影响现有代码  
\
npm version major  
这个命令会升级version的第一位  0.0.2 => 1.0.0  
api变化很大，影响现有代码  
\

```sh ./deploy.sh```
