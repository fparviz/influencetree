"""
Serves files out of its current directory
Dosen't handle POST request
"""

import SocketServer
import SimpleHTTPServer
from urlparse import urlparse,parse_qs
import handleRequest

PORT = 8000

def handleAuthor(author):
  """ sample function to be called via a URL"""
  print "handle", author
  return handleRequest.handle(author[0])
  

class CustomHandler(SimpleHTTPServer.SimpleHTTPRequestHandler):
    def do_GET(self):

      # Split get request up into components
      req = urlparse(self.path)
      
      # If requesting for /move
      if req.path =='/handleRequest.py':
        
        print "my request", req,
        param = parse_qs(req.query)
        
        #This URL will trigger our sample function and send what it returns back to the browser
        self.send_response(200)
        self.send_header('Content-type','text/html')
        self.end_headers()
        self.wfile.write(handleAuthor(param["author"])) #call sample function here
        return
      else:
        #serve files, and directory listings by following self.path from
        #current working directory
        SimpleHTTPServer.SimpleHTTPRequestHandler.do_GET(self)


httpd = SocketServer.ThreadingTCPServer(('localhost', PORT),CustomHandler)

print "serving at port", PORT
httpd.serve_forever()
