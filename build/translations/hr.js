(function(d){	const l = d['hr'] = d['hr'] || {};	l.dictionary=Object.assign(		l.dictionary||{},		{"%0 of %1":"%0 od %1","Block quote":"Blok citat",Bold:"Podebljano","Bulleted List":"Obična lista",Cancel:"Poništi","Cannot upload file:":"Datoteku nije moguće poslati:","Centered image":"Centrirana slika","Change image text alternative":"Promijeni alternativni tekst slike","Choose heading":"Odaberite naslov",Column:"Kolona","Could not insert image at the current position.":"Nije moguće umetnuti sliku na trenutnu poziciju","Could not obtain resized image URL.":"Nije moguće dohvatiti URL slike s promijenjenom veličinom","Decrease indent":"Umanji uvlačenje","Delete column":"Obriši kolonu","Delete row":"Obriši red",Downloadable:"Moguće preuzeti","Dropdown toolbar":"Traka padajućeg izbornika","Edit link":"Uredi vezu","Editor toolbar":"Traka uređivača","Enter image caption":"Unesite naslov slike","Full size image":"Slika pune veličine","Header column":"Kolona zaglavlja","Header row":"Red zaglavlja",Heading:"Naslov","Heading 1":"Naslov 1","Heading 2":"Naslov 2","Heading 3":"Naslov 3","Heading 4":"Naslov 4","Heading 5":"Naslov 5","Heading 6":"Naslov 6","Image toolbar":"Traka za slike","image widget":"Slika widget","Increase indent":"Povećaj uvlačenje","Insert column left":"Umetni stupac lijevo","Insert column right":"Umetni stupac desno","Insert image":"Umetni sliku","Insert image or file":"Umetni sliku ili datoteku","Insert media":"Ubaci medij","Insert paragraph after block":"","Insert paragraph before block":"","Insert row above":"Ubaci red iznad","Insert row below":"Ubaci red ispod","Insert table":"Ubaci tablicu","Inserting image failed":"Umetanje slike nije uspjelo",Italic:"Ukošeno","Left aligned image":"Lijevo poravnata slika",Link:"Veza","Link URL":"URL veze","Media URL":"URL medija","media widget":"dodatak za medije","Merge cell down":"Spoji ćelije prema dolje","Merge cell left":"Spoji ćelije prema lijevo","Merge cell right":"Spoji ćelije prema desno","Merge cell up":"Spoji ćelije prema gore","Merge cells":"Spoji ćelije",Next:"Sljedeći","Numbered List":"Brojčana lista","Open in a new tab":"Otvori u novoj kartici","Open link in new tab":"Otvori vezu u novoj kartici",Paragraph:"Paragraf","Paste the media URL in the input.":"Zalijepi URL medija u ulaz.",Previous:"Prethodni",Redo:"Ponovi","Remove Format":"Ukloni format","Rich Text Editor":"Rich Text Editor","Rich Text Editor, %0":"Rich Text Editor, %0","Right aligned image":"Slika poravnata desno",Row:"Red",Save:"Snimi","Select all":"Odaberi sve","Select column":"Odaberi stupac","Select row":"Odaberi redak","Selecting resized image failed":"Odabir slike s promijenjenom veličinom nije uspjelo","Show more items":"Prikaži više stavaka","Side image":"Slika sa strane","Split cell horizontally":"Razdvoji ćeliju vodoravno","Split cell vertically":"Razdvoji ćeliju okomito","Table toolbar":"Traka za tablice","Text alternative":"Alternativni tekst","The URL must not be empty.":"URL ne smije biti prazan.","This link has no URL":"Ova veza nema URL","This media URL is not supported.":"URL nije podržan.","Tip: Paste the URL into the content to embed faster.":"Natuknica: Za brže ugrađivanje zalijepite URL u sadržaj.",Undo:"Poništi",Unlink:"Ukloni vezu","Upload failed":"Slanje nije uspjelo","Upload in progress":"Slanje u tijeku","Widget toolbar":"Traka sa spravicama"}	);l.getPluralForm=function(n){return n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2;;};})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={}));