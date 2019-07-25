window.onload = () => {
         
    $.getJSON('/resources/trade-resources.json', function(blockchainResources) {
        
        // getting_started
        $("h2#getting_started").text('Trade Başlangıç Seti:');   
        $("h2#getting_started").after('<ul id="getting-started-list"></ul>');   
        blockchainResources.getting_started.forEach(element => {
            $("ul#getting-started-list").append('<li><a href="' + element.url + '">' + element.title + '</a></li>');
        });
        
        // forums
        $("h2#forums").text('Topluluklar:');   
        $("h2#forums").after('<ul id="forums-list"></ul>');   
        blockchainResources.forums.forEach(element => {
            $("ul#forums-list").append('<li><a href="' + element.url + '">' + element.title + '</a></li>');
        });
		
	// courses
        $("h2#courses").text('Online Kurslar:');  
        $("h2#courses").after('<ul id="courses-list"></ul>');   
        blockchainResources.courses.forEach(element => {
            $("ul#courses-list").append('<li><a href="' + element.url + '">' + element.title + '</a></li>');
        });

	// youtube
        $("h2#youtube").text('YouTube Kanalları:');  
        $("h2#youtube").after('<ul id="youtube-list"></ul>');   
        blockchainResources.youtube.forEach(element => {
            $("ul#youtube-list").append('<li><a href="' + element.url + '">' + element.title + '</a></li>');
        });
		
        // books
        $("h2#books").text('Kitaplar:');   
        $("h2#books").after('<ul id="books-list"></ul>');   
        blockchainResources.books.forEach(element => {
            $("ul#books-list").append('<li><a href="' + element.url + '">' + element.title + '</a></li>');
        });

        // exchanges
        $("h2#exchanges").text('Kripto Para Borsaları:');   
        $("h2#exchanges").after('<ul id="exchanges-list"></ul>');   
        blockchainResources.exchanges.forEach(element => {
            $("ul#exchanges-list").append('<li><a href="' + element.url + '">' + element.title + '</a></li>');
        });
	    
        // auto
        $("h2#auto").text('Auto-Trade Platformu:');   
        $("h2#auto").after('<ul id="auto-list"></ul>');   
        blockchainResources.auto.forEach(element => {
            $("ul#auto-list").append('<li><a href="' + element.url + '">' + element.title + '</a></li>');
        });
	    
        // technical
        $("h2#technical").text('Teknik Analiz:');   
        $("h2#technical").after('<ul id="technical-list"></ul>');   
        blockchainResources.technical.forEach(element => {
            $("ul#technical-list").append('<li><a href="' + element.url + '">' + element.title + '</a></li>');
        });

        
     });
    
}
