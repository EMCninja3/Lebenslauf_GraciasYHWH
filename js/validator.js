/*
function getZipCodeFromCityName(cityName) {
	
	// URL des REST-Endpunkts
	const apiUrl = `https://openplzapi.org/ch/Localities?name=${cityName}&page=1&pageSize=10`;

	fetch(apiUrl)
		.then(response => response.json())
		.then(data => {
			const resultsDiv = document.getElementById('results');
			resultsDiv.innerHTML = ''; // Vorherige Ergebnisse löschen

			// Annahme: Die API gibt ein JSON-Array mit den Ortsinformationen zurück
			if (data.length > 0) {
				const locality = data[0]; // Erstes Element im Array
				const postalCode = locality.postalCode; // Annahme: Die Postleitzahl wird unter dem Schlüssel "postalCode" zurückgegeben
				resultsDiv.value = postalCode
			}
		})
		.catch(error => {
			console.error('Fehler beim Abrufen der Postleitzahl:', error);
		});
}
*/

function getCityFromZipCode(zipCode) {
	// Hier solltest du die URL der API angeben, die die Stadt anhand der Postleitzahl zurückgibt
	const apiUrl = `https://openplzapi.org/ch/Localities?postalCode=${zipCode}&page=1&pageSize=10`;

	// AJAX-Anfrage an die API senden
	fetch(apiUrl)
		.then(response => response.json())
		.then(data => {
			// Annahme: Die API gibt ein JSON-Objekt mit den Stadtinformationen zurück
			const resultsDiv = document.getElementById('cityInput');
			resultsDiv.innerHTML = '';
			const city = data[0].name;
			// Anzeigen der Stadt im HTML-Dokument
			resultsDiv.value = city;
		})
		.catch(error => {
			console.error('Fehler beim Abrufen der Stadt:', error);
		});
}

function isValidEmail(email) {
	// Einfache Regex-Prüfung für E-Mail-Format
	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailPattern.test(email);
}

function handleSubmit(event) {
	event.preventDefault(); // Verhindert das standardmässige Absenden des Formulars
	const emailInput = document.getElementById('email');
	const email = emailInput.value;

	if (!isValidEmail(email)) {
		emailInput.classList.add('w3-border-red');
		alert('Bitte geben Sie eine gültige E-Mail-Adresse ein.');
	} else {
		emailInput.classList.remove('w3-border-red');
		window.location.href = "confirmed.html"; // Öffnet die gewünschte Seite
	}
}

// Event-Listener für das Textfeld, um die Funktion bei jeder Eingabe aufzurufen
/*
document.getElementById('cityNameInput').addEventListener('input', function() {
	const cityName = this.value;
	if (cityName.length >= 3) { // optional: erst ab einer bestimmten Anzahl von Zeichen suchen
		getZipCodeFromCityName(cityName);
	}
});
*/

document.getElementById('zipCodeInput').addEventListener('input', function() {
	const zipCode = this.value;
	if(zipCode.length == 4){
		getCityFromZipCode(zipCode);
		
	}
});