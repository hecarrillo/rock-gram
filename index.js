function displayEntries(){
    for (i = 0; i < 2; i++) {
        var entry = "";
        entry += "<div class=\"entry\">";
        entry += "<div id=\"entry-deets\">";
        entry += "<img src=\"https://e7.pngegg.com/pngimages/142/424/png-clipart-dwayne-johnson-central-intelligence-the-rock-bob-stone-mask-dwayne-johnson-thumbnail.png\" alt=\"rock\" class=\"usr-img\">";
        entry += "<div class = \"user-header\">";
        entry += "<p class=\"user-name\"> Username </p>";
        entry += "<p class=\"full-name\"> The Rock Johnson </p>";
        entry += "</div>";
        entry += "</div>";
        entry += "<button class=\"entry-button\"> Ver </button>";
        entry += "</div>";
        $('.main-section').append(entry);
    }
}

displayEntries();