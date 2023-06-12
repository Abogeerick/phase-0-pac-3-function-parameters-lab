function introduction (name) {
    return`Hi, my name is ${name}.`;
}
introduction("Aki")
introduction("Samip")
function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  introductionWithLanguage ("Hi, my name is Aki and I am learning to program in Ember.js.")
  introductionWithLanguage ("Hi, my name is Samip and I am learning to program in React.")
function introductionWithLanguageOptional(name, language){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
   introductionWithLanguageOptional("Hi, my name is Gracie and I am learning to program in JavaScript.")
function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  introductionWithLanguageOptional("Hi, my name is Gracie and I am learning to program in Python.")

