# Educell Student Records - Front End Readme

Deploy URL for front end: https://international-fe-2.netlify.com/

Details for directories and files are outlined after the technologies & concepts listing.

## Technologies & concepts used for front end:

- **React** framework (including implementation of the new React Hooks API)
- **Redux** state management
- Preprocessed styling with **SCSS**

## `App.jsx`

The starting point of the application will conditionally render, based on whether the user has a JWT authentication token stored in `localStorage`:

- The sign in page (`SignInPage`), with a component showing company name and description (`NameHeader`) displayed or;
- The home page (`HomePage`), with a navigation sidebar included (`NavBar`)

## Containers (components that are used as 'containers' for other components and make up the entirety of a page view):

### `SignInPage.jsx`

The sign in page that will be displayed, containing a header displaying the company name (with a brief description), the registration form, and the login form.

Components that are utilized include:

- `NameHeader`
- `RegistrationForm`
- `LoginForm`

### `HomePage.jsx`

The first page that will be seen by the user after logging in. It contains the navigation sidebar and a paginated list of students displayed in grid format and sorted by name. Individual grid entries have buttons linking to a page with the full information of the corresponding student.

Components that are displayed include:

- `StudentGrid`
- `StudentGridItem` _(generated by the `StudentGrid` component)_

### `SingleStudentAddPage.jsx`

A page that contains a form for adding a new student into the database records.

Components that are displayed include:

- `StudentInfoForm` (function to add the student to the database records is facilitated via props)

### `SingleStudentViewPage.jsx`

A page that displays all information of a particular student, with ability to delete the student from the database records as well as update their information.

Component state is utilized and managed with the React Hooks API to control whether the user is set to either simply view the student information or update it.

Components that are displayed include:

- `StudentFullInfoDisplay` (conditionally rendered)
- `StudentInfoForm` (conditionally rendered; function to add the student to the database records is facilitated via props)

## Components (reusable components that make up part of a web page and handle logic):

### `LoginForm.jsx`

Contains the actual form for entering login information, with a button for logging in.

_Can be found in the following container(s): `SignInPage`_

### `NameHeader.jsx`

Purely aesthetic component for displaying the company name and a brief description.

_Can be found in the following container(s): `SignInPage`_

### `NavBar.jsx`

The component for displaying the actual navigation sidebar. Active link items are styled accordingly.

_Conditionally rendered in `App.jsx` (based on login status)._

### `RegistrationForm.jsx`

Contains the actual form for entering registration information with a button for submitting the new user's information.

_Can be found in the following container(s): `SignInPage`_

### `StudentFullInfoDisplay.jsx`

Component for the actual display area for an individual student's information.

_Can be found in the following container(s): `SingleStudentViewPage`_

### `StudentGrid.jsx`

Component for the actual grid display of all students falling within the current pagination count.

Component state is utilized and managed with the React Hooks API to implement the pagination feature.

_Can be found in the following container(s): `HomePage`_

### `StudentGridItem.jsx`

Component for displaying an individual student in the grid display layout. Generated by the `StudentGrid` component.

_Can be found in the following container(s): `HomePage` (generated by the `StudentGrid` component)_

### `StudentInfoForm.jsx`

Component that contains a form for either adding or updating a student's information.

The React Hooks API is used to clear the form inputs if another page is visited or if the user exits the update mode for the student information view page.

_Can be found in the following container(s): `SingleStudentAddPage`, `SingleStudentViewPage`_

## Reducers

### `registrationReducer.js`

Handles the state for processing registration data.

### `loginReducer.js`

Handles the state for processing login data.

### `studentDataReducer.js`

Handles the state for processing student data.

## SCSS stylesheets

`index.scss` is the main stylesheet file for SCSS preprocessing. All other stylesheet files are SCSS partials integrated into this file.

These partials include the following:

### `variables.scss`

Contains variables used for dynamically assigning color values (with corresponding color names also indicated) and fonts.

### `mixins.scss`

Used to add capabilities for functionally applying various parameter-based styling boilerplates on an element.

### `animations.scss`

Contains keyframe-based native CSS animations to be used in the front end app.

### `reset.scss`

Contains a modified version of the Eric Meyers CSS reset.

### `global.scss`

Contains a set of styles to be globally applied. Targets mostly element selectors, along with a few recurring classes that are used for upper-level tags.

### `App.scss`

Contains styling for app-wide background overlay.

### `NameHeader.scss`

Contains styling for the `NameHeader` component.

### `SignInPage.scss`

Contains styling for the `SignInPage` container. Layout and shared styling for login and registration forms are defined here.

### `NavBar.scss`

Contains styling for the navigation sidebar. Includes styling for active links.

### `HomePage.scss`

Contains styling for the home page, including the paginated grid display of students.

### `SingleStudentAddAndView.scss`

Contains styling for:

- Page for adding/updating a student record
- Page for viewing an individual student's information
