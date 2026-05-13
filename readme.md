**ROOT CONFIG FILES**



1.git ignore tells GitHub which file to ignore/



2.env file tells which environment variables are needed



3.firebase-applet-config.json- firebase configuration for connecting the app to db



4\. firestore.rules — Security rules controlling who can read/write to your Firestore database.



5.index.html — The single HTML entry point. Vite injects your React app into this.



6.metadata.json — App metadata (name, version, description, etc.). Could also be used by Firebase hosting.



7.package-lock.json — Auto-generated. Locks exact versions of all installed npm dependencies.



8.tsconfig.json — TypeScript configuration — tells the compiler how strict to be, what to include, etc.



9.vite.config.ts — Configuration for Vite (your build tool/dev server).





**SRC**



1\.App.tsx — Root React component. Typically handles routing and wraps everything else.



2\.index.css — Global styles applied across the whole app.



3\.main.tsx — Entry point that mounts your React app into index.html.



**src/components/ — UI screens(sub pages of the cipher web app)**



1\.Dashboard.tsx — The main overview/home screen of the app.



2\.Journal.tsx — A journaling feature/page.



3\.Projects.tsx — A projects tracker page.



4\.Skills.tsx — Likely tracks skills you're learning or have.



5\.UI.tsx — Reusable UI components (buttons, cards, modals, etc.) shared across other components.



**src/lib/**



1\.firebase.ts — Initializes the Firebase app and exports Firestore/Auth instances for use elsewhere.



**src/services/**



1.db.ts — Database service layer — functions that talk to Firestore (e.g. getProjects(), saveJournalEntry()). Keeps DB logic separate from UI.

