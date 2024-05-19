function getZipCodeFromCityName(cityName) {
	// URL des REST-Endpunkts
	const apiUrl = `https://openplzapi.org/ch/Localities?name=${cityName}&page=1&pageSize=10`;

	// AJAX-Anfrage an die API senden
	fetch(apiUrl)
		.then(response => response.json())
		.then(data => {
			const resultsDiv = document.getElementById('results');
			resultsDiv.innerHTML = ''; // Vorherige Ergebnisse löschen

			// Annahme: Die API gibt ein JSON-Array mit den Ortsinformationen zurück
			const plz = data[0].locality.postalCode;
			document.getElementById('results').textContent = plz
		})
		.catch(error => {
			console.error('Fehler beim Abrufen der Postleitzahl:', error);
		});
}

// Event-Listener für das Textfeld, um die Funktion bei jeder Eingabe aufzurufen
document.getElementById('cityNameInput').addEventListener('input', function() {
	
	const cityName = this.value;
	if (cityName.length >= 3) { // optional: erst ab einer bestimmten Anzahl von Zeichen suchen
		getZipCodeFromCityName(cityName);
	}
});
