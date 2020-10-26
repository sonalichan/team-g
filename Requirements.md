# Requirements

## **User System**

### **RQ-US-1**: Users must be able to sign up.

- Data fields must contain 
    - Name
    - Email address
    - Preferred password.
- “Name” must be stored as a string
    - maximum 50 characters.
- “Email address” must be stored as a string
    - maximum 20 characters
    - contains one “@” symbol.
- “Password” must be stored as a string
    - minimum 8 characters
    - case sensitive
- Name, email, and password should be stored inside the database, in which email is used as a key to identify users
    - Name and password are properties associated with the users

### **RQ-US-2**: Users must be able to log in to the site

- Data fields must contain email address, password.
- Email address and password are input boxes.
- System will detect if the email address is in our database. If it does not match, we will prompt the user with “This email address is not found”.
- If the email address is in the database, and the stored password matches up with the user's input, we must allow them to log-in.
- If the email address is in the database, but the stored password did not match up with the user's input, we will prompt the user with “The password is incorrect”.

### **RQ-US-3**: Users must be able to log out of the system.

- After users are logged out of the system, the page will return to the home page with Gerbil’s story. 
- If they click the “Tell Gerbil Your Upcoming Plans” tab, the page will return to the modal asking them about the details of their week. All event inputs will be cleared.

---

## **Calendar**

### **RQ-C-1**: Users must be able to adjust calendar settings.

- Data fields include a title/description of their current week, calendar’s time preference, and calendar day’s time range, stating start time and end time for day time . 
- The title/description of their current week is stored as string, max. 50 characters (accepts all characters, including special characters and emojis)
- The calendar’s time preference includes two options: “24hr time system” or “12 hr(AM/PM) time system”. 
    - There must be two radio buttons, which only allows the user to choose one of the systems. 
    - The radio button must select “12 hour time system” as a default.
- Both start time and end time are input boxes that accept input as strings. It will contain pre-filled time to help guide user’s input.
    - If the user chose “24hr time system” as their time preference, we will show “8:00” and “20:00” as their default start and end time.
    - If the user did not change the time preference (default to 12 hour system), or they chose “12hr time system” as their time preference, we will show “8:00 AM” and “8:00 PM” as their default start and end time.
    - The users must be able to change their start and end time based on their needs.
    - If the format that the user entered is not correct, we will detect and prompt the user “Ex. 8:00 AM” if they are in a 12 hour system or “Ex. 8:00” if they are in a 24 hour system. 

### **RQ-C-2**: Users must be able to create an event(s) 

- Events consist of the following data: the date, if the event is a one time event, the start time, the end time, and description of the event.
    - “The title” refers to what the user wants to call the event
    - “The date” refers to the day the event is happening on. 
        - Input box with placeholder “MM-DD-YY”
        - Date will be stored in the format of “MM-DD-YY”. 
        - If the date the user inputted is outside the current calendar week, we will prompt them “Gerbil cannot remember this far away. Choose a date within this week”.
    - “Is this an all-day event?”
        - Check box
        - If the user checks the box, we will not display the start time and end time’s input box
        - If the user did not check the box, we will include an input box for start time of the event and an input box for end time of the event
    - “The start time” and “the end time”
        - Input box with placeholder “8:00” if the user chose 24-hour time system
        - Input box with placeholder “8:00 AM” if the user chose 12-hour time system
        - If the format that the user entered is not correct, we will detect and prompt the user “Ex. 8:00 AM” if they are in a 12 hour system or “Ex. 8:00” if they are in a 24 hour system. 
        - If the user input a time that is out of the selected time range, we will prompt the user “The time you selected is out of the calendar’s time range”.
    - “The description”
        - Input box for long text
        - If text is longer than 3 lines, enable scrolling
- Users can only create one event at a time 
- Users must not be able to create events that conflict if they take place on the same time and day
    - System must inform the user when an event they want to create conflicts with an already created event.
- Events must be visible on the calendar once the user adds the event onto the calendar

### **RQ-C-3**: Users must be able to delete created events

- Calendar must refresh and remove deleted event(s)

### **RQ-C-4**: Users must be able to cancel creating an event if the event is still pending creation.
- User will exit event creating mode by cancelling a pending event
- Users must not be able to see the event that they decide to cancel

### **RQ-C-5**: Created events must be visible on the calendar once the user adds the event onto the calendar
- Events on the calendar must include the title. Description will only be shown for events longer than 30mins, otherwise it will be hidden.

---

## **Print/Download Function**


### **RQ-PD-1**: The user must be able to print the current week view from any compatible printer.
 - System must show available printers, and go through their browser’s printing software
### **RQ-PD-2**: The user should be able to download a file of the current week view as a .pdf
 - The download will be automatically trigger after user selected print
### **RQ-PD-3**: The user should be able to download a file of the current week view as a .jpg
 - The download will be automatically trigger after user selected print
### **RQ-PD-4**: Before print/download the current week calendar, the user should be able to select whether they want to add a note

- A modal will pop up that consists of an input box for letting the user input their notes, one button for continuing without adding their own notes, and one button for continuing with their own notes.
- If the user choose to continue without adding their own notes, the user should be able to see an auto-generated note on the downloaded main calendar
- If the user choose to continue with adding their own notes, the user should be able to see an their note on the downloaded main calendar

---

## **Reward System**

### **RQ-RS-1**: After logged in, users must be able to access gift gallery from the top nav

- Users must not be able to access gift gallery from the top nav if they are not logged in

### **RQ-RS-2**: Users must be able to see received awarded item through gift gallery

- Awarded items are distinguished from locked items, which are grey and contain text with unlocking requirements (if applicable).

### **RQ-RS-3**: Users must be able to see the requirements for some of the obtaining award items

- User will be able to view which rewards are locked or unlocked, and looking at each image’s respective requirements to unlock

### **RQ-RS-4**: Users must not be able to see the requirements for award items that we choose to keep earning condition as secret.

- The user will be unable to view ‘secret’ rewards, which will be greyed out, until requirements are met

### **RQ-RS-5**: Users must not be able to access rewards until requirements have been met

- Users will be able to view rewards in the gift gallery upon logging in. Unlocked rewards are interactive and able to be clicked on 
