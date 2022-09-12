# React Router

    *yarn add react-router-dom@4.1.2

Looks like step one is getting the routes and pages in order in order

    ?what pages do we need
    * for now just AddTopicPage, EditTopicPage, Header, NotesPage, NotFoundPage, TopicsDashboardPage wll with just dummy text for now
Export files to AppRouter and use them with BrowserRouter, Switch, and, Route from react-dom-router to create routes to the pages

Create the corrispondant links in the Header Component

see docs for more:

    https://reactrouter.com/en/main

#2 Redux

weyre going to use our playground folder to set this up for now

        - create store
        - create dispatch actions

    "dependencies": {
        "babel-cli": "6.24.1",
        "babel-core": "6.25.0",
        "babel-loader": "7.1.1",
        "babel-plugin-transform-class-properties": "6.24.1",
        "babel-plugin-transform-object-rest-spread": "6.23.0",
        "babel-preset-env": "1.5.2",
        "babel-preset-react": "6.24.1",
        "css-loader": "0.28.4",
        "live-server": "^1.2.0",
        "moment": "2.18.1",
        "node-sass": "4.5.3",
        "normalize.css": "7.0.0",
        "react": "15.6.1",
        "react-addons-shallow-compare": "15.6.0",
        "react-dates": "12.3.0",
        "react-dom": "15.6.1",
        "react-modal": "2.2.2",
        "react-redux": "5.0.5",
        "react-router-dom": "4.1.2",
        "redux": "3.7.2",
        "sass-loader": "6.0.6",
        "style-loader": "0.18.2",
        "uuid": "3.1.0",
        "validator": "8.0.0",
        "webpack": "3.1.0",
        "webpack-dev-server": "2.5.1"
    }

after installing , add thease to babbel rc:

    "plugins": [
    "transform-class-properties",
    "transform-object-rest-spread"
  ]

# 3 React With Redux

starting with actions

    topics.js
        swapping 
        'amount' for 'usage'
        'expense' for 'topic'
            done

    topic.js
        "phrases" instead of "discription" updated 'phrase' to 'phrases' for this instance
        "topic" instead of "note"
            done

    filters.js
        nothing changed
            done

Next Redicers

    topics.js
        done

    topic.js
        done

    filters.js  
        done

then Store

    ConfigureStore.js

No unusual issues with build
    compiled successfully

adding needed components

in components

    touch *TopicList.js *TopicListItem.js *TopicForm.js ListFilters.js PhraseList.js PhraseListItem.js EditPhrasePage.js PhraseForm.js


        listItems
            DONE

        lists
            DONE

        forms
            DONE

        list filter (a single should work for both)

Updating Page components



