Node-Boilerplate
================

This is a basic boilerplate for Node.js, Express, EJS, Socket.io, MySQL and SASS.

I like to use this to roll out new Node projects quickly and I figure someone might find some use out of it. 
You need to have Ruby installed for SASS to function. You can download the latest verion on the <a href="http://www.ruby-lang.org/en/downloads/">Ruby download page.</a>
After you have downloaded Ruby do a simple gem install:

<code>
gem install sass
</code>

And you will be ready to go!

Here are some of the quick highlights of what is included.

<ul>
	<li>The index file is HTML5 ready and has Jquery and Socket.io ready to go. They both are pulled from CDNs and then fallback to local copies if a CDN happens to be down.</li>
	<li>MySQL is ready to be setup right away, simply enter your connetion information in the MySQL configuration section of app.js.</li>
	<li>SASS comes with a script for the extra lazy to monitor your sass files and compile style.css when changes are made. One for *nix and Windows.</li>
	<li>Socket.io works out of the box, so you can forgo the hassle of making it work with the latest version of express.</li>
</ul>

Running <code>node app.js</code> and connection to http://localhost:3000 will bring up the hello world page, where you decide to take it from there is up to you!