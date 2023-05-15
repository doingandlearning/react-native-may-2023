**Course Title**: React Native Development

- May 15th - 17th
- Kevin Cunningham
- Miro link: https://miro.com/app/board/uXjVMKqGS8U=/?share_link_id=626408902107

Timings:

- 9:30-11 Session 1
- 11-11.15 Coffee
- 11.15-12.45 Session 2
- 12.45-1.45 Lunch
- 1.45-3.15 Session 3
- 3.15-3.30 Tea
- 3.30-4.30 Session 4

---Absolutely, that's a great idea! Here's how you could incorporate that into the "If Time Allows" section:

---

**If Time Allows:**

**Task 4: Enhance the Custom Component with State**

1. **Add a Like Counter:** Extend your custom news article component to include a "like" feature. Add a button that, when pressed, increases a counter for that specific news article. Use the `useState` hook to manage the counter state. 

2. **Persist Likes Between Sessions (Advanced):** If you're up for a challenge, try to persist the like counts between app sessions. You can use the `useEffect` hook to save the like counts when the app is closed or put into the background, and load them when the app is opened. Note: You'll need to use a more persistent form of storage for this, such as AsyncStorage.

**Task 5: Add Interactivity to the FlatList**

1. **Highlight Selected News Article:** Use state to keep track of which news article is currently selected in the FlatList. When a news article is pressed, update this state. Use this state to change the style of the selected news article to indicate that it's selected.

---

These tasks will give you practice with state in React, and the advanced task will also introduce you to the concept of side effects and persistent storage.

**1. Introduction to React Native**
   - **How React Native Works**: A comprehensive introduction to the underlying mechanisms of React Native, including how it interacts with native components.
   - **Strengths of React Native**: Discussion of the advantages of using React Native, such as:
     - Developer Availability
     - Developer Productivity
     - Performance
     - One-way Data Flow
     - Developer Experience
     - Transpilation
     - Productivity and Efficiency
     - Community Support
     - Open Source
     - Immediate Updates
   - **Drawbacks of React Native**: A balanced look at some of the challenges associated with React Native, including:
     - Still not at v1
     - Requires Familiarity with React
     - Need to Learn Xcode/Android for Native Features
     - Additional Abstraction Layer
   - **Creating and Using Basic Components**: Hands-on session to create and use basic React Native components.
   - **Expo**: Introduction to Expo, including setup, JS debugging, and live reloading.

**2. Layout**
   - Study of various layout components in React Native, such as View, Text, Button, Touchable, FlatList/SectionList, VirtualizedList, and Modal.

**3. Styling**
   - **Flexbox**: Introduction to Flexbox for React Native.
   - **Inline Styles**: How to use inline styles for quick component styling.
   - **Inspecting and Debugging Styles**: Using the React Native inspector to troubleshoot and perfect styles.
   - **Media Queries**: Learn how to use Dimensions and onLayout for responsive design.

**4. Understanding React**
   - Deep dive into core React concepts such as state, props, useEffect, and useContext.

**5. Calling APIs**
   - Learn about fetching data from APIs and managing state with useState and useContext.

**6. APIs and Data**
   - Introduction to various storage options in React Native, such as SecureStore, AsyncStorage, and SQLite.

**7. Navigation**
   - Understanding the difference between React Native navigation and web navigation.
   - Learn about stack-based, tab-based, and drawer-based navigation.
   - Learn how to persist data across navigation states.

**8. Cross-platform APIs**
   - Learn to use cross-platform APIs such as the Alert API, Geolocation API, PanResponder, Camera, Vibration.

**9. WebView, Forms, and Reusable Components**
   - Learn about WebView and form components such as Slider, Picker, Switch.

**10. Testing**
   - Understand the importance of unit testing and component testing in React Native applications.

**11. Deploying**
   - Introduction to EAS Build for building and deploying React Native apps. Learn about EAS Build, EAS Submit, and EAS Update.
   - Learn about local builds.
