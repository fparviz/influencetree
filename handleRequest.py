

import pandas as pd
import json
AUTHOR_INFO = "./data/authors_info_processed.csv"
INFLUENCED = "./data/influenced.csv"
INFLUENCEDBY = "./data/influencedBy.csv"



def buildInfluenceTree(data,author, influenced_list, influencedBy_list):

  tree = {
          "influenced":
              { "name":author,
                "children":[]
              },
          "influencedBy":
              { "name":author,
                "children":[]
              }
         }


  for i in influenced_list:
    
    try :
      author_data = data[data["author"] == i]
      dob = author_data["dob"].iloc[0]
      img = "./thumbnails-300/"+str(author_data["wikipageid"].iloc[0])+".jpg"
      bio = author_data["bio"].iloc[0]
    except:
      dob = ""
      img = ""
      bio = ""

    tree["influenced"]["children"].append({"name":i,
                                          "img":img,
                                          "dob":dob,
                                          "bio":bio})

  for i in influencedBy_list:
    
    try :
      author_data = data[data["author"] == i]
      dob = author_data["dob"].iloc[0]
      img = "./thumbnails-300/"+str(author_data["wikipageid"].iloc[0])+".jpg"
      bio = author_data["bio"].iloc[0]
    except:
      dob = ""
      img = ""
      bio = ""
    
    tree["influencedBy"]["children"].append({"name":i,
                                          "img":img,
                                          "dob":dob,
                                          "bio":bio})

  return tree

def findInfluences(author):
  data = pd.read_csv(INFLUENCED, header=0)
  mylist =[]

  try:
    row = data[data["author"] == author]
    mylist = row["influenced"].iloc[0].split("|")
  except:
    print author, "not found"
  return mylist

def findInfluencedBy(author):
  mylist = []
  data = pd.read_csv(INFLUENCEDBY, header=0)
  
  try:
    row = data[data["author"] == author]
    mylist = row["influencedby"].iloc[0].split("|")
  except:
    print author, "not found"

  return mylist

def handle(name):

  data = pd.read_csv(AUTHOR_INFO, header=0)
  author = name
  
  try:
    author_data = data[data["author"] == author]
    
    influenced_list = findInfluences(author)
    influencedBy_list = findInfluencedBy(author)

    resp = buildInfluenceTree(data, author, influenced_list, influencedBy_list)
    resp["dob"] = author_data["dob"].iloc[0]
    resp["img"] = "./thumbnails-300/"+str(author_data["wikipageid"].iloc[0])+".jpg"
    resp["bio"] = author_data["bio"].iloc[0]

    return json.dumps(resp)

  except:
    return json.dumps({"error":"author not found"})

  


print handle("Noam Chomsky")
#val = handle("Ludwig Wittgenstein")

#val = json.dumps(val)

#print val
