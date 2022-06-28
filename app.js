var string = prompt('enter any string');
var strlen = string.length;

var strRev = " ";

for( var i=strlen-1; i>=0; i--){
    strRev = strRev + string[i];
}
console.log(strRev);



/*----------JAVA-------------*/

public static void main(String[] args)
{
    String input = "hello all";

    char[] str = input.toCharArray();

    for (int i = str.length - 1; i >= 0; i--)
        System.out.print(str[i]);
}