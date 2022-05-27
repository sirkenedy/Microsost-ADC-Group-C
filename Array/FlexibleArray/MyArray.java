package Array.FlexibleArray;

import java.util.HashMap;

class MyArray {
    Integer length = 0;
    HashMap<Integer, String> data = new HashMap<Integer, String>();

    public void add(String item)
    {
        String item2 = item;
        this.data.put(this.length, item2);
        this.length++;
        System.out.println(this.data);
    }

    public void pop() {
        this.data.remove(this.length - 1);
        this.length--;
        System.out.println(this.data);
    }
}