# README

<p align="center">
  <img src="https://github.com/milesmcleod/purplenote-images/blob/master/purplenote-demo.gif?raw=true"/>
</p>

<p align="center">
<a href="https://purplenote.herokuapp.com" style="margin-top:30px; font-size: 22px; color: #7f00ff;">Purplenote Heroku</a>
</p>

## What is Purplenote?

Purplenote is a note-taking application, modeled closely on Evernote. It aims to enhance productivity by providing a flexible user experience, and includes features like tagging, shortcutting, and notebook organization to increase user productivity and enhance ease of use.

## Technology Used

Purplenote's back end is powered by Ruby, running the Rails 5 framework and a PostgreSQL database. Jbuilder is used to convert back-end data into JSON in the rails views.

The frontend was built utilizing the React and Redux JavaScript libraries. The rich-text editor embedded in Purplenote is implemented via the React-Quill adaptation of QuillJS. No jQuery was used in the making of this application, beyond constructing AJAX requests.

## Highlighted Technical Features

* ### Debounce Autosave

  * The debounce is a simple and powerful JavaScript capability, facilitated by the asynchronous Javscript runtime of the browser. The code below is an excerpt from the note-editing component:

  ```JavaScript
  import React from 'react';

  class NoteContent extends React.Component {
    constructor(props) {
      super(props);
      if (this.props.note) {
        this.state = this.props.note;
      }
      // ...
      this.debounceTimer = undefined;
      //...
    }

      //within the NoteContent class:

    handleQuillChange (editor) {
      const content = editor.getHTML();
      this.setState({ content });
      if (this.props.note) {
        clearTimeout(this.debounceTimer);
        this.debounceTimer = setTimeout(() => {
          this.props.patchNote(this.state);
        }, 4000);
      }
    } //where patchNote updates the note in the database via AJAX

    render() {
      return (
        //...
        <ReactQuill
          onChange={(delta, oldDelta, source, editor) => {
            this.handleQuillChange(editor);
          }}
          onFocus={() => this.focusEditor()}
          value={this.state.content}
          theme="snow"
          id="quill-editor"
          autoFocus={false}
          modules={{toolbar: toolbarOptions}}
          placeholder="...">
        </ReactQuill>
        //...
      )
    }

    //...

  }

  ```


  In this excerpt, the ReactQuill onChange listener triggers the handleQuillChange function any time the user makes a change to the note body. If the timer is allowed to reach the full countdown of four seconds, the component triggers an AJAX patch to the database, updating the note, and triggering the proper re-renders throughout the application. Else, the debounceTimer is constantly reset by handleQuillChange.

* ### User Interface State and JavaScript DOM Manipulation

  * Purplenote runs on the flux pattern of frontend data management. As a complex and interactive single-page application, Purplenote relies heavily on a compact, wide-reaching UI section of the application state.

  * The UI-subscribed components are structured such that the props passed down from the state determine how the application will react to a user's action. In many cases, the application utilizes JavaScript listeners, timeouts, and promises that are triggered by changes in state and manipulate elements that are then caused to transition, slide, fade, and react to the user without refreshing the page or expending unnecessary re-renders of mounted components. Utilizing the state in this way makes possible a more responsive app and a more organized application structure.

```JavaScript
// sample of ui state

{
  //...
  ui {
    activeModal: "notebookInfo",
    barNavType: "notes",
    fullscreen: undefined,
    noteSortType: ["updatedAt", true],
    notebookDeletion: undefined,
    searchQuery: undefined,
    selectedNote: undefined,
    selectedNotebook: 68,
    selectedTag: undefined,
    splashNavType: "regular",
    tagDeletion: undefined
  }
}

```

## Demo

<p align="center">
<a href="https://purplenote.herokuapp.com" style="margin:30px 0; font-size: 22px; color: #7f00ff;">Purplenote Heroku</a>
</p>

<p align="center">
<img style="margin:0 auto;" src="https://raw.githubusercontent.com/milesmcleod/purplenote-images/master/purplenote_icon2.png"/>
</p>
