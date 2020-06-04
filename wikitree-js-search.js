

let response = await fetch('https://www.wikitree.com/wiki/Special:SearchPerson', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: new URLSearchParams("wpSearch=1&wpFirst=John&wpLast=Ware&wpBirthDate=1646&wpDeathDate=1718&birth_location=&death_location=&father_first_name=&father_last_name=&mother_first_name=&mother_last_name=&date_spread=2&date_include=neither&last_name_match=all&skip_variants=0&watchlist=any")
});

let result = await response.json();
alert(result.message);


wpSearch=1&wpFirst=John&wpLast=Ware&wpBirthDate=1646&wpDeathDate=1718&birth_location=&death_location=&father_first_name=&father_last_name=&mother_first_name=&mother_last_name=&date_spread=2&date_include=neither&last_name_match=all&skip_variants=0&watchlist=any