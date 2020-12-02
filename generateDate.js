//module.exports= getDate; //objekt, kuhu on salvestatud selle funktsiooni kood
//ananüümne funktsioon
exports.getDate= function(){
    //function getDate() {
        let today = new Date();
    
        let options = {
        weekday: "long", 
        day: "numeric",
        month: "long"
    }
    
    let day = today.toLocaleDateString("en-US", options);
    return day;
    }
    exports.getWeekDay = function(){
    //function getWeekDay() {
        let today = new Date();
    
        let options = {
        weekday: "long"
    }
    
    let day = today.toLocaleDateString("en-US", options);
    return day;
    }