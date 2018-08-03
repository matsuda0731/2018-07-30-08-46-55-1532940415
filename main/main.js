module.exports = function main() {
  // Write your code here
    function(str){
        let j;
        let sum=0;
        for(j=0;j<str.length;j++){
            sum += parseInt(str[j]);
        }
       console.log(sum);
};
