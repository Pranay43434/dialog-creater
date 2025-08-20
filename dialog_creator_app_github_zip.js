I have prepared a single folder structure ready to upload to GitHub. You can download this as a zip and push to a repository.

Folder: dialog-creator-app

Structure:
```
dialog-creator-app/
├── src/
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

Steps to upload:
1. Create a new repo on GitHub.
2. Unzip this folder locally.
3. In terminal:
   ```bash
   cd dialog-creator-app
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

All code is contained in `App.jsx` and `main.jsx`, with the project ready for immediate run.
