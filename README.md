# International-UI (Joe Bacus)

MVP Features Breakdown:

- **Login Page/Modal** - After a user logs in, they'll be directed to a home page.

- **Navigation** - Navigation is present on all pages, _Users should know what page is active_ by clicking on a nav link and activating their tab.

- **Home Page** - contains of list of students, laid out in a _grid format_.

- **Single Child Add Page** - Clicking add child brings up a form _(could be modal, could be its own page)_ where a user can add information about a new child. Form should include _name_, a place to upload an _optional picture_, _status at the school (student, past student, or visitor)_, _age_, _insurance card (Y/N)_ and _expiration date_, _birth certificate Y/N_, _special needs_, _child’s representative_ and _contact info_. Clicking submit adds the child to the homepage.

- **Single Child View Page** - Loads all information from the intake form about the child

#### Rubrics for FE architect assessment:  https://docs.google.com/spreadsheets/d/1dL5UfyiHJ2qxWWfot-FTOeU3KUvZaixAKvkJ0uLuhL8/edit#gid=0

## Build Week Schedule

**Friday Before Build Week -** Kick off meeting, and for the last three hours of the day you will be working on the following items + awaiting your 1:1 as per usual.  BEFORE MONDAY

- Students are to select a project they'd like to work on in Monday.com.
- Students will organize into teams, Github repositories created, Project Management tools (trello) set up, Slack channel organized adding in all Team members and their PM's.
- Build your own Github Organization and add Team Members there ALL MEMBERS of your team INCLUDING PMS need to have access to your orgs.
- Read through Role requirements.
- Read through the Daily Milestones and Rubric requirements for each role.
- **Web UI** - Find a template from a site like HTML5 Up and use that templates color scheme/design flow for your app. This is a task you will all do as a team. *Not all Marketing websites will look the same/follow the same theme, but at least one has to be the default for the React app.
- **UX** - Basic user flow diagrams, Begin research plan (specifically, recruit at least three usability participants for next Wednesday), Begin style guide based on the templates with any alterations, Ensure you establish how to communicate recommended design updates to dev team in your team's project management flow.
- **iOS** - Complete planning sheet, including MVP feature list, wireframes, preliminary architecture design, and daily planning.

**Monday - Milestones**

- **All Team members -** All Project's repositories set up on Github to be done first thing.
- **Web Frontend and Backend**
    - All Project's file structures scaffolded and project architecture decided.
    - Front end will use React and front end styling platforms such as Material UI, Reactstrap, or something like Styled-Components chosen and implemented as your technology choice.
    - Backend will use Node/Express and all required packages for things like CORS, Body-Parser, JWT.
    - Each project is deployed to Netlify or Heroku by end of day.
    - User Login/Signup endpoints and features built out including the User Models. Front and Backend. Use JWT/Sessions strategies learned in Authentication here (unless agreed upon by the team and scrum master to move with an OAuth strategy).
    - Front end is pulling in some data from backend.
    - React app and Backend App talking to one another focus on CORS issues.
    - Data Migrations and Seeds set up for mock data.
- **Web UI -** Marketing landing page scaffolded with common layout structure implemented, mobile first features starting to come into play, lorem ipsum in place of copy as placeholder is set in place.
- **UX** - Finalize styleguide (Typography + Color Palette, other styling) and communicate any design adaptations to team, Finalize research plan, Wireframes for unique functionality in primary user flows for app portion of project, Usability / Heuristic review of marketing page/sign-up process
- **iOS** - Project created, basic UI built in interface builder, models written, and networking code running with mock data.

**Tuesday - Milestones**

- **Web Backend** - 80% of endpoints built.
    - All data models fully fleshed out.
- **Web Frontend** - 80% of Front end features & UI Components, built and consuming data from the backend (Functionality over form for now).
- **UI Developer**
    - ****Marketing site fully responsive to Mobile and Desktop screen widths.
    - ****Marketing "Login" call to action links user to the Deployed React app login screen.
- **UX** - Provide photo assets and content for marketing site, finalize usability interview guide confirm/ensure usability interviews scheduled for Wednesday, continue review of application development—focus on usability of application vs. visual aesthetic.
- **iOS**
    - Implement controller layers, including model controller(s), and view controllers. Wire up interface to controller layer. Basic UI should work, and app functionality should be near-working.
    - By end of day, switch networking controller over to live data provided by web backend.

**Wednesday - Milestones**

- **Web UI**
    - Marketing site replace placeholder copy with description of product.
    - All marketing site pages fully responsive and built out, may still need to polish up styling and layout.
- **Web Backend** - 100% of endpoints built (Backend).
- **Web Frontend**
    - 100% of Front end features & UI Components, built and consuming data from the backend (Now is the time to focus on Form).
    - Front end is pulling in all data necessary from backend, users can interact with ALL CRUD operations on the Project data.
- **UX** - Continue usability review and check for aesthetic consistency, style guide adherence. Communicate with dev team any updates that should be considered. Prep for and conduct usability interviews in afternoon.
- **iOS**
    - Finish implementation of MVP features. Implement visual design/theme.
    - **IMPORTANT:  Submit your app to TestFlight by Wednesday at 5 PM pacific. It does *not* need to be complete done/working, but it *must* be submitted to TestFlight.**

**Thursday - Milestones - FEATURE FREEZE 🥶**

- **All Team Members -**
    - No new features past 11AM PST/GMT.
    - Polish everything.
    - Strong emphasis on bug fixes and UI/UX.
- **Web** - If your Front end needs help, mob program. All web members in the group could be able to contribute to finalizing the styles.
- **All Team Members -** Document your projects within the Readme files in their Github repositories. Without having to talk to you specifically, any developer should be able to install, contribute to, and run your project based on the descriptions found in your readme.
- **UX -** Assist in the polish process, help create demo presentation, final review of content with an eye for aesthetics, user-focused language, and other usability concerns. Prepare research findings document, user flows, wireframes, and any other completed design deliverables for submission.
- **iOS** - Ensure all MVP features function as intended. Focus on UI polish. Perform final Q&A. If you find bugs, they should be documented, fixing them if time allows.

**Friday - Demo Day**

- There will be a school wide demo held on Friday for 1 hour during the morning.
    - Students will volunteer their projects to be demoed to their PMs.
    - Only 10 Projects will be demoed across the entire student body.
- Group wide demos will take place in your PM groups - PMs will use the project rubric to assign a score.
