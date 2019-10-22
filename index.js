var a ="What-exactly-is-Google-Summer-of-Code-or-GSoC-How-do-you-apply-for-it-and-what-is-the-eligibility-criteria"

replaceAll = (string) =>{
    string = string.replace('-',' ')
    if(string.includes("-")){
        console.log(string)
    replaceAll(string)}
    else{
        return
    }
}
replaceAll(a)
console.log(a.includes('-'))