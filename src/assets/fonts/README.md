Every Dcomm release rebuilds the icon font and puts a fresh hash into *all* font links. 
As fonts in the fallback experience do not change (probably not even the icon fonts) we copy the fonts, remove the hashes and serve them from out of the Digital Asset Manager.

The original fonts can be found in the Dcomm repository (dcomm-unitymedia-de/prototype/app/media/fonts), they were copid into this project on January 28th, 2019.

Files in this folder are for archive purposes only.

The actual fonts for fallback shop are being served from this DAM folder:
content/dam/dcomm-unitymedia-de/shop/fonts
