
PUBLISHED ON LOVABLE.APP: https://group4.lovable.app/


WEEKLY UPDATES LOG

📂 Project: Barangay Services Web App (React)GitHub Repo: jadeambos123/react-mix-masterpiece

🗓️ Weekly Progress – April 14–18

🎯 OverviewThis week, we began building the Barangay Services System — a tool that lets residents file complaints, request official documents or aid, and view barangay announcements. We started development in CodeSandbox, but we later decided to switch over to Lovable.app to simplify our UI building and code export process.

🔧 What We Did

Created initial UI layouts for:

Complaint Form

Document Request Form

Aid Request Form

Announcements View

Integrated React Router for page navigation

Migrated development platform from CodeSandbox to Lovable.app

Set up reusable components and basic CSS styling

💡 Challenges

CodeSandbox was laggy and unstable during collaborative edits

Lovable’s auto-generated code had a lot of duplicate class names and unnecessary wrappers

Managing form validation without a backend was tricky

📌 Lessons & Next Steps

UI platforms like Lovable are great for fast layout, but manual code cleanup is needed

Explore alternative ways to store data without a full backend

Start building out the admin interface for processing resident requests

🗓️ Weekly Progress – April 21–25

🎯 OverviewThis week we shifted focus to adding interactivity to the forms and simulating a data layer using localStorage. Because a full backend was too complex to implement in time, we used browser storage as a substitute to demonstrate functionality.

🔧 What We Did

Connected all forms (complaint, document, aid) to localStorage

Built the structure for the admin dashboard to pull submitted data from localStorage

Created a login page for admins (no real authentication; just simulated for demo purposes)

Made more responsive design tweaks using Lovable

💡 Challenges

No backend meant we had to manually parse and update data in localStorage

Handling array updates in localStorage was error-prone and required extra testing

Lovable’s code export sometimes created conflicts with custom logic

📌 Lessons & Next Steps

localStorage can work well for prototyping when backend setup isn’t feasible

Admin panel needs filtering and sorting of entries next

Add feature for posting and managing announcements

🗓️ Weekly Progress – April 28 – May 2

🎯 OverviewThis week we finalized all major components for both residents and the admin side. Users could now file requests, and the admin could view and manage these. We also added an announcements module for the admin.

🔧 What We Did

Completed Admin Dashboard functionality:

View complaints, document, and aid requests

Finalized form confirmation prompts and success messages

Cleaned up Lovable-exported code and organized reusable files

💡 Challenges

Announcement view formatting was inconsistent across devices

Refactoring how data is stored/retrieved from localStorage to avoid overwrites

Some bug reports about missing or malformed data were caused by empty form submissions

📌 Lessons & Next Steps

Use stricter validation before storing data

Final testing phase and documentation writing to begin

Prep project for GitHub upload and class submission

🗓️ Weekly Progress – May 3–7

🎯 OverviewThe final week focused on polishing, fixing bugs, and preparing all documentation for presentation and submission. We finalized our GitHub repo and created this README with weekly logs.

🔧 What We Did

Fixed layout bugs caused by Lovable's auto-layout wrappers

Final QA test run on all major forms and admin tools

Wrote project documentation and organized project folders

Uploaded everything to GitHub

💡 Challenges

Last-minute form validation bugs

Slight inconsistencies in localStorage retrieval for admin dashboard

Adjusting CSS for mobile display across all views

📌 Final Notes

All main features are complete and working:✅ Complaint Filing✅ Document & Aid Requests✅ Admin Dashboard (view, filter, manage entries)✅ Announcements Management

The system successfully simulates a working Barangay Services platform using front-end technologies and localStorage

👥 Team Members

Jade Ambos

Archie Jason Savaria

Finnah Marie Bajas

Kierby Amolato

Michael Canoy

Ashlee Rubin

Timothy Fortes

