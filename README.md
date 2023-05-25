# Master's Thesis - Semantic Search on Equipment

## Table of contents

- [Abstract](#Abstract)
- [Technologies](#technologies)
- [Setup](#setup)

### Abstract

The outcomes of this research have significant implications for enterprises seeking effective semantic search solutions considering information beyond what is explicitly shown in the raw documents from different inventories and formats and responding to users’ inquiries with relevant answers helping them to reduce their workload, time, and efforts. This master's thesis investigates semantic search on heterogeneous documents in an enterprise-level context by exploring two distinct approaches: RDF ontology with RML and entity extraction with vector embeddings. The thesis aims to evaluate the effectiveness of these approaches individually and identify opportunities for their combined application as future research scope.

The first experiment employs entity extraction techniques and vector embeddings with the support of Pinecone DB. By transforming documents into high-dimensional vectors, it captures semantic similarities, enabling similarity-based search. The experiment specifically targets CSV, Excel, and datasets, offering a focused investigation into the semantic search within specific formats. The second experiment focuses on RDF ontology with RML, utilizing graph-based modeling and SPARQL querying. It demonstrates the ability to capture complex semantic relationships, hierarchies, and ontological concepts, providing a powerful framework for semantic search. The experiment handles structured (CSV, Excel) and unstructured (JSON, XML, DOCX, PDF) documents, enabling effective retrieval of information from diverse file formats.

Through a thorough analysis and comparison of the results, the thesis concludes that the RDF ontology experiment outperforms the entity extraction experiment in terms of semantic search on heterogeneous documents in an enterprise-level setting. The RDF ontology approach exhibits superior semantic representation, advanced querying capabilities, and greater semantic expressiveness, enabling more accurate and meaningful search results. Building upon this conclusion, the thesis proposes future research on merging RDF ontology with RML and vector embeddings to leverage their respective strengths. This combined approach can hold promise for providing a more comprehensive and powerful semantic search solution, allowing for enhanced semantic representation, advanced querying mechanisms, and improved retrieval accuracy.

Finally, this master's thesis contributes to the advancement of semantic search on heterogeneous documents in an enterprise-level context, offering valuable insights and paving the way for further research and development in this field

### Technologies

Project is created with:

- ReactJS
- NodeJS (Express.js)
- GraphDB
- Pinecone
- Vector Embeddings
- Entity Extractions
- RDF
- RML
- NLP
- SPARQL
- Protege

### Setup

To run this project locally, these steps should be followed:

#### Graph Database Setup

Step 1: Install GraphDB from `https://graphdb.ontotext.com` from this website.
Step 2: Run `http://localhost:7200` to access GraphDB.
Step 3: In oprder to set a repository, Click `Steup > Repository > Create New Repository > GraphDB Repository`
Step 4: Give RepositoryId as `customRepo`, and leave other options as default and Click `Create`
Step 5: Select `customRepo` from the top-right corner dropdown menu
Step 6: Click `Import` from the sidebar, and Click `Upload RDF Files` (RDF files can be found in `server/csv-to-rdf/convertedRDF`, and model in `server` folder)
Step 7: Upload the files and click `Import`
Step 8: Select `Name Graph` and prodive an IRI such as `http://www.semanticweb.org/model/electric/vehciles/`

#### Server Setup

Server listens to the port `9000`

##### In terminal

```
$ cd Server
$ cd csv-to-rdf
$ npm install
$ node demo.js
```

#### Frontend Setup

Client listens to the port `3000`

##### In terminal

```
$ npm install
$ npm start
```
