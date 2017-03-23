# reactYet 
##### (react+mobx+sass+webpack)
 
## 代码协作说明

### 任务分支说明

* 在coding主页新建分支，按照任务命名分支，下载分支本地开发
* 本地新建本地分支，开发完成，上传本地分支到远程，请求合并

```
git checkout -b "任务名(注意别用中文)"
```
* 开发完成
```
git add .
git commit -m "本地提交内容"
git push origin 分支
```
* 第一次如何获取自己的分支
```
git clone "项目地址"
git branch -r # 查看远程分支
git checkout -t origin/远程分支名 # 抓取远程分支并创建切换到本地同名分支
```
* 如何创建一个远程仓库
```
git remote add origin "远程仓库地址"
```


### 代码合并
* 分支代码提交
```
git commit -m "代码提交"
```
* 切换到本地主分支
```
git checkout master
```
* 获取最新远程代码
```
git pull origin master
```
* 最新分支与本地主分支合并
```
git merge "分支名称"
```
* 如果有冲突，解决冲突然后提交
```
git status 查询当前代码状体
git add .
git commit -m "解决完冲突提交"
```
* 提交到远程主分支
```
git push origin master
```
* 远程分支
* 创建远程分支
```
git remote add origin 分支名称
```
* 提交到远程分支
```
git push origin 分支名称
```