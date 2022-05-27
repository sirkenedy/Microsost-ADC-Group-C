package Array.FlexibleArray;

import java.util.HashMap;

class Main {

    public Main() {

    }

    public static void main(String[] args) {
        MyArray newArray = extracted();
        newArray.add("5");
        newArray.add("8");
        newArray.add("9");
        newArray.pop();
    }

    private static MyArray extracted() {
        MyArray newArray = new MyArray();
        return newArray;
    }
}