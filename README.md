## Scenario

You are working on a new feed to promote the company social network activity, you are
provided with access to the account’s posts and comments, your job is to integrate that activity
into the website.

## Task

Build a ReactJS project that fetches from the posts and comments API’s, presents a list of
posts and when any of the items is clicked show the list of comments that are associated with
that specific post.

### You are responsible for:

- Fetching the data from the API.
- Presenting the data in the view.
- Relate comments to posts.

### Stretch goals

- Set up project to use redux
- Test your components
- Allow the user to comment on a post and save the comment on state/redux.

### Document any assumptions and design decisions you have made.

- Posts API: https://jsonplaceholder.typicode.com/posts
- Comments API: https://jsonplaceholder.typicode.com/comments

---

## Tech stack

- CRA
- Redux & Redux Toolkit
- Typescript
- Testing-library/react
- Axios

## Assumptions

- User already logged in and with the right credentials
- Already have an existing Database running and Rest API

## Details

The app works using Redux store/actions/reducers. Where on initialization the app fetches for the posts available and renders them in the DOM. Each Post has the option to read the comments that belongs to it and it has the ability to create a comment (not yet implemented). <br>
The way it works is as follows, on click the action to fetch the comments is triggered and hits the API endpoint and it fetches the comments for specific postId. After that I manipulate the data received and match it with the corresponding postId and add it to that post's data object, after that I re-render the DOM and toggles the view to show the post's comments.

## Not yet implemented

- Proper unit testing
- Create comment for each post
