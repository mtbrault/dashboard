app.get('/about.json', function (req, res) {
	return res.json({
		client: {
			host: this.request.connection.remoteAddress
		},
		server: {
			current_time: moment().unix(),
			services: [{
				name: "weather",
				widgets: [{
					name: "city_temperature",
					description: "Affichage de la température pour une ville",
					params: [{
						name: "city",
						type: "string"
					}]
				}]
			}, {
				name: "stock_exchange",
				widgets: [{
					name: "monney_convertissor",
					description: "Convertit une devise de monnaie en crypto monnaie",
					params: [{
						name: "monney_type",
						type: "string"
					},{
						name: "cypto_type",
						type: "string"
					}]
				}]
			}]
		}
	});
});