// Check if there are events in local storage
let events = JSON.parse(localStorage.getItem('events')) || [];

// Function to update the event list on the "View Events" page
function updateEventList() {
    const eventList = document.getElementById('eventList');
    if (eventList) {
        eventList.innerHTML = ''; // Clear previous list
        events.forEach((event, index) => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <strong>${event.name}</strong> <br> 
                Date: ${event.date} <br> 
                Description: ${event.description} 
            `;
            eventList.appendChild(listItem);
        });
    }
}

// Function to update the event selection dropdown on the "Register for Event" page
function updateEventSelect() {
    const eventSelect = document.getElementById('eventSelect');
    if (eventSelect) {
        eventSelect.innerHTML = ''; // Clear previous options
        events.forEach((event, index) => {
            const option = document.createElement('option');
            option.value = event.name;
            option.textContent = event.name;
            eventSelect.appendChild(option);
        });
    }
}

// Handle event creation
const createEventForm = document.getElementById('createEventForm');
if (createEventForm) {
    createEventForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const eventName = document.getElementById('eventName').value;
        const eventDate = document.getElementById('eventDate').value;
        const eventDescription = document.getElementById('eventDescription').value;

        const event = {
            name: eventName,
            date: eventDate,
            description: eventDescription,
        };

        events.push(event);
        localStorage.setItem('events', JSON.stringify(events)); // Save to local storage

        alert('Event created successfully!');
        createEventForm.reset();
        updateEventList();
        updateEventSelect();
    });
}

// Handle event registration
const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const selectedEvent = document.getElementById('eventSelect').value;
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        // Assuming registration logic goes here (store or send the registration data)
        alert(`You have successfully registered for ${selectedEvent}`);

        registerForm.reset();
        window.location.href = 'success.html'; // Redirect to success page
    });
}

// Update the event list and dropdown on page load
document.addEventListener('DOMContentLoaded', function () {
    updateEventList();
    updateEventSelect();
});
