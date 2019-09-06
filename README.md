This front-end was attempted to complete the black diamond challenge on the DevMountain node-3-afternoon project.

The goal was to build a front-end react app that connects and communicates to the node REST api built in the afternoon project.

I started out by building the structure of the application, importing axios, react-router-dom, and using create-react-app to bootstrap the application. After building a few components and successfully routing them as different pages, I ran into an issue getting response.data from the api. Turns out that this was a cors issue with the proxy. The proxy had the correct port, but I kept getting a 400 error from my .catch. After countless attmepts to fix the issue, (including changing ports on both the node server and the proxy), I was no closer to fixing the issue. This is where my mentor Eric came to the rescue. 

## Issue
The issue ended up being a proxy cors issue. The issue stemed from using two different files (one for the react application, and one for the node server) which were not included in the same parent file. Because of this, the server and the axios requests were not going through. 

## Resolution
Eric fixed the issue by installing express, and creating a 'back-end' for the front-end application. He then used an axios request to retrieve data from the original node api server. 

## What I Learned
When creating a full-stack react application, always start with create-react-app. Don't create an entire back-end and then decide to add a front-end. (This scenario was caused by trying to add a front-end to a full back-end exercise).
