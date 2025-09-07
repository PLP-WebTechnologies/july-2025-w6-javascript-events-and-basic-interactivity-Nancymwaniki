// Wait for the DOM to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', () => {
            
// --- EVENT HANDLING ---
// This section demonstrates basic event listeners on a button.
    const eventButton = document.getElementById('eventButton');
    const eventMessage = document.getElementById('eventMessage');
            
// Mouseover event: Fires when the mouse pointer enters the button area.
    eventButton.addEventListener('mouseover', () => {
        eventMessage.textContent = 'You hovered over the button!';
    });

// Mouseout event: Fires when the mouse pointer leaves the button area.
    eventButton.addEventListener('mouseout', () => {
        eventMessage.textContent = '';
    });

// Click event: Fires when the button is clicked.
    eventButton.addEventListener('click', () => {
        eventMessage.textContent = '🎉 You clicked the button! Great job!';
    });


// --- INTERACTIVE COMPONENTS ---

// Dark Mode Toggle
// This component toggles a 'dark' class on the body to switch themes.
    const darkModeToggle = document.getElementById('darkModeToggle');
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark');
    });
            
// Collapsible FAQ 
// This component handles the accordion functionality for the FAQ section.
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
// Toggle the 'active' class to control styling (like arrow rotation)
            question.classList.toggle('active');
        });
    });


// --- FORM VALIDATION ---
// This section handles custom, client-side validation for a registration form.
    const form = document.getElementById('validationForm');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const formSuccessMessage = document.getElementById('formSuccessMessage');

// Listen for the form's submit event.
    form.addEventListener('submit', (event) => {
// Prevent the default form submission behavior to handle validation with JS.
        event.preventDefault();
                
// Clear previous messages
        clearErrors();
        formSuccessMessage.classList.add('hidden');

// Perform validation and check if all fields are valid.
        const isUsernameValid = validateUsername();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();
                
        if (isUsernameValid && isEmailValid && isPasswordValid) {
// If everything is valid, show a success message and reset the form.
            formSuccessMessage.classList.remove('hidden');
            form.reset();
        }
    });

// Function to validate the username field.
    function validateUsername() {
        const value = username.value.trim();
        if (value === '') {
            usernameError.textContent = 'Username is required.';
            return false;
        }
        if (value.length < 3) {
            usernameError.textContent = 'Username must be at least 3 characters long.';
            return false;
        }
        return true;
    }

// Function to validate the email field using a regular expression.
    function validateEmail() {
        const value = email.value.trim();
// A simple regex for email validation.
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (value === '') {
            emailError.textContent = 'Email is required.';
            return false;
        }
        if (!emailRegex.test(value)) {
            emailError.textContent = 'Please enter a valid email address.';
            return false;
        }
        return true;
    }

// Function to validate the password field.
    function validatePassword() {
        const value = password.value.trim();
        if (value === '') {
            passwordError.textContent = 'Password is required.';
            return false;
        }
        if (value.length < 8) {
            passwordError.textContent = 'Password must be at least 8 characters long.';
            return false;
        }
// Check if password contains at least one number.
        if (!/\d/.test(value)) {
            passwordError.textContent = 'Password must contain at least one number.';
            return false;
        }
        return true;
    }

// Helper function to clear all error messages at once.
    function clearErrors() {
        usernameError.textContent = '';
        emailError.textContent = '';
        passwordError.textContent = '';
    }
});