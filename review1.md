**React Native Review Exercise 1**

In this exercise, we will be creating a React Native app that mimics a real-world application layout. We will be exploring layout, flex dimensions, and flexbox. You can refer to the tutorial [here](https://facebook.github.io/react-native/docs/height-and-width) for guidance (skip the fixed dimensions bit).

**Task 1: Create a News App Layout**

1. Create a new React Native app.
2. Implement a layout that resembles a news app. This should include:
   - A header section at the top for the app title.
   - A content section in the middle that could represent a list of news articles.
   - A footer section at the bottom for navigation icons.

Use flexbox to manage the layout. Try to make the header and footer sections of fixed size, and the content section should take up the remaining space.

**Task 2: Create a Custom Component**

Create a custom component that represents a news article. This component should include some text and an image. Pass a 'title' property into your text/image component and display it in the view along with the other components. 

Additionally, allow the component to accept other props that change the color, size, or style of the title. For example, you could pass a 'color' prop that changes the color of the title, or a 'size' prop that changes the size of the title.

**Task 3: Implement a FlatList**

Implement a simple FlatList as per the tutorial [here](https://facebook.github.io/react-native/docs/using-a-listview). Use this FlatList to display a list of your custom news article components.

---

This exercise will help you understand the concepts of layout, styling, flexbox, custom components, and lists in React Native. Remember to use the React Native inspector for debugging your styles and layouts. Good luck!


---

**If Time Allows:**

**Task 4: Enhance the Custom Component with State**

 **Add a Like Counter:** Extend your custom news article component to include a "like" feature. Add a button that, when pressed, increases a counter for that specific news article. Use the `useState` hook to manage the counter state. 


**Task 5: Add Interactivity to the FlatList**

 **Highlight Selected News Article:** Use state to keep track of which news article is currently selected in the FlatList. When a news article is pressed, update this state. Use this state to change the style of the selected news article to indicate that it's selected.
