**SublimeText**

[http://www.sublimetext.com/2](http://www.sublimetext.com/2) 

2,3버전이 있지만, 2.x 버전을 사용하는 것을 추천.

**Package Controller 설치**

[https://sublime.wbond.net/installation](https://sublime.wbond.net/installation)

Sublime의 다양한 플러그인들을 간편하게 설치할 수 있는 추가 기능.

* Ctrl + ` &gt; Console 창이 나오면 아래 명령어를 복사해서 붙혀놓고 실행한다.

```javascript
import urllib2,os,hashlib; h = '7183a2d3e96f11eeadd761d777e62404' + 'e330c659d4bb41d3bdf022e94cab3cd0'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); os.makedirs( ipp ) if not os.path.exists(ipp) else None; urllib2.install_opener( urllib2.build_opener( urllib2.ProxyHandler()) ); by = urllib2.urlopen( 'http://sublime.wbond.net/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); open( os.path.join( ipp, pf), 'wb' ).write(by) if dh == h else None; print('Error validating download (got %s instead of %s), please try manual install' % (dh, h) if dh != h else 'Please restart Sublime Text to finish installation')
```

* Sublime Text를 재시작한 후 Ctrl+Shift+P 를 누르면 명령어를 입력할 수 있는 창이 나오는데 Install Package 로 검색하면 Package Controller를 실행 가능하다.
![](https://raw.githubusercontent.com/newyork-tribe/study-node.js/master/tutorial/setup/image/package.png)

**NodeJs Plugin 설치**

* Package Controller 에서 NodeJs를 검색하면 나오는 플러그인을 설치한다.
* Preferences - Browse Packages 을 실행 Nodejs 폴더를 찾아서 Nodejs.sublime-build 파일에 다음 코드를 추가

```
"path": "/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin:/usr/X11/bin: No such file or directory"
```

![](http://cfile7.uf.tistory.com/image/1160494B4F3A62A226D74D)

**Eclipse와 KeyMapping 동일하게 설정하기**

Preferences &gt; Key Bindings - User 에 아래의 내용을 붙혀넣고 저장한다

**Windows**
```javascript
[
{ "keys": ["f12"], "command": "htmlprettify"},
{ "keys": ["f1"], "command": "fold" },
{ "keys": ["f2"], "command": "unfold" },
{ "keys": ["ctrl+l"], "command": "show_overlay", "args": {"overlay": "goto", "text": "@"} },

{ "keys": ["ctrl+space"], "command": "auto_complete" },
{ "keys": ["ctrl+space"], "command": "replace_completion_with_auto_complete", "context":
[
{ "key": "last_command", "operator": "equal", "operand": "insert_best_completion" },
{ "key": "auto_complete_visible", "operator": "equal", "operand": false },
{ "key": "setting.tab_completion", "operator": "equal", "operand": true }
]
},
{ "keys": ["ctrl+d"], "command": "run_macro_file", "args": {"file": "Packages/Default/Delete Line.sublime-macro"} },
{ "keys": ["ctrl+shift+c"], "command": "toggle_comment", "args": { "block": false } },
{ "keys": ["ctrl+shift+c"], "command": "toggle_comment", "args": { "block": true } },
{ "keys": ["ctrl+shift+f"], "command": "reindent" , "args": {"single_line": false}},
{ "keys": ["alt+up"], "command": "swap_line_up" },
{ "keys": ["alt+down"], "command": "swap_line_down" },
{ "keys": ["ctrl+alt+j"], "command": "join_lines" },
{ "keys": ["ctrl+alt+down"], "command": "duplicate_line" },
{ "keys": ["shift+ctrl+r"], "command": "show_overlay", "args": {"overlay": "goto", "show_files": true} },
{ "keys": ["ctrl+shift+s"], "command": "save_all" },
{ "keys": ["ctrl+l"], "command": "show_overlay", "args": {"overlay": "goto", "text": ":"} },
{ "keys": ["shift+ctrl+f4"], "command": "close_all" },
{ "keys": ["shift+ctrl+y"], "command": "lower_case" },
{ "keys": ["shift+ctrl+x"], "command": "upper_case" }
]
```

**MAC**
```javascript
[
{ "keys": ["f12"], "command": "htmlprettify"},
{ "keys": ["f1"], "command": "fold" },
{ "keys": ["f2"], "command": "unfold" },
{ "keys": ["super+l"], "command": "show_overlay", "args": {"overlay": "goto", "text": "@"} },

{ "keys": ["ctrl+space"], "command": "auto_complete" },
{ "keys": ["ctrl+space"], "command": "replace_completion_with_auto_complete", "context":
[
{ "key": "last_command", "operator": "equal", "operand": "insert_best_completion" },
{ "key": "auto_complete_visible", "operator": "equal", "operand": false },
{ "key": "setting.tab_completion", "operator": "equal", "operand": true }
]
},
{ "keys": ["super+d"], "command": "run_macro_file", "args": {"file": "Packages/Default/Delete Line.sublime-macro"} },
{ "keys": ["super+shift+c"], "command": "toggle_comment", "args": { "block": false } },
{ "keys": ["super+shift+c"], "command": "toggle_comment", "args": { "block": true } },
{ "keys": ["super+shift+f"], "command": "reindent" , "args": {"single_line": false}},
{ "keys": ["alt+up"], "command": "swap_line_up" },
{ "keys": ["alt+down"], "command": "swap_line_down" },
{ "keys": ["super+alt+j"], "command": "join_lines" },
{ "keys": ["super+alt+down"], "command": "duplicate_line" },
{ "keys": ["shift+super+r"], "command": "show_overlay", "args": {"overlay": "goto", "show_files": true} },
{ "keys": ["super+shift+s"], "command": "save_all" },
{ "keys": ["super+l"], "command": "show_overlay", "args": {"overlay": "goto", "text": ":"} },
{ "keys": ["shift+super+f4"], "command": "close_all" },
{ "keys": ["shift+super+y"], "command": "lower_case" },
{ "keys": ["shift+super+x"], "command": "upper_case" }
]
```
![](https://raw.githubusercontent.com/newyork-tribe/study-node.js/master/tutorial/setup/image/key.png)
