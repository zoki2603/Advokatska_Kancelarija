# Advokatska_Kancelarija
# Sajt je namenjen za advokastsku kancelariju.
# Sajt sam pravio tako sto sam istrazivao kako izgledaju drugi sajtovi tog tipa i izvukao ono sto mi se cinlo da je dobro.
# Prva strana se sastoji iz 5 sekcija.
# Prva sekcija je slika postavljena da bude cover i sa linernim gradijentom koji sadrzi dve boje crna sa opasati 0.5 i druga koju sam izabrao. Ima dva dugmeta na koje je odradjen hover da menja boju kada se predje preko njega. U prvom delu se nalazi i Side Nav kojo se po pritsku na dugme pojvljuje i sklanja. To sam istrazivao na netu kako se radi i naso kod u js. 
        var manuBtn = document.getElementById("manuBtn");
        var sideNav = document.getElementById("sideNav");
        var menu = document.getElementById("menu");
        sideNav.style.right == "-250px"
        manuBtn.addEventListener("click",function(e){
            e.preventDefault();
            if(sideNav.style.right == "-250px"){
                sideNav.style.right ="0";
                menu.src = "img/close.png";
            }else{
                sideNav.style.right ="-250px"
                menu.src = "img/menu.png";
            }
        });
 Imamo tri promenljive div u kome se nalaze (a) tagovi, div u kome s nalazi div gde se nalazi slika i sam div gde je slika.I gde je definisana promenljiva sideNav da dobija poziciju -250px desno. Funkcija osluskuje kada se klikne na hamburger meni(manuBtn) startuje se funkcija koja pita da li je div u kome se nalaze (a) tagovi tj. nas meni jednako sa pozicijom -250px desno ako je ta pozicija tacna  prikazi sideManu tako sto se lepi za desnu stranu i ikonicu za gasenje ako to nije tacno povuci nazad meni -250px desno  i prikazi ikonicu.
 Imam ubacen i SCROLL smooth :
         var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true
});
koji bas ne umem da objasnim ali znam da bi lepo izgledao na sajtu , ali sam se snasao da ga implementiram :).
On je trazio i da ubacaim i CDN <script src="https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll/dist/smooth-scroll.polyfills.min.js"></script> koji omogucava njegovo koriscenje. 
# Druga sekcija sadrzi jednu ikonicu u vidu lista koji mi se dopao na jednom sajtu i istrazio sam kako se pravi gde se koristi transform:rotate pod uglom i kada se doda border-radius to ispadnje jednda zanimljiva ikonica. Naravno moga sam da ubacim i img pa neku slcucu ali mi je ovako bilo zanimljivije.Cela ta sekicaj sadrzi sliku i neke opise koji su smesteni u paragrafe i dodate im ikonice kako bi izgledali lepse.
# Treca sekcija sadrzi galeriju slika koje su display:flex i flex-wrap:wrap. Na svakoj slici se desava kada se predje preko nje misem da izadje neki naslov sa opisom pritom se slika zatamni koristio sam isto kao i na cover strani linear-gradient kako bi sklika imala sto bolji efekat. 
# Cetvrta sekcija su komentari nasih korisnika. Ono sto je interesantno kod ovog dela jeste da se prilikom prelaska misem preko komentara ceo komenrat pomeri za 7px na gore.To sam uradio uz pomoc  transform: translateY gde se ceo div pomera za -7px po Y osi tj na gore.
# Peta sekcija je Foter gde stoje podaci, tel, adresa... na svakom sa dodao po malu ikonicu radi lepseg izgleda. Na sredini stoji zastitni znak pravosudja sa opasiti:0.1 cisto da se da naznake da je tu. Na dnu se nalzae social-links koji nemaju sada nikakvu ulogu osim dugmicima kojima sam dao box-shadow radi lepseg izgleda i pomeraju se po Y osi na gore.
# Kontakt strana na kojoj se nalazi forma u kojoj se unose podaci koji bi trebalo da se proslede vlasniku sajta.
# Usluge strana koja je galerija gde su linkovane slike koje ce voditi do stranica odredjenog znacenja. Nisam pravio te stranice jer su tekstualnog karakera i daju samo opise samih naslova i kontakt odredjenje osobe. Tako sam ga ja zamislio.Slike su crno bele kada se predje misem preko dobiju boju i zoom.
# O nama je stranica koja opsije samog vlasnika tog sajta karakretistike njegove biografije itd.. Ovde sam stavio tri div-a gde se u prvom i trecem nalazi neki text a u sredni prazan koji sluzi kako neki garnicinik izmedju ta dva teksta. Smatrao sam da je tako lepse.
# Svaka stranica je optimizovana za manju rezloluciju.
Nadam se da sam lepo objsnio . :)
