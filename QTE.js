//=============================================================================
// QTE.js
//=============================================================================
/*
Copyright AndyLonly 2015
程序 by AndyLonly
本Javascript库是自由软件
但请在转载使用过程中需注明作者以及这个网址
不允许修改再发布以及任何更改任何一段字符的行为
禁止其他人用于任何商业用途（它是开放的程序）
*/

/*:zh
 *@plugindesc
 *这个插件可以提供QTE事件的生成
 *@author AndyLonly
 *@help
 *你可以通过使用脚本输入QTE(keya,keyb,keyc,keyd,time)来启动
 *但你需要额外的脚本库作为事件
 *当然以后也有wiki的教程拉
 */
(function QTE(keya,keyb,keyc,keyd,time)
{
/*
这里好像要定义变量啊
*/
var _Game_Interpreter_pluginCommand =
            Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        _Game_Interpreter_pluginCommand.call(this, command, args);
        if (command === 'QTE') {
            /*
下面这一坨用来准备好按键的随机运算
*/
if (!this.args[3]){
  if (!this.args[2]){
    if (!this.args[1]){
        run = 1
    }else{run = 2}
  }else{ run = 3 }
}else{ run = 4 }
/*
下面这一坨用来随机取值来得到一个随机的KEY 后期替换为自带的方式Math.randomInt ( max ) 
Math.ceil(Math.random()* run)
*/
keyn = Math.randomInt ( run ) 

/*
下面这一坨把准备好按键的进行对照以后从数字到按键，然而..........神他妈按键怎么弄卧槽,保留按键。
稍微看了一下教程，感觉不太会用啊
isTriggered ( keyName ) Boolean [static]
检测按键是否刚被按下。
参数：
keyName String
待检测按键的映射名
返回值：
Boolean: 
若按键刚被按下，返回 true
update () [static]
更新输入数据。
貌似解决方案如下
SceneManager.onKeyDown = function(event) {
    if (!event.ctrlKey && !event.altKey) {
        switch (event.keyCode) {
        case 116:   // F5
            if (Utils.isNwjs()) {
                location.reload();
            }
            break;
        case 119:   // F8
            if (Utils.isNwjs() && Utils.isOptionValid('test')) {
                require('nw.gui').Window.get().showDevTools();
            }
            break;
        }
    }
};
*/
switch(n)
{
case 1:
  input = args[0]
  break;
case 2:
  input = args[1]
  break;
case 3:
  input = args[2]
  break;
case 4:
  input = args[3]
  break;
default:
  pass = 1;
}
/*
下面这一坨用来写RPGMAKER的API or 事件吧，等我看完RPGMAKER的说明书再说ouo
*/



/*
结尾撒花~
*/
        }
    };





})()
