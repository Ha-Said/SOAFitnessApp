function calculateBMI() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    if (!weight || !height) {
        alert("Please enter both weight and height.");
        return;
    }
    const soapEnvelope = `
        <soapenv:Envelope xmlns:q0="http://fitapp" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
            <soapenv:Header/>
            <soapenv:Body>
                <q0:calculateBMI>
                    <q0:weight>${weight}</q0:weight>
                    <q0:height>${height}</q0:height>
                </q0:calculateBMI>
            </soapenv:Body>
        </soapenv:Envelope>
    `;

    fetch('http://localhost:2525/fitapp/services/BMI', {
        method: 'POST',
        headers: { 'Content-Type': 'text/xml', 'SOAPAction': 'http://fitapp/calculateBMI' },
        body: soapEnvelope
    })
    .then(response => response.text())
    .then(data => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, "text/xml");
        const returnNode = xmlDoc.getElementsByTagName("ns:return")[0];
        if (returnNode) {
            const bmiMessage = returnNode.textContent;  
            document.getElementById('bmiResult').textContent = bmiMessage;  
        } else {
            console.error('Expected "return" node not found in response.');
            document.getElementById('bmiResult').textContent = 'Error: Invalid response structure.';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error calling the web service');
    });
}

// Get Workout Plan (PLAN Class)
function getWorkoutPlan() {
    const day = document.getElementById('day').value;
    const soapEnvelope = `
        <soapenv:Envelope xmlns:q0="http://fitapp" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
            <soapenv:Header/>
            <soapenv:Body>
                <q0:PLA>
                    <q0:day>${day}</q0:day>
                </q0:PLA>
            </soapenv:Body>
        </soapenv:Envelope>
    `;

    fetch('http://localhost:2525/fitapp/services/PLAN', {
        method: 'POST',
        headers: { 'Content-Type': 'text/xml', 'SOAPAction': 'http://fitapp/PLA' },
        body: soapEnvelope
    })
    .then(response => response.text())
    .then(data => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, "text/xml");
        const workoutPlan = xmlDoc.getElementsByTagName("ns:return")[0].textContent;
        document.getElementById('workoutPlanResult').textContent = workoutPlan;
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error calling the web service');
    });
}

// Get Calorie Suggestion (SUGG Class)
function getCalorieSuggestion() {
    const activityLevel = document.getElementById('activityLevel').value;
    const weight = document.getElementById('calorieWeight').value;

    const soapEnvelope = `
        <soapenv:Envelope xmlns:q0="http://fitapp" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
            <soapenv:Header/>
            <soapenv:Body>
                <q0:calorieSuggestion>
                    <q0:weight>${weight}</q0:weight>
                    <q0:activityLevel>${activityLevel}</q0:activityLevel>
                </q0:calorieSuggestion>
            </soapenv:Body>
        </soapenv:Envelope>
    `;

    fetch('http://localhost:2525/fitapp/services/SUGG', {
        method: 'POST',
        headers: { 'Content-Type': 'text/xml', 'SOAPAction': 'http://fitapp/calorieSuggestion' },
        body: soapEnvelope
    })
    .then(response => response.text())
    .then(data => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, "text/xml");
        const calorieMessage = xmlDoc.getElementsByTagName("ns:return")[0].textContent;
        document.getElementById('calorieResult').textContent = calorieMessage;
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error calling the web service');
    });
}

// Get Personalized Workout (PersonalizedWorkout Class)
function getPersonalizedWorkout() {
    const fitnessLevel = document.getElementById('fitnessLevel').value;
    const goal = document.getElementById('goal').value;

    const soapEnvelope = `
        <soapenv:Envelope xmlns:q0="http://fitapp" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
            <soapenv:Header/>
            <soapenv:Body>
                <q0:personalizedWorkout>
                    <q0:fitnessLevel>${fitnessLevel}</q0:fitnessLevel>
                    <q0:goal>${goal}</q0:goal>
                </q0:personalizedWorkout>
            </soapenv:Body>
        </soapenv:Envelope>
    `;

    fetch('http://localhost:2525/fitapp/services/PersonalizedWorkout', {
        method: 'POST',
        headers: { 'Content-Type': 'text/xml', 'SOAPAction': 'http://fitapp/personalizedWorkout' },
        body: soapEnvelope
    })
    .then(response => response.text())
    .then(data => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, "text/xml");
        const workoutMessage = xmlDoc.getElementsByTagName("ns:return")[0].textContent;
        document.getElementById('personalizedWorkoutResult').textContent = workoutMessage;
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error calling the web service');
    });
}