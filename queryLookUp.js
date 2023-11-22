{/* <script> */}
    console.log('sanity check');
    function modifyContent() {
      // These are the names of the query parameters that we will be using`
      const EVENT_TYPE_NAME = 'event_type_name';
      const EVENT_START_TIME = 'event_start_time';
      const EVENT_END_TIME = 'event_end_time';
      const INVITEE_FIRST_NAME = 'invitee_first_name';

      
      
      
      
      //   const myStartDate = new Date(EVENT_START_TIME *1000);
      //   document.write(myDate.toLocaleString());
      
      // Get the search string from the URL
      const searchString = window.location.search;
      // Create a URLSearchParams object from the search string
      const queryParams = new URLSearchParams(searchString);
      // Make an object from the URLSearchParams entries
      const queryObject = Object.fromEntries(queryParams.entries());

      // parsing starting date/time & ending date/time from string
      const startingDate = Date.parse(queryObject[EVENT_START_TIME]);
      const endingDate = Date.parse(queryObject[EVENT_END_TIME]);

      // reformatting start date and time to be more readable 
      const myStartDate = new Intl.DateTimeFormat('en-US').format(startingDate);
      const myStartTime = new Intl.DateTimeFormat('en', {
        timeStyle: "short",
      }).format(startingDate);

      // reformatting end date and time to be more readable
      const myEndDate = new Intl.DateTimeFormat('en-US').format(endingDate);
      const myEndTime = new Intl.DateTimeFormat('en', {
        timeStyle: "short",
      }).format(endingDate);

      // Grab the element that we want to modify
      const thankYouP = document.querySelector('.sqs-block-content p');
      // Set the innerHTML of the element
      thankYouP.innerHTML = `Thank you ${queryObject[INVITEE_FIRST_NAME]}, for scheduling a ${queryObject[EVENT_TYPE_NAME]} with us!`;
      // Make a new 'p' element
      const timeInfo = document.createElement('p');
      // Set the innerHTML of the new 'p' element
      timeInfo.innerHTML = `Your appointment is scheduled for ${myStartDate} ${myStartTime}.`;
      timeInfo.style.textAlign = "center";
    //   timeInfo.innerHTML = `Your appointment ends at ${queryObject[EVENT_END_TIME]}`;
      // Add the new 'p' element after thankYouP
      thankYouP.after(timeInfo);
    }

    window.addEventListener('DOMContentLoaded', modifyContent);
  {/* </script> */}


// var myDate = new Date( your epoch date *1000);
// document.write(myDate.toGMTString()+"<br>"+myDate.toLocaleString());



{/* <script>
    console.log('sanity check');
    function modifyContent() {
      // These are the names of the query parameters that we will be using`
      const EVENT_START_TIME = 'event_start_time';
      const EVENT_TYPE_NAME = 'event_type_name';
      const EVENT_END_TIME = 'event_end_time';

      // Get the search string from the URL
      const searchString = window.location.search;
      // Create a URLSearchParams object from the search string
      const queryParams = new URLSearchParams(searchString);
      // Make an object from the URLSearchParams entries
      const queryObject = Object.fromEntries(queryParams.entries());
  
      // Grab the element that we want to modify
      const thankYouP = document.querySelector('.sqs-block-content p');
      // Set the innerHTML of the element
      thankYouP.innerHTML = `Thank you for scheduling a ${queryObject[EVENT_TYPE_NAME]} with us!`;
      // Make a new 'p' element
      const timeInfo = document.createElement('p');
      // Set the innerHTML of the new 'p' element
      timeInfo.innerHTML = `Your appointment is scheduled for ${queryObject[EVENT_START_TIME]} Event ends at ${queryObject[EVENT_END_TIME]}.`;
    //   timeInfo.innerHTML = `Your appointment ends at ${queryObject[EVENT_END_TIME]}`;
      // Add the new 'p' element after thankYouP
      thankYouP.after(timeInfo);
    }

    window.addEventListener('DOMContentLoaded', modifyContent);
  </script> */}