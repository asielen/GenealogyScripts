// Create source link from current url
// Guide here https://www.wikitree.com/wiki/Help:Links_to_Ancestry#Source_Image

/*

Example/Test Cases

Images/Source
https://www.ancestry.com/interactive/1234/5678
https://www.ancestry.com/interactive/1234/45679#?imageId=5678
https://www.ancestry.com/interactive/2469/40075_1020703344_0060-00028/1427483103
{{Ancestry Image|1234|5678}}
REGEX: .*interactive\/([\w-]*)\/((.*imageId=([\w-]*))|([\w-]*))
// Group 1 and Group 4 or Group 1 and Group 2
// if there is a group 4, go with 1,4 else 1,2

Family Tree - person/media
https://www.ancestry.com/family-tree/person/tree/1234/person/5678/facts
https://www.ancestry.com/family-tree/tree/1234/media/5678
{{Ancestry Tree|1234|5678}}
{{Ancestry Tree Media|1234|5678}}
REGEX: .*\/tree\/([\w-]*)\/(media|person)\/([\w-]*)
1 and 3 (2 determines type)

Family Tree - old format
http://trees.ancestry.com/pt/AMTCitationRedir.aspx?tid=1234&pid=5678
{{Ancestry Tree|1234|5678}}
REGEX: .*tid=([\w-]*)&.*pid=([\w-]*)
Group 1 and 2


Record
https://search.ancestry.com/cgi-bin/sse.dll?db=1920usfedcen&indiv=try&h=5678
https://search.ancestry.com/cgi-bin/sse.dll?indiv=1&dbid=1234&h=5678
https://trees.ancestry.com/rd?f=sse&db=worldmarr_ga&h=5678&ti=0&indiv=try&gss=pt
{{Ancestry Record|1234|5678}}
REGEX: .*ancestry.*\.([a-z]{2,3})\/.*db(id)?=(\w*)&.*h=(\w*)(&|$|\b)
// GROUP 3 and GROUP 4, Group 1 is Country

 */


function parse_ancestry(current_loc) {
     let parsed_link = '';
     let parse_results = "";
    // Remove backurls
    current_loc.replace(/(\?backurl=.*)/, '');
    if (current_loc.includes('/interactive')) {
        // Image/source
        parse_results = current_loc.match(/.*interactive\/([\w-]*)\/((.*imageId=([\w-]*))|([\w-]*))/);
        if(parse_results[4] != null) {
            parsed_link = "{{Ancestry Image|"+parse_results[1]+"|"+parse_results[4]+"}}";
        } else {
            parsed_link = "{{Ancestry Image|"+parse_results[1]+"|"+parse_results[2]+"}}";
        }
    } else if (current_loc.includes('family-tree')) {
        //Tree
        parse_results = current_loc.match(/.*\/tree\/([\w-]*)\/(media|person)\/([\w-]*)/);
        if(parse_results[2] == "person") {
            parsed_link = "{{Ancestry Tree|"+parse_results[1]+"|"+parse_results[3]+"}}";
        } else {
            parsed_link = "{{Ancestry Tree Media|"+parse_results[1]+"|"+parse_results[3]+"}}";
        }
    } else if (current_loc.match(/.*tid=([\w-]*)&.*pid=([\w-]*)/)) {
        // Old style tree
        parse_results = current_loc.match(/.*tid=([\w-]*)&.*pid=([\w-]*)/);
        parsed_link = "{{Ancestry Tree|"+parse_results[1]+"|"+parse_results[2]+"}}";
    } else if (current_loc.match(/.*db(id)?=(\w*)&.*h=(\w*)(&|$|\b)/)) {
        // Records
        parse_results = current_loc.match(/.*ancestry.*\.([a-z]{2,3})\/.*db(id)?=(\w*)&.*h=(\w*)(&|$|\b)/);
        if(parse_results[1]!="com") {
            parsed_link = "{{Ancestry Record|"+parse_results[3]+"|"+parse_results[4]+"|"+parse_results[1]+"}}";
        } else {
            parsed_link = "{{Ancestry Record|"+parse_results[3]+"|"+parse_results[4]+"}}";
        }
    } else {
        parsed_link = "[" + current_loc + "|Ancestry Link]";
    }
    return parsed_link;
}


function parse_findgrave(current_loc) {
    //https://www.wikitree.com/wiki/Help:Links_to_FindAGrave
     let parsed_link = '';
     let parse_results = "";
    // Remove backurls
    if (current_loc.includes('/memorial')) {
        // Image/source
        parse_results = current_loc.match(/.*memorial\/(\d*)(\/|$|\b)/);
        parsed_link = "Find A Grave, database and images (accessed "+new Date().toLocaleDateString()+"), memorial page for "+$('#bio-name').text()+", {{FindAGrave|"+parse_results[1]+"}}. Maintained by Find A Grave.";
    } else {
        parsed_link = "[" + current_loc + "|Find a Grave Link]";
    }
    return parsed_link;
}

const copyToClipBoard = (str) =>
{
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
};


// Copy to clipboard
let link = "";
if(location.host == "www.ancestry.com") {
    link = parse_ancestry(window.location.href);
} else if(location.host == "www.findagrave.com") {
    link = parse_findgrave(window.location.href);
} else {
    link = "["+window.location.href+"|Link]"
}
copyToClipBoard(link);
console.log(link);

// Alert only
if(location.host == "www.ancestry.com") {
    let link = parse_ancestry(window.location.href);
    alert(link);
    console.log(link);
}

//Alert Only
javascript:(function()%7Bfunction%20parse_ancestry(e)%7Blet%20t%3D%22%22%2Cc%3D%22%22%3Breturn(e%3Dlocation.href).replace(%2F(%5C%3Fbackurl%3D.*)%2F%2C%22%22)%2Ct%3De.includes(%22%2Finteractive%22)%3Fnull!%3D(c%3De.match(%2F.*interactive%5C%2F(%5B%5Cw-%5D*)%5C%2F((.*imageId%3D(%5B%5Cw-%5D*))%7C(%5B%5Cw-%5D*))%2F))%5B4%5D%3F%22%7B%7BAncestry%20Image%7C%22%2Bc%5B1%5D%2B%22%7C%22%2Bc%5B4%5D%2B%22%7D%7D%22%3A%22%7B%7BAncestry%20Image%7C%22%2Bc%5B1%5D%2B%22%7C%22%2Bc%5B2%5D%2B%22%7D%7D%22%3Ae.includes(%22family-tree%22)%3F%22person%22%3D%3D(c%3De.match(%2F.*%5C%2Ftree%5C%2F(%5B%5Cw-%5D*)%5C%2F(media%7Cperson)%5C%2F(%5B%5Cw-%5D*)%2F))%5B2%5D%3F%22%7B%7BAncestry%20Tree%7C%22%2Bc%5B1%5D%2B%22%7C%22%2Bc%5B3%5D%2B%22%7D%7D%22%3A%22%7B%7BAncestry%20Tree%20Media%7C%22%2Bc%5B1%5D%2B%22%7C%22%2Bc%5B3%5D%2B%22%7D%7D%22%3Ae.match(%2F.*tid%3D(%5B%5Cw-%5D*)%26.*pid%3D(%5B%5Cw-%5D*)%2F)%3F%22%7B%7BAncestry%20Tree%7C%22%2B(c%3De.match(%2F.*tid%3D(%5B%5Cw-%5D*)%26.*pid%3D(%5B%5Cw-%5D*)%2F))%5B1%5D%2B%22%7C%22%2Bc%5B2%5D%2B%22%7D%7D%22%3Ae.match(%2F.*db(id)%3F%3D(%5Cw*)%26.*h%3D(%5Cw*)(%26%7C%24%7C%5Cb)%2F)%3F%22com%22!%3D(c%3De.match(%2F.*ancestry.*%5C.(%5Ba-z%5D%7B2%2C3%7D)%5C%2F.*db(id)%3F%3D(%5Cw*)%26.*h%3D(%5Cw*)(%26%7C%24%7C%5Cb)%2F))%5B1%5D%3F%22%7B%7BAncestry%20Record%7C%22%2Bc%5B3%5D%2B%22%7C%22%2Bc%5B4%5D%2B%22%7C%22%2Bc%5B1%5D%2B%22%7D%7D%22%3A%22%7B%7BAncestry%20Record%7C%22%2Bc%5B3%5D%2B%22%7C%22%2Bc%5B4%5D%2B%22%7D%7D%22%3A%22%5B%22%2Bcurrent.loc%2B%22%7CAncestry%20Link%5D%22%7Dif(%22www.ancestry.com%22%3D%3Dlocation.host)%7Blet%20e%3Dparse_ancestry(window.location.href)%3Balert(e)%2Cconsole.log(e)%7D%7D)()

// Copy to clipboard
javascript:(function()%7Bfunction parse_ancestry(e)%7Blet c%3D""%2Ct%3D""%3Breturn(e%3Dlocation.href).replace(%2F(%5C%3Fbackurl%3D.*)%2F%2C"")%2Cc%3De.includes("%2Finteractive")%3Fnull!%3D(t%3De.match(%2F.*interactive%5C%2F(%5B%5Cw-%5D*)%5C%2F((.*imageId%3D(%5B%5Cw-%5D*))%7C(%5B%5Cw-%5D*))%2F))%5B4%5D%3F"%7B%7BAncestry Image%7C"%2Bt%5B1%5D%2B"%7C"%2Bt%5B4%5D%2B"%7D%7D"%3A"%7B%7BAncestry Image%7C"%2Bt%5B1%5D%2B"%7C"%2Bt%5B2%5D%2B"%7D%7D"%3Ae.includes("family-tree")%3F"person"%3D%3D(t%3De.match(%2F.*%5C%2Ftree%5C%2F(%5B%5Cw-%5D*)%5C%2F(media%7Cperson)%5C%2F(%5B%5Cw-%5D*)%2F))%5B2%5D%3F"%7B%7BAncestry Tree%7C"%2Bt%5B1%5D%2B"%7C"%2Bt%5B3%5D%2B"%7D%7D"%3A"%7B%7BAncestry Tree Media%7C"%2Bt%5B1%5D%2B"%7C"%2Bt%5B3%5D%2B"%7D%7D"%3Ae.match(%2F.*tid%3D(%5B%5Cw-%5D*)%26.*pid%3D(%5B%5Cw-%5D*)%2F)%3F"%7B%7BAncestry Tree%7C"%2B(t%3De.match(%2F.*tid%3D(%5B%5Cw-%5D*)%26.*pid%3D(%5B%5Cw-%5D*)%2F))%5B1%5D%2B"%7C"%2Bt%5B2%5D%2B"%7D%7D"%3Ae.match(%2F.*db(id)%3F%3D(%5Cw*)%26.*h%3D(%5Cw*)(%26%7C%24%7C%5Cb)%2F)%3F"com"!%3D(t%3De.match(%2F.*ancestry.*%5C.(%5Ba-z%5D%7B2%2C3%7D)%5C%2F.*db(id)%3F%3D(%5Cw*)%26.*h%3D(%5Cw*)(%26%7C%24%7C%5Cb)%2F))%5B1%5D%3F"%7B%7BAncestry Record%7C"%2Bt%5B3%5D%2B"%7C"%2Bt%5B4%5D%2B"%7C"%2Bt%5B1%5D%2B"%7D%7D"%3A"%7B%7BAncestry Record%7C"%2Bt%5B3%5D%2B"%7C"%2Bt%5B4%5D%2B"%7D%7D"%3A"%5B"%2Bcurrent.loc%2B"%7CAncestry Link%5D"%7Dconst copyToClipBoard%3De%3D>%7Bconst c%3Ddocument.createElement("textarea")%3Bc.value%3De%2Cdocument.body.appendChild(c)%2Cc.select()%2Cdocument.execCommand("copy")%2Cdocument.body.removeChild(c)%7D%3Bif("www.ancestry.com"%3D%3Dlocation.host)%7Blet e%3Dparse_ancestry(window.location.href)%3BcopyToClipBoard(e)%2Cconsole.log(e)%7D%7D)()

// Copy to clipboard - w/ Find a grave support
javascript:(function()%7Bfunction%20parse_ancestry(e)%7Blet%20a%3D%22%22%2Cn%3D%22%22%3Breturn%20e.replace(%2F(%5C%3Fbackurl%3D.*)%2F%2C%22%22)%2Ca%3De.includes(%22%2Finteractive%22)%3Fnull!%3D(n%3De.match(%2F.*interactive%5C%2F(%5B%5Cw-%5D*)%5C%2F((.*imageId%3D(%5B%5Cw-%5D*))%7C(%5B%5Cw-%5D*))%2F))%5B4%5D%3F%22%7B%7BAncestry%20Image%7C%22%2Bn%5B1%5D%2B%22%7C%22%2Bn%5B4%5D%2B%22%7D%7D%22%3A%22%7B%7BAncestry%20Image%7C%22%2Bn%5B1%5D%2B%22%7C%22%2Bn%5B2%5D%2B%22%7D%7D%22%3Ae.includes(%22family-tree%22)%3F%22person%22%3D%3D(n%3De.match(%2F.*%5C%2Ftree%5C%2F(%5B%5Cw-%5D*)%5C%2F(media%7Cperson)%5C%2F(%5B%5Cw-%5D*)%2F))%5B2%5D%3F%22%7B%7BAncestry%20Tree%7C%22%2Bn%5B1%5D%2B%22%7C%22%2Bn%5B3%5D%2B%22%7D%7D%22%3A%22%7B%7BAncestry%20Tree%20Media%7C%22%2Bn%5B1%5D%2B%22%7C%22%2Bn%5B3%5D%2B%22%7D%7D%22%3Ae.match(%2F.*tid%3D(%5B%5Cw-%5D*)%26.*pid%3D(%5B%5Cw-%5D*)%2F)%3F%22%7B%7BAncestry%20Tree%7C%22%2B(n%3De.match(%2F.*tid%3D(%5B%5Cw-%5D*)%26.*pid%3D(%5B%5Cw-%5D*)%2F))%5B1%5D%2B%22%7C%22%2Bn%5B2%5D%2B%22%7D%7D%22%3Ae.match(%2F.*db(id)%3F%3D(%5Cw*)%26.*h%3D(%5Cw*)(%26%7C%24%7C%5Cb)%2F)%3F%22com%22!%3D(n%3De.match(%2F.*ancestry.*%5C.(%5Ba-z%5D%7B2%2C3%7D)%5C%2F.*db(id)%3F%3D(%5Cw*)%26.*h%3D(%5Cw*)(%26%7C%24%7C%5Cb)%2F))%5B1%5D%3F%22%7B%7BAncestry%20Record%7C%22%2Bn%5B3%5D%2B%22%7C%22%2Bn%5B4%5D%2B%22%7C%22%2Bn%5B1%5D%2B%22%7D%7D%22%3A%22%7B%7BAncestry%20Record%7C%22%2Bn%5B3%5D%2B%22%7C%22%2Bn%5B4%5D%2B%22%7D%7D%22%3A%22%5B%22%2Be%2B%22%7CAncestry%20Link%5D%22%7Dfunction%20parse_findgrave(e)%7Blet%20a%3D%22%22%2Cn%3D%22%22%3Breturn%20e.includes(%22%2Fmemorial%22)%3F(n%3De.match(%2F.*memorial%5C%2F(%5Cd*)(%5C%2F%7C%24%7C%5Cb)%2F)%2Ca%3D%22Find%20A%20Grave%2C%20database%20and%20images%20(accessed%20%22%2B(new%20Date).toLocaleDateString()%2B%22)%2C%20memorial%20page%20for%20%22%2B%24(%22%23bio-name%22).text()%2B%22%2C%20%7B%7BFindAGrave%7C%22%2Bn%5B1%5D%2B%22%7D%7D.%20Maintained%20by%20Find%20A%20Grave.%22)%3Aa%3D%22%5B%22%2Be%2B%22%7CFind%20a%20Grave%20Link%5D%22%2Ca%7Dconst%20copyToClipBoard%3De%3D%3E%7Bconst%20a%3Ddocument.createElement(%22textarea%22)%3Ba.value%3De%2Cdocument.body.appendChild(a)%2Ca.select()%2Cdocument.execCommand(%22copy%22)%2Cdocument.body.removeChild(a)%7D%3Blet%20link%3D%22%22%3BcopyToClipBoard(link%3D%22www.ancestry.com%22%3D%3Dlocation.host%3Fparse_ancestry(window.location.href)%3A%22www.findagrave.com%22%3D%3Dlocation.host%3Fparse_findgrave(window.location.href)%3A%22%5B%22%2Bwindow.location.href%2B%22%7CLink%5D%22)%2Cconsole.log(link)%7D)()



// Update links in text box

function parse_ancestry(current_loc) {
     let parsed_link = '';
     let parse_results = "";
    // Remove backurls
    current_loc.replace(/(\?backurl=.*)/, '');
    if (current_loc.includes('/interactive')) {
        // Image/source
        parse_results = current_loc.match(/.*interactive\/([\w-]*)\/((.*imageId=([\w-]*))|([\w-]*))/);
        if(parse_results[4] != null) {
            parsed_link = "{{Ancestry Image|"+parse_results[1]+"|"+parse_results[4]+"}}";
        } else {
            parsed_link = "{{Ancestry Image|"+parse_results[1]+"|"+parse_results[2]+"}}";
        }
    } else if (current_loc.includes('family-tree')) {
        //Tree
        parse_results = current_loc.match(/.*\/tree\/([\w-]*)\/(media|person)\/([\w-]*)/);
        if(parse_results[2] == "person") {
            parsed_link = "{{Ancestry Tree|"+parse_results[1]+"|"+parse_results[3]+"}}";
        } else {
            parsed_link = "{{Ancestry Tree Media|"+parse_results[1]+"|"+parse_results[3]+"}}";
        }
    } else if (current_loc.match(/.*tid=([\w-]*)&.*pid=([\w-]*)/)) {
        // Old style tree
        parse_results = current_loc.match(/.*tid=([\w-]*)&.*pid=([\w-]*)/);
        parsed_link = "{{Ancestry Tree|"+parse_results[1]+"|"+parse_results[2]+"}}";
    } else if (current_loc.match(/.*db(id)?=(\w*)&.*h=(\w*)(&|$|\b)/)) {
        // Records
        parse_results = current_loc.match(/.*ancestry.*\.([a-z]{2,3})\/.*db(id)?=(\w*)&.*h=(\w*)(&|$|\b)/);
        if(parse_results[1]!="com") {
            parsed_link = "{{Ancestry Record|"+parse_results[3]+"|"+parse_results[4]+"|"+parse_results[1]+"}}";
        } else {
            parsed_link = "{{Ancestry Record|"+parse_results[3]+"|"+parse_results[4]+"}}";
        }
    } else {
        parsed_link = "[" + current_loc + "|Ancestry Link]";
    }
    return parsed_link;
}


let bio = $('#wpTextbox1').text();
function bio_match(match, p1, p2, offset, string){
    return parse_ancestry(p1)
}
matches = bio.replace(/\[(https:\/\/.*ancestry.*)\|(.*)\]/g,bio_match);
$('#wpTextbox1').text(matches);

for (var i = 0; i < matches.length; i++) {
    console.log(i);
    console.log(matches[i]);
}