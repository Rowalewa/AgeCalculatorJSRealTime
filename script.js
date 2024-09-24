const calculateBtn = document.getElementById('calculate_age');
const ageText = document.getElementById('age_text');
const YearOfBirth = document.getElementById('year_of_birth');

function calculateAge() {
    const yearOfBirth = YearOfBirth.value; // Get the entered year of birth

    if (yearOfBirth === "") {
        ageText.innerHTML = "Please enter your year of birth.";
        return;
    }

    const birthDate = new Date(yearOfBirth);
    const currentDate = new Date(); // Get the current date
    const now = new Date();


    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Increment seconds every second
    let interval = setInterval(() => {
        seconds++; // Increment seconds by 1
        
        // If seconds reach 60, reset to 0 and update minutes
        if (seconds === 60) {
            seconds = 0;
            minutes++;
            
            // If minutes reach 60, reset to 0 and update hours
            if (minutes === 60) {
                minutes = 0;
                hours++;
                
                // If hours reach 24, reset to 0 and update the day
                if (hours === 24) {
                    hours = 0;
                    days++;
                }
            }
        }

    

    // Calculate difference in milliseconds
    const difference = currentDate - birthDate;

    // Calculate years
    const years = currentDate.getFullYear() - birthDate.getFullYear();
    
    // Calculate months
    let months = currentDate.getMonth() - birthDate.getMonth();
    if (months < 0) {
        months += 12;
    }

    // Calculate days
    let days = currentDate.getDate() - birthDate.getDate();
    if (days < 0) {
        const lastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
        days += lastMonth.getDate();
    }


    // Display the result
    ageText.innerHTML = `You are ${years} years, ${months} months, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds old.`;
    }, 1000);

}

calculateBtn.addEventListener('click', calculateAge);
