public class test {
    public static void main(String[] args) {

        // 1
        String Randomword = "ForzaBca";
        int b = 1;
        for (int i = b; i <= 5; i++) {
            int c = Randomword.length();
            if (i < c) {
                System.out.println(Randomword.substring(5));
            } else {
                System.out.println("wait");
            }
        }

        // 2
        int A = 1;
        int B = 2;
        for (int i = 1; i <= 5; i++) {
            if (A % 2 == 0) {
                System.out.println("good");
            }
            int C = B * 2 % 2;
            if (C == 0) {
                System.out.println("very good");
            }
        }

        // 3
        int J = 10;
        int K = 2;
        int L = 0;
        do {
            if (J % K == 0) {
                L = L + 2;
            } else {
                L = L + 1;
            }
            J = J - 1;
        } while (J >= 0);
        System.out.println(L);

        // 6
        String strBalance = "1,000,000.00";
        String strTemp = "Rp " + strBalance.replace(",", "");
        strTemp = strTemp.replace(".", ";");
        String[] arrOfStr = strTemp.split(";");

        System.out.println(arrOfStr[0] + ".00");

        // 7
        for (int i = 0; i < 5; i++) {
            for (int j = 0; j <= i; j++) {
                System.out.print("*");
            }
            System.out.println("");
        }

        int x = 10;
        int z = 50;
        do {
            if (sum(x, z) > 30) {
                z = subtraction(x, z);
            } else {
                multiplication(x, z);
            }
            z = subtraction(5, z);
        } while (z > 10);
        System.out.println(x * z);

    }

    public static int sum(int a, int b) {
        a = a + b;
        return a;
    }

    public static int subtraction(int a, int b) {
        b = b - a;
        return b;
    }

    public static int multiplication(int a, int b) {
        a = a * b;
        return a;
    }
}