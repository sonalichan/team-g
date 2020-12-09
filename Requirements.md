# Requirements

## **User System**

### **RQ-US-1**: Users must be able to sign up. revised and complete
    - Users must be able to sign up through "Sign in with Google" functionality

### **RQ-US-2**: Users must be able to log in to the site. revised and complete
### We had a user system that worked on the front end, but because of our architecture, we were not able to connect it to Firebase without having to redo the whole implementation, and with the time we had left(before the extension) we were not able to get it completely working. We implemented the component that was working without fail, which was allowing users to sign in through Google.
- Users must be able to log in through "Sign in with Google" functionality

### **RQ-US-3**: Users must be able to log out of the system. complete

- After users are logged out of the system, the page will return to the home page with Gerbil’s initial story. 
- If they click the “Tell Gerbil Your Upcoming Plans” tab, the page will return to the modal asking them about the details of their week. All event inputs will be cleared.
    -- dont even show calendar, tell to sign in***

---

## **Calendar**

### **RQ-C-2**: Users must be able to create an event(s) revised and incomplete

- Events consist of the following data: the date, if the event is a one time event, the start time, the end time, and description of the event. revised
    - The "title” refers to what the user wants to name the event
    - The "date” refers to the day the event is scheduled to occur on. 
        - Input box with placeholder “MM-DD-YY”
        - Users must be able to choose any date to create an event
    - The "start time” and the "end time” incomplete***
        - If the user inputs a start time that is after the end time, we will not allow them to create the event
    - The "description”
        - Input box for long text
        - If text is too long for the input box, enable scrolling
- Users can only create one event at a time (can create only one event before being allowed to create the next event)
- Events must be visible on the calendar once the user adds the event onto the calendar

### **RQ-C-4**: Users must be able to cancel creating an event if the event is still pending creation. complete
- User will exit event-creating mode by cancelling(or pressing the back button on) a pending event
- Users must not be able to see the event that they decide to cancel

### **RQ-C-5**: Created events must be visible on the calendar once the user adds the event onto the calendar revised and complete
- Events on the calendar must include the title. Description will not be shown

---

## **Print/Download Function**


### **RQ-PD-1**: The user must be able to print the current week view from any compatible printer. complete
 - System must show available printers, and go through their browser’s printing software
### **RQ-PD-4**: Before print/download the current week calendar, the user should be able to select whether they want to add a note incomplete

### Add Notes Function revised and complete
- A modal will pop up that consists of an input box for letting the user input their notes.

## **Reward System**

### **RQ-RS-1**: After logging in, users must be able to access a "gift gallery" from the top nav complete

- Users must not be able to access gift gallery from the top navigation bar if they are not logged in

### **RQ-RS-2**: Users must be able to see awarded items through gift gallery complete

- Awarded items are distinguished from locked items
    - Locked items are grey and contain text with unlocking requirements for the user to fulfill (if applicable).

### **RQ-RS-3**: Users must be able to see each task's requirements for obtaining an award. complete

- User will be able to view which rewards are locked or unlocked by looking at each image’s respective unlock requirements

### **RQ-RS-4**: Users must not be able to see the requirements for awarded items that we choose to keep as a secret. revised and incomplete

- Will be shown on the bottom row of awards
- The user will be unable to view requirements for ‘secret’ rewards
    - They will be greyed out until displayed requirements are met

### **RQ-RS-5**: Users must not be able to access rewards until requirements have been met complete

- Users will be able to view rewards in the gift gallery upon logging in. Unlocked rewards are interactive and able to be clicked on 

### **RQ-RS-6**: Users must be able to recieve reward once displayed requirements are met complete

- Users must be able to view a "reward image" in place of a requirement once they meet that requirement.
    - "Reward images" are images created by the designer(s), and will show our Gerbil mascot travelling to well known places all over the world
