function concat_sentence(){
        var sen_1 = "My name is ";
        var sen_2 = "Natalia ";
        var sen_3 = "Sokolowska and ";
        var sen_4 = "I am 25 ";
        var sen_5 = "years old.";
        var full = sen_1.concat(sen_2, sen_3, sen_4, sen_5);
        document.getElementById("sentence").innerHTML = full;
}

function Slice_function(){
    var sentence = "Who is the best friend of woman?";
    var part_of_sentence = sentence.slice(26,31);
    document.getElementById("Slice").innerHTML = part_of_sentence;
}

function String_method() {
    var Y = 8614;
    document.getElementById("number").innerHTML = Y.toString();
}
function Precision_method() {
    var x = 14341.5624819025;
    document.getElementById("Precision").innerHTML = x.toPrecision(12);
}