**React Native Review Exercise 3**

In a new React Native App, create a view containing a FlatList that displays data from 'data/gallery/photos.json'.  The data can be found in the data.zip folder in this repo.

**Task 1: Display Photo Data**

1. Import the JSON data directly into your component.
2. Create a separate `Photo` component that takes in a photo object as a prop and displays the photo's details.
3. Use a FlatList to display the `Photo` component for each photo in the data.

**Task 2: Add Navigation**

1. Implement navigation between different screens. For example, clicking on a photo in the list could navigate to a detail screen with more information about the photo.

**Task 3: Implement Image Loading**

1. Instead of just displaying the text data for the photos, display the actual images using the `Image` component from React Native.

**Task 4: Enhance Testing**

1. Write more comprehensive tests. Check that the list renders correctly, that the navigation works as expected, and that the photo details are displayed correctly.

**Task 5: Add Styling**

1. Experiment with different styles and layouts. Use Flexbox to create a grid layout for the photos, for example.

Sure, we can add a form to the exercise which allows the user to add new photos to the list. Here's how you could modify the exercise to include this:

**Task 6: Add a Form to Add New Photos:**

In your `App.js` or a separate screen, add a form with fields for the photo details (e.g., `title`, `url`, `thumbnailUrl`). You can use the `TextInput` component from React Native for the input fields and the `Button` component for the submit button.


**Task 7: Function to Add the New Photo:**

Create a function that adds the new photo to the list when the form is submitted. This function should update the state with the new list of photos, which will cause the component to re-render and the new photo to appear in the list.


**3. Update the Optional Task:**

For the optional task, update the functionality to also persist the new photos added through the form. When the app is closed and reopened, the new photos should still appear in the list.

This modification will give students practice with handling user input, updating component state, and working with forms in React Native.

**Optional: Add Data Persistence**

1. Update the functionality to also persist the new photos added through the form. When the app is closed and reopened, the new photos should still appear in the list. You could use use AsyncStorage or SQLite to persist the changes. 

2. Implement functionality to edit, or delete photos.

---

This exercise will help you understand the concepts of handling external data sources, creating reusable components, passing data via props, loading and displaying images, implementing navigation, writing tests, applying styles and layouts, and working with persistent storage. Remember to use the React Native inspector for debugging your styles and layouts. Good luck!