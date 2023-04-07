// Deletes a Token with the matching Tag.

const source = Tagger.getByTag("Tag")[0];

if(!source){
    ui.notifications.error("You need to Tag a token.");
    return;
}

token.document.delete(source);
