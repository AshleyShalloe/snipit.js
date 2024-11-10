// TODO: add some sort of validation
//  - duplicate fasta headers
//  - invalid characters
//  - properly formatted headers
//  - empty sequences / headers
//  - some sort of user feedback on the above conditions
function parseFastaToObject(inputFasta){
    var outFasta = {}
    var inFasta = inputFasta.split(/\r?\n/) // split on \r\n or \n
    var fastaHeader = ""
    var fastaBody = ""
    for (var i=0; i<inFasta.length; i++){
        if (inFasta[i].startsWith(">")){
            fastaHeader = ""
            fastaBody = ""
            fastaHeader = inFasta[i].replace(">", "").trim()
        }
        else{
            fastaBody += inFasta[i].trim()
            // I hate lowercase fasta
            outFasta[fastaHeader] = fastaBody.toUpperCase()
        }
    }
    return outFasta
}