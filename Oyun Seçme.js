function startGame(gameTitle) 
    {
        // Kullanıcının seçtiği oyunun başlığını gösteren sayfadan,
        // gerçek oyunun bulunduğu sayfaya yönlendir.
        
        //  window.location.href = gameTitle +".html"; da kullanabilirsin. eğer bunu kullanırsan aynı sayfada oyunu açar.
        window.open(gameTitle +".html"); 
    }