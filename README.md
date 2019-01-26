# angular-tutorial
Code snippets for Angular

Setup
---------------
install node [Current latest version : 10.15.0]
[if behind proxy server, need to provide authentication details in C:\Users\<username>\.npmrc]
>>node -v
>>npm -v [6.4.1]
>>node
	>console.log "Hello";
-----------------------------
install code editor from microsoft
--------------
>>npm install -g @angular/cli 	-- g for global

----------------
C:\Dev\Installation\Angular>npm install -g @angular/cli
C:\Users\shish\AppData\Roaming\npm\ng -> C:\Users\shish\AppData\Roaming\npm\node_modules\@angular\cli\bin\ng
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules\@angular\cli\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ @angular/cli@7.1.4
added 292 packages from 178 contributors in 45.156s

----------------
>>ng
>>ng -help
>>ng new ng7 			-- ng <action><project-name>
 Which stylesheet ->SCSS
[note that this step also initialize git. See last line at console. I guess this is equivalent of running git init command]
it is better ti use ng new user-auth-web --skip-git to avoid git conflicts later
...to be continued after git steps.
=====================================================================================================================


Project Overview
---------------
main.ts bootstraps AppModule
AppModule bootstraps AppComponent
AppComponent html has embeded <app-nav>which is selector for NavComponent
NavComponent specifies various routerLinks one for each component.
