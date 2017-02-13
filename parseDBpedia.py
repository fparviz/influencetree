import numpy as np
import pandas as pd
import json
import os
import requests
import sys
import traceback

#wikipage url = https://en.wikipedia.org/?curid=" + data["wikipageid"]
FILE = "./data/authors_info.csv"
FILE_PROCESSED = "./data/authors_info_processed.csv"

data = pd.read_csv(FILE, header=0)
#print data
data = data.fillna("")

data["pictureQueryURL"] = "https://en.wikipedia.org/w/api.php?action=query&pageids="+data["wikipageid"].astype(str)+"&pithumbsize=300&prop=pageimages&format=json&pilimit=2"

#data["pictureQueryURL"] = "https://en.wikipedia.org/w/api.php?action=query&pageids="+data["wikipageid"].astype(str)+"&prop=pageimages&format=json&pilimit=2"

data["dob"] = data["birth"] + " - " + data["death"]

print data["dob"]

#data.to_csv(FILE_PROCESSED, header=True, index=False)

#print data["pictureQueryURL"]
#url = data["pictureQueryURL"].iloc[1]



def getWikiUrl(wikipageid):
  return  "http://en.wikipedia.org/?curid=" + data["wikipageid"]

def getPictures(data):

  for index, row in data[["pictureQueryURL","wikipageid"]].iterrows():
    #print row
    url = row["pictureQueryURL"]
    id = row["wikipageid"]
    print id, url
    
    if os.path.exists("./thumbnails-300/"+str(id)+".jpg"):
      continue
    
    r = requests.get(url)
    resp = r.json()

    try:
      thumbnail_url = resp["query"]["pages"][str(id)]["thumbnail"]["source"]
      #print thumbnail_url

      r2 = requests.get(thumbnail_url)
      with open("./thumbnails-300/"+str(id)+".jpg", 'wb') as fd:
        for chunk in r2.iter_content(chunk_size=128):
          fd.write(chunk)

#print r2

    except Exception as e:
      print "error", id
      #exc_type, exc_value, exc_traceback = sys.exc_info()
      #traceback.print_tb(exc_traceback, limit=1, file=sys.stdout)


    print resp

#getPictures(data)

def createAutocomplete(data):
  out = "<datalist id=\"authors\">\n"
  for row in data["author"]:
    out += "<option value=\""+ row+"\">\n"
  out +="</datalist>\n"

  fp = open("datalist.html","w+")
  fp.write(out)

createAutocomplete(data)


