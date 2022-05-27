package Array.ReOrder;

import java.util.ArrayList;
import java.util.Arrays;

class Main {
    public static void main(String[] args) {
        int[] data = {1,3,2,6,7,8,2,12,5,90,3,6,76,77,34,2};
        System.out.println(Arrays.toString(reOrderEvenFirst(data)));
    }

    public static int[] reOrderEvenFirst(int[] data) {
        System.out.println(Arrays.toString(data));
        int currentEvenIndex = -1;
        for (int i = 0; i < data.length; i++) {
            for (int j = i; j < data.length; j++) {
                if (data[j] % 2 == 0) {
                    if (currentEvenIndex < 0) currentEvenIndex = j;
                }
            }
            if (currentEvenIndex < 0) return data;
            int temp = data[i];
            data[i] = data[currentEvenIndex];
            data[currentEvenIndex] = temp;
            currentEvenIndex = -1;
        }
        return data;
    }
}

