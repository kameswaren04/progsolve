var string = prompt('enter any string');
var strlen = string.length;

var strRev = " ";

for( var i=strlen-1; i>=0; i--){
    strRev = strRev + string[i];
}
console.log(strRev);



/*----------JAVA-------------*/



/*----- string reverse-------*/

public static void main(String[] args)
{
    String input = "hello all";

    char[] str = input.toCharArray();

    for (int i = str.length - 1; i >= 0; i--)
        System.out.print(str[i]);
}


  

/*-------palindrome-------*/

   public class palindrome{
    public statis void main(String[] args){
        String x = "abcdcba";
        int i = 0; j = x.length()-1;
        while(i<j){
            if (x.charAt(i) != x.charAt(j)){
                system.out.println('not palindrome');
                system.exit(0);
            }
            i++;
            j--;
        }
        system.out.println('palindrome')
    }
   }  




   /*--------- min max value ----------*/

   public class MinMax{
     public static void main(String[] args){
        int a[] = {10,5,2022,2000222,1};
        int min = a[0];
        int max = a[0];
        for (int i =0; i<a.length; i++){
            if(a[i] > max)
               max = a[i];
            if(a[i] < min)
               min = a[i];

        }
        system.out.println('max value' + max);
        system.out.println('min value' + min);
     }
   }





   




/*  ---------- quick sort --------*/

 class QuickSort
{
	int partition(int arr[], int low, int high)
	{
		int pivot = arr[high];
		int i = (low-1); 
		for (int j=low; j<high; j++)
		{
			if (arr[j] <= pivot)
			{
				i++;
				int temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
		int temp = arr[i+1];
		arr[i+1] = arr[high];
		arr[high] = temp;
		return i+1;
	}
	void sort(int arr[], int low, int high)
	{
		if (low < high)
		{
			int pi = partition(arr, low, high);
			sort(arr, low, pi-1);
			sort(arr, pi+1, high);
		}
	}
	static void printArray(int arr[])
	{
		int n = arr.length;
		for (int i=0; i<n; ++i)
			System.out.print(arr[i]+" ");
		System.out.println();
	}
	public static void main(String args[])
	{
		int arr[] = {10, 7, 8, 9, 1, 5};
		int n = arr.length;

		QuickSort ob = new QuickSort();
		ob.sort(arr, 0, n-1);

		System.out.println("sorted array");
		printArray(arr);
	}
}







// Moving negative numbers to the end

public static void negative(int[] arr) {
	int[] temp = new int[arr.length];
	int j = 0;

	for (int i = 0; i < arr.length; i++) {
		if (arr[i] > 0) {
			temp[j] = arr[i];
			j++;
		}
	}
	for (int i = 0; i < arr.length; i++) {
		if (arr[i] < 0) {
			temp[j] = arr[i];
			j++;
		}
	}

	System.out.println(Arrays.toString(temp));
}









/* -------------- Duplicates ----------------*/

public static void duplicate(int[] arr) {

	int[] temp = new int[arr.length];
	Arrays.sort(arr);
	int a;
	a = 0;
	for (int i = 0; i < arr.length - 1; i++) {
		if (arr[i] == arr[i + 1]) {
			temp[a] = arr[i];
			i++;
			a++;
		}
	}
	int[] dupes = new int[a];
	for (int i = 0; i < a; i++) {
		dupes[i] = temp[i];
	}
	System.out.println("Duplicate numbers in the array : ");
	System.out.println(Arrays.toString(dupes));
}

