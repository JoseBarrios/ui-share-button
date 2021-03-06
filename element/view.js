const view = document.createElement("template");
view.innerHTML = `
  <style>

        /* Roll this out to all the elements */
		@import url('/vendors/fontawesome/css/all.min.css');

		@font-face {
			font-family: 'FontAwesome';
			src: url('/vendors/fontawesome/webfonts/fa-brands-400.woff') format('woff2'),
			url('/vendors/fontawesome/webfonts/fa-light-300.woff') format('woff2'),
			url('/vendors/fontawesome/webfonts/fa-regular-400.woff') format('woff'),
			url('/vendors/fontawesome/webfonts/fa-solid-900.woff') format('woff');
			font-weight: normal;
			font-style: normal;
		}

         :host {
             --color: #FFF;
             --border-color: green;
             --background-color: gray;

             --hover-color: #FFF;
             --hover-background-color: #1c7ef8;

             --disabled-color: #C4C5D5;
             --disabled-border-color: #FFF;
             --disabled-background-color: #FFF;

             --success-color: #3DBEA3;
             --error-color: #F1536E;

             -webkit-touch-callout: none; /* iOS Safari */
             -webkit-user-select: none; /* Safari */
             -khtml-user-select: none; /* Konqueror HTML */
             -moz-user-select: none; /* Firefox */
             -ms-user-select: none; /* Internet Explorer/Edge */
             user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
         }

		.container {
            text-align:center;
			border-radius: 1em;
			display:inline-block;
			border: "2px solid var(--border-color)";
			background-color: "var(--background-color)";
			cursor: pointer;
			color:var(--color);
		}

		#icon {
			vertical-align:middle;
			text-align:center;
			line-height:1em;
            margin-top:0.5em;
		}
	</style>

	<div class="container">
		<i id="icon"></i>
	</div>
`;

export default view;
