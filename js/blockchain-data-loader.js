window.onload = () => {
        
    $.getJSON('/resources/blockchain-resources.json', function(blockchainResources) {
        
        // getting_started
        $("h2#getting_started").text('Blockchain Başlangıç Seti:');   
        $("h2#getting_started").after('<ul id="getting-started-list"></ul>');   
        blockchainResources.getting_started.forEach(element => {
            $("ul#getting-started-list").append('<li><a href="' + element.url + '">' + element.title + '</a></li>');
        });
        
        // use_cases
        $("h2#use_cases").text('Blockchain ve Kullanım Alanları:');   
        $("h2#use_cases").after('<ul id="use-cases-list"></ul>');   
        blockchainResources.use_cases.forEach(element => {
            $("ul#use-cases-list").append('<li><a href="' + element.url + '">' + element.title + '</a></li>');
        });

        // videos
        $("h2#videos").text('Videolar:');   
        $("h2#videos").after('<ul id="videos-list"></ul>');   
        blockchainResources.videos.forEach(element => {
            $("ul#videos-list").append('<li><a href="' + element.url + '">' + element.title + '</a></li>');
        });

        // courses
        $("h2#courses").text('Online Kurslar:');  
        $("h2#courses").after('<ul id="courses-list"></ul>');   
        blockchainResources.courses.forEach(element => {
            $("ul#courses-list").append('<li><a href="' + element.url + '">' + element.title + '</a></li>');
        });

        // career
        $("h2#career").text('Kariyer Siteleri:'); 
        $("h2#career").after('<ul id="career-list"></ul>');   
        blockchainResources.career.forEach(element => {
            $("ul#career-list").append('<li><a href="' + element.url + '">' + element.title + '</a></li>');
        });

        // ethereum
        $("h2#ethereum").text('Ethereum:');   
        $("h2#ethereum").after('<ul id="ethereum-list"></ul>');   
        blockchainResources.ethereum.forEach(element => {
            $("ul#ethereum-list").append('<li><a href="' + element.url + '">' + element.title + '</a></li>');
        });

        // hyperledger
        $("h2#hyperledger").text('Hyperledger:');   
        $("h2#hyperledger").after('<ul id="hyperledger-list"></ul>');   
        blockchainResources.hyperledger.forEach(element => {
            $("ul#hyperledger-list").append('<li><a href="' + element.url + '">' + element.title + '</a></li>');
        });
            
        // libra
        $("h2#libra").text('Libra:');   
        $("h2#libra").after('<ul id="libra-list"></ul>');   
        blockchainResources.libra.forEach(element => {
            $("ul#libra-list").append('<li><a href="' + element.url + '">' + element.title + '</a></li>');
        });

        // books
        $("h2#books").text('Kitap:');   
        $("h2#books").after('<ul id="books-list"></ul>');   
        blockchainResources.books.forEach(element => {
            $("ul#books-list").append('<li><a href="' + element.url + '">' + element.title + '</a></li>');
        });
        
        // magazines
        $("h2#magazines").text('Dergi:');   
        $("h2#magazines").after('<ul id="magazines-list"></ul>');   
        blockchainResources.magazines.forEach(element => {
            $("ul#magazines-list").append('<li><a href="' + element.url + '">' + element.title + '</a></li>');
        });
        
        // reports
        $("h2#reports").text('Rapor:');   
        $("h2#reports").after('<ul id="reports-list"></ul>');   
        blockchainResources.reports.forEach(element => {
            $("ul#reports-list").append('<li><a href="' + element.url + '">' + element.title + '</a></li>');
        });
        
        // podcasts
        $("h2#podcasts").text('Podcast:');   
        $("h2#podcasts").after('<ul id="podcasts-list"></ul>');   
        blockchainResources.podcasts.forEach(element => {
            $("ul#podcasts-list").append('<li><a href="' + element.url + '">' + element.title + '</a></li>');
        });

        // platforms
        $("h2#platforms").text('Platformlar:');   
        $("h2#platforms").after('<ul id="platforms-list"></ul>');   
        blockchainResources.platforms.forEach(element => {
            $("ul#platforms-list").append('<li><a href="' + element.url + '">' + element.title + '</a></li>');
        });
        
        // forums
        $("h2#forums").text('Forumlar:');   
        $("h2#forums").after('<ul id="forums-list"></ul>');   
        blockchainResources.forums.forEach(element => {
            $("ul#forums-list").append('<li><a href="' + element.url + '">' + element.title + '</a></li>');
        });
        
        // projects
        $("h2#projects").text('Türk Projeleri:');  
        $("h2#projects").after('<ul id="projects-list"></ul>');   
        blockchainResources.projects.forEach(element => {
            $("ul#projects-list").append('<li><a href="' + element.url + '">' + element.title + '</a></li>');
        });
        




        
     });
    
}
