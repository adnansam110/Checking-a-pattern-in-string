var str = prompt("Enter a string");
var arr = str.split("");
var checking = (arr) =>{
    for (var i=0;i<arr.length;i++)
    {
        if (arr[i]==='a' || arr[i]==='A')
        {
            if (arr[i+4]==='b' || arr[i-4]==='b')
            return true;
            break;
        }
        else if (arr[i]==='b' || arr[i]==='B')
        {
            if (arr[i+4]==='a' || arr[i-4]==='A')
            return true;
            break;
        }
    }
    return false;
}
var show = checking(arr);
document.write(show);