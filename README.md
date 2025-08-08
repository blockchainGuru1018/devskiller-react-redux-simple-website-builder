# React Redux Simple Website Builder

## Introduction

This task evaluates the candidate's skills in `React` and `Redux`.

Welcome to the Simple Website Builder application. This app is an initial implementation of a WYSIWYG editor that enables users to build a simple website just by picking HTML tags from the widget and filling all the attributes they need.

### About the app

On the left-hand side, the *Component Preview* is being displayed, it includes the current content of the page. On the right-hand side, using the *Component Picker*, the user can choose a new component to be added (headers, links, text paragraphs, images, etc). When a component is chosen, appropriate form is being displayed (*Edited Component*), for the user to enter relevant data, e.g. when user clicks to add a *Link*, *Link Form* is displayed and the user should set link *label* and *href*. Moreover:
- while editing, the user can *apply*, so that the changes are submitted, or *remove*, if the item should be removed.
- when the user chooses to add a certain component type (e.g. a link, whatever) and the appropriate form gets opened, all other components become locked (disabled). Only when the form gets closed (either element is applied or removed) then the lock is removed (user can choose to add a new component again)

All in all, it's a simple and intuitive UI.

# Setup

This react application was generated using [Create React App](https://github.com/facebook/create-react-app). It has all the standard setups.

Follow these steps if you are using zip/git mode (i.e. not available inside Devskiller in-browser IDE):

1. `npm install` – install dependencies
2. `npm test` – run all tests (this will be used to evaluate your solutions)
3. `npm start` – run the project locally

## Problem Statement

1. Make tests pass by implementing missing features in the production code.
2. Make the app work in a way described below. The majority of the code is committed, but there are some missing pieces that have to be implemented.

## Your task

1. **Fix the reducer setup**. Although there is a `componentsSlice` created, it's not being properly configured for redux to use it. Include the slice in the store, so that the content of the slice is available under the `components` key in the global redux state object.
2. **Handle all actions in components slice** (`store/index.js`):
   - `addComponent` action should add the new component to the item's array and store the component as a `currentlyEdited` one.
   - `updateComponent` action should update the passed component in the item's array and nullify `currentlyEdited` property. Make sure to not modify the items array if the updated item doesn't exist in the store. 
   - `removeComponent` action should remove the passed component from the item's array and nullify `currentlyEdited` property.
   - `setEditedComponent` action should set `currentlyEdited` property to the passed component.
   - precise requirements of how the reducer should handle actions are defined in multiple snapshots of the redux state objects.
3. **Implement the `a` HTML tag (link)** in the `components/Components/A.js` file (currently implementation is empty). After clicking on the link, a new tab should open. Pass `values` prop object that will contain `href` (url to open), and `label` (link's label) properties. Browsing context that is created by following this link should not have the opener browsing context (for example, new window shouldn't be able to use `window.opener` JS property to change original page). Furthermore, referrer information shouldn't be passed to the new tab. The component should render just an `<a/>` tag with proper attributes and content.
4. **Implement the `img` HTML tag (image)** in the `components/Components/Img.js` file (currently implementation is empty). Pass `values` prop object that will contain `alt` (alternative text describing image), and `src` (url of the image) properties. The component should render just an `<img/>` tag with `alt` and `src` attributes.
5. **Update the `ComponentsPicker`**:
   - Pass `lockedPicker` boolean prop to `ComponentPicker` that will tell it if `components-picker__component--disabled` class should be applied.
   - Make `lockedPicker` a required prop. 
   - The items of the components picker (`<div/>` elements) should be greyed out with the `components-picker__component--disabled` class and they should not be clickable when a component is being edited.

## IMPORTANT

All tests shall remain untouched, especially the snapshots shall not be updated. It is the implementation, what should be updated, in order to match test expectations.

Updating snapshots will probably lower your score.

## HINT

When implementing reducer, feel free to use `immer` (it's explicitly added to the dependencies).

## Good Luck!

