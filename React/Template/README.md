<img src="./assets/img/wavingPolkaroo2.gif" width="200" height="175" />

![](https://img.shields.io/badge/TFO-%20WPA%20Built-green)

**Table of Contents** In Smart Editor Only

[TOC]

---

## Getting it all to work

### Check-list

- [x] :smiley: Check through this list as you finish each item!

- [ ] **Clone the repo to your machine**  :dizzy:

- [ ] **In the terminal run** ` $ npm install`

- [ ] **In the terminal run** ` $ npm run dev` this will launch a live browser window displaying the TFO

      `CTRL+C` Stops the script.

- [ ] **In the terminal run** ` $ npm run build` this will rebuild the course into ./dist folder. This folder is uploaded to brightspace.

![](./test/assets/img/testHTMLLocation.jpg)![](./test/assets/img/rightLaungLive.jpg)

:star: :star: :star: :star: :star: :star: :star: :star: :star: :star: :star: :star: :star: :star: :star: :star:

### Troubleshooting and Git

_Hopefully one of these instructions/details will get things running for you_

#### Issue installing node modules `npm install`

**Required File**
`.npmrc`
_Can be found in_
`C:\Users\<user-name>\.npmrc` - On Windows
`/Users/<user-name>/.npmrc` - On Mac

**If you do not have this file you will need to create one.**
_Need a Authentication Token from gitlab as well as permission to edit_

**Short Version:**
Make a file name _.npmrc_ with this inside

```text
TO BE DETERMINED
```

---

#### To create a personal access token / authentication token:

1. Sign in to GitLab.

2. In the top-right corner, select your avatar.

3. Select Edit profile.

4. In the left sidebar, select Access Tokens.

5. Choose a name and optional expiry date for the token (just leave expiry date blank).

6. Choose the desired scopes: A. Read api B. Read repository.

7. Select Create personal access token.

8. Save the personal access token somewhere safe. If you navigate away or refresh your page, and you did not save the token, you must create a new one.

---

#### Get most recent updates

Make sure you are in the `develop` branch.

In the bash terminal

`git pull` Get all recent changes from gitlab

`git install` Install new libraries that may have been added, reinstall old ones (rarely necessary)

`git checkout yourBranchName` Navigate to your styles branch
OR ()
`git checkout -b yourBranchName` (To create new branch -b flag is added after checkout)

`git status` Check to see if there are any unsaved changes

---

#### To Save your changes to Repo

`git add .` The "."  Selects all files with changes and "stages" them to be saved

`git commit -m "A short message about the commit"`   Save changes "Locally"

`git push`   Upload changes to gitlab to the branch you are in

---

#### To merge changes _Bring the changes made in another branch into your current branch_

When on branch you wish to merge changes into
_For example_
`git merge develop` This will merge all the new changes from develop into your current branch

---

#### To copy and remove _cut_ uncommited changes to clipboard

_This is sometimes useful when you make changes but wish to change branches or merge without having to commit changes_
`git stash`  Cut the recent changes (uncommit/saved)

`git stash pop`  Paste the recent changes (Can be done after merge if you want)

---

## React Intro

This guide will focus on "Functional Components" within React.
Note that there are also Class Components which look and behave diffeently in a few ways.
Today React can be written without the need of Class Components.

#### JSX Syntax and JavaScript (lite)

JSX is a syntax extension of JavaScript. It’s used to create DOM elements which are then rendered in the React DOM.

A JavaScript file containing JSX will have to be compiled before it reaches a web browser. The code block shows some example JavaScript code that will need to be compiled.

```

import React from 'react';

import ReactDOM from 'react-dom';



ReactDOM.render(<h1>Render me!</h1>, document.getElementById('app'));

```

---

#### Nested JSX elements

In order for the code to compile, a JSX expression must have exactly one outermost element. In the below block of code the tag anchor tag is the outermost element.

```

const myClasses = (

  <a href="https://www.codecademy.com">

    <h1>

   Sign Up!

    </h1>

  </a>

);

```

`const title = <h1>Welcome all!</h1>`

- In the block of code we see the similarities between JSX syntax and HTML: they both use the angle bracket opening and closing tags.

- When used in a React component, JSX will be rendered as HTML in the browser.

##### JSX attributes

The syntax of JSX attributes closely resembles that of HTML attributes.

```

const example = <h1 id="example" className="example"> JSX Attributes </h1>;

```

Note that `html class` becomes className in JSX

---

#### TFO Guide Component -- Can find these examples in the repo (hopefully)

##### Our Blockquote Component

```

import React from "react";



import React from "react";

const Blockquote = ({text}) => {
  return (
    <div className="Blockquote">
      <p>{text}</p>
    </div>
  );
};

export default Blockquote;

```

##### Importing a Component into a Page

```

import React from 'react';

import {Blockquote} from "../Components/index";

```

##### ../Components/index

Acts as the collection of imported Components. Each being exported back out.
A central hub allowing for easier/cleaner importing within the Pages themselves.

```
// ? Blocking
import Blockquote from "../Components/Blocking/Blockquote";
import Text from "../Components/Blocking/Text";

// ? Widgets
To be added

// ? Interactives
To be added
export {Blockquote, Text};
```

---

### A little JS to the X

##### Passing props (data) into the Blockquote Component

** Page1 => Blockquote **

- Page1

```

import React from "react";

import {Blockquote} from "../Components/index";


export const Page1 = () => {

  return (
   <div>
    <Blockquote text = {`How do the literary devices found in narration (e.g., plot, character, conflict, setting, etc.) help properly structure a story in order to allow for a deeper understanding?`}/>
   </div>
  );

};

```

- Blockquote

```

import React from "react";

const Blockquote = ({text}) => {
  return (
    <div className="Blockquote">
      <p>{text}</p>
    </div>
  );
};

export default Blockquote;


```

#### React Hooks

(useState , useEffect)

React hooks are useful functions built into the React package
They give acces to many React's features – like managing your component's state, or performing
an after effect when certain changes occur in state(s) without writing a class.

_Tip: You can make your own Hooks - custom Hooks_

##### State (Current Memory) in React

Geeksforgeeks.org - The state is an instance of React Component Class can be defined as an object of a set of observable properties that control the behavior of the component. In other words, the State of a component is an object that holds some information that may change over the lifetime of the component.

Good to remember that React "reacts" to the current state and renders the
Components accordingly within `<div id"root"> {IN HERE} </div>`

##### useState (Hook)

Hooks must be imported, since useState is included in the React NPM module used to create the react project, we import from there.

```
import React, {useState} from "react";
```

_Remember - Curly Brackets are used when there are multiple exports inside the file and the specific file must be "deconstructed" from the others in the file_

useState is similar to a variable.

```
const App = () => {
  const [page, setPage] = useState(0);
```

page = The name/reference to the state
setPage() = A function that can later be used to update the state
useState(0) = Initial value of state (0 in example), can be empty or any other data type including Objects.

###### Passing State and it's update function down as props

Inside the return of App.js

```
return (
    <div className="App">
      <header className="App-header">
        <Navigation setPage={setPage} page={page} />
      </header>
      {pickPage()}
    </div>
  );
```

In the header Navigation is being rendered and has been given access to the state "page" and it's update function "setPage"

The Page that is rendered is decided by the pickPage() function which exists inside App.js

Depending on the state(value) of page a different Component is returned to the return ;) of App.js to be rendered.
Since the initial state of "page" is 0 <Introduction /> page is returned and is rendered in App.js

```
const pickPage = () => {
    switch (page) {
      case 0:
        return <Introduction />;
        break;
      case 1:
        return <Page1 />;
        break;
      case 2:
        return <Page2 />;
        break;
      case 3:
        return <Page3 />;
        break;
      case 4:
        return <Page4 />;
        break;
      default:
        console.log("default");
        break;
    }
  };
```

Inside the Navigation Component setPage and page props are "destructured" from the props object.

```
const Navigation = ({setPage, page})

Is the same as

const Navigation = (props) => {
   const {setPage,page} = props
}

Is the same as

const Navigation = (props) => {
   const setPage = props.setPage
   const page = props.page
}
```

Below is the code for the button which returns the student to the Introduction Page.
OnClick is changes the state of page inside App.js to 0.

When State changes ANY Component that uses that state is updated. React, reacts! to state change
page => App.js and Navigation

```
// ? Navigation
const Navigation = ({setPage, page}) => {
  return (
    <div className="Navigation">
      <div className="Content-Section">
        <button
          onClick={() => {
            setPage(0);
          }}
        >
```
