const template = function ({title, fixtures}) {
	return `
    <!DOCTYPE html>
    <html lang="en-GB">
		<head>
			<meta charset="utf-8">
			<meta http-equiv="X-UA-Compatible" content="IE=edge">
			<title>${title}</title>
			<link rel="stylesheet" href="/dist/css/main.css" />

			<script async defer type="application/javascript" src="/dist/demo.js"></script>
		</head>
		<body>
			<div class="o-grid-container">
				<h1>Demo of n-eventpromo</h1>
				<div class="o-grid-row demo-context__inarticle" data-o-grid-colspan="12">
					<span>in article 'eventpromo' demo:</span>
					<script class="js-event-promo-data" type="application/json">${fixtures}</script>
					<div class="event-promo js-event-promo"></div>
				</div>
			</div>
		</body>
	</html>
  `;
};

module.exports = template;
