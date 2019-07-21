window.onload = () => {
    $('body').fadeIn(1000);        
    $.getJSON('/resources/bitcoin-resources.json', function(blockchainResources) {
        
        // getting_started
        $("h2#getting_started").text("Bitcoin Başlangıç Seti:");
        $("h2#getting_started").after('<ul id="getting-started-list"></ul>');   
        blockchainResources.getting_started.forEach(element => {
            $("ul#getting-started-list").append('<li><a href="' + element.url + '">' + element.title + '</a></li>').show('slow');
        });
        
        // history
        $("h2#history").text('Bitcoin Tarihçesi:');   
        $("h2#history").after('<ul id="history-list"></ul>');   
        blockchainResources.history.forEach(element => {
            $("ul#history-list").append('<li><a href="' + element.url + '">' + element.title + '</a></li>');
        });

        // stats
        $("h2#stats").text('Ağ İstatistikleri:'); 
        $("h2#stats").after('<ul id="stats-list"></ul>');   
        blockchainResources.stats.forEach(element => {
            $("ul#stats-list").append('<li><a href="' + element.url + '">' + element.title + '</a></li>');
        });

        // deep_dive
        $("h2#deep_dive").text('Derinlemesine Bitcoin Teknolojisi (İngilizce):');   
        $("h2#deep_dive").after('<ul id="deep_dive-list"></ul>');   
        blockchainResources.deep_dive.forEach(element => {
            $("ul#deep_dive-list").append('<li><a href="' + element.url + '">' + element.title + '</a></li>');
        });

        // dev_tools
        $("h2#dev_tools").text('Bitcoin Yazılımcı Araçları:');
        $("h2#dev_tools").after('<ul id="dev_tools-list"></ul>');   
        blockchainResources.dev_tools.forEach(element => {
            $("ul#dev_tools-list").append('<li><a href="' + element.url + '">' + element.title + '</a></li>');
        });

        // careers
        $("h2#careers").text('Kariyer Siteleri:');
        $("h2#careers").after('<ul id="careers-list"></ul>');   
        blockchainResources.careers.forEach(element => {
            $("ul#careers-list").append('<li><a href="' + element.url + '">' + element.title + '</a></li>');
        });
        
        // documentaries
        $("h2#documentaries").text('Belgesel:');   
        $("h2#documentaries").after('<ul id="documentaries-list"></ul>');   
        blockchainResources.documentaries.forEach(element => {
            $("ul#documentaries-list").append('<li><a href="' + element.url + '">' + element.title + '</a></li>');
        });
        
        // books
        $("h2#books").text('Kitap:');   
        $("h2#books").after('<ul id="books-list"></ul>');   
        blockchainResources.books.forEach(element => {
            $("ul#books-list").append('<li><a href="' + element.url + '">' + element.title + '</a></li>');
        });
        
        // podcasts
        $("h2#podcasts").text('Podcast:');   
        $("h2#podcasts").after('<ul id="podcasts-list"></ul>');
        blockchainResources.podcasts.forEach(element => {
            $("ul#podcasts-list").append('<li><a href="' + element.url + '">' + element.title + '</a></li>');
        });
       
        // news
        $("h2#news").text('Haber Siteleri:');
        $("h2#news").after('<ul id="news-list"></ul>');   
        blockchainResources.news.forEach(element => {
            $("ul#news-list").append('<li><a href="' + element.url + '">' + element.title + '</a></li>');
        });
        
        // forums
        $("h2#forums").text('Forumlar:'); 
        $("h2#forums").after('<ul id="forums-list"></ul>');   
        blockchainResources.forums.forEach(element => {
            $("ul#forums-list").append('<li><a href="' + element.url + '">' + element.title + '</a></li>');
        });
               
        // wallets
        $("h2#wallets").text('Bitcoin Cüzdanları:');  
        $("h2#wallets").after('<ul id="wallets-list"></ul>');   
        blockchainResources.wallets.forEach(element => {
            $("ul#wallets-list").append('<li>' + element.text +': <a href="' + element.url + '">' + element.title + '</a></li>');
        });
                
     });
    
}
