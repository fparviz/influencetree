# InfluenceTree

The goal of this project is to create a visualization of author's influences. 

1) Using SPARQL we query dbpedia.org for the list of all authors and extract who they influenced and who they were influenced by. 
2) We also extract wiki related information from this database, that helps us finds the pictures of the authors. 
3) Finally, we use d3 libraries to draw an interactive graph that allows one to explore the influence tree

## To Use

just run python server.py 
open the website at the proper port
Note that by default William Faulkner's tree should be loaded
