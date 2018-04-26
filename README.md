# The New Hello World

Just a quick look at what a JavaScript Hello World can look like in 2018

This is just a Proof of Concept and isn't meant as an actual tutorial at this point.

### Browser Usage

To run the browser example, you'll need a local webserver

I use `python -m SimpleHTTPServer 8080` to serve the content to `localhost:8080`.

That works mostly out of the box on OSX [^1].  YMMV on Windows or Linux.

[^1]: You'll need to follow [these instructions](https://ericduran.io/2017/10/09/js-modules-python-mime-type/
) for the python server to properly recognize .mjs as Javascript.  Alternatively if you only care about the browsers you can change hello.mjs to be hello.js and point index.html at it. 

### Node Usage

With node installed, you can run the node example with

`node --experimental-modules node.mjs`

or

`node --experimental-modules node.mjs Bob`

to print Hello Bob
