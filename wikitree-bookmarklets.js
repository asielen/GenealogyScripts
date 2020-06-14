// Complete Bookmarklets

// Genealogy Linker - Create a bookmark with this as the URL
javascript:(function()%7Bfunction%20parse_ancestry(e)%7Blet%20t%3D%22%22%2Ci%3D%22%22%3Breturn%20e.replace(%2F(%5C%3Fbackurl%3D.*)%2F%2C%22%22)%2Ct%3De.includes(%22%2Finteractive%22)%3Fnull!%3D(i%3De.match(%2F.*interactive%5C%2F(%5B%5Cw-%5D*)%5C%2F((.*imageId%3D(%5B%5Cw-%5D*))%7C(%5B%5Cw-%5D*))%2F))%5B4%5D%3F%22%7B%7BAncestry%20Image%7C%22%2Bi%5B1%5D%2B%22%7C%22%2Bi%5B4%5D%2B%22%7D%7D%22%3A%22%7B%7BAncestry%20Image%7C%22%2Bi%5B1%5D%2B%22%7C%22%2Bi%5B2%5D%2B%22%7D%7D%22%3Ae.includes(%22family-tree%22)%3F%22person%22%3D%3D(i%3De.match(%2F.*%5C%2Ftree%5C%2F(%5B%5Cw-%5D*)%5C%2F(media%7Cperson)%5C%2F(%5B%5Cw-%5D*)%2F))%5B2%5D%3F%22%7B%7BAncestry%20Tree%7C%22%2Bi%5B1%5D%2B%22%7C%22%2Bi%5B3%5D%2B%22%7D%7D%22%3A%22%7B%7BAncestry%20Tree%20Media%7C%22%2Bi%5B1%5D%2B%22%7C%22%2Bi%5B3%5D%2B%22%7D%7D%22%3Ae.match(%2F.*tid%3D(%5B%5Cw-%5D*)%26.*pid%3D(%5B%5Cw-%5D*)%2F)%3F%22%7B%7BAncestry%20Tree%7C%22%2B(i%3De.match(%2F.*tid%3D(%5B%5Cw-%5D*)%26.*pid%3D(%5B%5Cw-%5D*)%2F))%5B1%5D%2B%22%7C%22%2Bi%5B2%5D%2B%22%7D%7D%22%3Ae.match(%2F.*db(id)%3F%3D(%5Cw*)%26.*h%3D(%5Cw*)(%26%7C%24%7C%5Cb)%2F)%3F%22com%22!%3D(i%3De.match(%2F.*ancestry.*%5C.(%5Ba-z%5D%7B2%2C3%7D)%5C%2F.*db(id)%3F%3D(%5Cw*)%26.*h%3D(%5Cw*)(%26%7C%24%7C%5Cb)%2F))%5B1%5D%3F%22%7B%7BAncestry%20Record%7C%22%2Bi%5B3%5D%2B%22%7C%22%2Bi%5B4%5D%2B%22%7C%22%2Bi%5B1%5D%2B%22%7D%7D%22%3A%22%7B%7BAncestry%20Record%7C%22%2Bi%5B3%5D%2B%22%7C%22%2Bi%5B4%5D%2B%22%7D%7D%22%3A%22%5B%22%2Be%2B%22%20Ancestry%20Link%5D%22%7Dfunction%20parse_wikitree(e)%7Blet%20t%3D%22%22%2Ci%3D%22%22%3Bif(e.includes(%22%2Fphoto%22))%7Blet%20e%3D%24('link%5Brel*%3D%22image_src%22%5D').attr(%22href%22)%3Bt%3D%22%5B%5B%3Aimage%3A%22%2B(e%3De.substr(e.lastIndexOf(%22%2F%22)%2B1))%2B%22%7C%22%2B%24(%22title%22).text()%2B%22%5D%5D%22%7Delse%20e.match(%2F.*wikitree%5C.com%5C%2Fwiki%5C%2F(%5Cw*-%5Cd*)(%24%7C%5Cb)%2F)%3Ft%3D%22%5B%5B%22%2B(i%3De.match(%2F.*wikitree%5C.com%5C%2Fwiki%5C%2F(%5Cw*-%5Cd*)(%24%7C%5Cb)%2F))%5B1%5D%2B%22%7C%22%2B%24('h1%20span%5Bitemprop*%3D%22name%22%5D').text()%2B%22%5D%5D%22%3Ae.match(%2F.*wikitree%5C.com%5C%2Fwiki%5C%2F(Space%3A.*)(%24%7C%5Cb)%2F)%3Ft%3D%22%5B%5BSpace%3A%22%2B(i%3D%24(%22h1%22).text())%2B%22%7C%22%2Bi%2B%22%5D%5D%22%3Ae.match(%2F.*wikitree%5C.com%5C%2Fwiki%5C%2F(Category%3A.*)(%24%7C%5Cb)%2F)%26%26(t%3D%22%5B%5BCategory%3A%22%2B(i%3D%24(%22h1%22).text())%2B%22%7C%22%2Bi%2B%22%5D%5D%22)%3Breturn%20t%7Dfunction%20parse_findgrave(e)%7Blet%20t%3D%22%22%2Ci%3D%22%22%3Breturn%20e.includes(%22%2Fmemorial%22)%3F(i%3De.match(%2F.*memorial%5C%2F(%5Cd*)(%5C%2F%7C%24%7C%5Cb)%2F)%2Ct%3D%22Find%20A%20Grave%2C%20database%20and%20images%20(accessed%20%22%2B(new%20Date).toLocaleDateString()%2B%22)%2C%20memorial%20page%20for%20%22%2B%24(%22%23bio-name%22).text()%2B%22%2C%20%7B%7BFindAGrave%7C%22%2Bi%5B1%5D%2B%22%7D%7D.%20Maintained%20by%20Find%20A%20Grave.%22)%3At%3D%22%5B%22%2Be%2B%22%20Find%20a%20Grave%20Link%5D%22%2Ct%7Dconst%20copyToClipBoard%3De%3D%3E%7Bconst%20t%3Ddocument.createElement(%22textarea%22)%3Bt.value%3De%2Cdocument.body.appendChild(t)%2Ct.select()%2Cdocument.execCommand(%22copy%22)%2Cdocument.body.removeChild(t)%7D%3Blet%20link%3D%22%22%3B%22www.ancestry.com%22%3D%3Dlocation.host%3Flink%3Dparse_ancestry(window.location.href)%3A%22www.findagrave.com%22%3D%3Dlocation.host%3Flink%3Dparse_findgrave(window.location.href)%3A%22www.wikitree.com%22%3D%3Dlocation.host%26%26(link%3Dparse_wikitree(window.location.href))%2C%22%22%3D%3Dlink%26%26(link%3D%22%5B%22%2Bwindow.location.href%2B%22%20Link%5D%22)%2CcopyToClipBoard(link)%2Cconsole.log(link)%7D)()


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

Imageviewer
https://www.ancestry.com/imageviewer/collections/6061/images/4300971_00153?pId=60260556&backurl=https%3A%2F%2Fwww.ancestry.com%2Ffamily-tree%2Fperson%2Ftree%2F11748183%2Fperson%2F-405942447%2Ffacts
REGEX: .*imageviewer\/collections\/([\w-]*)\/images\/([\w-]*)\?


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
//https://javascript-minifier.com/
//bookmarklet maker https://mrcoles.com/bookmarklet/

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
    } else if (current_loc.includes('imageviewer/collections')) {
        // Image alternative version
        parse_results = current_loc.match(/.*imageviewer\/collections\/([\w-]*)\/images\/([\w-]*)\?.*/);
        parsed_link = "{{Ancestry Image|"+parse_results[1]+"|"+parse_results[2]+"}}";
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
        parsed_link = "[" + current_loc + " Ancestry Link]";
    }
    return parsed_link;
}

function parse_wikitree(current_loc) {
    //https://www.wikitree.com/g2g/507865/how-to-link-to-images-in-biography
    //https://www.wikitree.com/photo/jpg/Morozowska-1
    let parsed_link = '';
    let parse_results = "";
    if (current_loc.includes('/photo')) {
        // Photo
        let image_src = $('link[rel*="image_src"]').attr('href');
        image_src = image_src.substr(image_src.lastIndexOf('/') + 1);
        parsed_link = "[[:image:"+image_src+"|"+$('title').text()+"]]";
    } else if (current_loc.match(/.*wikitree\.com\/wiki\/(\w*-\d*)($|\b)/)) {
        // Profile
        parse_results = current_loc.match(/.*wikitree\.com\/wiki\/(\w*-\d*)($|\b)/);
        parsed_link = '[['+parse_results[1]+'|'+$('h1 span[itemprop*="name"]').text()+']]';
    } else if (current_loc.match(/.*wikitree\.com\/wiki\/(Space:.*)($|\b)/)) {
        // Free space page
        parse_results = $('h1').text();
        parsed_link = '[[Space:'+parse_results+'|'+parse_results+']]';
    } else if (current_loc.match(/.*wikitree\.com\/wiki\/(Category:.*)($|\b)/)) {
        // Category - essentially like free space
        parse_results = $('h1').text();
        parsed_link = '[[Category:'+parse_results+'|'+parse_results+']]';
    }

    return parsed_link;
}

function parse_findgrave(current_loc) {
    //https://www.wikitree.com/wiki/Help:Links_to_FindAGrave
     let parsed_link = '';
     let parse_results = "";
    if (current_loc.includes('/memorial')) {
        // Image/source
        parse_results = current_loc.match(/.*memorial\/(\d*)(\/|$|\b)/);
        parsed_link = "Find A Grave, database and images (accessed "+new Date().toLocaleDateString()+"), memorial page for "+$('#bio-name').text()+", {{FindAGrave|"+parse_results[1]+"}}. Maintained by Find A Grave.";
    } else {
        parsed_link = "[" + current_loc + " Find a Grave Link]";
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
} else if(location.host == 'www.wikitree.com') {
    link = parse_wikitree(window.location.href);
}
if (link == "") {
    link = "["+window.location.href+" Link]"
}
copyToClipBoard(link);
console.log(link);

/*
// Alert only
if(location.host == "www.ancestry.com") {
    let link = parse_ancestry(window.location.href);
    alert(link);
    console.log(link);
}
*/






// Mass update all links in a bio box
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