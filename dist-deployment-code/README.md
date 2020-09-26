# Fallback Shop / Alt-X code for AEM deployment

This folder contains code that is meant for deployment from within AEM.

The code is originally built with the regular Vue.js ```npm run build``` task, but the code generated inside the ```/dist``` folder always needs to be adapted for deployment as 'Custom Frontend Code' (usually an HTML file referencing CSS and JS assets from AEM's Digital Asset Manager (DAM)).

Assets are being deployed through the DAM, they are currently uploaded untouched to two folders (JS and CSS): 
https://www.unitymedia.de/content/dam/dcomm-unitymedia-de/Privatkunden/BBCT/fallback-shop/js/
and
https://www.unitymedia.de/content/dam/dcomm-unitymedia-de/Privatkunden/BBCT/fallback-shop/css/

Replace the relative paths in the built HTML file with paths leading to the proper location in the DAM.

That means you would replace
```href=/css/```
with
```href=//www.unitymedia.de/content/dam/dcomm-unitymedia-de/Privatkunden/BBCT/fallback-shop/css/```

I.e. URLs would have to look like this for Javascript tag src Attributes: ```https://www.unitymedia.de/content/dam/dcomm-unitymedia-de/Privatkunden/BBCT/fallback-shop/js/app.<some_hash>.js```

Keep in mind that the hashes in file names change when the original CSS or JS was changed.

### Built files
WebPack code splitting (by lazy loading/ importing routes) works locally, but not (yet) from withing AEM/DAM. Thus we build only three files, like this:

    dist/js/app.<some_hash>.js
    dist/js/chunk-vendors.<another_hash>.js
    dist/css/app.<yet_another_hash>.css  


The href's pointing towards these files have to be adapted manually inside any HTML file used for deployment. The HTML is currently deployed through AEM site manager's properties dialog of a page using an _empty template_.


## Hints on how to develop, build and deploy
#### Development

**Developer Feature Branches:**
checkoutform
alt-x-legacy-design
**Integration/QA Branch:**
development
**Live/Master Branch**
master

#### Building & Deployment
*Important:* For some reason the base tag has no effect. The link and script tags inside the HTML file integrating the built scripts need to have _absolute_ paths (in AEM DAM).
(Make sure to put the manually adapted index.html into the DAM, not the built one, otherwise you'll get 404 errors and/or 'unknown Mime type' error.)


## Deployed Instances

A) Developer preview:
https://www.unitymedia.de/online-shop-development
HTML-Template: /dist-deployment-code/index-DEV.html

B) Incident/ Fallback Shop:
https://www.unitymedia.de/breitband-shop
HTML-Template: /dist-deployment-code/index-BS-PROD.html


C) Testing/ Alternative Experience:
https://www.unitymedia.de/online-shop
HTML-Template: /dist-deployment-code/index-PROD.html

Beware: B and C can be temporarily 'deactivated' by setting a flag REDIRECT_TO_DCOMM which will trigger an immediate redirect to the standard Dcomm homepage.


## Additional Code Adaptations
For SiteCatalyst analytics tracking (see satellite, adobe, sncf) and Tealium code injection (usually affiliate tracking, see utag, otag) the HTML files needed code additions. Default values (like empty JS objects '{}') are defined there. These global javascript tracking objects are manipulated from with the Vue app code (see _helper/updateTealiumDataLayer..._ and _router.js_ for instance).


## Tips and Hints

#### Tracking
When testing the analytics tracking it is useful to look at the developer tools network tab and filter for ```/ss``` to easily detect SiteCatalyst tracking signals and payloads.
Tracking requirements were given in [Jira ticket DA-3594](https://jira-it.unitymedia.de/browse/DA-3594) and sub tickets.

#### Tealium
Technical questions regarding Tealium (generally anything that begins with ```oTag``` or ```uTag``` ) should be addressed towards Team Platform (Oliver Langwald, Mehmet Akin)

#### Bug-hunting and Developer Tipps
If you encounter 404 errors and/or 'unknown Mime type' errors after a manual deployment check if you adapted the href attributes properly (absolute path to DAM? hashes in file names correct?)

The web app uses the [VueX](https://vuex.vuejs.org/) state management library. You'll find the corresponding browser extension for developers useful.


### For further questions:
Ask the authors (i.e. developers)
oliver.schafeld@unitymedia.de,
florian.reich@unitymedia.de,
or anyone from the Unitymedia Online Marketing's Broadband Conversion Team (BBC).

to be continued...
