# Firebase hosting

<v-clicks>

* Firebase also provides hosting services
* This means we can put the HTML, CSS, JS, and other files from our application on Firebase
* Firebase will then manage serving the files to a browser and the other complex things

</v-clicks>

---

# Firebase CLI

To use Firebase hosting, first we have to install the Firebase Command Line Interface (CLI)

1. To install, run the command

```bash
pnpm i -g firebase-tools
```

2. Then, you need to login to Firebase

```bash
firebase login
```

3. Test if it works

```bash
firebase projects:list
```

[Read more here](https://firebase.google.com/docs/cli#sign-in-test-cli)

---
layout: two-cols
---

# Deploy

* Create a `firebase.json` file
* `firebase.json` specifies some Firebase specific configuration
* `hosting.public`: the path of the folder with our static files
* `hosting.rewrites`: we want to route all traffic to `/index.html`

::right::

`firebase.json`
```json
{
  "hosting": {
    "public": "dist",
    "ignore": [],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

---
layout: two-cols
---

# Deploy

* Create a `.firebaserc` file
* This specifies the project Firebase should deploy to

::right::

`.firebaserc`
```json
{
  "projects": {
    "default": "<YOUR_FIREBASE_PROJECT_ID>"
  }
}
```

---

# Deploy

Run the following commands in Powershell (or Terminal if you're on macOS)

```shell
pnpm run build
firebase deploy
```
