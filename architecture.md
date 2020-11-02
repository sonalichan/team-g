 # FirebaseModel
- This model is a 3rd party software that is not coded by us.
- This model only resides on the **server**.
- Stores user’s information, such as their name, email address, password, UID, gifts if they unlocked, etc.
- The **UserController** communicates with this model. It communicates the following:
    - The **UserController** can ask FirebaseModel to store a new user’s information including their login credentials
    - The **UserController** can ask FirebaseModel to verify if a UserModel exists
    - The **UserController** can ask the FirebaseModel to update the number of days the user has used the systems.
    - The **UserController** can ask the FirebaseModel to update the number of event that the user has already created
- Stores a list of their events associated with the user
    - stores all of the events the user adds, deletes, or retrieves from the calendar.
- The **CalendarController** communicates with the model. It communicates the following:
    - The **CalendarController** can ask the FirebaseModel to store an new event
    - The **CalendarController** can ask the FirebaseModel to delete an existing event
    - The **CalendarController** can ask the FirebaseModel to retrieve an existing event
    - The **CalendarController** can ask the FirebaseModel to store a note that user adds
- Stores reward gifts’ image url and their corresponding id. 
- The **RewardSystemController** communicates with the model. It communicates the following:
    - The **RewardSystemController** can ask the FirebaseModel to retrieve gift image url based on the ids the user has unlocked
    - The **RewardSystemController** can ask the FirebaseModel to check if a user has unlocked a gift or not.
    - The **RewardSystemController** can ask the FirebaseModel to check if a user has met a unlocking criteria

# CalendarView
- This component is a view that is responsible for the main calendar.
- This view only resides on the **client**.
- The **CalendarController** communicates with the CalendarView. It communicates the following:
    - The **CalendarController** can ask the CalendarView to display events 
    - The **CalendarController** can ask the CalendarView to remove events after user logged out
    - The **CalendarController** can ask the CalendarView to display a task that the user previously added after user logged in
    - The **CalendarController** can ask the CalendarView to display a new task
    - The **CalendarController** can ask the CalendarView to refresh and display updated events.
- The CalendarView has the following responsibilities:
    - Display the **AddEventView** if the user clicks on  “Add a Schedule” button
    - Display the **AddTaskView** if the user clicks on ”Add a Task“
    - Display the **PrintView** if the user clicks on “print button”
    - If the user right clicks on an event they scheduled, it will display a dropdown with an option of “Delete Event”
        - If the user select “Delete Event”, the CalendarView will ask **CalendarController** to remove the event from the **Firebase Model**.

# AddEventView
- This component is a view that is responsible for adding an event
- This view only resides on the **client**.
- The AddEventView has the following responsibilities:
    - Informs the user if the user did not input all must-filled inputs.
    - Informs the user if the user did not follow the designated date and time format.
    - If the user clicked on “Add to Schedule”, the AddEventView can ask the **CalendarController** to record the event onto the **FirebaseModel**.

# AddTaskView
- This component is a view that is responsible for adding a task
- This view only resides on the **client**.
- The AddTaskView has the following responsibilities:
    - Informs the user if the user did not input all must-filled inputs.
    - If the user clicked on “Add to Task”, the AddTaskView can ask the **CalendarController** to record the task onto the **FirebaseModel**.

# PrintView
- This component is a view that is responsible for printing out the current calendar week
- This view only resides on the **client**.
- The **CalendarController** communicates with the PrintView. It communicates the following:
    - **CalendarController** can ask the PrintView to download the current calendar week view as a .pdf file.
    - **CalendarController** can ask the PrintView to download the current calendar week view as a .jpg file.
    - **CalendarController** can ask the PrintView to open a pop up allowing the user to input a note.
        - **CalendarController** can ask the PrintView to display that note onto the current calendar week view.
        - **CalendarController** can ask the PrintView to display a note.
    - **CalendarController** can ask the PrintView to take a screenshot of the current calendar week to send to the operating system’s print function.

# RewardSystemView
- This component is a view that is responsible for the gift gallery and pop-up window when user received a gift
- This view only resides on the **client**.
- The **RewardSystemController** communicates with the RewardSystemView. It communicates the following:
    - **RewardSystemController** can ask the RewardSystemView to open a pop window with a specific picture.
    - **RewardSystemController** can ask the RewardSystemView to display or not display specific photos in the gift gallery.
    - **RewardSystemController** can ask the RewardSystemView to display or not display requirements for unlocking specific photos. 

# UserControllerView
- This component allows the user to control various parts, visible to the user with buttons, within the UI
- This view only resides on the **client**.
- The **UserController** communicates with the UserControllerView. The UserController communicates with the following:
    - **UserController** can ask UserControllerView to display either user's avatar or log in button on the top right corner depend on user's log in status
    - If user clicked on "log-in" on the top right corner, UserControllerView can ask the **UserController** to display login page
    - If user clicked on "log-out" on the top right corner, UserControllerView can ask the **UserController** to refresh user status
    - If user clicked on "gift gallery", UserControllerView can ask the **UserController** to display the Rewards page if the user has logged in

 



# CalendarController:
## Description
- This component only resides on the **client**.


## Stub

**GenerateGerbilNote:** Generates a note from a set of predetermined notes to display onto the current calendar week view
<ul>

    function GenerateGerbilNote() {
        // TO-DO: ADD CODE HERE
        return String;
    }

</ul>

**AddEvent:** Parse the event object into a string to be stored in the FirebaseModel
 <ul>

    function AddEvent(String time, String description, String name) {
        // TO-DO: ADD CODE HERE
        return String;
    }

</ul>

**AddTask:** Parse task object into a string to be stored in the FirebaseModel

 <ul>

    function AddTask(Object task) {
        // TO-DO: ADD CODE HERE
        return String;
    }

</ul>

**RemoveEvent:** Removing selected event by eventid
 <ul>

    function RemoveEvent(int id) {
        // TO-DO: ADD CODE HERE
        return;
    }

</ul>

**RemoveTask:** Removing selected task by taskid
 <ul>

    function RemoveTask(int id) {
        // TO-DO: ADD CODE HERE
        return;
    }

</ul>


 **DownloadWeek:** Download the current calendar week as a .pdf or .jpg file
<ul>

    function DownloadWeek(boolean isPDF) {
        // TO-DO: ADD CODE HERE
        return file (.pdf or .jpg);
    }

</ul>

**PrintPreview:** Take a screenshot of the current view of the calendar to use as a preview for the system’s Print function
<ul>

    function PrintPreview() {
        // TO-DO: ADD CODE HERE
        return void;
    }

</ul>


# RewardSystemController
## Description
- This component only resides on the **client**.


## Stub 

 **RetrieveImage**: If the user has unlocked a reward, retrieve the reward image’s URL
 <ul>

    function RetrieveImage() {
        // TO-DO: ADD CODE HERE
        return String;
    }

</ul>

**HasUnlocked:** Check if user has unlocked a gift. True if yes, False if no
 <ul>

    Boolean HasUnlocked() {
        // TO-DO: ADD CODE HERE
        return 0;
    }

</ul>

**HasMetCriteria:** Check if user has unlocked a gift. True if yes, False if no
 <ul>

    Boolean HasMetCritera() {
        // TO-DO: ADD CODE HERE
        return 0;
    }

</ul>
