WEEKLY UPDATES LOG

📂 Project: Barangay Services Web App (React)GitHub Repo: jadeambos123/react-mix-masterpiece

🗓️ Weekly Progress – April 14–18

🎯 OverviewThis week, we started building the Barangay Services System. The goal was to allow users to file complaints, request documents or aid, and receive announcements from the barangay. We started coding in CodeSandbox but later transferred development to Locofy.ai for a more streamlined UI-building experience.

🔧 What We Did

Created initial UI layouts for:

Complaint Form

Document Request Form

Aid Request Form

Announcements View

Integrated React Router for page navigation

Switched platform from CodeSandbox to Locofy.ai for easier UI development

Set up reusable components and styled basic pages

💡 Challenges

CodeSandbox was laggy and occasionally crashed during team edits

Locofy.ai required cleanup of auto-generated code and duplicate classes

Figuring out proper form validation across all inputs

📌 Lessons & Next Steps

Locofy is powerful for layout but needs custom logic afterward

Next step is to link each form to a backend to store user submissions

Begin working on the admin login and dashboard for managing requests

🗓️ Weekly Progress – April 21–25

🎯 OverviewThis week was all about connecting the resident-facing system to the backend and beginning work on the admin panel. We focused on making the complaint, document, and aid requests functional.

🔧 What We Did

Hooked up form submissions to Firebase (temporary backend)

Implemented status-based views for the admin dashboard

Designed Admin Login Page and tested login states

Enhanced UI design in Locofy, especially responsiveness

💡 Challenges

Firebase data was not syncing immediately — had to debug useEffect triggers

Locofy components had repeated CSS classes that caused layout shifts

Some forms had missing fields that caused unexpected submission errors

📌 Lessons & Next Steps

Always test each form with dummy data before linking

Start adding announcements panel for admins next week

Improve visual feedback after form submission

🗓️ Weekly Progress – April 28 – May 2

🎯 OverviewThis week we finalized the admin panel features and ensured residents could properly submit and track their requests. We also added the ability for admins to post announcements.

🔧 What We Did

Finalized the Admin Dashboard:

View submitted complaints

View document and aid requests

Post announcements with a WYSIWYG interface

Added confirmation alerts after each user form submission

Made all pages mobile-responsive using Locofy’s auto-layout tools

💡 Challenges

Announcement preview wasn’t rendering properly in some browsers

Had to refactor the submission logic to avoid duplicated entries

The admin login session sometimes expired too early

📌 Lessons & Next Steps

Use localStorage or token-based auth to manage admin sessions

Prepare the project for documentation, GitHub README, and submission

Run full QA testing and finalize minor UI bugs

🗓️ Weekly Progress – May 3–7

🎯 OverviewThis final week was focused on polish, bug fixing, and writing documentation for the submission. We finalized all forms, finished the admin system, and updated the GitHub repository with our latest code and logs.

🔧 What We Did

Fixed bugs in:

Audio notification toggle for admins (optional feature)

Form validation alerts

Announcement timestamp formatting

Wrote project documentation and README file

Organized code structure into reusable folders

Completed QA testing and final walkthrough

💡 Challenges

Deployment took longer than expected due to some dependencies

Needed to manually tweak a few styles that Locofy generated

📌 Final Notes

All core features are complete and working:✅ Complaint Filing✅ Aid and Document Requests✅ Admin Login & Dashboard✅ Announcements Posting

System successfully demonstrates barangay-resident interaction

👥 Team Members

Jade Ambos

Archie Jason Savaria

Finnah Marie Bajas

Kierby Amolato

Michael Canoy

Ashlee Rubin

Timothy Fortes

