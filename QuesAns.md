Questions and Answers -->>

# Ques 01 : What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

### Ans :  
        >> getElementById: 
                    - Finds and returns a single element . 
                    - If no element is found -> it returns null.
                    - syntax: document.getElementById('idName');

        >> getElementsByClassName: 
                    - Finds and returns an HTMLCollection of all elements that have the specified class name(s).
                       The class name is passed as a string without the leading dot (.).
                    - Syntax: document.getElementsByClassName('className');

        >> querySelector: 
                    - Finds and returns the first element within the document (or within a specified parent element) that
                       matches the provided CSS selector(s). It's very flexible and can use any valid CSS selector (id #myId, class .myClass, tag div, attribute [type="text"], etc.).
                    - Syntax: document.querySelector('#myId'); or document.querySelector('.myClass');
        
        >> querySelectorAll: 
                    - Finds and returns a NodeList (a static list, although it can be iterable like an array) of all
                       elements within the document (or within a specified parent element) that match the provided CSS selector(s).
                    - Syntax: document.querySelectorAll('.myClass'); or document.querySelectorAll('div > .myClass');






# Ques 02 : How do you **create and insert a new element into the DOM**?

### Ans :
        using appendChild i can insert a new element to the dom. for creating a new element i will use createElement"






# Ques 3 : What is **Event Bubbling** and how does it work?

### Ans :
        Event Bubbling is a mechanism in the DOM that defines the order in which event handlers are executed when an element (like a button) nested inside other elements (like a div inside the body) is clicked.
        - When an event occurs on an element, the event handler for that specific element executes first.
        - Then, the event "bubbles up" the DOM tree, triggering the same type of event handler on its parent element, then its grandparent, and so on, all the way up to the document object.
        - Example: You click a button inside a div inside the body. The button's click handler runs first, then the div's click handler, then the body's click handler (assuming they all exist).






# Ques 4 : What is **Event Delegation** in JavaScript? Why is it useful?

### Ans :
        - Event Delegation is a technique that leverages Event Bubbling. Instead of adding an event listener to each individual child element, adding a single event listener to a common parent element. When an event occurs on one of the child elements, it bubbles up to the parent, and the parent's event listener handles it.

        - Why it's useful:-
            - Efficiency: Reduces the number of event listeners, especially when dealing with many similar child elements (like items in a list).
            - Dynamic Content: Works automatically for child elements that are added to the DOM dynamically after the event listener has been set up on the parent.





# Ques 5 : What is the difference between **preventDefault() and stopPropagation()** methods?

### Ans :
        - preventDefault(): This method prevents the browser's default action associated with an event from occurring. For example, preventing a link (<a>) from navigating to its href, or preventing a form (<form>) from submitting and refreshing the page.
            syntax: event.preventDefault();

        - stopPropagation(): This method stops the event from bubbling up the DOM tree. It prevents any parent element's event handlers for the same event type from being executed.
            syntax: event.stopPropagation();
        
        In summary: preventDefault() stops the browser's default behavior for that element. stopPropagation() stops the event from triggering handlers on parent elements.