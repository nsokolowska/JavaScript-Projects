function DisplayType(character) {
    var characterType = character.getAttribute("data-character-type");
    alert(characterType + " is the " + character.innerHTML + ".");
}