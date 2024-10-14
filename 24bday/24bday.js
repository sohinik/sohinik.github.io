const contents = document.querySelectorAll('.content');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const showAllButton = document.getElementById('show-all');

let currentIndex = 0;
let autoTransition;
let showAllState = false;

// Initialize the first content as visible
contents[currentIndex].style.opacity = 1;
contents[currentIndex].style.transform = 'translateY(0)';

// Function to show the next content
function showNext() {
    clearShowAllState();
    if (currentIndex < contents.length - 1) {
        contents[currentIndex].style.opacity = 0;
        contents[currentIndex].style.transform = 'translateY(20px)';
        currentIndex++;
        contents[currentIndex].style.opacity = 1;
        contents[currentIndex].style.transform = 'translateY(0)';
    } else if (currentIndex == contents.length - 1) {
        showAll()
    }
}

// Function to show the previous content
function showPrev() {
    clearShowAllState();
    if (currentIndex > 0) {
        contents[currentIndex].style.opacity = 0;
        contents[currentIndex].style.transform = 'translateY(20px)';
        currentIndex--;
        contents[currentIndex].style.opacity = 1;
        contents[currentIndex].style.transform = 'translateY(0)';
    }
}

// Function to show all contents at the end
function showAll() {
    clearInterval(autoTransition);
    contents.forEach((content, index) => {
        setTimeout(() => {
            content.style.opacity = 1;
            content.style.transform = 'translateY(0)';
        }, index * 100);
    });
    currentIndex = contents.length - 1;
    showAllState = true;
}

// Function to handle key events for arrow navigation
function handleKeydown(event) {
    if (event.key === 'ArrowRight') {
        showNext();
    } else if (event.key === 'ArrowLeft') {
        showPrev();
    }
}

// Function to reset after show all
function clearShowAllState() {
    if (showAllState) {
        for (i = 0; i < contents.length; i++) {
            contents[i].style.opacity = 0;
            contents[i].style.transform = 'translateY(20px)';
        }
        currentIndex = 0;
        contents[currentIndex].style.opacity = 1;
        contents[currentIndex].style.transform = 'translateY(0)';
        showAllState = false;
    }
}

// Function for automatic transition
function startAutoTransition() {
    autoTransition = setInterval(() => {
        if (currentIndex < contents.length) {
            showNext();
        } else {
            clearInterval(autoTransition);
        }
    }, 2500); // Changes every 2.5 seconds
}

// Add event listeners to buttons and key events
nextButton.addEventListener('click', showNext);
prevButton.addEventListener('click', showPrev);
showAllButton.addEventListener('click', showAll);
document.addEventListener('keydown', handleKeydown);

// Start the automatic transition
startAutoTransition();
