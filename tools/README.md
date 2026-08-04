# tools/

`og-card.html` is the source for `public/og-image.jpg` (the social preview
card). To change it: edit the HTML, serve this folder, screenshot at
1200×630, and save the result over `public/og-image.jpg`.

```sh
python3 -m http.server 8000        # from this folder
# then capture http://localhost:8000/og-card.html at 1200x630
```
